import React from "react";
import { paddings } from "../constants/styles";
import { Me, Me_Film_Mini } from "../assets";
import Button from "./Button";

const Hero = () => {
    return (
        <>
            {/* ###################### INTRO:  ######################*/}
            {/* Intro and Image */}
            <div className="hidden lg:flex flex-row justify-between">
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
                        I am a software engineering professional specializing in
                        automation and algorithm-driven systems that help
                        engineering teams work more efficiently and deliver
                        reliable software at scale. My work focuses on
                        performance optimization, developer tooling, and
                        AI-driven automation, including solutions that generate
                        large volumes of test scenarios from complex
                        requirements. I enjoy solving challenging technical
                        problems that improve productivity, strengthen software
                        quality, and create scalable processes across
                        engineering teams.
                    </p>
                    <p className="text-nav font-normal leading-relaxed">
                        I bring value by combining technical problem-solving,
                        automation, and a strong focus on engineering
                        efficiency. I am passionate about building tools and
                        systems that reduce manual effort, improve reliability,
                        and help teams move faster without sacrificing quality.
                        Through my work in performance optimization, developer
                        tooling, and AI-driven automation, I aim to create
                        practical solutions that support both immediate project
                        goals and long-term scalability.
                    </p>
                    <p className="text-nav font-normal leading-relaxed">
                        This portfolio is intended for engineering leaders,
                        hiring managers, technical recruiters, and
                        cross-functional teams interested in automation,
                        developer productivity, performance optimization, and
                        AI-driven software solutions. It is especially relevant
                        for organizations seeking professionals who can build
                        scalable systems, improve engineering workflows, and
                        create tools that help teams deliver high-quality
                        software more efficiently.
                    </p>
                    <div className="flex flex-col md:flex-row gap-4">
                        <Button
                            text="My Artifacts"
                            page="artifacts"
                            type="link"
                        />
                        <Button text="My Resume" type="resume" />
                    </div>
                </div>
                <div className="flex flex-row w-full items-center">
                    <img
                        src={Me}
                        className="w-72 h-96 rounded-4xl shadow-4xl transition-transform duration-300 hover:scale-105"
                    />
                </div>
            </div>
            {/* ###################### MOBILE:  ######################*/}
            {/* Intro and Image */}
            <div className="lg:hidden flex flex-col items-center">
                <img
                    src={Me_Film_Mini}
                    className="w-64 rounded-full shadow-4xl"
                />
                {/* Hi and description */}
                <div className="flex flex-col gap-8 justify-center mt-4">
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
                        Fueled by an insatiable curiosity &#129300; and more
                        chai &#9749; than is probably healthy, I am a Full Stack
                        Software Engineer &#128104;&#8205;&#128187; on a mission
                        to constantly learn and create exceptional digital
                        experiences. I strive to blend creativity with technical
                        wizardry &#129497;to deliver solutions that make the
                        users say 'wow' and fellow developers say 'how?'
                    </p>
                    <div className="flex flex-col md:flex-row gap-4 justify-center">
                        <Button
                            text="My Artifacts"
                            page="artifacts"
                            type="link"
                        />
                        <Button text="My Resume" type="resume" />
                    </div>
                </div>
            </div>
        </>
    );
};

export default Hero;
