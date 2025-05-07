"use client";
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/autoplay"
import "swiper/css/pagination"
import { Navigation, Pagination, Autoplay } from "swiper/modules"
import Image from "next/image"
import { ExternalLink, Play, ChevronLeft, ChevronRight } from "lucide-react"
import Link from "next/link"
import { useEffect } from "react";


const podcasts = [
    {
        id: "1",
        title: "2025 में करोड़पति बनने के उपाय। Share Market Predictions for 2025 Ft. @DeepakWadhwa.OFFICIAL",
        thumbnailUrl: "/images/podcast-thumbnail-1.jpg",
        youtubeUrl: "https://youtu.be/lXJPQPVjRfY?si=YsI5mofSdgqjqaK5",
        duration: "01:08:54",
    },
    {
        id: "2",
        title: "बजरंगी जी की भविष्यवाणी हुई सच, दिल्ली में BJP का डंका। Delhi Election Results, BJP Win @sinhasushant",
        thumbnailUrl: "/images/podcast-thumbnail-9.jpg",
        youtubeUrl: "https://youtu.be/X2FrGOCHI2Y",
        duration: "2:24",
    },
    {
        id: "3",
        title: "Can Your Kundli Really Predict Govt Job Success? Ft. Divas Gupta। Dr. Vinay Bajrangi",
        thumbnailUrl: "/images/podcast-thumbnail-2.jpg",
        youtubeUrl: "https://youtu.be/XK0j4SQdY_E?si=UFN5q2D9-UNoOUp8",
        duration: "05:00",
    },
    {
        id: "4",
        title: "आपकी कुंडली के छिपे रहस्य। Ft Divas Gupta। Dr Vinay Bajrangi। Horoscope Predictions",
        thumbnailUrl: "/images/podcast-thumbnail-3.jpg",
        youtubeUrl: "https://youtu.be/VPOFMEQ3w_s?si=d01lB5PtQIhzlfJi",
        duration: "07:08",
    },
    {
        id: "5",
        title: "2025 में बजरंगी बदलेंगे आपकी क़िस्मत। Astrology Predictions। Horoscope, Ft Divas Gupta",
        thumbnailUrl: "/images/podcast-thumbnail-4.jpg",
        youtubeUrl: "https://youtu.be/dPdu2PF7gkw?si=rwGXzagjNTMxU_LC",
        duration: "01:56:10",
    },
    {
        id: "6",
        title: "Jyotish के सबसे बड़े झूठ का पर्दाफाश। Astrology Myths, Shubhankar Mishra",
        thumbnailUrl: "/images/podcast-thumbnail-5.jpg",
        youtubeUrl: "https://youtu.be/GOGnZQGFeME?si=dkVsuLdvzFPcFkXV",
        duration: "06:40",
    },
    {
        id: "7",
        title: "बजरंगी जी की भविष्यवाणी हुई सच, दिल्ली में BJP का डंका। Delhi Election Results, BJP Win @sinhasushant",
        thumbnailUrl: "/images/podcast-thumbnail-9.jpg",
        youtubeUrl: "https://youtu.be/X2FrGOCHI2Y",
        duration: "2:24",
    },
    {
        id: "8",
        title: "Astrology Secrets EXPOSED by Dr Vinay Bajrangi। Ft. Shubhankar Mishra",
        thumbnailUrl: "/images/podcast-thumbnail-6.jpg",
        youtubeUrl: "https://youtu.be/rrdEMaKQfUk?si=pgTjlevYVQYPWE1-",
        duration: "01:25:06",
    },
    {
        id: "9",
        title: "ग्रहों के गुप्त आदेश। Planetary SECRETS EXPOSED By Dr Vinay Bajrangi, Ft Bhanu Pathak @BhanuPathak",
        thumbnailUrl: "/images/podcast-thumbnail-7.jpg",
        youtubeUrl: "https://youtu.be/fEMIIsUzgA8?si=YIGa4p4pOyDficph",
        duration: "01:35:01",
    },
    {
        id: "10",
        title: "PM Modi, Yogi, Rahul, Kejriwal.... सबके पिछले जन्म के राज़ फ़ाश By Dr Vinay Bajrangi, Ft Bhanu Pathak @BhanuPathak",
        thumbnailUrl: "/images/podcast-thumbnail-8.png",
        youtubeUrl: "https://www.youtube.com/watch?v=1YR78BhAg70",
        duration: "01:35:01",
    },
]

