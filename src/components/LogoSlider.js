"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Navigation, Autoplay } from "swiper/modules";

export default function LogoSlider({ images, isReverse }) {
    const breakpoints = {
        320: { slidesPerView: 2 },
        480: { slidesPerView: 3 },
        768: { slidesPerView: 4 },
        1024: { slidesPerView: 5 },
        1280: { slidesPerView: 9 }
    };

    return (

        <div className="break1:max-w-[1650px] break2:max-w-[1320px] break3:max-w-[1140px] break4:max-w-[960px] mx-auto bg-white block px-16 max-md:px-3">
            <div className="mx-auto py-6">
                <Swiper
                    modules={[Autoplay, Navigation]}
                    spaceBetween={10}
                    loop={true}
                    autoplay={{ delay: 0, disableOnInteraction: false, reverseDirection: isReverse }}
                    speed={3000}
                    breakpoints={breakpoints}
                >
                    {images?.map((image, index) => (
                        <SwiperSlide key={index}>
                            <div className="flex justify-center items-center border rounded-md h-16 max-sm:h-12">
                                <Image
                                    alt={image.alt}
                                    src={image.imageUrl}
                                    width={400}
                                    height={400}
                                    className="p-1.5 h-full w-full object-contain"
                                />
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    );
}