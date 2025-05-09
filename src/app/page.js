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
import EventCardSlider from '@/components/EventCardSlider';
import PujaSection from '@/components/PujaSection';
import HeroSection from '@/components/HeroSection';
import CilebHighlights from '@/components/CilebHighlights';

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

 

  return (
    <main>
      <HeroSection />
      <LifeProblemsSection />
      <LogoSlider images={images} />
      <LogoSlider images={images2} isReverse={true} />
      <FreeHoroscope />
      <MainBanner />
      <PujaSection />
      <CilebHighlights />
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
