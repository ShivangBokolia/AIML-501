import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Experience from "../components/Experience";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import Project_Home_Screen from "../components/Project_Home_Screen";
import Footer from "../components/Footer";

const HomeScreen = () => {
    return (
        <div className="relative">
            <div className="w-full min-h-screen pt-48 bg-radial-[at_200%_40%] from-[#2d737b] via-background-green via-60% to-background-green">
                <Navbar />
                <div className={`container mx-auto flex flex-col flex-1 px-4`}>
                    <Hero />
                    <Experience />
                    <Skills />
                    <Project_Home_Screen />
                </div>
                <Footer />
            </div>
        </div>
    );
};

export default HomeScreen;
