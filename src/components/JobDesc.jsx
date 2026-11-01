import React from "react";
import { Job, Arrow } from "../assets";
import { jobDetails } from "../constants/constants";

const JobDesc = (props) => {
    const jobDetail = jobDetails[props.company];
    return (
        <a href={jobDetail.link} target="_blank" rel="noopener noreferrer">
            <div className="hidden md:grid grid-cols-4 gap-1 hover:drop-shadow-2xl hover:bg-white/10 rounded-lg duration-300 p-4">
                <div className="col-span-1 text-white opacity-60 flex">
                    {jobDetail.year}
                </div>
                <div className="col-span-3 flex flex-col gap-2">
                    <div className="flex flex-row justify-between">
                        <span className="text-white text-lg font-semibold leading-normal">
                            {jobDetail.title} • {jobDetail.name}
                        </span>
                        <img src={Arrow} className="w-4" />
                    </div>
                    <div>
                        <ul className="flex flex-col gap-3">
                            {jobDetail.desc.map((description, idx) => (
                                <li key={idx}>
                                    <span className="text-white opacity-60 text-md font-normal leading-normal items-center">
                                        {description}
                                    </span>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <ul
                        className="flex flex-wrap mt-2 gap-3"
                        aria-label="Technologies used"
                    >
                        {jobDetail.skills.map((skill, idx) => (
                            <li key={idx}>
                                <div className="flex items-center rounded-full bg-accent px-3 py-1 text-xs font-medium leading-5 text-white">
                                    {skill}
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
            {/* ###################### MOBILE:  ######################*/}
            <div className="md:hidden px-4 flex flex-row items-center">
                <div className="pr-4">
                    <img src={Job} />
                </div>
                <div className="flex flex-col gap-1">
                    <div className="flex flex-row justify-between">
                        <span className="text-white text-lg font-semibold leading-normal">
                            {jobDetail.title} • {jobDetail.name}
                        </span>
                    </div>
                    <div className="text-white opacity-60 flex">
                        {jobDetail.year}
                    </div>
                </div>
            </div>
        </a>
    );
};

export default JobDesc;
