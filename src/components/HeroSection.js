'use client';

import React from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const HeroSection = () => {
    return (
        <section className="h-[90vh] w-full overflow-hidden">
            <Swiper
                effect={'fade'}
                loop={true}
                navigation={true}
                autoplay={{
                    delay: 4000,
                    disableOnInteraction: false,
                }}
                modules={[EffectFade, Autoplay, Navigation]}
                className="mySwiper h-full overflow-hidden">
                <SwiperSlide>
                    <section className="h-full bg-gradient-to-br from-indigo-950 to-black text-white py-40 px-6 md:px-16">
                        <div className="absolute inset-0 z-0 bg-[url('/images/BG-2.png')] bg-cover bg-center opacity-70 animate-pulse" />
                        <div className="relative z-10 max-w-7xl mx-auto flex flex-col-reverse md:flex-row items-center justify-between gap-12">
                            <div className="flex-1 p-8 max-w-xl">
                                <h1 className="text-4xl md:text-5xl font-extrabold leading-tight text-white">
                                    Discover Your Perfect Match
                                    with <br /> <span className="text-orange-400">Vinay Bajrangi</span>
                                </h1>
                                <p className="mt-6 text-gray-300 text-lg md:text-xl">
                                    Get expert Kundli matching, marriage compatibility reports, and personalized relationship guidance.
                                </p>
                                <button
                                    className="mt-10 hover:bg-white hover:scale-95 duration-200 transition ease-linear active:scale-105 bg-orange-600 text-white cursor-pointer hover:text-red-900 flex gap-1 shadow-lg px-4 py-3 rounded-md text-sm font-medium">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-5">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 3.75V16.5L12 14.25 7.5 16.5V3.75m9 0H18A2.25 2.25 0 0 1 20.25 6v12A2.25 2.25 0 0 1 18 20.25H6A2.25 2.25 0 0 1 3.75 18V6A2.25 2.25 0 0 1 6 3.75h1.5m9 0h-9" />
                                    </svg>
                                    Get Compatibility Report
                                </button>
                            </div>
                        </div>
                    </section>
                </SwiperSlide>
                <SwiperSlide className="relative">
                    <section className="h-full bg-gradient-to-br from-indigo-950 to-black text-white py-40 px-6 md:px-16">
                        <div className="absolute inset-0 z-0 bg-[url('/images/numerology-collage-concept.webp')] bg-cover bg-center opacity-70 animate-pulse" />
                        <div className="relative z-10 max-w-7xl mx-auto flex flex-col-reverse md:flex-row items-center justify-between gap-12">
                            <div className="flex-1 p-8 rounded-2xl shadow-xl">
                                <h1 className="text-4xl md:text-5xl font-extrabold leading-tight text-white">
                                    Unlock Your Cosmic Blueprint
                                    with <br /> <span className="text-orange-400">Vinay Bajrangi</span>
                                </h1>
                                <p className="mt-6 text-gray-300 text-lg md:text-xl">
                                    Accurate predictions, personalized Kundli analysis, and career, relationship, and life insights.
                                </p>
                                <button
                                    className="mt-10 bg-white hover:scale-95 duration-200 transition ease-linear active:scale-105 hover:bg-orange-600 hover:text-white cursor-pointer text-red-900 flex gap-1 shadow-lg px-4 py-3 rounded-md text-sm font-medium">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-5">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 3.75V16.5L12 14.25 7.5 16.5V3.75m9 0H18A2.25 2.25 0 0 1 20.25 6v12A2.25 2.25 0 0 1 18 20.25H6A2.25 2.25 0 0 1 3.75 18V6A2.25 2.25 0 0 1 6 3.75h1.5m9 0h-9" />
                                    </svg>
                                    Book Your Astrology Session
                                </button>
                            </div>
                            <div
                                className="flex-1">
                                <img
                                    src="/images/zodiag-sign-collection.webp"
                                    alt="Astrology Illustration"
                                    className="w-full max-w-xs mx-auto rounded-full animate-spin-slowest drop-shadow-2xl hover:scale-110 duration-1000 transition-all ease-linear"
                                />
                            </div>
                        </div>
                    </section>
                </SwiperSlide>
                <SwiperSlide>
                    <section className="h-full bg-gradient-to-br from-indigo-950 to-black text-white py-40 px-6 md:px-16">
                        <div className="absolute inset-0 z-0 bg-[url('/images/BG-3.png')] bg-cover bg-center opacity-70 animate-pulse" />
                        <div className="relative z-10 max-w-7xl mx-auto flex flex-col-reverse md:flex-row items-center justify-between gap-12">
                            <div className="flex-1 p-8 max-w-xl">
                                <h1 className="text-4xl md:text-5xl font-extrabold leading-tight text-white">
                                    Navigate Your Career Path
                                    with <br /> <span className="text-orange-400">Vinay Bajrangi</span>
                                </h1>
                                <p className="mt-6 text-gray-300 text-lg md:text-xl">
                                    Find the right profession, overcome career hurdles, and plan your future with astrological insights tailored to you.
                                </p>
                                <button
                                    className="mt-10 bg-gradient-to-r from-purple-600 to-indigo-600 text-white hover:from-purple-700 hover:to-indigo-700 hover:scale-95 duration-200 transition ease-linear active:scale-105 cursor-pointer flex gap-1 shadow-lg px-4 py-3 rounded-md text-sm font-medium">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-5">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 3.75V16.5L12 14.25 7.5 16.5V3.75m9 0H18A2.25 2.25 0 0 1 20.25 6v12A2.25 2.25 0 0 1 18 20.25H6A2.25 2.25 0 0 1 3.75 18V6A2.25 2.25 0 0 1 6 3.75h1.5m9 0h-9" />
                                    </svg>
                                    Plan Your Career Growth
                                </button>
                            </div>
                        </div>
                    </section>
                </SwiperSlide>
                <SwiperSlide>
                    <section className="h-full bg-gradient-to-br from-indigo-950 to-black text-white py-40 px-6 md:px-16">
                        <div className="absolute inset-0 z-0 bg-[url('/images/BG-5.jpg')] bg-cover bg-center opacity-70 animate-pulse" />
                        <div className="relative">
                            <div className="p-8 max-w-2xl mx-auto text-center flex justify-center items-center flex-col">
                                <h1 className="text-4xl md:text-5xl font-extrabold leading-tight text-white">
                                    Plan Parenthood with Clarity
                                    from <br /> <span className="text-orange-400">Vinay Bajrangi</span>
                                </h1>
                                <p className="mt-6 text-gray-300 text-lg md:text-xl">
                                    Get astrological guidance for childbirth timing, parenting challenges, and your child’s future through precise Kundli readings.
                                </p>
                                <button
                                    className="mt-10 bg-white hover:scale-95 duration-200 transition ease-linear active:scale-105 hover:bg-orange-600 hover:text-white cursor-pointer text-red-900 flex gap-1 border border-red-800 shadow-lg px-4 py-3 rounded-md text-sm font-medium">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-5">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 3.75V16.5L12 14.25 7.5 16.5V3.75m9 0H18A2.25 2.25 0 0 1 20.25 6v12A2.25 2.25 0 0 1 18 20.25H6A2.25 2.25 0 0 1 3.75 18V6A2.25 2.25 0 0 1 6 3.75h1.5m9 0h-9" />
                                    </svg>
                                    Consult for Parenthood
                                </button>
                            </div>
                        </div>
                    </section>
                </SwiperSlide>
            </Swiper>
        </section>
    );
};

export default HeroSection;