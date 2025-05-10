import Link from "next/link"
import { Star, Moon, Sun, Sparkles, Compass, Hourglass, Gem, Zap } from "lucide-react"

export default function AstrologyServices() {
    const services = [
        {
            id: 1,
            title: "Consultation with Dr. Vinay Bajrangi",
            highlightPoints: [
                "In-depth birth chart analysis",
                "Personalized remedies for problems",
                "Career, health, and relationship guidance"
            ],
            price: "₹999",
            icon: Moon,
            url: ""
        },
        {
            id: 2,
            title: "Get Voice Report of Your Problem",
            highlightPoints: [
                "Custom voice analysis by astrologer",
                "Covers your specific question or concern",
                "Includes practical astrological remedies"
            ],
            price: "₹599",
            icon: Sun,
            url: ""
        },
        {
            id: 3,
            title: "Get Detailed Life Reading",
            highlightPoints: [
                "Life predictions based on your Kundli",
                "Covers health, career, marriage, and finances",
                "Personalized guidance and remedies"
            ],
            price: "₹1299",
            icon: Sparkles,
            url: ""
        },
        {
            id: 4,
            title: "Don't know Exact Time of birth? Get Birth Time Rectification",
            highlightPoints: [
                "Analyzes important life milestones",
                "Accurately determines your birth time",
                "Improves accuracy of future predictions"
            ],
            price: "₹1999",
            icon: Compass,
            url: ""
        },
        {
            id: 5,
            title: "Experience Karam Correction",
            highlightPoints: [
                "Identify karmic doshas in your chart",
                "Solutions to clear past life karma",
                "Boosts success and peace in life"
            ],
            price: "₹999",
            icon: Hourglass,
            url: ""
        },
        {
            id: 6,
            title: "Get your Kundli Examined before stepping into relationship or partnership",
            highlightPoints: [
                "Checks Kundli compatibility",
                "Analyzes partnership prospects",
                "Highlights strengths and red flags"
            ],
            price: "₹1499",
            icon: Gem,
            url: ""
        },
        {
            id: 7,
            title: "Get Past Life Reading and Analysis",
            highlightPoints: [
                "Explore unresolved past karmas",
                "Understand recurring life issues",
                "Get remedies to neutralize past-life impacts"
            ],
            price: "₹1799",
            icon: Zap,
            url: ""
        },
        {
            id: 8,
            title: "Get Vastu Analysis for your Home and Office",
            highlightPoints: [
                "On-site or remote Vastu inspection",
                "Identify doshas affecting prosperity",
                "Practical and easy-to-implement remedies"
            ],
            icon: Compass,
            price: "₹1499",
            url: ""
        }
    ];


    return (
        <main className="relative min-h-screen overflow-hidden px-4 py-8 md:px-8">
            <section className="max-w-7xl mx-auto">
                <div className="relative flex items-center justify-center gap-4 mb-12">
                    <Star className="text-purple-600 w-5 h-5" />
                    <h2 className="font-serif text-2xl md:text-3xl text-purple-600">Astrology Services</h2>
                    <div className="absolute top-14 left-1/2 -translate-x-1/2 w-80 h-[3px] bg-gradient-to-r from-transparent via-purple-500 to-transparent"></div>
                    <Star className="text-purple-600 w-5 h-5" />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                    {services?.map(({ id, title, icon: Icon, highlightPoints, price }) => (
                        <div key={id} className="group relative bg-midnight/70 backdrop-blur-md border border-purple-300 rounded-2xl overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_15px_30px_rgba(0,0,0,0.3)]">
                            <div className="absolute inset-0 bg-gradient-to-b from-purple-500/20 to-transparent opacity-30 group-hover:opacity-50 transition-opacity"></div>
                            <div className="relative z-10 p-4 flex flex-col h-full">
                                {Icon && <Icon className="w-10 h-10 text-pink-600 mb-4" />}
                                <h3 className="font-serif text-lg text-purple-700 mb-3">{title}</h3>
                                <ul className="space-y-2 mb-4">
                                    {highlightPoints.map((item, i) => (
                                        <li key={i} className="text-purple-700/70 text-sm pl-6 relative">
                                            <span className="absolute left-0 text-purple-500">✧</span>
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                                <span className="text-xl font-medium text-purple-600 mt-auto mb-5">{price}</span>
                                <Link
                                    href="#"
                                    className="bg-orange-600 text-white hover:scale-95 duration-200 transition ease-linear active:scale-105 hover:bg-white hover:text-black hover:border hover:border-gray-300 cursor-pointer flex gap-1 justify-center shadow-lg px-3 py-2 rounded-md text-sm font-medium"
                                >
                                    Order Now
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </main>
    )
}
