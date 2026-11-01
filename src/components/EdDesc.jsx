import React from "react";
import { Grad, Arrow } from "../assets";
import { educationDetails } from "../constants/constants";

const EdDesc = (props) => {
    const edDetail = educationDetails[props.level];
    return (
        <a href={edDetail.link} target="_blank" rel="noopener noreferrer">
            <div className="hidden md:grid grid-cols-4 gap-1 hover:drop-shadow-2xl hover:bg-white/10 rounded-lg duration-300 p-4">
                <div className="col-span-1 text-white opacity-60 flex">
                    {edDetail.year}
                </div>
                <div className="col-span-3 flex flex-col gap-1">
                    <div className="flex flex-row justify-between">
                        <span className="text-white text-lg font-semibold leading-normal">
                            {edDetail.degree} • {edDetail.college}
                        </span>
                        <img src={Arrow} className="w-4" />
                    </div>
                    <div>
                        <ul className="text-white opacity-60 text-md font-normal leading-normal items-center">
                            <li>{edDetail.gpa}</li>
                            <li>{edDetail.specialization}</li>
                            <li>{edDetail.achievement}</li>
                        </ul>
                    </div>
                </div>
            </div>
            {/* ###################### MOBILE:  ######################*/}
            <div className="md:hidden px-4 flex flex-row items-center">
                <div className="pr-4">
                    <img src={Grad} />
                </div>
                <div className="flex flex-col gap-1">
                    <div className="flex flex-col justify-between">
                        <span className="text-white text-lg font-semibold leading-normal">
                            {edDetail.degree}
                        </span>
                        <span className="text-white text-lg font-semibold leading-normal">
                            {edDetail.college}
                        </span>
                    </div>
                    <div className="text-white opacity-60 flex">
                        {edDetail.year}
                    </div>
                </div>
            </div>
        </a>
    );
};

export default EdDesc;
