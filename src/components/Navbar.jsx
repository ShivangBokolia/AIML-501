import React, { useEffect, useRef } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

import { navbarLinks } from "../constants/constants";
import { Menu } from "../assets";

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const toggleMenu = () => setIsMenuOpen((prev) => !prev);
    const [lastScrollY, setLastScrollY] = useState(0);
    const [showNav, setShowNav] = useState(true);
    const menuRef = useRef(null);
    const toggleButtonRef = useRef(null);

    /*
        When the user scrolls up on the page, the navbar shows up.
    */
    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.scrollY;
            if (scrollTop > lastScrollY) {
                setShowNav(false);
            } else {
                setShowNav(true);
            }
            setLastScrollY(scrollTop);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [lastScrollY]);

    /* 
        Closes the dropdown menu, when the user presses anywhere outside the menu
    */
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (!isMenuOpen) return;
            const clickedToggle =
                toggleButtonRef.current &&
                toggleButtonRef.current.contains(event.target);
            const clickedMenu =
                menuRef.current && menuRef.current.contains(event.target);

            if (!clickedToggle && !clickedMenu) {
                setIsMenuOpen(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () =>
            document.removeEventListener("mousedown", handleClickOutside);
    }, [isMenuOpen]);

    /*
        Closes the dropdown menu, when the user starts scrolling.
    */
    useEffect(() => {
        if (!isMenuOpen) return;

        const handleScrollClose = () => setIsMenuOpen(false);

        window.addEventListener("scroll", handleScrollClose);
        return () => window.removeEventListener("scroll", handleScrollClose);
    }, [isMenuOpen]);

    return (
        <div>
            <nav
                className={`w-full 
                        fixed 
                        text-white 
                        z-20 
                        border border-transparent border-0.5 border-b-white 
                        top-0 left-0 
                        bg-background-green/95 
                        transition-transform
                        ${
                            showNav
                                ? "transform translate-y-0"
                                : "transform -translate-y-full"
                        }`}
            >
                <div className="my-5 md:mx-auto container px-[1rem] md:p-0">
                    <div
                        className="flex justify-between items-center"
                        aria-label="Laptop/Tablets"
                    >
                        <div className="hidden md:flex">
                            <h2 className="text-xl font-bold leading-tight">
                                <Link to="/">Shivang Bokolia</Link>
                            </h2>
                        </div>
                        <div>
                            <ul className="hidden flex-row list-none gap-10 md:flex">
                                {navbarLinks.map((item) => (
                                    <li
                                        key={item.id}
                                        className="font-medium text-nav hover:text-white cursor-pointer"
                                    >
                                        <Link to={`/${item.id}`}>
                                            {item.name}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                    {/* ###################### MOBILE:  ######################*/}
                    <div
                        className="md:hidden flex justify-between items-center"
                        aria-label="Mobile"
                    >
                        <div>
                            <h2 className="text-xl font-bold leading-tight">
                                <Link to="/">SB</Link>
                            </h2>
                        </div>
                        <button
                            type="button"
                            // aria-expanded={isMenuOpen}
                            aria-label="Toggle navigation menu"
                            onClick={toggleMenu}
                            ref={toggleButtonRef}
                            // className="md:hidden"
                        >
                            <img src={Menu} />
                        </button>
                    </div>
                </div>
            </nav>
            {/* ###################### DROPDOWN MENU:  ######################*/}
            <div
                className={`md:hidden overflow-hidden 
                                bg-background-green/95 
                                w-full
                                fixed
                                z-20 
                                mt-[67px]
                                transition-all duration-300
                                ${isMenuOpen ? "max-h-96" : "max-h-0"}`}
                ref={menuRef}
            >
                <ul className="flex flex-col gap-4 pt-4 list-none">
                    {navbarLinks.map((item) => (
                        <li
                            key={item.id}
                            className="mx-auto font-medium text-nav flex justify-center"
                        >
                            <Link to={`/${item.id}`}>{item.name}</Link>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default Navbar;
