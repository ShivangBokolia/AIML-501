import React from "react";
import { Link } from "react-router-dom";

const Button = (props) => {
    if (props.type == "link") {
        return (
            <>
                <Link
                    className="p-0.5 rounded-full from-[#0C1B1D] to-highlight bg-gradient-to-r shadow-2xl flex flex-row"
                    to={`/${props.page}`}
                >
                    <span className="w-full text-center block text-white px-4 py-2 font-semibold rounded-full bg-background-green sm:hover:bg-transparent duration-300">
                        {props.text}
                    </span>
                </Link>
            </>
        );
    } else if (props.type == "resume") {
        return (
            <button
                className="p-0.5 rounded-full from-[#0C1B1D] to-highlight bg-gradient-to-r shadow-2xl"
                onClick={() => window.open("/AIML-500/Resume.pdf", "_blank")}
            >
                <span className="block text-white px-4 py-2 font-semibold rounded-full bg-background-green hover:bg-transparent duration-300">
                    {props.text}
                </span>
            </button>
        );
    } else if (props.type == "submit") {
        return (
            <>
                <button
                    className="p-0.5 rounded-full from-[#0C1B1D] to-highlight bg-gradient-to-r shadow-2xl"
                    type="submit"
                >
                    <span className="block text-white px-4 py-2 font-semibold rounded-full bg-background-green hover:bg-transparent duration-300">
                        {props.text}
                    </span>
                </button>
            </>
        );
    }
};

export default Button;
