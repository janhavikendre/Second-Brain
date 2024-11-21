import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function Home() {
    const [isVisible, setIsVisible] = useState(false);

    // This effect will trigger the animation when the component is mounted
    useEffect(() => {
        setIsVisible(true);
    }, []);

    return (
        <div className="flex flex-col justify-center items-center h-screen bg-gray-800 text-center">
            <h1
                className={`text-4xl text-purple-300 font-bold mb-4 transition-opacity duration-1000 ${
                    isVisible ? "opacity-100" : "opacity-0"
                }`}
            >
                Your Digital Second Brain
            </h1>
            <h2
                className={`text-2xl text-white transition-opacity duration-1000 delay-200 ${
                    isVisible ? "opacity-100" : "opacity-0"
                }`}
            >
                Capture, organize, and retrieve your ideas, tweets, videos, and more. Let AI supercharge your thinking.
            </h2>
            <Link to='/signup'>
            <button
                className={`bg-purple-300 text-black px-4 py-2 mt-4 transition-opacity duration-1000 delay-400 dark:md:hover:bg-blue-900 ${
                    isVisible ? "opacity-100" : "opacity-0"
                }`}
            >
                Get Started
            </button>
            </Link>
        </div>
    );
}