export default function PodcastSection({ language }) {

    useEffect(() => {
        // Attach custom navigation buttons after Swiper initializes
        const prevButton = document.querySelector(".custom-prev")
        const nextButton = document.querySelector(".custom-next")
        if (prevButton && nextButton) {
            prevButton.setAttribute("aria-label", "Previous slide")
            nextButton.setAttribute("aria-label", "Next slide")
        }
    }, [])

    return (
        <>
            <section className="bg-orange-100 py-10 max-lg:py-6 relative">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center">
                        <h1 className="text-red-900 text-3xl font-semibold">Astrology Podcasts</h1>
                        <p className="mt-1 max-w-xl mx-auto ">Tune in to our astrology podcasts for daily updates, zodiac deep-dives, planetary trends, and expert guidance.</p>
                    </div>
                    <div className="mt-8">
                        <Swiper
                            modules={[Navigation, Pagination, Autoplay]}
                            navigation={{
                                prevEl: ".custom-prev",
                                nextEl: ".custom-next",
                            }}
                            pagination={{ dynamicBullets: true, }}
                            spaceBetween={16}
                            autoplay={{
                                delay: 3000, // Auto-scroll delay in milliseconds (3 seconds)
                                disableOnInteraction: false, // Keeps autoplay enabled even after user interaction
                            }}
                            centeredSlides={true}
                            breakpoints={{
                                340: { slidesPerView: 1, centeredSlides: true },
                                500: { slidesPerView: 2, centeredSlides: false },
                                824: { slidesPerView: 3, centeredSlides: false },
                                1280: { slidesPerView: 4, centeredSlides: false },
                            }}
                            className="cursor-grab active:cursor-grabbing"
                        >
                            {podcasts.map((podcast) => (
                                <SwiperSlide key={podcast.id} className="flex justify-center items-center pb-10">
                                    <div className="flex-none w-full bg-white rounded-lg shadow-lg p-2">
                                        <div className="group">
                                            <div className="relative aspect-video rounded-lg overflow-hidden shadow-lg transition-transform duration-300 group-hover:scale-105">
                                                <Image
                                                    src={podcast.thumbnailUrl || "/placeholder.svg"}
                                                    alt={podcast.title}
                                                    layout="fill"
                                                    objectFit="cover"
                                                    className="transition-opacity duration-300 group-hover:opacity-75 shadow-md"
                                                />
                                                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                                    <a
                                                        href={podcast.youtubeUrl}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className="bg-red-600 text-white p-4 rounded-full hover:bg-red-700 transition-colors duration-300"
                                                        aria-label={`Watch ${podcast.title}`}
                                                    >
                                                        <Play className="w-8 h-8" />
                                                    </a>
                                                </div>
                                                <div className="absolute bottom-2 right-2 bg-black bg-opacity-75 text-white text-sm px-2 py-1 rounded">
                                                    {podcast.duration}
                                                </div>
                                            </div>
                                            <h3 className="font-semibold text-black mt-4 mb-1 line-clamp-2">{podcast.title}</h3>
                                            <Link
                                                href={podcast.youtubeUrl}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="inline-flex items-center justify-center w-full bg-red-600 text-white py-1.5 px-2 rounded text-sm font-semibold hover:bg-red-700 transition-colors"
                                            >
                                                <ExternalLink className="h-4 w-4 mr-2" />
                                                Watch
                                            </Link>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>
                </div>
            </section>
        </>
    )
}

