import React from "react";
import { hardSkills, softSkills } from "../constants/constants";

const Skills = () => {
    return (
        <div className="flex flex-col gap-8 mt-18 md:mt-24">
            <h3 className="text-white text-2xl font-bold tracking-tight">
                Skills
            </h3>
            <div className="flex flex-row gap-4 flex-wrap py-4">
                {[...hardSkills, ...softSkills].map((skill, idx) => (
                    <button
                        className="group/button relative inline-flex items-center justify-center overflow-hidden rounded-lg bg-accent backdrop-blur-lg px-6 py-2 text-base font-semibold text-white transition-all duration-300 ease-in-out hover:scale-110 hover:shadow-xl hover:shadow-accent/30 border border-accent"
                        key={`${skill}_${idx}`}
                    >
                        <span className="text-md">{skill}</span>
                        <div className="absolute inset-0 flex h-full w-full justify-center [transform:skew(-13deg)_translateX(-100%)] group-hover/button:duration-1000 group-hover/button:[transform:skew(-13deg)_translateX(100%)]">
                            <div className="relative h-full w-10 bg-white"></div>
                        </div>
                    </button>
                ))}
            </div>
        </div>
    );
};

export default Skills;
