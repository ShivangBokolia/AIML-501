import React from "react";
import Navbar from "../components/Navbar";
import Projects from "../components/Projects";
import { paddings } from "../constants/styles";
import Footer from "../components/Footer";
import Artifacts from "../components/Artifacts";

const ProjectScreen = () => {
    return (
        <div className="relative">
            <Navbar />
            <div className="w-full min-h-screen pt-48 bg-radial-[at_200%_40%] from-[#2d737b] via-background-green via-60% to-background-green">
                <div className={`container mx-auto flex flex-col gap-24`}>
                    <div className="flex flex-col gap-4">
                        <h1 className="text-white text-4xl font-bold text-center">
                            My Artifacts
                        </h1>
                        <span className="text-nav text-xl font-normal lg:px-96 text-center">
                            A collection of all the artifacts I've worked on.
                        </span>
                    </div>
                    <Artifacts />
                </div>
                <Footer />
            </div>
        </div>
    );
};

export default ProjectScreen;
