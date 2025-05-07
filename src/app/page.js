"use client";

import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import Image from 'next/image';
import Panchang from '@/components/Panchang';
import ActionLinks from '@/components/ActionLinks';
import CalculatorSection from '@/components/CalculatorSection';
import MoonSignForm from '@/components/MoonSignForm';
import FreeKundliForm from '@/components/FreeKundliForm';
import MaleHoroscopeForm from '@/components/MaleHoroscopeForm';
import PodcastSection from '@/components/PodcastSection';
import AboutUs from '@/components/AboutUs';

const people = [
  {
    name: "Marriage Astrology",
    url: "marriage-astrology",
    imgSrc: "https://www.vinaybajrangi.com/asset_frontend/img/life-icons/file-icons_ring.png",
    bgUrl: "https://www.vinaybajrangi.com/_next/image?url=https%3A%2F%2Fcontent.vinaybajrangi.com%2Fimg%2Fcontent%2F1742288874-1726901932-1715588197-marriage-astrology.webp&w=750&q=75",
    problemSolved: "10K",
  },
  {
    name: "Property Astrology",
    url: "property-astrology",
    imgSrc: "https://www.vinaybajrangi.com/asset_frontend/img/life-icons/property-astrology.png",
    bgUrl: "https://www.vinaybajrangi.com/_next/image?url=https%3A%2F%2Fcontent.vinaybajrangi.com%2Fimg%2Fcontent%2F1726900691-1725270162-Property-Yoga-in-your-Horoscope.webp&w=750&q=75",
    problemSolved: "10K",
  },
  {
    name: "Business Astrology",
    url: "business-astrology.php",
    imgSrc: "https://www.vinaybajrangi.com/asset_frontend/img/life-icons/ba.png",
    bgUrl: "https://www.vinaybajrangi.com/_next/image?url=https%3A%2F%2Fcontent.vinaybajrangi.com%2Fimg%2Fcontent%2F1727183232-business.webp&w=750&q=75",
    problemSolved: "10K",
  },
  {
    name: "Court / legal Issues",
    url: "court-case-astrology.php",
    imgSrc: "https://www.vinaybajrangi.com/asset_frontend/img/life-icons/court-legal-Issues.png",
    bgUrl: "https://www.vinaybajrangi.com/_next/image?url=https%3A%2F%2Fcontent.vinaybajrangi.com%2Fimg%2Fcontent%2F1726900268-1714203534-court-case-prediction-as-per-astrology.webp&w=750&q=75",
    problemSolved: "10K",
  },
  {
    name: "Career Astrology",
    url: "career-astrology",
    imgSrc: "https://www.vinaybajrangi.com/asset_frontend/img/life-icons/career-astrology.png",
    bgUrl: "https://www.vinaybajrangi.com/_next/image?url=https%3A%2F%2Fcontent.vinaybajrangi.com%2Fimg%2Fcontent%2F1726900035-1714801466-career-Astrology-Your-path-to-success.webp&w=750&q=75",
    problemSolved: "10K",
  },
  {
    name: "Health Astrology",
    url: "health-astrology.php",
    imgSrc: "https://www.vinaybajrangi.com/asset_frontend/img/life-icons/ha.png",
    bgUrl: "https://www.vinaybajrangi.com/_next/image?url=https%3A%2F%2Fcontent.vinaybajrangi.com%2Fimg%2Fcontent%2F1726900847-1721035651-health-astrology.webp&w=750&q=75",
    problemSolved: "10K",
  },
  {
    name: "Loan and Debt",
    url: "finance-astrology",
    imgSrc: "https://www.vinaybajrangi.com/asset_frontend/img/life-icons/loan-debt.png",
    bgUrl: "https://www.vinaybajrangi.com/_next/image?url=https%3A%2F%2Fcontent.vinaybajrangi.com%2Fimg%2Fcontent%2F1743149438-banner-430-155-know-how-you-can-be-loan-free.jpg&w=750&q=75",
    problemSolved: "10K",
  },
  {
    name: "Children Astrology",
    url: "children-astrology.php",
    imgSrc: "https://www.vinaybajrangi.com/asset_frontend/img/life-icons/children-astrology.png",
    bgUrl: "https://www.vinaybajrangi.com/_next/image?url=https%3A%2F%2Fcontent.vinaybajrangi.com%2Fimg%2Fcontent%2F1726901420-1721038426-children-astrology.webp&w=750&q=75",
    problemSolved: "10K",
  },
  {
    name: "Betting & Gambling",
    url: "astrology-for-betting.php",
    imgSrc: "https://www.vinaybajrangi.com/asset_frontend/img/life-icons/icons.png",
    bgUrl: "https://www.vinaybajrangi.com/_next/image?url=https%3A%2F%2Fcontent.vinaybajrangi.com%2Fimg%2Fcontent%2F1728041405-Planetary-combinations-for-Betting-and-Gambling.jpg&w=750&q=75",
    problemSolved: "10K",
  },
  {
    name: "All about Vastu",
    url: "vastu.php",
    imgSrc: "https://www.vinaybajrangi.com/asset_frontend/img/life-icons/allabout-vastu.png",
    bgUrl: "https://www.vinaybajrangi.com/_next/image?url=https%3A%2F%2Fcontent.vinaybajrangi.com%2Fimg%2Fcontent%2F1744890144-430-155-Vastu-shastra-The-science-of-architecture.jpg&w=750&q=75",
    problemSolved: "10K",
  },
  {
    name: "Foreign Settlement",
    url: "foreign-settlement-astrology.php",
    imgSrc: "https://www.vinaybajrangi.com/asset_frontend/img/life-icons/foreign-settlement.png",
    bgUrl: "https://www.vinaybajrangi.com/_next/image?url=https%3A%2F%2Fcontent.vinaybajrangi.com%2Fimg%2Fcontent%2F1726901112-1723789381-Foreign-Settlement.webp&w=750&q=75",
    problemSolved: "10K",
  },
  {
    name: "Vastu for commercial",
    url: "vastu-for-commercial.php",
    imgSrc: "https://www.vinaybajrangi.com/asset_frontend/img/life-icons/vfc.png",
    bgUrl: "https://www.vinaybajrangi.com/_next/image?url=https%3A%2F%2Fcontent.vinaybajrangi.com%2Fimg%2Fcontent%2F1744890144-430-155-Vastu-shastra-The-science-of-architecture.jpg&w=750&q=75",
    problemSolved: "10K",
  },
  {
    name: "Past life Readings",
    url: "past-life-reading",
    imgSrc: "https://www.vinaybajrangi.com/asset_frontend/img/life-icons/pastlife-readings.png",
    bgUrl: "https://www.vinaybajrangi.com/_next/image?url=https%3A%2F%2Fcontent.vinaybajrangi.com%2Fimg%2Fcontent%2F1726901213-1724735904-Past-Life-Reading-By-Date-Of-Birth.webp&w=750&q=75",
    problemSolved: "10K",
  },
  {
    name: "Share market Astrology",
    url: "share-market-astrology.php",
    imgSrc: "https://www.vinaybajrangi.com/asset_frontend/img/life-icons/birth-time-correction.png",
    bgUrl: "https://www.vinaybajrangi.com/_next/image?url=https%3A%2F%2Fcontent.vinaybajrangi.com%2Fimg%2Fcontent%2F1726901588-1724242649-Get-success-in-share-market-using-astrology%20(1).webp&w=750&q=75",
    problemSolved: "10K",
  },
  {
    name: "Birth time Correction",
    url: "birth-time-rectification",
    imgSrc: "https://www.vinaybajrangi.com/asset_frontend/img/life-icons/btc.png",
    bgUrl: "https://www.vinaybajrangi.com/_next/image?url=https%3A%2F%2Fcontent.vinaybajrangi.com%2Fimg%2Fcontent%2F1726901264-1725452173-banners-936-337-correct-your-birth-time-using-astrology.webp&w=750&q=75",
    problemSolved: "10K",
  },
];

