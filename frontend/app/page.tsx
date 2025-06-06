import { Metadata } from 'next';
import HeroSection from './components/Home_components/HeroSection/HeroSection';
import About from './components/Home_components/aboutSection/About';
import Service from './components/Home_components/serviceSection/Service';
import ChooseUs from './components/Home_components/chooseUs/ChooseUs';
import Destination from './components/Home_components/destination/Destination';

export const metadata: Metadata = {
  title: 'BSJ Consultancy And Immigration Home Page',
  description:
    'Helping students and travelers with visas, immigration, and consultancy services. Your trusted partner for a hassle-free journey.',
  keywords:
    'student visa, immigration, tourist visa, consultancy, study abroad , BSJ home page , UK Visa , Moscow visa',
};

export default function Home() {
  return (
    <div className="">
      <HeroSection />
      <About />
      <Destination />
      <Service />
      <ChooseUs />
    </div>
  );
}
