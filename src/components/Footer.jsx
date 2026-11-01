import React from "react";
import { connect } from "../constants/constants";
import { Sonic } from "../assets";

const Footer = () => {
    return (
        <footer
            className="w-full bg-[#0C1B1D]/50 mt-18 md:mt-24 px-4"
            style={{ boxShadow: "inset 0 0 25px rgba(0,0,0,0.35)" }}
        >
            <div className="container mx-auto flex flex-row justify-between">
                <div className="hidden md:flex gap-2 items-center text-white font-normal leading-relaxed">
                    <img src={Sonic} className="w-8" />
                    FastBlueThing
                </div>
                <div className="flex flex-row">
                    {connect.map((link, idx) => (
                        <a
                            className="group flex items-center gap-4 rounded-lg p-4 transition-colors"
                            key={`${link.name}_${idx}`}
                            href={link?.link}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <div className="rounded-full bg-[#0C1B1D]/50 p-3 transition-colors group-hover:bg-accent">
                                <img src={link.img} className="w-6" />
                            </div>
                        </a>
                    ))}
                </div>
            </div>
        </footer>
    );
};

export default Footer;
