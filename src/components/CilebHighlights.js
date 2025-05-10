'use client';

import React, { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

const slides = [
    {
        imageUrl: "/images/Children Astrology.jpg",
        title: "Children Astrology",
        desc: "Get insights into your child's future, personality, and academic growth through astrology."
    },
    {
        imageUrl: "/images/Court Astrology .jpg",
        title: "Court Astrology",
        desc: "Understand the astrological factors influencing legal matters and court decisions in your life."
    },
    {
        imageUrl: "/images/Finance Astrology .jpg",
        title: "Finance Astrology",
        desc: "Discover favorable periods for investments, wealth growth, and financial stability through your horoscope."
    },
    {
        imageUrl: "/images/Health Astrology.jpg",
        title: "Health Astrology",
        desc: "Explore health trends and potential medical issues based on your birth chart for better well-being."
    },
    {
        imageUrl: "/images/Property Astrology.jpg",
        title: "Property Astrology",
        desc: "Analyze the right time and direction for buying or selling property based on astrological guidance."
    },
    {
        imageUrl: "/images/Career  Astrology.jpg",
        title: "Career Astrology",
        desc: "Find clarity in your professional path with astrological advice on job changes, promotions, and success."
    }
];


const CilebHighlights = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 768);
        };

        handleResize();
        window.addEventListener('resize', handleResize);

        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const handleClick = (index) => {
        setActiveIndex(index);
    };

    return (
        <section className="relative w-full max-xl:py-12 max-lg:py-10 max-md:py-8 max-sm:py-6 pl-2 pr-10 2xl:pr-2 max-md:pr-2 max-sm:pr-2">
            {isMobile ? (
                <Swiper
                    spaceBetween={20}
                    slidesPerView={1}
                    loop={true}
                    onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
                    className="lg:hidden"
                >
                    {slides.map((slide, index) => (
                        <SwiperSlide key={index}>
                            <div
                                className={`relative group bg-white rounded-3xl shadow-md overflow-hidden cursor-pointer transition-all duration-300 ease-in-out`}
                                onClick={() => handleClick(index)}
                            >
                                <div
                                    className={`absolute bottom-0 left-0 w-full text-white m-6 transition-opacity duration-300 ease-in-out ${index === activeIndex ? "opacity-100" : "opacity-0"}`}
                                >
                                </div>
                                <img
                                    src={slide.imageUrl}
                                    alt={slide.name}
                                    loading="eager"
                                    className="w-full h-[500px] object-cover rounded-3xl border border-transparent group-hover:border-gray-400 transition-all duration-500" />
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            ) : (
                <div className="h-[70vh] flex space-x-2">
                    {slides.map((slide, index) => (
                        <div
                            key={index}
                            className={`relative group ${index === activeIndex ? "min-w-[75%]" : "min-w-[4.6%]"} bg-gray-300 rounded-3xl shadow-md overflow-hidden cursor-pointer transition-all duration-300 ease-in-out`}
                            onClick={() => handleClick(index)}>
                            <div className={`absolute bottom-0 left-0 w-full text-white m-6 transition-opacity duration-300 ease-in-out ${index === activeIndex ? "opacity-100" : "opacity-0"}`}>
                            </div>
                            <img
                                src={slide.imageUrl}
                                alt={slide.name}
                                loading="eager"
                                className={`w-full h-full object-cover rounded-3xl border border-transparent group-hover:border-gray-400 transition-all duration-500 ${index === activeIndex && ""}`}
                            />
                            <div className="absolute inset-0 z-10">
                                <div className="absolute -left-22 w-64 top-1/2 -translate-y-1/2">
                                    <h2 className="py-3 whitespace-nowrap text-xl font-serif px-10 -rotate-90 bg-orange-500 text-center rounded-full">
                                        {slide.title}
                                    </h2>
                                </div>
                                <div className='absolute inset-0 top-[27rem] left-20 z-20 bg-gray-100/50 max-w-md h-28 p-5 rounded-2xl'>
                                    <p>{slide.desc}</p>
                                </div>
                            </div>
                            <div className="absolute inset-0 rounded-3xl border border-gray-400 opacity-0 group-hover:opacity-100 group-hover:animate-border"></div>
                            <div className='absolute inset-0 bg-gradient-to-t from-black to-transparent bg-blend-multiply opacity-60' />
                        </div>
                    ))}
                </div>
            )}
        </section>
    );
};

export default CilebHighlights;
