import React from 'react'

const ServciesCard = () => {
    return (
        <div className="group relative bg-midnight/70 backdrop-blur-md border border-purple-300 rounded-2xl overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_15px_30px_rgba(0,0,0,0.3)]">
            <div className="absolute inset-0 bg-gradient-to-b from-purple-500/20 to-transparent opacity-30 group-hover:opacity-50 transition-opacity"></div>
            <div className="relative z-10 p-6 flex flex-col h-full">
                <Moon className="w-10 h-10 text-pink-600 mb-4" />
                <h3 className="font-serif text-xl text-purple-600 mb-3">Birth Chart Reading</h3>
                <p className="text-purple-600/70 text-sm mb-4">
                    Discover your unique cosmic blueprint with a comprehensive analysis of your natal chart.
                </p>
                <ul className="space-y-2 mb-6">
                    {["Planetary positions", "House placements", "Aspect interpretations"].map((item, i) => (
                        <li key={i} className="text-purple-600/70 text-sm pl-6 relative">
                            <span className="absolute left-0 text-purple-500">✧</span>
                            {item}
                        </li>
                    ))}
                </ul>
                <span className="text-xl font-medium text-purple-600 mt-auto mb-4">$120</span>
                <Link
                    href="/services/birth-chart"
                    className="inline-block bg-gradient-to-r from-orange-600 to-pink-500 text-white py-3 px-6 rounded-full font-medium tracking-wide text-center transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_8px_20px_rgba(138,108,255,0.5)]"
                >
                    Book Reading
                </Link>
            </div>
        </div>
    )
}

export default ServciesCard