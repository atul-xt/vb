'use client';

import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

const Question = [
    {
        titlehindi: "कुंडली मिलान हेतु ऑनलाइन रिपोर्ट",
        title: "Online Report for Horoscope Matching",
        url: "/services/online-reports/horoscope-matching.php",
        HindiUrl: "/services-in-hindi/online-reports/horoscope-matching",
        imageUrl: "https://www.vinaybajrangi.com/_next/image?url=https%3A%2F%2Fcontent.vinaybajrangi.com%2Fimg%2Fcontent%2F1729338347-Online-Report-for-Horoscope-Matching.jpg&w=640&q=75"
    },
    {
        titlehindi: "क्या आप 2025 में यूपीएससी परीक्षा क्रैक कर पाएंगे? ",
        title: "Will You be Successful in UPSC Exam?",
        url: "/services/online-reports/will-i-be-successful-in-upsc-exam.php",
        HindiUrl: "/services-in-hindi/online-reports/will-i-be-successful-in-upsc-exam",
        imageUrl: "https://www.vinaybajrangi.com/_next/image?url=https%3A%2F%2Fcontent.vinaybajrangi.com%2Fimg%2Fcontent%2F1717843829-bdead89d071f3e56f6c3650ff1c6eff4.webp&w=640&q=75"
    },
    {
        titlehindi: "क्या आपको स्टॉक मार्केट में इन्वेस्ट करना चाहिए? ",
        title: "Should You Invest in the Stock Market?",
        url: "/services/online-reports/stock-market.php",
        HindiUrl: "/services-in-hindi/online-reports/stock-market-2024",
        imageUrl: "https://www.vinaybajrangi.com/_next/image?url=https%3A%2F%2Fcontent.vinaybajrangi.com%2Fimg%2Fcontent%2F1721198681-4aee0cbdab1e67a7591f26bcfa8d9c9e.png&w=640&q=75"
    },
    {
        titlehindi: "क्या आपको मिलेगा संतान सुख ",
        title: "Know About Child Birth From Birth Chart",
        url: "/services/online-reports/chances-of-child-in-birth-chart.php",
        HindiUrl: "/services-in-hindi/online-reports/chances-of-child-in-birth-chart",
        imageUrl: "https://www.vinaybajrangi.com/_next/image?url=https%3A%2F%2Fcontent.vinaybajrangi.com%2Fimg%2Fcontent%2F1721198776-089b1a62d4239af8fa326e48021829be.jpg&w=640&q=75"
    },
    {
        titlehindi: "क्या आपका बिजनेस करने का योग है? ",
        title: "Do you have the Yoga to do Business?",
        url: "/services/online-reports/job-or-business.php",
        HindiUrl: "/services-in-hindi/online-reports/job-or-business",
        imageUrl: "https://www.vinaybajrangi.com/_next/image?url=https%3A%2F%2Fcontent.vinaybajrangi.com%2Fimg%2Fcontent%2F1729338577-Online-Report-for-Job-or-Business.jpg&w=640&q=75"
    },
    {
        titlehindi: "कब होगी आपकी शादी",
        title: "Know the Timing of your Marriage",
        url: "/services/online-reports/know-your-marriage-timing.php",
        HindiUrl: "/services-in-hindi/online-reports/know-your-marriage-timing",
        imageUrl: "https://www.vinaybajrangi.com/_next/image?url=https%3A%2F%2Fcontent.vinaybajrangi.com%2Fimg%2Fcontent%2F1729331133-Find-Marriage-Age-Using-Astrology-Timing-of-Marriage.jpg&w=640&q=75"
    },
    {
        titlehindi: "आपका भावी जीवनसाथी क्या करेगा? नौकरी या व्यवसाय? ",
        title: "What will your Future Life Partner do? Job or Business?",
        url: "/services/online-reports/know-future-life-partner-profession.php",
        HindiUrl: "/services-in-hindi/online-reports/future-life-partner",
        imageUrl: "https://www.vinaybajrangi.com/_next/image?url=https%3A%2F%2Fcontent.vinaybajrangi.com%2Fimg%2Fcontent%2F1721198989-5e6ad3def1dbb90d2eca0b0b7c76d7de.png&w=640&q=75"
    },
    {
        titlehindi: "आपके संतान के लिए सबसे सटीक नाम",
        title: "Best Name for Your Baby",
        url: "/services/online-reports/baby-naming.php",
        HindiUrl: "/services-in-hindi/online-reports/baby-naming",
        imageUrl: "https://www.vinaybajrangi.com/_next/image?url=https%3A%2F%2Fcontent.vinaybajrangi.com%2Fimg%2Fcontent%2F266.jpg&w=640&q=75"
    },
    {
        titlehindi: "शनि का किस-किस तरह से प्रभाव है आप पर ",
        title: "Find Saturn’s Secrets and how they affect you",
        url: "/services/online-reports/know-about-saturn-secrets.php",
        HindiUrl: "/services-in-hindi/online-reports/know-about-saturn-secrets/",
        imageUrl: "https://www.vinaybajrangi.com/_next/image?url=https%3A%2F%2Fcontent.vinaybajrangi.com%2Fimg%2Fcontent%2F1729332033-Find-Saturns-Secrets-and-how-they-affect-you.jpg&w=640&q=75"
    },
    {
        titlehindi: "सबसे सटीक मांगलिक दोष आकलन",
        title: "Assess status and personality of your Future Life Partner",
        url: "/services/online-reports/future-life-partner.php",
        HindiUrl: "/services-in-hindi/online-reports/mangal-dosha-calculator/",
        imageUrl: "https://www.vinaybajrangi.com/_next/image?url=https%3A%2F%2Fcontent.vinaybajrangi.com%2Fimg%2Fcontent%2F1729330924-Assess-status-and-personality-of-your-Future-Life-Partner.jpg&w=640&q=75"
    },
];

