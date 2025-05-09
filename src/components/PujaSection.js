import React from 'react'
import EventCardSlider from './EventCardSlider'

const pujaDetails = [
    {
        id: 1,
        title: "Hariyali Teej",
        desc: "Tritiya, or the third day of Shukla Paksha of Shravan month, is termed Hariyali Teej or Shravani Teej. As per the English calendar, Hariyali Teej is often in July or August. It is primarily a festival of women.",
        imageUrl: "https://content.vinaybajrangi.com/img/content/50_Hariyali%20Teej.webp?v=1",
        date: "Sunday, January 01, 2023 • 06:00 PM",
        highlight: "Special Puja",
        address: "Near Greater Noida",
        by: "Vinay Bajrangi"
    },
    {
        id: 2,
        title: "Kajari Teej",
        desc: "Tritiya, or the third day of Shukla Paksha of Shravan month, is termed Hariyali Teej or Shravani Teej. As per the English calendar, Hariyali Teej is often in July or August. It is primarily a festival of women.",
        imageUrl: "https://www.vinaybajrangi.com/_next/image?url=https%3A%2F%2Fcontent.vinaybajrangi.com%2Fimg%2Fcontent%2F1729162834-kajari-teej.jpg&w=1200&q=75",
        date: "Monday, March 06, 2024 • 07:00 AM",
        highlight: "Special Puja",
        address: "Near Greater Noida",
        by: "Vinay Bajrangi"
    },
    {
        id: 3,
        title: "Nag Panchami",
        desc: "Tritiya, or the third day of Shukla Paksha of Shravan month, is termed Hariyali Teej or Shravani Teej. As per the English calendar, Hariyali Teej is often in July or August. It is primarily a festival of women.",
        imageUrl: "https://www.vinaybajrangi.com/_next/image?url=https%3A%2F%2Fcontent.vinaybajrangi.com%2Fimg%2Fcontent%2F1723116937-nag-panchami.jpg&w=1200&q=75",
        date: "Friday, March 23, 2025 • 08:00 PM",
        highlight: "Special Puja",
        address: "Near Greater Noida",
        by: "Vinay Bajrangi"
    },
    {
        id: 4,
        title: "Hariyali Teej",
        desc: "Tritiya, or the third day of Shukla Paksha of Shravan month, is termed Hariyali Teej or Shravani Teej. As per the English calendar, Hariyali Teej is often in July or August. It is primarily a festival of women.",
        imageUrl: "https://content.vinaybajrangi.com/img/content/50_Hariyali%20Teej.webp?v=1",
        date: "Sunday, January 01, 2023 • 06:00 PM",
        highlight: "Special Puja",
        address: "Near Greater Noida",
        by: "Vinay Bajrangi"
    },
    {
        id: 5,
        title: "Kajari Teej",
        desc: "Tritiya, or the third day of Shukla Paksha of Shravan month, is termed Hariyali Teej or Shravani Teej. As per the English calendar, Hariyali Teej is often in July or August. It is primarily a festival of women.",
        imageUrl: "https://www.vinaybajrangi.com/_next/image?url=https%3A%2F%2Fcontent.vinaybajrangi.com%2Fimg%2Fcontent%2F1729162834-kajari-teej.jpg&w=1200&q=75",
        date: "Monday, March 06, 2024 • 07:00 AM",
        highlight: "Special Puja",
        address: "Near Greater Noida",
        by: "Vinay Bajrangi"
    },
    {
        id: 6,
        title: "Nag Panchami",
        desc: "Tritiya, or the third day of Shukla Paksha of Shravan month, is termed Hariyali Teej or Shravani Teej. As per the English calendar, Hariyali Teej is often in July or August. It is primarily a festival of women.",
        imageUrl: "https://www.vinaybajrangi.com/_next/image?url=https%3A%2F%2Fcontent.vinaybajrangi.com%2Fimg%2Fcontent%2F1723116937-nag-panchami.jpg&w=1200&q=75",
        date: "Friday, March 23, 2025 • 08:00 PM",
        highlight: "Special Puja",
        address: "Near Greater Noida",
        by: "Vinay Bajrangi"
    },
]

const PujaSection = () => {
    return (
        <section className='py-10'>
            <div className="mb-8 text-center">
                <h1 className="text-red-900 text-3xl font-semibold">Special Pujas for Peace, Prosperity & Protection</h1>
                <p className="mt-1 max-w-2xl mx-auto ">Explore our handpicked selection of powerful Vedic Pujas performed by expert pandits. Whether it's for health, success, marriage, or removing obstacles – find the perfect puja to align your life with divine blessings.</p>
            </div>
            <EventCardSlider data={pujaDetails} />
        </section>
    )
}

export default PujaSection