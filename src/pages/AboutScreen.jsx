import React from "react";
import Navbar from "../components/Navbar";
import { paddings } from "../constants/styles";
import { Me, Me_Film_Mini } from "../assets";
import JobDesc from "../components/JobDesc";
import EdDesc from "../components/EdDesc";
import Skills from "../components/Skills";
import Interests from "../components/Interests";
import Practice from "./Practice";
import Button from "../components/Button";

const AboutScreen = () => {
    return (
        <div className="relative">
            <Navbar />
            <div className="w-full min-h-screen pt-48 pb-24 bg-radial-[at_200%_40%] from-[#2d737b] via-background-green via-60% to-background-green">
                <div className={`container mx-auto flex flex-col flex-1`}>
                    {/* ###################### INTRO:  ######################*/}
                    {/* Intro and Image */}
                    <div className="hidden md:flex flex-row justify-between">
                        {/* Hi and description */}
                        <div className="flex flex-col gap-8 justify-center pr-16">
                            {/* Hi and job title */}
                            <div className="flex flex-col gap-2">
                                <h1 className="text-white text-6xl font-bold tracking-tight leading-tight">
                                    Hey! I'm Shivang
                                </h1>
                                <h3 className="text-white text-2xl font-bold tracking-tight leading-tight">
                                    I'm a Software Engineer
                                </h3>
                            </div>
                            <p className="text-nav font-normal leading-relaxed">
                                Fueled by an insatiable curiosity &#129300; and
                                more chai &#9749; than is probably healthy, I am
                                a Full Stack Software Engineer
                                &#128104;&#8205;&#128187; on a mission to
                                constantly learn and create exceptional digital
                                experiences. I strive to blend creativity with
                                technical wizardry &#129497;to deliver solutions
                                that make the users say 'wow' and fellow
                                developers say 'how?'
                            </p>
                            <div className="flex flex-col md:flex-row gap-4">
                                <Button text="My Artifacts" page="artifacts" />
                                <Button text="My Resume" page="about" />
                            </div>
                        </div>
                        <img src={Me} className="w-64 rounded-4xl shadow-4xl" />
                    </div>
                    {/* ###################### MOBILE:  ######################*/}
                    {/* Intro and Image */}
                    <div className="md:hidden flex flex-col items-center">
                        <img
                            src={Me_Film_Mini}
                            className="w-64 rounded-full shadow-4xl"
                        />
                        {/* Hi and description */}
                        <div className="flex flex-col gap-8 justify-center mt-4 px-4">
                            {/* Hi and job title */}
                            <div className="flex flex-col gap-2">
                                <h1 className="text-white text-5xl font-bold tracking-tight leading-tight text-center">
                                    Hey! I'm Shivang
                                </h1>
                                <h3 className="text-white text-2xl font-bold tracking-tight leading-tight text-center">
                                    I'm a Software Engineer
                                </h3>
                            </div>
                            <p className="text-nav font-normal leading-relaxed text-center">
                                Fueled by an insatiable curiosity &#129300; and
                                more chai &#9749; than is probably healthy, I am
                                a Full Stack Software Engineer
                                &#128104;&#8205;&#128187; on a mission to
                                constantly learn and create exceptional digital
                                experiences. I strive to blend creativity with
                                technical wizardry &#129497;to deliver solutions
                                that make the users say 'wow' and fellow
                                developers say 'how?'
                            </p>
                            <div className="flex flex-col md:flex-row gap-4">
                                <Button text="My Artifacts" page="artifacts" />
                                <Button text="My Resume" page="about" />
                            </div>
                        </div>
                    </div>

                    <div className="grid gap-12 md:grid-cols-2 mt-18 md:mt-36">
                        {/* ###################### EXPERIENCE:  ######################*/}
                        <div className="flex flex-col gap-8">
                            <h3 className="text-white text-2xl font-bold tracking-tight px-4">
                                Experience
                            </h3>
                            <JobDesc company="Collins" />
                            <JobDesc company="Itential" />
                            <JobDesc company="CloudCheckr" />
                        </div>
                        {/* ###################### EDUCATION:  ######################*/}
                        <div className="flex flex-col gap-8">
                            <h3 className="text-white text-2xl font-bold tracking-tight px-4">
                                Education
                            </h3>
                            <EdDesc level="Masters" />
                            <EdDesc level="Bachelors" />
                        </div>
                    </div>
                    {/* ###################### SKILLS:  ######################*/}
                    <div className="flex flex-col gap-8 mt-18 md:mt-36">
                        <h3 className="text-white text-2xl font-bold tracking-tight px-4">
                            Skills
                        </h3>
                        <Skills />
                    </div>
                    {/* ###################### MOBILE:  ######################*/}
                    {/* ###################### INTERESTS:  ######################*/}
                    {/* <div className="flex flex-col gap-8 mt-36">
                        <h3 className="text-white text-2xl font-bold tracking-tight">
                            Interests
                        </h3>
                        <Interests />
                    </div> */}
                </div>
            </div>
        </div>
    );
};

export default AboutScreen;
