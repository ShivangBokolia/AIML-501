import React from "react";
import { projects, artifacts } from "../constants/constants";
import { Link, Code, Code_Image, GitHub } from "../assets";

const Projects = () => {
    return (
        <div className="flex flex-col gap-8 py-4">
            {artifacts.map((artifact, idx) => (
                <a
                    key={idx}
                    href={artifact.source_link}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <div
                        className="hidden md:flex flex-row rounded-2xl justify-start border-1 border-white/30 bg-white/10
                                    group/card relative overflow-hidden transition-all duration-300 ease-in-out 
                                    hover:scale-103 hover:shadow-xl hover:shadow-highlight/30"
                    >
                        <div className="w-96 flex-none p-4">
                            <img
                                src={Code_Image}
                                className="w-full rounded-2xl"
                            />
                        </div>

                        <div className="my-4 p-2 md:gap-4 w-full flex flex-col justify-between min-w-0">
                            <div className="flex flex-col gap-1">
                                <h5 className="font-bold text-xl text-white">
                                    {artifact.name}
                                </h5>
                                <div className="overflow-y-scroll">
                                    <p className="text-nav overflow-y-auto max-h-28">
                                        {project.description}
                                    </p>
                                </div>
                            </div>
                            <div className="flex flex-row justify-between">
                                <div className="flex flex-row gap-2 overflow-x-auto scrollbar-thin">
                                    {project.skills.map((skill, skill_idx) => (
                                        <div
                                            key={skill_idx}
                                            className="bg-accent rounded-lg text-white flex items-center p-2 flex-shrink-0"
                                        >
                                            <span className="text-sm font-bold">
                                                {skill}
                                            </span>
                                        </div>
                                    ))}
                                </div>
                                <img
                                    src={GitHub}
                                    className="hidden lg:flex flex-shrink-0 px-4 min-w-fit"
                                />
                            </div>
                        </div>
                        <div
                            className="absolute inset-0 flex h-full w-full justify-center pointer-events-none
                                        [transform:skew(-25deg)_translateX(-100%)] 
                                        group-hover/card:duration-1000 group-hover/card:[transform:skew(-25deg)_translateX(100%)]"
                        >
                            <div className="relative h-full w-10 bg-white/20"></div>
                        </div>
                    </div>
                    {/* ###################### MOBILE: ######################*/}
                    <div className="md:hidden flex flex-col rounded-2xl border-1 border-white/30 bg-white/10">
                        <div className="flex-none mx-auto p-4">
                            <img
                                src={Code_Image}
                                className="w-full rounded-2xl"
                            />
                        </div>
                        <div className="mx-auto px-4 flex flex-col justify-between gap-4">
                            <div className="flex flex-col gap-1">
                                <h5 className="font-bold text-xl text-white">
                                    {project.name}
                                </h5>
                                <div className="overflow-y-scroll"></div>
                                <p className="text-nav font-normal text-sm">
                                    {project.description}
                                </p>
                            </div>
                            <div className="flex flex-row gap-2 mb-4 flex-wrap">
                                {project.skills.map((skill, skill_idx) => (
                                    <div
                                        key={skill_idx}
                                        className="bg-accent rounded-lg text-white flex items-center p-2"
                                    >
                                        <span className="text-xs font-bold">
                                            {skill}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </a>
            ))}
        </div>
    );
};

export default Projects;