const Services = [
    {
        nameHindi: "परामर्श",
        name: "Consultation",
        ImgUrl: "https://www.vinaybajrangi.com/asset_frontend/img/consultation.png",
        Link: "/services/consultation.php",
        HindiLink: "/services-in-hindi/consultation",
    },
    {
        nameHindi: "ऑनलाइन रिपोर्ट",
        name: "Online Report",
        ImgUrl: "https://www.vinaybajrangi.com/asset_frontend/img/online-report.png",
        Link: "/services/online-reports.php",
        HindiLink: "/services-in-hindi/online-reports",
    },
    {
        nameHindi: "ध्वनि रिपोर्ट",
        name: "Voice Report",
        ImgUrl: "https://www.vinaybajrangi.com/asset_frontend/img/voice-report.png",
        Link: "services/voice-report.php",
        HindiLink: "/services-in-hindi/voice-report",
    },
    {
        nameHindi: "जीवन वाचन",
        name: "Life Readings",
        ImgUrl: "https://www.vinaybajrangi.com/asset_frontend/img/life-readings.png",
        Link: "/services/life-readings.php",
        HindiLink: "/services-in-hindi/life-readings",
    },
];

const ActionLinks = () => {
    return (
        <div className="flex flex-col gap-5 h-full">
            <div>
                <Swiper
                    loop={true}
                    autoplay={{
                        delay: 2000,
                        disableOnInteraction: false,
                    }}
                    pagination={{
                        dynamicBullets: true,
                    }}
                    modules={[Pagination, Autoplay]}
                    className="mySwiper"
                >
                    {Question.map((qs, index) => (
                        <SwiperSlide key={index} className='pb-8'>
                            <div className='w-full flex rounded-2xl overflow-hidden border border-gray-300 bg-white'>
                                <div className='w-1/2'>
                                    <img className='w-full h-full object-cover' src={qs.imageUrl} alt="Question" />
                                </div>
                                <div className='w-1/2 p-8 flex flex-col justify-between'>
                                    <div>
                                        <span className='flex gap-1 items-center bg-orange-600 w-fit px-3 py-0.5 text-white rounded-lg'>
                                            Question
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-5">
                                                <path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm11.378-3.917c-.89-.777-2.366-.777-3.255 0a.75.75 0 0 1-.988-1.129c1.454-1.272 3.776-1.272 5.23 0 1.513 1.324 1.513 3.518 0 4.842a3.75 3.75 0 0 1-.837.552c-.676.328-1.028.774-1.028 1.152v.75a.75.75 0 0 1-1.5 0v-.75c0-1.279 1.06-2.107 1.875-2.502.182-.088.351-.199.503-.331.83-.727.83-1.857 0-2.584ZM12 18a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Z" clipRule="evenodd" />
                                            </svg>
                                        </span>
                                        <h2 className='mt-2 ml-1 font-semibold'>{qs.title}</h2>
                                    </div>
                                    <button className="bg-white hover:scale-95 duration-200 transition ease-linear active:scale-105 cursor-pointer hover:bg-orange-600 hover:text-white text-red-900 flex gap-1 border border-red-800 shadow-lg px-4 py-2 rounded-md text-sm font-medium">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-5">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M15 8.25H9m6 3H9m3 6-3-3h1.5a3 3 0 1 0 0-6M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                                        </svg>
                                        Book Now
                                    </button>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
            <div className='h-full grid grid-cols-2 gap-5'>
                {Services.map((item, index) => (
                    <div key={index} className='bg-orange-600 flex flex-col items-center justify-center gap-2 text-white rounded-lg p-5'>
                        <img className='w-20' src={item.ImgUrl} alt={item.name} />
                        <span className='text-sm'>{item.name}</span>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default ActionLinks