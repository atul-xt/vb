import Link from "next/link"
import Image from "next/image"
import { Facebook, Instagram, Twitter, Linkedin, Youtube } from "lucide-react"

export default function Footer() {
    return (
        <footer className="bg-gradient-to-b from-indigo-50 to-purple-50 text-gray-700 py-12 px-4 md:px-8">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {/* About Section */}
                    <div>
                        <h3 className="text-xl font-semibold mb-4 text-purple-800">About Dr. Vinay Bajrangi</h3>
                        <p className="text-sm leading-relaxed">
                            One should know how to judge a good astrologer than going by the name. The best astrologer is the one who
                            believes more in Astrology based on the Karmic theory than only following rituals and remedies
                        </p>
                        <Link href="/about" className="text-purple-600 hover:text-purple-800 inline-block mt-2 text-sm font-medium">
                            Know More...
                        </Link>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-xl font-semibold mb-4 text-purple-800">Quick Links</h3>
                        <ul className="space-y-2">
                            {[
                                { name: "Free Daily Horoscope", href: "/horoscope" },
                                { name: "Free Kundli", href: "/kundli" },
                                { name: "Kundli Matching", href: "/matching" },
                                { name: "Today Panchang", href: "/panchang" },
                                { name: "Free Astrology Calculators", href: "/calculators" },
                                { name: "Astrology News", href: "/news" },
                                { name: "Upcoming Visits", href: "/visits" },
                                { name: "Karma Astro Mobile App", href: "/app" },
                                { name: "Videos", href: "/videos" },
                                { name: "Author", href: "/author" },
                            ].map((link) => (
                                <li key={link.name}>
                                    <Link href={link.href} className="text-sm hover:text-purple-600 flex items-center">
                                        <span className="text-amber-500 mr-2">›</span> {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Astrology Services */}
                    <div>
                        <h3 className="text-xl font-semibold mb-4 text-purple-800">Astrology Services</h3>
                        <ul className="space-y-2">
                            {[
                                { name: "Consultation", href: "/consultation" },
                                { name: "Online Report", href: "/online-report" },
                                { name: "Voice Report", href: "/voice-report" },
                                { name: "Marriage Astrology", href: "/marriage" },
                                { name: "Business Astrology", href: "/business" },
                                { name: "Birth Time Rectification", href: "/birth-time" },
                                { name: "Past Life Readings", href: "/past-life" },
                                { name: "Career Astrology", href: "/career" },
                            ].map((service) => (
                                <li key={service.name}>
                                    <Link href={service.href} className="text-sm hover:text-purple-600 flex items-center">
                                        <span className="text-amber-500 mr-2">›</span> {service.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Get In Touch */}
                    <div>
                        <h3 className="text-xl font-semibold mb-4 text-purple-800">Get In Touch</h3>
                        <div className="space-y-2 text-sm">
                            <p>Our Office: M-22, Sector-66, Noida, Uttar Pradesh-201301</p>
                            <p>+91-9278665588</p>
                            <p>mail@vinaybajrangi.com</p>
                            <Link href="/contact" className="hover:text-purple-600">
                                Contact Us
                            </Link>
                            <div className="space-y-1 mt-2">
                                <Link href="/privacy" className="block hover:text-purple-600">
                                    Privacy Policy
                                </Link>
                                <Link href="/terms" className="block hover:text-purple-600">
                                    Payment Terms & Conditions
                                </Link>
                                <Link href="/sitemap" className="block hover:text-purple-600">
                                    Sitemap
                                </Link>
                            </div>
                            <div className="flex space-x-4 mt-4">
                                <Link href="https://apps.apple.com" className="inline-block">
                                    <Image
                                        src="/images/iso-icon.webp"
                                        alt="Download on the App Store"
                                        width={120}
                                        height={40}
                                        className="h-10 w-auto"
                                    />
                                </Link>
                                <Link href="https://play.google.com" className="inline-block">
                                    <Image
                                        src="/images/android-icon.webp"
                                        alt="Get it on Google Play"
                                        width={120}
                                        height={40}
                                        className="h-10 w-auto"
                                    />
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="mt-12 pt-6 border-t border-purple-200 flex flex-col md:flex-row justify-between items-center">
                    <p className="text-sm">© VinayBajrangi.com 2025</p>
                    <div className="flex space-x-4 mt-4 md:mt-0">
                        <Link href="#" className="text-amber-500 hover:text-purple-600">
                            <Facebook size={18} />
                        </Link>
                        <Link href="#" className="text-amber-500 hover:text-purple-600">
                            <Instagram size={18} />
                        </Link>
                        <Link href="#" className="text-amber-500 hover:text-purple-600">
                            <Twitter size={18} />
                        </Link>
                        <Link href="#" className="text-amber-500 hover:text-purple-600">
                            <Linkedin size={18} />
                        </Link>
                        <Link href="#" className="text-amber-500 hover:text-purple-600">
                            <Youtube size={18} />
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    )
}
