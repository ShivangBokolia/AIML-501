import React, { useRef } from "react";
import Navbar from "../components/Navbar";
import Button from "../components/Button";
import { connect } from "../constants/constants";
import emailjs from "@emailjs/browser";

const ContactScreen = () => {
    const desktopForm = useRef();
    const mobileForm = useRef();

    const sendMailDesktop = (event) => {
        event.preventDefault();

        emailjs
            .sendForm(
                "service_j849bmi",
                "template_hbcdlm8",
                desktopForm.current,
                "jePugJxxEdxenBkor"
            )
            .then(
                () => {
                    alert("Message Sent!");
                    event.target.reset();
                },
                (error) => {
                    console.log(error.text);
                    alert("Failed to send message!");
                }
            );
    };

    const sendMailMobile = (event) => {
        event.preventDefault();

        emailjs
            .sendForm(
                "service_j849bmi",
                "template_hbcdlm8",
                mobileForm.current,
                "jePugJxxEdxenBkor"
            )
            .then(
                () => {
                    alert("Message Sent!");
                    event.target.reset();
                },
                (error) => {
                    console.log(error.text);
                    alert("Failed to send message!");
                }
            );
    };

    return (
        <div className="relative">
            <Navbar />
            <div className="w-full min-h-screen pt-48 bg-radial-[at_200%_40%] from-[#2d737b] via-background-green via-60% to-background-green">
                <div
                    className={`container mx-auto flex flex-col md:gap-24 gap-12 pb-24`}
                >
                    <div className="flex flex-col gap-4">
                        <h1 className="text-white text-4xl font-bold tracking-tight text-center">
                            Get in Touch
                        </h1>
                        <p className="text-lg text-nav px-4 lg:px-54 text-center">
                            I'm currently looking for any new opportunities, and
                            my inbox is always open. Whether you want to discuss
                            a new opportunity, new project, creative ideas or
                            just want to say Hi, I'll try to get back to you as
                            soon as possible.
                        </p>
                    </div>
                    <div className="hidden md:grid gap-16 grid-cols-2">
                        <form
                            className="flex flex-col gap-6"
                            ref={desktopForm}
                            onSubmit={sendMailDesktop}
                        >
                            <div className="grid grid-cols-1 gap-6">
                                <label className="flex flex-col gap-2">
                                    <span className="text-base font-medium text-nav">
                                        Name
                                    </span>
                                    <input
                                        className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-md border border-highlight bg-background-green px-4 py-3 text-base text-white placeholder-highlight/50 focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/50"
                                        placeholder="Your Name"
                                        name="user_name"
                                    />
                                </label>

                                <label className="flex flex-col gap-2">
                                    <span className="text-base font-medium text-nav">
                                        Email
                                    </span>
                                    <input
                                        className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-md border border-highlight bg-background-green px-4 py-3 text-base text-white placeholder-highlight/50 focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/50"
                                        placeholder="Your Email ID"
                                        name="mail"
                                    />
                                </label>

                                <label className="flex flex-col gap-2">
                                    <span className="text-base font-medium text-nav">
                                        Subject
                                    </span>
                                    <input
                                        className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-md border border-highlight bg-background-green px-4 py-3 text-base text-white placeholder-highlight/50 focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/50"
                                        placeholder="Subject"
                                        name="subject"
                                    />
                                </label>

                                <label className="flex flex-col gap-2">
                                    <span className="text-base font-medium text-nav">
                                        Message
                                    </span>
                                    <textarea
                                        className="form-textarea min-h-36 w-full resize-y overflow-hidden rounded-md border border-highlight bg-background-green px-4 py-3 text-base text-white placeholder-highlight/50 focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/50"
                                        placeholder="Message"
                                        name="message"
                                    />
                                </label>
                                <Button text="Send Message" type="submit" />
                            </div>
                        </form>
                        <div className="flex flex-col gap-8">
                            <div className="flex flex-col gap-4">
                                <h3 className="text-2xl font-bold text-white">
                                    Contact Information
                                </h3>
                                <p className="text-nav">
                                    You can also reach out to me through my
                                    social media profiles or by direct mail.
                                </p>
                            </div>
                            <div className="flex flex-col gap-4">
                                {connect.map((link, idx) => (
                                    <a
                                        className="group flex items-center gap-4 rounded-lg p-4 transition-colors hover:bg-white/10"
                                        key={`${link.name}_${idx}`}
                                        href={link?.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <div className="rounded-full bg-[#0C1B1D]/50 p-3 transition-colors group-hover:bg-accent">
                                            <img
                                                src={link.img}
                                                className="w-8"
                                            />
                                        </div>
                                        <div>
                                            <p className="text-lg font-semibold text-white">
                                                {link.name}
                                            </p>
                                            <p className="text-nav">
                                                {link.desc}
                                            </p>
                                        </div>
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>
                    {/* ###################### MOBILE:  ######################*/}
                    <div className="md:hidden flex flex-row justify-center">
                        {connect.map((link, idx) => (
                            <a
                                className="group flex items-center gap-4 rounded-lg p-4 transition-colors hover:bg-white/10"
                                key={`${link.name}_${idx}`}
                                href={link?.link}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <div className="rounded-full bg-[#0C1B1D]/50 p-3 transition-colors group-hover:bg-accent">
                                    <img src={link.img} className="w-8" />
                                </div>
                            </a>
                        ))}
                    </div>
                    <form
                        className="md:hidden flex flex-col"
                        ref={mobileForm}
                        onSubmit={sendMailMobile}
                    >
                        <div className="grid grid-cols-1 gap-6 px-4">
                            <label className="flex flex-col gap-2">
                                <span className="text-base font-medium text-nav">
                                    Name
                                </span>
                                <input
                                    className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-md border border-highlight bg-background-green px-4 py-3 text-base text-white placeholder-highlight/50 focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/50"
                                    placeholder="Your Name"
                                    name="user_name"
                                />
                            </label>

                            <label className="flex flex-col gap-2">
                                <span className="text-base font-medium text-nav">
                                    Email
                                </span>
                                <input
                                    className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-md border border-highlight bg-background-green px-4 py-3 text-base text-white placeholder-highlight/50 focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/50"
                                    placeholder="Your Email ID"
                                    name="mail"
                                />
                            </label>

                            <label className="flex flex-col gap-2">
                                <span className="text-base font-medium text-nav">
                                    Subject
                                </span>
                                <input
                                    className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-md border border-highlight bg-background-green px-4 py-3 text-base text-white placeholder-highlight/50 focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/50"
                                    placeholder="Subject"
                                    name="subject"
                                />
                            </label>

                            <label className="flex flex-col gap-2">
                                <span className="text-base font-medium text-nav">
                                    Message
                                </span>
                                <textarea
                                    className="form-textarea min-h-36 w-full resize-y overflow-hidden rounded-md border border-highlight bg-background-green px-4 py-3 text-base text-white placeholder-highlight/50 focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/50"
                                    placeholder="Message"
                                    name="message"
                                />
                            </label>
                            <Button text="Send Message" type="submit" />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default ContactScreen;
