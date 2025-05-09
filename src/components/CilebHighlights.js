'use client';

import React, { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

const slides = [
    {
        imageUrl: "/images/BG1.png",
    },
    {
        imageUrl: "/images/BG2.png",
    },
    {
        imageUrl: "/images/BG3.png",
    },
    {
        imageUrl: "/images/BG4.png",
    },
    {
        imageUrl: "/images/BG1.png",
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
                                    className="w-full h-[500px] object-cover rounded-3xl border border-transparent group-hover:border-gray-400 transition-all duration-500"
                                />
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            ) : (
                <div className="min-h-[80vh] flex space-x-2">
                    {slides.map((slide, index) => (
                        <div
                            key={index}
                            className={`relative group ${index === activeIndex ? "min-w-[69%]" : "min-w-[6%]"} bg-white rounded-3xl shadow-md overflow-hidden cursor-pointer transition-all duration-300 ease-in-out`}
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
                                className="w-full h-full object-cover rounded-3xl border border-transparent group-hover:border-gray-400 transition-all duration-500"
                            />
                        </div>
                    ))}
                </div>
            )}
        </section>
    );
};

export default CilebHighlights;
