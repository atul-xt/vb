'use client';

import { useState } from "react";
import { CalendarDays, Clock, MapPin, User } from "lucide-react";

export default function FreeKundliForm() {
  const [gender, setGender] = useState("male");

  return (
    <div className="max-w-[400px] mx-auto p-6 bg-gradient-to-br from-indigo-900 via-purple-900 to-black text-white rounded-3xl shadow-xl space-y-6">
      <h2 className="text-2xl font-bold text-center text-white">
        🔮 Free <span className="text-orange-400">Kundli</span>
      </h2>

      {/* Gender Selection */}
      <div className="flex justify-center gap-6">
        {["male", "female"].map((option) => (
          <label
            key={option}
            className={`cursor-pointer px-4 py-2 rounded-full transition ${gender === option
              ? "bg-orange-500 text-white shadow-md"
              : "bg-white/10 text-gray-300 hover:bg-white/20"
              }`}>
            <input
              type="radio"
              name="gender"
              value={option}
              className="hidden"
              onChange={() => setGender(option)}
              checked={gender === option}
            />
            {option === "male" ? <span className="flex gap-1 items-center">
              <svg xmlns="http://www.w3.org/2000/svg" width="18px" height="18px" viewBox="0 0 24 24" fill="#fff">
                <path fillRule="evenodd" clipRule="evenodd" d="M15 3C15 2.44772 15.4477 2 16 2H20C21.1046 2 22 2.89543 22 4V8C22 8.55229 21.5523 9 21 9C20.4477 9 20 8.55228 20 8V5.41288L15.4671 9.94579C15.4171 9.99582 15.363 10.0394 15.3061 10.0767C16.3674 11.4342 17 13.1432 17 15C17 19.4183 13.4183 23 9 23C4.58172 23 1 19.4183 1 15C1 10.5817 4.58172 7 9 7C10.8559 7 12.5642 7.63197 13.9214 8.69246C13.9587 8.63539 14.0024 8.58128 14.0525 8.53118L18.5836 4H16C15.4477 4 15 3.55228 15 3ZM9 20.9963C5.68831 20.9963 3.00365 18.3117 3.00365 15C3.00365 11.6883 5.68831 9.00365 9 9.00365C12.3117 9.00365 14.9963 11.6883 14.9963 15C14.9963 18.3117 12.3117 20.9963 9 20.9963Z" />
              </svg>
              Male
            </span> : <span className="flex gap-1 items-center">
              <svg xmlns="http://www.w3.org/2000/svg" width="18px" height="18px" viewBox="0 0 24 24" fill="#fff">
                <path fillRule="evenodd" clipRule="evenodd" d="M20 9C20 13.0803 16.9453 16.4471 12.9981 16.9383C12.9994 16.9587 13 16.9793 13 17V19H14C14.5523 19 15 19.4477 15 20C15 20.5523 14.5523 21 14 21H13V22C13 22.5523 12.5523 23 12 23C11.4477 23 11 22.5523 11 22V21H10C9.44772 21 9 20.5523 9 20C9 19.4477 9.44772 19 10 19H11V17C11 16.9793 11.0006 16.9587 11.0019 16.9383C7.05466 16.4471 4 13.0803 4 9C4 4.58172 7.58172 1 12 1C16.4183 1 20 4.58172 20 9ZM6.00365 9C6.00365 12.3117 8.68831 14.9963 12 14.9963C15.3117 14.9963 17.9963 12.3117 17.9963 9C17.9963 5.68831 15.3117 3.00365 12 3.00365C8.68831 3.00365 6.00365 5.68831 6.00365 9Z" />
              </svg>
              Female</span>}
          </label>
        ))}
      </div>

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
      🔍 Get My Kundli
      </button>
    </div>
  );
}
