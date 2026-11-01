import React from "react";
import { artifacts } from "../constants/constants";
import { Link } from "react-router-dom";

const Artifacts = () => {
    return (
        <div className="flex flex-col gap-8 py-4">
            {artifacts.map((artifact, idx) => (
                <Link key={idx} to={`/${artifact.in_page_link}`}>
                    <div
                        className="hidden md:flex flex-row rounded-2xl justify-start border-1 border-white/30 bg-white/10
                                            group/card relative overflow-hidden transition-all duration-300 ease-in-out 
                                            hover:scale-103 hover:shadow-xl hover:shadow-highlight/30"
                    >
                        <div className="w-96 flex-none p-4">
                            <img
                                src={artifact.image}
                                className="w-full rounded-2xl"
                            />
                        </div>
                        <div className="my-4 p-2 md:gap-4 w-full flex flex-col justify-between min-w-0">
                            <div className="flex flex-col gap-2">
                                <h5 className="font-bold text-xl text-white">
                                    {artifact.name}
                                </h5>
                                <div className="flex flex-col gap-1">
                                    <p className="text-nav overflow-y-auto">
                                        {artifact.definition}
                                    </p>
                                </div>
                            </div>
                            {/* <div>
                                <button
                                    className="w-96 p-2 cursor-pointer rounded-full from-[#0C1B1D] to-highlight bg-gradient-to-r shadow-2xl"
                                    onClick={() =>
                                        window.open(
                                            artifact.source_link,
                                            "_blank",
                                        )
                                    }
                                >
                                    Visit Live Project
                                </button>
                            </div> */}
                        </div>
                    </div>
                    {/* ###################### MOBILE: ######################*/}
                    <div className="md:hidden flex flex-col rounded-2xl border-1 border-white/30 bg-white/10">
                        <div className="flex-none mx-auto p-4">
                            <img
                                src={artifact.image}
                                className="w-full rounded-2xl"
                            />
                        </div>
                        <div className="mx-auto px-4 pb-2 flex flex-col justify-between gap-4">
                            <div className="flex flex-col gap-1">
                                <h5 className="font-bold text-xl text-white">
                                    {artifact.name}
                                </h5>
                                <div className="overflow-y-scroll"></div>
                                <p className="text-nav font-normal text-sm">
                                    {artifact.definition}
                                </p>
                            </div>
                            {/* <div>
                                <button
                                    className="w-full p-2 cursor-pointer rounded-full from-[#0C1B1D] to-highlight bg-gradient-to-r shadow-2xl"
                                    onClick={() =>
                                        window.open(
                                            artifact.source_link,
                                            "_blank",
                                        )
                                    }
                                >
                                    Visit Live Project
                                </button>
                            </div> */}
                        </div>
                    </div>
                </Link>
            ))}
        </div>
    );
};

export default Artifacts;
