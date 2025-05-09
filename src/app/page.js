import CalculatorSection from '@/components/CalculatorSection';
import PodcastSection from '@/components/PodcastSection';
import AboutUs from '@/components/AboutUs';
import AdvertisementBanner from '@/components/AdvertisementBanner';
import MainBanner from '@/components/MainBanner';
import FreeHoroscope from '@/components/FreeHoroscope';
import LifeProblemsSection from '@/components/LifeProblemsSection';
import PanchangSection from '@/components/PanchangSection';
import VedicProfileForms from '@/components/VedicProfileForms';
import LogoSlider from '@/components/LogoSlider';
import AstrologyServices from '@/components/AstrologyServices';
import HeroSection from '@/components/HeroSection';
import EventCard from '@/components/EventCard';

const images = [
  { alt: "Amazon", imageUrl: "https://astroarunpandit.org/wp-content/uploads/2024/08/Group-3131.png" },
  { alt: "Google", imageUrl: "https://astroarunpandit.org/wp-content/uploads/2024/08/Group-3132.png" },
  { alt: "Microsoft", imageUrl: "https://astroarunpandit.org/wp-content/uploads/2024/08/Group-3133.png" },
  { alt: "IBM", imageUrl: "https://astroarunpandit.org/wp-content/uploads/2024/08/Group-3134.png" },
  { alt: "Accenture", imageUrl: "https://astroarunpandit.org/wp-content/uploads/2024/08/Group-3135.png" },
  { alt: "Accenture", imageUrl: "https://astroarunpandit.org/wp-content/uploads/2024/08/Group-3136.png" },
  { alt: "Accenture", imageUrl: "https://astroarunpandit.org/wp-content/uploads/2024/08/Group-3137.png" },
  { alt: "Accenture", imageUrl: "https://astroarunpandit.org/wp-content/uploads/2024/08/Group-3138.png" },
  { alt: "Accenture", imageUrl: "https://astroarunpandit.org/wp-content/uploads/2024/08/Group-3139.png" },
  { alt: "Accenture", imageUrl: "https://astroarunpandit.org/wp-content/uploads/2024/08/Group-3140.png" },
  { alt: "Accenture", imageUrl: "https://astroarunpandit.org/wp-content/uploads/2024/08/Group-3141.png" },
  { alt: "Accenture", imageUrl: "https://astroarunpandit.org/wp-content/uploads/2024/08/Group-3142.png" },
];

const images2 = [
  { alt: "Infosys", imageUrl: "https://astroarunpandit.org/wp-content/uploads/2024/08/Group-3136.png" },
  { alt: "Adobe", imageUrl: "https://astroarunpandit.org/wp-content/uploads/2024/08/Group-3132.png" },
  { alt: "TCS", imageUrl: "https://astroarunpandit.org/wp-content/uploads/2024/08/Group-3131.png" },
  { alt: "Amdocs", imageUrl: "https://astroarunpandit.org/wp-content/uploads/2024/09/tedx4450.png" },
  { alt: "Wipro", imageUrl: "https://astroarunpandit.org/wp-content/uploads/2024/08/Group-3134.png" },
  { alt: "Accenture", imageUrl: "https://astroarunpandit.org/wp-content/uploads/2024/08/Group-3137.png" },
  { alt: "Accenture", imageUrl: "https://astroarunpandit.org/wp-content/uploads/2024/08/Group-3138.png" },
  { alt: "Accenture", imageUrl: "https://astroarunpandit.org/wp-content/uploads/2024/08/Group-3139.png" },
  { alt: "Accenture", imageUrl: "https://astroarunpandit.org/wp-content/uploads/2024/08/Group-3140.png" },
  { alt: "Accenture", imageUrl: "https://astroarunpandit.org/wp-content/uploads/2024/08/Group-3141.png" },
  { alt: "Accenture", imageUrl: "https://astroarunpandit.org/wp-content/uploads/2024/08/Group-3142.png" },
]

export default function Home() {

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
  ]

  return (
    <main>
      {/* <HeroSection /> */}
      <section className='py-10'>
        <div className="mb-8 text-center">
          <h1 className="text-red-900 text-3xl font-semibold">Special Pujas for Peace, Prosperity & Protection</h1>
          <p className="mt-1 max-w-2xl mx-auto ">Explore our handpicked selection of powerful Vedic Pujas performed by expert pandits. Whether it's for health, success, marriage, or removing obstacles – find the perfect puja to align your life with divine blessings.</p>
        </div>
        <EventCard data={pujaDetails} />
      </section>
      <LifeProblemsSection />
      <LogoSlider images={images} />
      <LogoSlider images={images2} isReverse={true} />
      <FreeHoroscope />
      {/* <LogoSlider images={images2} isReverse={true} /> */}
      <MainBanner />
      <AstrologyServices />
      <PanchangSection />
      <CalculatorSection />
      <VedicProfileForms />
      <AdvertisementBanner />
      <PodcastSection />
      <AboutUs />
    </main>
  );
}
