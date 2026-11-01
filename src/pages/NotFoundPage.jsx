import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const NotFoundPage = () => {
    return (
        <div className="relative">
            <div className="w-full min-h-screen bg-radial-[at_200%_40%] from-[#2d737b] via-background-green via-60% to-background-green">
                <Navbar />
                <div
                    className={
                        "w-full h-screen container mx-auto flex flex-1 justify-center"
                    }
                >
                    <h1 className="flex items-center text-center text-nav text-lg text-normal">
                        404 | Page Not Found
                    </h1>
                </div>
            </div>
        </div>
    );
};

export default NotFoundPage;
