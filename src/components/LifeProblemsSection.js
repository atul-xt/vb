"use client";

import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import Button from './Button';

const people = [
    {
        name: "Marriage Astrology",
        url: "marriage-astrology",
        icon: "/images/icons/file-icons_ring.webp",
        bgUrl: "https://www.vinaybajrangi.com/_next/image?url=https%3A%2F%2Fcontent.vinaybajrangi.com%2Fimg%2Fcontent%2F1742288874-1726901932-1715588197-marriage-astrology.webp&w=750&q=75",
        problemSolved: "39K",
    },
    {
        name: "Property Astrology",
        url: "property-astrology",
        icon: "/images/icons/property-astrology.webp",
        bgUrl: "https://www.vinaybajrangi.com/_next/image?url=https%3A%2F%2Fcontent.vinaybajrangi.com%2Fimg%2Fcontent%2F1726900691-1725270162-Property-Yoga-in-your-Horoscope.webp&w=750&q=75",
        problemSolved: "18K",
    },
    {
        name: "Business Astrology",
        url: "business-astrology.php",
        icon: "/images/icons/ba.webp",
        bgUrl: "https://www.vinaybajrangi.com/_next/image?url=https%3A%2F%2Fcontent.vinaybajrangi.com%2Fimg%2Fcontent%2F1727183232-business.webp&w=750&q=75",
        problemSolved: "30K",
    },
    {
        name: "Court / legal Issues",
        url: "court-case-astrology.php",
        icon: "/images/icons/court-legal-Issues.webp",
        bgUrl: "https://www.vinaybajrangi.com/_next/image?url=https%3A%2F%2Fcontent.vinaybajrangi.com%2Fimg%2Fcontent%2F1726900268-1714203534-court-case-prediction-as-per-astrology.webp&w=750&q=75",
        problemSolved: "28K",
    },
    {
        name: "Career Astrology",
        url: "career-astrology",
        icon: "/images/icons/career-astrology.webp",
        bgUrl: "https://www.vinaybajrangi.com/_next/image?url=https%3A%2F%2Fcontent.vinaybajrangi.com%2Fimg%2Fcontent%2F1726900035-1714801466-career-Astrology-Your-path-to-success.webp&w=750&q=75",
        problemSolved: "19K",
    },
    {
        name: "Health Astrology",
        url: "health-astrology.php",
        icon: "/images/icons/ha.webp",
        bgUrl: "https://www.vinaybajrangi.com/_next/image?url=https%3A%2F%2Fcontent.vinaybajrangi.com%2Fimg%2Fcontent%2F1726900847-1721035651-health-astrology.webp&w=750&q=75",
        problemSolved: "31K",
    },
    {
        name: "Loan and Debt",
        url: "finance-astrology",
        icon: "/images/icons/loan-debt.webp",
        bgUrl: "https://www.vinaybajrangi.com/_next/image?url=https%3A%2F%2Fcontent.vinaybajrangi.com%2Fimg%2Fcontent%2F1743149438-banner-430-155-know-how-you-can-be-loan-free.jpg&w=750&q=75",
        problemSolved: "14K",
    },
    {
        name: "Children Astrology",
        url: "children-astrology.php",
        icon: "/images/icons/children-astrology.webp",
        bgUrl: "https://www.vinaybajrangi.com/_next/image?url=https%3A%2F%2Fcontent.vinaybajrangi.com%2Fimg%2Fcontent%2F1726901420-1721038426-children-astrology.webp&w=750&q=75",
        problemSolved: "23K",
    },
    {
        name: "Betting & Gambling",
        url: "astrology-for-betting.php",
        icon: "/images/icons/icons.webp",
        bgUrl: "https://www.vinaybajrangi.com/_next/image?url=https%3A%2F%2Fcontent.vinaybajrangi.com%2Fimg%2Fcontent%2F1728041405-Planetary-combinations-for-Betting-and-Gambling.jpg&w=750&q=75",
        problemSolved: "20K",
    },
    {
        name: "All about Vastu",
        url: "vastu.php",
        icon: "/images/icons/allabout-vastu.webp",
        bgUrl: "https://www.vinaybajrangi.com/_next/image?url=https%3A%2F%2Fcontent.vinaybajrangi.com%2Fimg%2Fcontent%2F1744890144-430-155-Vastu-shastra-The-science-of-architecture.jpg&w=750&q=75",
        problemSolved: "10K",
    },
    {
        name: "Foreign Settlement",
        url: "foreign-settlement-astrology.php",
        icon: "/images/icons/foreign-settlement.webp",
        bgUrl: "https://www.vinaybajrangi.com/_next/image?url=https%3A%2F%2Fcontent.vinaybajrangi.com%2Fimg%2Fcontent%2F1726901112-1723789381-Foreign-Settlement.webp&w=750&q=75",
        problemSolved: "17K",
    },
    {
        name: "Vastu for commercial",
        url: "vastu-for-commercial.php",
        icon: "/images/icons/vfc.webp",
        bgUrl: "https://www.vinaybajrangi.com/_next/image?url=https%3A%2F%2Fcontent.vinaybajrangi.com%2Fimg%2Fcontent%2F1744890144-430-155-Vastu-shastra-The-science-of-architecture.jpg&w=750&q=75",
        problemSolved: "30K",
    },
    {
        name: "Past life Readings",
        url: "past-life-reading",
        icon: "/images/icons/pastlife-readings.webp",
        bgUrl: "https://www.vinaybajrangi.com/_next/image?url=https%3A%2F%2Fcontent.vinaybajrangi.com%2Fimg%2Fcontent%2F1726901213-1724735904-Past-Life-Reading-By-Date-Of-Birth.webp&w=750&q=75",
        problemSolved: "5K",
    },
    {
        name: "Share market Astrology",
        url: "share-market-astrology.php",
        icon: "/images/icons/birth-time-correction.webp",
        bgUrl: "https://www.vinaybajrangi.com/_next/image?url=https%3A%2F%2Fcontent.vinaybajrangi.com%2Fimg%2Fcontent%2F1726901588-1724242649-Get-success-in-share-market-using-astrology%20(1).webp&w=750&q=75",
        problemSolved: "34K",
    },
    {
        name: "Birth time Correction",
        url: "birth-time-rectification",
        icon: "/images/icons/btc.webp",
        bgUrl: "https://www.vinaybajrangi.com/_next/image?url=https%3A%2F%2Fcontent.vinaybajrangi.com%2Fimg%2Fcontent%2F1726901264-1725452173-banners-936-337-correct-your-birth-time-using-astrology.webp&w=750&q=75",
        problemSolved: "45K",
    },
];

