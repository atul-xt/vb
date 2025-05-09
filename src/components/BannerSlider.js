'use client';

import React from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const BannerSlider = () => {
    const heroSectionData = [
        {
            id: 1,
            bgUrl: "/images/BG-2.png",
            heading: "Discover Your Perfect Match with",
            subHeading: "Vinay Bajrangi",
            desc: "Get expert Kundli matching, marriage compatibility reports, and personalized relationship guidance.",
            buttonTitle: "Get Compatibility Report",
            buttonStyle: "bg-orange-600 text-white hover:bg-white hover:text-red-900"
        },
        {
            id: 2,
            bgUrl: "/images/numerology-collage-concept.webp",
            heading: "Unlock Your Cosmic Blueprint with",
            subHeading: "Vinay Bajrangi",
            desc: "Accurate predictions, personalized Kundli analysis, and career, relationship, and life insights.",
            buttonTitle: "Book Your Astrology Session",
            buttonStyle: "bg-white text-red-900 hover:bg-orange-600 hover:text-white",
            isZodiagSign: true
        },
        {
            id: 3,
            bgUrl: "/images/BG-3.png",
            heading: "Navigate Your Career Path with",
            subHeading: "Vinay Bajrangi",
            desc: "Find the right profession, overcome career hurdles, and plan your future with astrological insights tailored to you.",
            buttonTitle: "Plan Your Career Growth",
            buttonStyle: "bg-gradient-to-r from-purple-600 to-indigo-600 text-white hover:from-purple-700 hover:to-indigo-700"
        },
        {
            id: 4,
            bgUrl: "/images/BG-5.jpg",
            heading: "Plan Parenthood with Clarity from",
            subHeading: "Vinay Bajrangi",
            desc: "Get astrological guidance for childbirth timing, parenting challenges, and your child’s future through precise Kundli readings.",
            buttonTitle: "Consult for Parenthood",
            buttonStyle: "bg-white text-red-900 hover:bg-orange-600 hover:text-white",
            isCentre: true
        }
    ]
    return (
        <section className="h-[70vh] w-full overflow-hidden">
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
                {heroSectionData?.map((item) => (
                    <SwiperSlide className="relative">
                        <section key={item.id} className="h-full bg-gradient-to-br from-indigo-950 to-black text-white py-20 px-6 md:px-16">
                            <div className={`absolute inset-0 z-0 bg-cover bg-center opacity-70 animate-pulse`}
                                style={{ backgroundImage: `url(${item.bgUrl})` }}
                            />
                            <div className="relative z-10 max-w-7xl mx-auto flex flex-col-reverse md:flex-row items-center justify-between gap-12">
                                <div className={`${item.isCentre ? "max-w-2xl mx-auto text-center flex flex-col justify-center items-center" : "flex-1 p-8 rounded-2xl max-w-xl"}`}>
                                    <h1 className="text-4xl md:text-5xl font-extrabold leading-tight text-white">
                                        {item.heading} <br /> <span className="text-orange-400">{item.subHeading}</span>
                                    </h1>
                                    <p className="mt-6 text-gray-300 text-lg md:text-xl">{item.desc}</p>
                                    <button
                                        className={`mt-10 ${item.buttonStyle} hover:scale-95 duration-200 transition ease-linear active:scale-105 cursor-pointer flex gap-1 shadow-lg px-4 py-3 rounded-md text-sm font-medium`}>
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-5">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 3.75V16.5L12 14.25 7.5 16.5V3.75m9 0H18A2.25 2.25 0 0 1 20.25 6v12A2.25 2.25 0 0 1 18 20.25H6A2.25 2.25 0 0 1 3.75 18V6A2.25 2.25 0 0 1 6 3.75h1.5m9 0h-9" />
                                        </svg>
                                        {item.buttonTitle}
                                    </button>
                                </div>
                                {item.isZodiagSign && (
                                    <div className="flex-1">
                                        <img
                                            src="/images/zodiag-sign-collection.webp"
                                            alt="Astrology Illustration"
                                            className="w-full max-w-xs mx-auto rounded-full animate-spin-slowest drop-shadow-2xl hover:scale-110 duration-1000 transition-all ease-linear" />
                                    </div>
                                )}
                            </div>
                        </section>
                    </SwiperSlide>
                ))}
            </Swiper>
        </section>
    );
};

export default BannerSlider;