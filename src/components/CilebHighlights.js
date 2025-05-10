'use client';

import React, { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import Button from './Button';

const slides = [
    {
        imageUrl: "https://img.freepik.com/free-photo/closeup-shot-person-writing-book-with-gavel-table_181624-57173.jpg?t=st=1746890618~exp=1746894218~hmac=52d06f991157a4d46f7904552744224af6e24043e69019d4b2c689f479a8fc5c&w=996",
        title: "Court Astrology",
        desc: "Understand the astrological factors influencing legal matters and court decisions in your life."
    },
    {
        imageUrl: "https://img.freepik.com/free-photo/business-concept-with-graphic-holography_23-2149160929.jpg?t=st=1746890669~exp=1746894269~hmac=8655814b8400ab3369502103b367561530f0eb91eec982ffe76a771a0cda5874&w=900",
        title: "Finance Astrology",
        desc: "Discover favorable periods for investments, wealth growth, and financial stability through your horoscope."
    },
    {
        imageUrl: "https://img.freepik.com/free-photo/young-handsome-physician-medical-robe-with-stethoscope_1303-17818.jpg?t=st=1746890675~exp=1746894275~hmac=3a70f480a117ce71151fba9ba2236707cdfe063529df7e4d2e5c74e50239119b&w=996",
        title: "Health Astrology",
        desc: "Explore health trends and potential medical issues based on your birth chart for better well-being."
    },
    {
        imageUrl: "https://img.freepik.com/premium-photo/house-mock-up-young-engineer-looking-busy-involved-while-preparing-house-mock-up_259150-72838.jpg?w=996",
        title: "Property Astrology",
        desc: "Analyze the right time and direction for buying or selling property based on astrological guidance."
    },
    {
        imageUrl: "https://img.freepik.com/premium-photo/career-inscription-people-icons-virtual-screen-businessman-pressing-career_1085052-2320.jpg?w=1380",
        title: "Career Astrology",
        desc: "Find clarity in your professional path with astrological advice on job changes, promotions, and success."
    },
    {
        imageUrl: "https://img.freepik.com/free-photo/numerology-concept-composition_23-2150169761.jpg?t=st=1746890516~exp=1746894116~hmac=69ee5278ba5ee128265ba3e0f983773d522080e5ab09020760089124755a3388&w=996",
        title: "Children Astrology",
        desc: "Get insights into your child's future, personality, and academic growth through astrology."
    },
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
                                <div className="absolute -left-[15rem] w-[35rem] top-1/2 -translate-y-1/2">
                                    <h2 className="py-3 whitespace-nowrap text-xl tracking-widest font-thin px-10 -rotate-90 bg-orange-500/60 text-white text-center rounded-full">
                                        {slide.title}
                                    </h2>
                                </div>
                                <div className='absolute inset-0 top-[25rem] left-20 z-20 bg-gray-100/60 text-black max-w-md h-42 p-5 rounded-2xl'>
                                    <p className='mb-5'>{slide.desc}</p>
                                    <Button 
                                    name="Read More"
                                    />
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
