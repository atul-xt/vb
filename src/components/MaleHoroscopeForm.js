'use client';

import { useState } from "react";
import { CalendarDays, Clock, MapPin, User } from "lucide-react";

export default function MaleHoroscopeForm() {
    const [gender, setGender] = useState("male");

    return (
        <div className="max-w-[410px] mx-auto p-6 bg-gradient-to-br from-indigo-900 via-purple-900 to-black text-white rounded-3xl shadow-xl space-y-6">
            <h2 className="text-2xl font-bold text-center text-white">
                🔗 Free <span className="text-orange-400">Horoscope Matching</span>
            </h2>

            <h3 className="text-lg font-semibold text-gray-300 mb-8">🧘‍♂️ Male Profile Details</h3>

            {/* Name */}
            <div className="relative">
                <User className="absolute left-3 top-3.5 text-orange-400" size={18} />
                <input
                    type="text"
                    placeholder="Enter Your Name"
                    className="w-full pl-10 p-3 rounded-lg bg-white/10 text-white placeholder-gray-400 border border-white/20 focus:outline-none focus:ring-2 focus:ring-orange-400"
                />
                <p className="text-sm text-gray-400 mt-1">Used for personalized reading</p>
            </div>

            {/* Birth Location */}
            <div className="relative">
                <MapPin className="absolute left-3 top-3.5 text-orange-400" size={18} />
                <input
                    type="text"
                    placeholder="Birth Location"
                    className="w-full pl-10 p-3 rounded-lg bg-white/10 text-white placeholder-gray-400 border border-white/20 focus:outline-none focus:ring-2 focus:ring-orange-400"
                />
                <p className="text-sm text-gray-400 mt-1">City where you were born</p>
            </div>

            {/* Date and Time */}
            <div className="flex gap-4">
                <div className="relative w-1/2">
                    <CalendarDays className="absolute left-3 top-3.5 text-orange-400" size={18} />
                    <input
                        type="date"
                        className="w-full pl-10 p-3 rounded-lg bg-white/10 text-white border border-white/20 focus:outline-none focus:ring-2 focus:ring-orange-400"
                    />
                    <p className="text-xs text-gray-400 mt-1">Your date of birth</p>
                </div>
                <div className="relative w-1/2">
                    <Clock className="absolute left-3 top-3.5 text-orange-400" size={18} />
                    <input
                        type="time"
                        className="w-full pl-10 p-3 rounded-lg bg-white/10 text-white border border-white/20 focus:outline-none focus:ring-2 focus:ring-orange-400"
                    />
                    <p className="text-xs text-gray-400 mt-1">Exact time matters</p>
                </div>
            </div>

            {/* Submit Button */}
            <button className="w-full py-3 rounded-xl bg-orange-500 hover:bg-orange-600 text-white font-semibold tracking-wide transition">
                🌕 Reveal My Moon Sign
            </button>
        </div>
    );
}
