import React from "react";
import JobDesc from "./JobDesc";
import EdDesc from "./EdDesc";

const Experience = () => {
    return (
        <>
            <div className="grid gap-12 md:grid-cols-2 mt-18 md:mt-36">
                {/* ###################### EXPERIENCE:  ######################*/}
                <div className="flex flex-col gap-8">
                    <h3 className="text-white text-2xl font-bold tracking-tight">
                        Experience
                    </h3>
                    <JobDesc company="Collins" />
                    <JobDesc company="Itential" />
                    <JobDesc company="CloudCheckr" />
                </div>
                {/* ###################### EDUCATION:  ######################*/}
                <div className="flex flex-col gap-8">
                    <h3 className="text-white text-2xl font-bold tracking-tight">
                        Education
                    </h3>
                    <EdDesc level="Masters_2" />
                    <EdDesc level="Masters_1" />
                    <EdDesc level="Bachelors" />
                </div>
            </div>
        </>
    );
};

export default Experience;
