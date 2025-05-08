import React from 'react'

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

const FreeHoroscope = () => {
    return (
        <section className='max-w-6xl mx-auto py-10'>
            <div className="text-center">
                <h1 className="text-red-900 text-3xl font-semibold">Free Horoscope – Daily, Weekly & Monthly</h1>
                <p className="mt-1 max-w-xl mx-auto ">Get your free horoscope updated daily, weekly, and monthly! Whether you're looking for love, career, or health guidance.</p>
            </div>
            <div className="py-10 h-full flex flex-wrap items-center justify-center gap-x-6 md:gap-x-10 gap-y-12 lg:gap-x-16 lg:gap-y-14 max-w-6xl mx-auto">
                {Horoscope.map((sign, index) => (
                    <div key={index} className='relative text-center group cursor-pointer w-32 h-32'>
                        <div className="h-full w-full animate-spin-slow group-hover:border-purple-500 group-hover:border-b-4 rounded-full border-b-2 border-t-4 border-orange-500 relative z-10"></div>
                        <img
                            className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-10 w-10 md:h-12 md:w-12 group-hover:scale-115 duration-200 ease-linear z-20'
                            src={sign.imgSrc}
                            alt={sign.name}
                        />
                        <div className='absolute inset-0 hidden group-hover:flex items-center justify-center z-10'>
                            <button className="absolute top-5 left-0 translate-x-1/2 -translate-y-1/2 text-xs bg-purple-300 text-purple-900 cursor-pointer hover:bg-purple-600 hover:text-white px-2 py-1 rounded-sm shadow animate-float-slow"
                                style={{ animationDelay: "0s" }}
                            >
                                Today
                            </button>
                            <button className="absolute top-10 right-0 -translate-y-1/2 translate-x-1/2 text-xs bg-purple-300 text-purple-900 cursor-pointer hover:bg-purple-600 hover:text-white px-2 py-1 rounded-sm shadow animate-float-slow"
                                style={{ animationDelay: "0.2s" }}
                            >
                                Tomorrow
                            </button>
                            <button className="absolute bottom-8 left-0 -translate-x-1/2 -translate-y-1/2  text-xs bg-purple-300 text-purple-900 cursor-pointer hover:bg-purple-600 hover:text-white px-2 py-1 rounded-sm shadow animate-float-slow"
                                style={{ animationDelay: "0.4s" }}
                            >
                                Weekly
                            </button>
                            <button className="absolute bottom-0 right-0 -translate-y-1/2 translate-x-1/2 text-xs bg-purple-300 text-purple-900 cursor-pointer hover:bg-purple-600 hover:text-white px-2 py-1 rounded-sm shadow animate-float-slow"
                                style={{ animationDelay: "0.5s" }}
                            >
                                Monthly
                            </button>
                        </div>
                        <h3 className='mt-2 text-sm font-semibold text-red-800 group-hover:text-purple-500'>
                            {sign.name}
                        </h3>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default FreeHoroscope