const Horoscope = [
  {
    name: "Aries",
    url: "horoscope/daily-horoscope/aries.php",
    imgSrc: "/images/HoroscopeSign/Aries.png",
    Link: "horoscope/daily-horoscope/aries.php",
  },
  {
    name: "Taurus",
    url: "horoscope/daily-horoscope/taurus.php",
    imgSrc: "/images/HoroscopeSign/Taurus.png",
    Link: "horoscope/daily-horoscope/taurus.php",
  },
  {
    name: "Gemini",
    url: "horoscope/daily-horoscope/gemini.php",
    imgSrc: "/images/HoroscopeSign/Gemini.png",
    Link: "horoscope/daily-horoscope/gemini.php",
  },
  {
    name: "Cancer",
    url: "horoscope/daily-horoscope/cancer.php",
    imgSrc: "/images/HoroscopeSign/Cancer.png",
    Link: "horoscope/daily-horoscope/cancer.php",
  },
  {
    name: "Leo",
    url: "horoscope/daily-horoscope/leo.php",
    imgSrc: "/images/HoroscopeSign/Leo.png",
    Link: "horoscope/daily-horoscope/leo.php",
  },
  {
    name: "Virgo",
    url: "horoscope/daily-horoscope/virgo.php",
    imgSrc: "/images/HoroscopeSign/Virgo.png",
    Link: "horoscope/daily-horoscope/virgo.php",
  },
  {
    name: "Libra",
    url: "horoscope/daily-horoscope/libra.php",
    imgSrc: "/images/HoroscopeSign/Libra.png",
    Link: "horoscope/daily-horoscope/libra.php",
  },
  {
    name: "Scorpio",
    url: "horoscope/daily-horoscope/scorpio.php",
    imgSrc: "/images/HoroscopeSign/Scorpio.png",
    Link: "horoscope/daily-horoscope/scorpio.php",
  },
  {
    name: "Sagittarius",
    url: "horoscope/daily-horoscope/sagittarius.php",
    imgSrc: "/images/HoroscopeSign/Sagittarius.png",
    Link: "horoscope/daily-horoscope/sagittarius.php",
  },
  {
    name: "Capricorn",
    url: "horoscope/daily-horoscope/capricorn.php",
    imgSrc: "/images/HoroscopeSign/Capricorn.png",
    Link: "horoscope/daily-horoscope/capricorn.php",
  },
  {
    name: "Aquarius",
    url: "horoscope/daily-horoscope/aquarius.php",
    imgSrc: "/images/HoroscopeSign/Aquarius.png",
    Link: "horoscope/daily-horoscope/aquarius.php",
  },
  {
    name: "Pisces",
    url: "horoscope/daily-horoscope/pisces.php",
    imgSrc: "/images/HoroscopeSign/Pisces.png",
    Link: "horoscope/daily-horoscope/pisces.php",
  },
];


