import Image1 from '@/public/HeroImages/image-1.jpg';
import Image3 from '@/public/HeroImages/image-3.jpg';
import Image6 from '@/public/HeroImages/image-6.jpg';

interface HeroDataType {
  title: string;
  subheading: string;
  tagline: string;
  image: string;
}
const HERO_DATA: HeroDataType[] = [
  {
    title: 'Your Dream Destination Awaits!',
    subheading: 'Travel Hassle-Free, Explore Limitlessly',
    tagline:
      "Planning your next adventure? Let us handle the visa process while you focus on making memories. Whether it's a solo trip, a family vacation, or a getaway with friends, we ensure a smooth and stress-free visa application. Pack your bags—your journey starts here!",
    image: `${Image1.src}`,
  },
  {
    title: 'Study Abroad, Build Your Future',
    subheading: 'Your Dreams, Our Guidance',
    tagline:
      'Taking the leap toward international education? We’re here to guide you at every step—from choosing the right study destination to securing your visa. With expert advice and a personalized approach, we make your dream of studying abroad a reality. Let’s shape your future together!',
    image: `${Image3.src}`,
  },
  {
    title: 'Visa Consultant',
    subheading: 'Your Journey, Our Expertise!',
    tagline:
      'Planning to travel, study, or work abroad? We simplify the visa application process, ensuring a smooth and stress-free experience. Let our experts guide you every step of the way to make your dreams a reality!',
    image: `${Image6.src}`,
  },
];

export default HERO_DATA;