const LifeProblemsSection = () => {
    return (
        <section className="bg-orange-50">
            <div className="max-w-7xl mx-auto py-10">
                <div className="text-center">
                    <h1 className="text-red-900 text-3xl font-semibold">Astrological Solutions for Life's Problems</h1>
                    <p className="mt-1 max-w-xl mx-auto ">Discover cosmic wisdom to navigate life's challenges and find your path to harmony and success.</p>
                </div>
                <div className='relative'>
                    <div className="swiper-prev absolute top-1/2 -left-10 z-10 cursor-pointer">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 15.75 3 12m0 0 3.75-3.75M3 12h18" />
                        </svg>
                    </div>
                    <div className="swiper-next absolute top-1/2 -right-10 z-10 cursor-pointer">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
                        </svg>
                    </div>
                    <Swiper
                        slidesPerView={3}
                        spaceBetween={30}
                        loop={true}
                        autoplay={{
                            delay: 2000,
                            disableOnInteraction: false,
                        }}
                        navigation={{
                            nextEl: '.swiper-next',
                            prevEl: '.swiper-prev',
                        }}
                        pagination={{ dynamicBullets: true }}
                        modules={[Pagination, Autoplay, Navigation]}
                        className="mySwiper cursor-grab active:cursor-grabbing"
                    >
                        {people.map((card, index) => (
                            <SwiperSlide key={index} className='py-6'>
                                <div className=' rounded-3xl border border-gray-200 bg-white overflow-hidden shadow-lg'>
                                    <div className='h-36'>
                                        <img className='w-full h-full object-cover' src={card.bgUrl} alt={card.name} />
                                    </div>
                                    <div className=' flex justify-between items-center px-3 py-4 bg-white'>
                                        <div>
                                            <div className='mb-1 text-black flex gap-1 items-center'>
                                                <img className='h-5 w-5' src={card.icon} alt="icon" />
                                                <h2 className='font-semibold'>{card.name}</h2>
                                            </div>
                                            <span className='ml-5 font-semibold bg-green-200 px-3 py-0.5 rounded-full text-green-600 text-xs'>{card.problemSolved}+ Problems Solved</span>
                                        </div>
                                        <div>
                                            <Button
                                                name="Know More"
                                                svg={<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="size-5">
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z" />
                                                </svg>}
                                            />
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
        </section>
    )
}

export default LifeProblemsSection