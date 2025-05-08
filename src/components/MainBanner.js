"use client"

import { useState } from "react"
import Image from "next/image"
import { Facebook, Instagram, Youtube } from "lucide-react"

const MainBanner = () => {
    const [socialStats, setSocialStats] = useState({
        facebook: { count: "410K", delay: "0s" },
        instagram: { count: "100K", delay: "0.2s" },
        youtube: { count: "300K", delay: "0.4s" },
    })

    return (
        <section className="relative w-full">
            <Image
                className="w-full h-full"
                src="https://content.vinaybajrangi.com/img/content/website-banner.webp"
                height={400}
                width={1200}
                unoptimized
                alt="Banner"
                priority
            />

            {/* Floating social media container */}
            <div className="absolute left-96 bottom-10 -translate-y-1/2 z-10">
                {/* Facebook */}
                <div
                    className="flex flex-col justify-center items-center bg-white backdrop-blur-sm rounded-full h-20 w-20 shadow-lg animate-float"
                    style={{ animationDelay: socialStats.facebook.delay }}
                >
                    <div className="flex items-center justify-center bg-blue-600 rounded-full p-2">
                        <Facebook className="h-5 w-5 text-white" />
                    </div>
                    <div>
                        <p className="font-bold">{socialStats.facebook.count}</p>
                    </div>
                </div>
            </div>

            {/* Instagram */}
            <div className="absolute left-1/3 top-1/2 -translate-y-1/2 z-10">
                <div
                    className="flex flex-col justify-center items-center bg-white backdrop-blur-sm rounded-full h-20 w-20 shadow-lg animate-float"
                    style={{ animationDelay: socialStats.instagram.delay }}
                >
                    <div className="flex items-center justify-center bg-gradient-to-br from-purple-600 via-pink-500 to-orange-400 rounded-full p-2">
                        <Instagram className="h-5 w-5 text-white" />
                    </div>
                    <div>
                        <p className="font-bold">{socialStats.instagram.count}</p>
                    </div>
                </div>
            </div>

            {/* YouTube */}
            <div className="absolute left-1/4 top-1/3 -translate-y-1/2 z-10">
                <div
                    className="flex flex-col justify-center items-center bg-white backdrop-blur-sm rounded-full h-20 w-20 shadow-lg animate-float"
                    style={{ animationDelay: socialStats.youtube.delay }}
                >
                    <div className="flex items-center justify-center bg-red-600 rounded-full p-2">
                        <Youtube className="h-5 w-5 text-white" />
                    </div>
                    <div>
                        <p className="font-bold">{socialStats.youtube.count}</p>
                    </div>
                </div>
            </div>
        </section >
    )
}

export default MainBanner