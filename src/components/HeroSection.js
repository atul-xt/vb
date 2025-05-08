'use client';

import React from "react";
import { motion } from "framer-motion";

const HeroSection = () => {
    return (
        <section className="relative overflow-hidden bg-gradient-to-br from-indigo-950 to-black text-white py-40 px-6 md:px-16">
            {/* Stars Background */}
            <div className="absolute inset-0 z-0 bg-[url('/images/numerology-collage-concept.webp')] bg-cover bg-center opacity-70 animate-pulse" />

            <div className="relative z-10 max-w-7xl mx-auto flex flex-col-reverse md:flex-row items-center justify-between gap-12">

                {/* Text Section */}
                <motion.div
                    className="flex-1 p-8 rounded-2xl shadow-xl"
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                >
                    <h1 className="text-4xl md:text-5xl font-extrabold leading-tight text-white">
                        Unlock Your Cosmic Blueprint
                        with <br /> <span className="text-orange-400">Vinay Bajrangi</span>
                    </h1>
                    <p className="mt-6 text-gray-300 text-lg md:text-xl">
                        Accurate predictions, personalized Kundli analysis, and career, relationship, and life insights.
                    </p>

                    <motion.button
                        whileTap={{ scale: 0.95 }}
                        className="mt-10 bg-white hover:scale-95 duration-200 transition ease-linear active:scale-105 hover:bg-orange-600 hover:text-white cursor-pointer text-red-900 flex gap-1 border border-red-800 shadow-lg px-4 py-3 rounded-md text-sm font-medium"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-5">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 3.75V16.5L12 14.25 7.5 16.5V3.75m9 0H18A2.25 2.25 0 0 1 20.25 6v12A2.25 2.25 0 0 1 18 20.25H6A2.25 2.25 0 0 1 3.75 18V6A2.25 2.25 0 0 1 6 3.75h1.5m9 0h-9" />
                        </svg>
                        Book Your Astrology Session
                    </motion.button>
                </motion.div>

                {/* Hero Image */}
                <motion.div
                    className="flex-1"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1.2 }}
                >
                    <img
                        src="/images/zodiag-sign-collection.webp"
                        alt="Astrology Illustration"
                        className="w-full max-w-xs mx-auto rounded-full animate-spin-slowest drop-shadow-2xl hover:scale-110 duration-1000 transition-all ease-linear"
                    />
                </motion.div>
            </div>
        </section>
    );
};

export default HeroSection;