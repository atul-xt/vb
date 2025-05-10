"use client";

import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import { Heart, MapPin, Calendar, Users } from "lucide-react"
import Button from './Button';

export default function EventCardSlider({ data }) {
    return (
        <div className="max-w-5xl mx-auto">
            <div className='relative'>
                <div className="swiper-prev-btn absolute top-1/2 -left-10 z-10 cursor-pointer">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 15.75 3 12m0 0 3.75-3.75M3 12h18" />
                    </svg>
                </div>
                <div className="swiper-next-btn absolute top-1/2 -right-10 z-10 cursor-pointer">
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
                        nextEl: '.swiper-next-btn',
                        prevEl: '.swiper-prev-btn',
                    }}
                    pagination={{ dynamicBullets: true }}
                    modules={[Pagination, Autoplay, Navigation]}
                    className="mySwiper cursor-grab active:cursor-grabbing"
                >

                    {data?.map((puja) => (
                        <SwiperSlide key={puja.id} className='pb-10'>
                            <div className="w-full bg-white rounded-2xl shadow-lg overflow-hidden relative">
                                <div className="absolute top-4 left-4 bg-white rounded-lg shadow-md p-2 text-center w-14 z-10">
                                    <div className="text-xl font-bold text-black">01</div>
                                    <div className="text-xs font-semibold text-red-500">JAN</div>
                                </div>
                                {/* <div className="absolute top-4 right-4 bg-white rounded-full p-2 shadow-md z-10">
                                    <Heart className="h-5 w-5 text-red-500 fill-red-500" />
                                </div> */}
                                {/* <div className="absolute top-4 right-16 bg-white rounded-full p-1 shadow-md z-10">
                    <div className="h-6 w-6 rounded-full bg-teal-500"></div>
                </div> */}
                                <div className="w-full h-48 relative">
                                    <img
                                        src={puja.imageUrl}
                                        alt={puja.title}
                                        className="w-full h-full object-cover"
                                    />
                                    {/* <div className="absolute bottom-4 left-4 flex items-center">
                        <div className="flex -space-x-2">
                            {[1, 2, 3, 4].map((i) => (
                                <div key={i} className="h-7 w-7 rounded-full border-2 border-white bg-gray-300 overflow-hidden">
                                    <img
                                        src={`/placeholder.svg?height=50&width=50&text=${i}`}
                                        alt={`Attendee ${i}`}
                                        className="h-full w-full object-cover"
                                    />
                                </div>
                            ))}
                        </div>
                        <span className="ml-2 text-xs font-medium text-white">+1K Going</span>
                    </div> */}
                                </div>
                                <div className="p-4">
                                    <div className="mb-2">
                                        <span className="px-3 py-1 text-xs font-medium bg-sky-100 text-sky-800 rounded-full">{puja.highlight}</span>
                                    </div>
                                    <h3 className="text-xl font-bold mb-3">{puja.title}</h3>
                                    <div className="flex items-center mb-2 text-gray-600">
                                        <MapPin className="h-4 w-4 mr-2 flex-shrink-0" />
                                        <span className="text-sm">{puja.address}</span>
                                    </div>
                                    <div className="flex items-center mb-2 text-gray-600">
                                        <Calendar className="h-4 w-4 mr-2 flex-shrink-0" />
                                        <span className="text-sm">{puja.date}</span>
                                    </div>
                                    {/* <div className="flex items-center mb-2 text-gray-600">
                            <DollarSign className="h-4 w-4 mr-2 flex-shrink-0" />
                            <span className="text-sm">From $99.99</span>
                        </div> */}
                                    <div className="flex items-center mb-4 text-gray-600">
                                        <Users className="h-4 w-4 mr-2 flex-shrink-0" />
                                        <span className="text-sm">By {puja.by}</span>
                                    </div>
                                    <div className="grid grid-cols-2 gap-2 mt-4">
                                        <Button
                                            name="Book Now"
                                            svg={<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-5">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 3.75V16.5L12 14.25 7.5 16.5V3.75m9 0H18A2.25 2.25 0 0 1 20.25 6v12A2.25 2.25 0 0 1 18 20.25H6A2.25 2.25 0 0 1 3.75 18V6A2.25 2.25 0 0 1 6 3.75h1.5m9 0h-9" />
                                            </svg>}
                                            style="bg-orange-600 text-white"
                                        />
                                        <Button
                                            name="View Details"
                                            svg={<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="size-5">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z" />
                                            </svg>}
                                            style="bg-white text-black"
                                        />
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div >
        </div >
    )
}
