export default function Panchang() {
    return (
        <div className="p-4 bg-white rounded-lg shadow-lg border border-gray-200">
            {/* Header */}
            <div className="flex justify-between items-center mb-2">
                <div>
                    <h1 className="text-lg font-semibold text-gray-900">Aaj Ka Panchang</h1>
                    <p className="text-sm text-gray-700">New Delhi, India</p>
                </div>
                <button className="bg-white hover:scale-95 duration-200 transition ease-linear active:scale-105 hover:bg-orange-600 hover:text-white cursor-pointer text-red-900 flex gap-1 border border-red-800 shadow-lg px-4 py-2 rounded-md text-sm font-medium">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m20.893 13.393-1.135-1.135a2.252 2.252 0 0 1-.421-.585l-1.08-2.16a.414.414 0 0 0-.663-.107.827.827 0 0 1-.812.21l-1.273-.363a.89.89 0 0 0-.738 1.595l.587.39c.59.395.674 1.23.172 1.732l-.2.2c-.212.212-.33.498-.33.796v.41c0 .409-.11.809-.32 1.158l-1.315 2.191a2.11 2.11 0 0 1-1.81 1.025 1.055 1.055 0 0 1-1.055-1.055v-1.172c0-.92-.56-1.747-1.414-2.089l-.655-.261a2.25 2.25 0 0 1-1.383-2.46l.007-.042a2.25 2.25 0 0 1 .29-.787l.09-.15a2.25 2.25 0 0 1 2.37-1.048l1.178.236a1.125 1.125 0 0 0 1.302-.795l.208-.73a1.125 1.125 0 0 0-.578-1.315l-.665-.332-.091.091a2.25 2.25 0 0 1-1.591.659h-.18c-.249 0-.487.1-.662.274a.931.931 0 0 1-1.458-1.137l1.411-2.353a2.25 2.25 0 0 0 .286-.76m11.928 9.869A9 9 0 0 0 8.965 3.525m11.928 9.868A9 9 0 1 1 8.965 3.525" />
                    </svg>
                    Detailed Panchang
                </button>
            </div>

            {/* Date Divider */}
            <div className="flex items-center my-4">
                <div className="flex-grow h-px bg-gray-500"></div>
                <p className="mx-4 text-gray-700 text-sm">Wednesday, 7 May 2025</p>
                <div className="flex-grow h-px bg-gray-500"></div>
            </div>
            
            {/* Time Cards */}
            <div className="grid grid-cols-4 gap-5 mb-6">
                {/* Sunrise */}
                <div className="text-red-950 rounded-md p-5 flex flex-col items-center justify-center">
                    <div className="mb-2 bg-orange-600 rounded-full p-5 group">
                        <img className="w-14 h-14 group-hover:scale-90 transition duration-200 ease-linear" src="/images/HoroscopeSign/sunrise.webp" alt="Sunrise" />
                    </div>
                    <span className="text-center font-medium flex gap-1 items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2.5" stroke="currentColor" className="size-5">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                        </svg>
                        5:35:40
                    </span>
                </div>

                {/* Sunset */}
                <div className="text-red-950 rounded-md p-5 flex flex-col items-center justify-center">
                    <div className="mb-2 bg-orange-600 rounded-full p-5 group">
                        <img className="w-14 h-14 group-hover:scale-90 transition duration-200 ease-linear" src="/images/HoroscopeSign/sunset.webp" alt="Sunset" />
                    </div>
                    <span className="text-center font-medium flex gap-1 items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2.5" stroke="currentColor" className="size-5">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                        </svg>
                        1:35:40
                    </span>
                </div>

                {/* Moonrise */}
                <div className="text-red-950 rounded-md p-5 flex flex-col items-center justify-center">
                    <div className="mb-2 bg-orange-600 rounded-full p-5 group">
                        <img className="w-14 h-14 group-hover:scale-90 transition duration-200 ease-linear" src="/images/HoroscopeSign/moonrise.webp" alt="Moonrise" />
                    </div>
                    <span className="text-center font-medium flex gap-1 items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2.5" stroke="currentColor" className="size-5">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                        </svg>
                        12:05:40
                    </span>
                </div>

                {/* Moonset */}
                <div className=" text-red-950 rounded-md p-5 flex flex-col items-center justify-center">
                    <div className="mb-2 bg-orange-600 rounded-full p-5 group">
                        <img className="w-14 h-14 group-hover:scale-90 transition duration-200 ease-linear" src="/images/HoroscopeSign/moonrise.webp" alt="Moonrise" />
                    </div>
                    <span className="text-center font-medium flex gap-1 items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2.5" stroke="currentColor" className="size-5">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                        </svg>
                        6:26:10
                    </span>
                </div>
            </div>

            {/* Panchang Details */}
            <div className="bg-white rounded-lg border border-gray-200 p-5">
                <div className="grid grid-cols-2 gap-6">
                    {/* Left Column */}
                    <div className="space-y-4">
                        <div>
                            <h3 className="flex gap-1 items-center font-semibold text-gray-900">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-5">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5m-9-6h.008v.008H12v-.008ZM12 15h.008v.008H12V15Zm0 2.25h.008v.008H12v-.008ZM9.75 15h.008v.008H9.75V15Zm0 2.25h.008v.008H9.75v-.008ZM7.5 15h.008v.008H7.5V15Zm0 2.25h.008v.008H7.5v-.008Zm6.75-4.5h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008V15Zm0 2.25h.008v.008h-.008v-.008Zm2.25-4.5h.008v.008H16.5v-.008Zm0 2.25h.008v.008H16.5V15Z" />
                                </svg>
                                Month
                            </h3>
                            <div className="mt-2">
                                <p>
                                    <span className="font-medium">Amanta:</span> Vaishakh
                                </p>
                                <p>
                                    <span className="font-medium">Purnimanta:</span> Vaishakh
                                </p>
                            </div>
                        </div>

                        <div>
                            <h3 className="font-medium text-gray-900">Tithi: Shukla-Ekadashi</h3>
                            <p className="text-sm text-gray-600">Till: 2025-05-08 12:30:56</p>
                        </div>

                        <div>
                            <h3 className="font-medium text-gray-900">Yog: Vyaghat</h3>
                            <p className="text-sm text-gray-600">Till: 2025-05-08 01:04:35</p>
                        </div>
                    </div>

                    {/* Right Column */}
                    <div className="space-y-4">
                        <div>
                            <h3 className="flex gap-1 items-center font-semibold text-gray-900">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z" />
                                </svg>
                                Samvat
                            </h3>
                            <div className="mt-2">
                                <p>
                                    <span className="font-medium">Vikram:</span> 2082 Kaalvukt
                                </p>
                                <p>
                                    <span className="font-medium">Shaka:</span> 1947 Vishwavasu
                                </p>
                            </div>
                        </div>

                        <div>
                            <h3 className="font-medium text-gray-900">Nakshatra: Purva Phalguni</h3>
                            <p className="text-sm text-gray-600">Till: 2025-05-07 18:18:31</p>
                        </div>

                        <div>
                            <h3 className="font-medium text-gray-900">Karan: Vanija</h3>
                            <p className="text-sm text-gray-600">Purnimanta: 2025-05-07 23:24:17</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
