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
import Footer from '@/components/Footer';
import AdvertisementBanner from '@/components/AdvertisementBanner';
import MainBanner from '@/components/MainBanner';

const people = [
  {
    name: "Marriage Astrology",
    url: "marriage-astrology",
    icon: "/images/icons/file-icons_ring.webp",
    bgUrl: "https://www.vinaybajrangi.com/_next/image?url=https%3A%2F%2Fcontent.vinaybajrangi.com%2Fimg%2Fcontent%2F1742288874-1726901932-1715588197-marriage-astrology.webp&w=750&q=75",
    problemSolved: "10K",
  },
  {
    name: "Property Astrology",
    url: "property-astrology",
    icon: "/images/icons/property-astrology.webp",
    bgUrl: "https://www.vinaybajrangi.com/_next/image?url=https%3A%2F%2Fcontent.vinaybajrangi.com%2Fimg%2Fcontent%2F1726900691-1725270162-Property-Yoga-in-your-Horoscope.webp&w=750&q=75",
    problemSolved: "10K",
  },
  {
    name: "Business Astrology",
    url: "business-astrology.php",
    icon: "/images/icons/ba.webp",
    bgUrl: "https://www.vinaybajrangi.com/_next/image?url=https%3A%2F%2Fcontent.vinaybajrangi.com%2Fimg%2Fcontent%2F1727183232-business.webp&w=750&q=75",
    problemSolved: "10K",
  },
  {
    name: "Court / legal Issues",
    url: "court-case-astrology.php",
    icon: "/images/icons/court-legal-Issues.webp",
    bgUrl: "https://www.vinaybajrangi.com/_next/image?url=https%3A%2F%2Fcontent.vinaybajrangi.com%2Fimg%2Fcontent%2F1726900268-1714203534-court-case-prediction-as-per-astrology.webp&w=750&q=75",
    problemSolved: "10K",
  },
  {
    name: "Career Astrology",
    url: "career-astrology",
    icon: "/images/icons/career-astrology.webp",
    bgUrl: "https://www.vinaybajrangi.com/_next/image?url=https%3A%2F%2Fcontent.vinaybajrangi.com%2Fimg%2Fcontent%2F1726900035-1714801466-career-Astrology-Your-path-to-success.webp&w=750&q=75",
    problemSolved: "10K",
  },
  {
    name: "Health Astrology",
    url: "health-astrology.php",
    icon: "/images/icons/ha.webp",
    bgUrl: "https://www.vinaybajrangi.com/_next/image?url=https%3A%2F%2Fcontent.vinaybajrangi.com%2Fimg%2Fcontent%2F1726900847-1721035651-health-astrology.webp&w=750&q=75",
    problemSolved: "10K",
  },
  {
    name: "Loan and Debt",
    url: "finance-astrology",
    icon: "/images/icons/loan-debt.webp",
    bgUrl: "https://www.vinaybajrangi.com/_next/image?url=https%3A%2F%2Fcontent.vinaybajrangi.com%2Fimg%2Fcontent%2F1743149438-banner-430-155-know-how-you-can-be-loan-free.jpg&w=750&q=75",
    problemSolved: "10K",
  },
  {
    name: "Children Astrology",
    url: "children-astrology.php",
    icon: "/images/icons/children-astrology.webp",
    bgUrl: "https://www.vinaybajrangi.com/_next/image?url=https%3A%2F%2Fcontent.vinaybajrangi.com%2Fimg%2Fcontent%2F1726901420-1721038426-children-astrology.webp&w=750&q=75",
    problemSolved: "10K",
  },
  {
    name: "Betting & Gambling",
    url: "astrology-for-betting.php",
    icon: "/images/icons/icons.webp",
    bgUrl: "https://www.vinaybajrangi.com/_next/image?url=https%3A%2F%2Fcontent.vinaybajrangi.com%2Fimg%2Fcontent%2F1728041405-Planetary-combinations-for-Betting-and-Gambling.jpg&w=750&q=75",
    problemSolved: "10K",
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
    problemSolved: "10K",
  },
  {
    name: "Vastu for commercial",
    url: "vastu-for-commercial.php",
    icon: "/images/icons/vfc.webp",
    bgUrl: "https://www.vinaybajrangi.com/_next/image?url=https%3A%2F%2Fcontent.vinaybajrangi.com%2Fimg%2Fcontent%2F1744890144-430-155-Vastu-shastra-The-science-of-architecture.jpg&w=750&q=75",
    problemSolved: "10K",
  },
  {
    name: "Past life Readings",
    url: "past-life-reading",
    icon: "/images/icons/pastlife-readings.webp",
    bgUrl: "https://www.vinaybajrangi.com/_next/image?url=https%3A%2F%2Fcontent.vinaybajrangi.com%2Fimg%2Fcontent%2F1726901213-1724735904-Past-Life-Reading-By-Date-Of-Birth.webp&w=750&q=75",
    problemSolved: "10K",
  },
  {
    name: "Share market Astrology",
    url: "share-market-astrology.php",
    icon: "/images/icons/birth-time-correction.webp",
    bgUrl: "https://www.vinaybajrangi.com/_next/image?url=https%3A%2F%2Fcontent.vinaybajrangi.com%2Fimg%2Fcontent%2F1726901588-1724242649-Get-success-in-share-market-using-astrology%20(1).webp&w=750&q=75",
    problemSolved: "10K",
  },
  {
    name: "Birth time Correction",
    url: "birth-time-rectification",
    icon: "/images/icons/btc.webp",
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
    <main>
      <section>
        <Image className='w-full' src="/images/navbar.png" width={500} height={500} unoptimized alt='Navbar' />
      </section>
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
                        <button className="bg-white hover:scale-95 duration-200 transition ease-linear active:scale-105 hover:bg-orange-600 hover:text-white cursor-pointer text-red-900 flex gap-1 border border-red-800 shadow-lg px-4 py-2 rounded-md text-sm font-medium">
                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="size-5">
                            <path strokeLinecap="round" strokeLinejoin="round" d="m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z" />
                          </svg>
                          Know More
                        </button>
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
        <MainBanner />
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

      <section className='py-10 max-w-7xl mx-auto'>
        <div className="text-center">
          <h1 className="text-red-900 text-3xl font-semibold">Explore Your Vedic Profile – Instantly & Free</h1>
          <p className="mt-1 max-w-2xl mx-auto ">Unlock the secrets of your stars with our free astrology tools! Generate your Kundli, check Horoscope Compatibility, and Discover Your Moon Sign.</p>
        </div>
        <div className='mt-10 flex'>
          <MoonSignForm />
          <FreeKundliForm />
          <MaleHoroscopeForm />
        </div>
      </section>

      <section>
        <AdvertisementBanner />
      </section>

      <section>
        <PodcastSection language="English" />
      </section>

      <section>
        <AboutUs />
      </section>

      <section>
        <Footer />
      </section>
    </main>
  );
}
