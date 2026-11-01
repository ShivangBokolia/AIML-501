import React from "react";
import Projects from "./Projects";
import Artifacts from "./Artifacts";

const Project_Home_Screen = () => {
    return (
        <>
            <div className="flex flex-col gap-8 mt-18 md:mt-24">
                <h3 className="text-white text-2xl font-bold tracking-tight">
                    Artifacts
                </h3>
                <Artifacts />
            </div>
        </>
    );
};

export default Project_Home_Screen;
