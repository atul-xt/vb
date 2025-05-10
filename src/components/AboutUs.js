"use client"

import { useState } from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import { Star, Moon, Sun, ChevronDown } from "lucide-react"

export default function AboutUs() {
    const [expanded, setExpanded] = useState(false)

    return (
        <div className="relative overflow-hidden bg-gradient-to-b from-slate-900 to-indigo-950 text-white">
            {/* Decorative elements */}
            <div className="absolute inset-0 opacity-10">
                <Star className="absolute top-20 left-10 h-6 w-6 text-yellow-200" />
                <Star className="absolute top-40 right-20 h-4 w-4 text-yellow-200" />
                <Star className="absolute bottom-20 left-1/4 h-5 w-5 text-yellow-200" />
                <Moon className="absolute top-1/3 right-10 h-8 w-8 text-blue-200" />
                <Sun className="absolute bottom-10 right-1/3 h-10 w-10 text-amber-200" />
            </div>

            <div className="container relative mx-auto max-w-5xl px-6 py-16 md:py-24">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="mb-12 text-center"
                >
                    <h2 className="mb-2 font-serif text-4xl font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-purple-300 to-blue-200 md:text-5xl">
                        About Dr. Vinay Bajrangi
                    </h2>
                    <div className="mx-auto mt-4 h-1 w-20 rounded bg-purple-500"></div>
                </motion.div>

                <div className="grid gap-10 md:grid-cols-12">
                    <div className="md:col-span-4">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            className="relative aspect-square overflow-hidden rounded-full border-4 border-indigo-300/20 shadow-lg shadow-indigo-900/30"
                        >
                            <Image
                                src="/images/Dr-Vinay-Bajrangi.png"
                                alt="Dr. Vinay Bajrangi"
                                width={1000}
                                height={1000}
                                className="w-full h-full object-cover"
                            />
                        </motion.div>
                        {/* <div className="absolute inset-0 rounded-full bg-gradient-to-t from-indigo-900/60 to-transparent"></div> */}

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.4 }}
                            className="mt-6 space-y-3 rounded-xl bg-white/5 p-4 backdrop-blur-sm"
                        >
                            <div className="flex items-center gap-2">
                                <div className="rounded-full bg-purple-400/20 p-2">
                                    <Star className="h-5 w-5 text-purple-300" />
                                </div>
                                <p className="text-sm font-medium text-purple-200">PhD in Vedic Astrology</p>
                            </div>
                            <div className="flex items-center gap-2">
                                <div className="rounded-full bg-blue-400/20 p-2">
                                    <Moon className="h-5 w-5 text-blue-300" />
                                </div>
                                <p className="text-sm font-medium text-blue-200">25+ Years Experience</p>
                            </div>
                            <div className="flex items-center gap-2">
                                <div className="rounded-full bg-amber-400/20 p-2">
                                    <Sun className="h-5 w-5 text-amber-300" />
                                </div>
                                <p className="text-sm font-medium text-amber-200">80,000+ Consultations</p>
                            </div>
                        </motion.div>
                    </div>

                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        className="prose prose-invert max-w-none md:col-span-8"
                    >
                        <div className="space-y-6 text-slate-200">
                            <p className="text-lg leading-relaxed">
                                Dr. Vinay Bajrangi is one of the most sought-after astrologers for all branches of Vedic astrology. With
                                over 25 years of practical experience, he has guided more than 80,000 individuals from across the globe.
                            </p>

                            <p className="leading-relaxed">
                                His numerous astrological articles in prominent media platforms like ANI News, Times of India, Hindustan
                                Times, Outlook India, The Week, Mid Day, DNA, Deccan Herald, Deccan Chronicle, Business Standard, Times,
                                Amar Ujala, etc., authenticate his methodology acknowledged by people worldwide.
                            </p>

                            <div
                                className={`space-y-6 overflow-hidden transition-all duration-500 ${expanded ? "max-h-[1000px]" : "max-h-32"}`}
                            >
                                <p className="leading-relaxed">
                                    He is always one trustworthy and good astrologer near you for virtual and physical consultation, so
                                    there is no need to look specifically for the best astrologer in Noida/Delhi/India; a good astrologer
                                    will remain good irrespective of geographical limitations.
                                </p>

                                <p className="leading-relaxed">
                                    He always believes in doing all analysis from Navamsa Kundali (D-9 Charts) and not only based on the
                                    Lagna 9D-1) Chart. One rising sign remains unchanged for two hours, but the Navamsa D-9 can change
                                    multiple times during these two hours. Each time the Navamsa chart changes, the position of stars in
                                    each house will change. So, considering the Navamsa Kundalini is a must for accurate astrological
                                    predictions.
                                </p>

                                <p className="leading-relaxed">
                                    <span className="font-medium text-purple-300">
                                        One should know that the accuracy of birth time is the essence of any astrology readings.
                                    </span>{" "}
                                    There are solutions if the person does not have accurate birth time.
                                </p>

                                <p className="leading-relaxed">
                                    People have believed in him for the best astrological predictions and solutions. Several institutions have given him Recognition, Life Membership, and various accreditations for his expertise in Astrology. His outstanding track record and achievements make him a popular choice and astrologer for Bollywood celebrities/ famous business persons, politicians, and Bureaucrats.
                                </p>
                            </div>
                        </div>

                        <div className="mt-6 flex justify-center">
                            <button
                                onClick={() => setExpanded(!expanded)}
                                variant="ghost"
                                className="group flex items-center px-3 py-2 rounded-lg gap-2 text-purple-300 hover:text-purple-200 hover:bg-purple-900/30"
                            >
                                {expanded ? "Read Less" : "Read More"}
                                <ChevronDown className={`h-4 w-4 transition-transform duration-300 ${expanded ? "rotate-180" : ""}`} />
                            </button>
                        </div>

                        <div className="mt-8 flex justify-center md:justify-start">
                            <button className="relative overflow-hidden px-3 py-2 rounded-lg bg-gradient-to-r from-purple-600 to-indigo-600 text-white hover:from-purple-700 hover:to-indigo-700">
                                <span className="relative z-10">Book a Consultation</span>
                                <span className="absolute inset-0 bg-white opacity-0 transition-opacity duration-300 group-hover:opacity-10"></span>
                            </button>
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    )
}