export default function Home() {
  return (
    <main data-scroll-section>
      <section className="bg-orange-100">
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
                    <div className=' flex justify-between items-center px-3 py-4 bg-red-700'>
                      <div>
                        <div className='mb-1 text-white flex gap-1 items-center'>
                          <img className='h-6 w-6' src={card.imgSrc} alt="icon" />
                          <h2 className='font-semibold'>{card.name}</h2>
                        </div>
                        <span className='ml-5 font-semibold bg-green-400 px-3 py-0.5 rounded-full text-black text-xs'>{card.problemSolved}+ Problems Solved</span>
                      </div>
                      <div>
                        <button className='bg-white active:scale-90 duration-100 ease-linear shadow-lg border border-gray-200 cursor-pointer py-2 px-5 rounded-lg text-xs font-semibold'>Know More</button>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </section>

      <section className='max-w-6xl mx-auto py-10'>
        <div className="text-center">
          <h1 className="text-red-900 text-3xl font-semibold">Free Horoscope – Daily, Weekly & Monthly</h1>
          <p className="mt-1 max-w-xl mx-auto ">Get your free horoscope updated daily, weekly, and monthly! Whether you're looking for love, career, or health guidance.</p>
        </div>
        <div className="mt-10 flex flex-wrap items-center justify-center gap-x-6 gap-y-4 md:gap-x-10 md:gap-y-6 lg:gap-x-16 lg:gap-y-8 max-w-6xl mx-auto">
          {Horoscope.map((sign, index) => (
            <div key={index} className='relative text-center group cursor-pointer'>
              <div className="h-22 w-22 md:h-28 md:w-28 animate-spin-slow group-hover:border-purple-500 group-hover:border-b-4 rounded-full border-b-2 border-t-4 border-orange-500">
              </div>
              <img className='absolute top-12 md:top-14 left-1/2 -translate-x-1/2 -translate-y-1/2 h-10 w-10 md:h-12 md:w-12 group-hover:scale-115 duration-200 ease-linear' src={sign.imgSrc} alt={sign.name} />
              <h3 className='mt-1 text-sm font-semibold text-red-800 group-hover:text-purple-500'>{sign.name}</h3>
            </div>
          ))}
        </div>
      </section>

      <section>
        <div className='w-full'>
          <Image className='w-full h-full' src="https://content.vinaybajrangi.com/img/content/website-banner.webp" height={400} width={400} unoptimized alt='Banner' />
        </div>
      </section>

      <section className='bg-red-50'>
        <main className='max-w-7xl mx-auto py-10'>
          <div className="text-center">
            <h1 className="text-red-900 text-3xl font-semibold"> Today’s Panchang</h1>
            <p className="mt-1 max-w-xl mx-auto ">Start your day with clarity by checking today’s Panchang. Get accurate details on tithi, nakshatra, yoga, karan, and shubh muhurat</p>
          </div>
          <div className='mt-6 grid grid-cols-5 gap-5'>
            <div className='col-span-3'>
              <Panchang />
            </div>
            <div className='col-span-2'>
              <ActionLinks />
            </div>
          </div>
        </main>
      </section>

      <section className=' bg-red-50'>
        <CalculatorSection />
      </section>
      <section className='py-10 max-w-7xl mx-auto flex'>
        <MoonSignForm />
        <FreeKundliForm />
        <MaleHoroscopeForm />
      </section>
      <section>
        <PodcastSection language="English" />
      </section>
      <section>
        <AboutUs />
      </section>
    </main>
  );
}
