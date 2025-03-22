'use client';
import HERO_DATA from './HeroSectionData';
import { useEffect, useState } from 'react';
import HeroDots from './HeroDots';
import HeroContent from './HeroContent';
import HeroImage from './HeroImage';

const HeroSection = () => {
  const [dataInt, setDataInt] = useState<number>(0);
  const { title, image, subheading, tagline } = HERO_DATA[dataInt];

  useEffect(() => {
    const interval = setInterval(
      () => setDataInt((pre) => (pre === HERO_DATA.length - 1 ? 0 : pre + 1)),
      5000,
    );
    return () => clearInterval(interval);
  }, [dataInt]);

  return (
    <>
      <section className="md:flex md:justify-center md:items-center min-h-[100vh] bg-[#F3F4F6] pt-12 md:pt-6 overflow-x-hidden ">
        <div className="md:grid  md:grid-cols-12 md:gap-2 md:px-24 px-4 pt-8 ">
          {/* content section  */}
          <HeroContent
            dataInt={dataInt}
            title={title}
            subheading={subheading}
            tagline={tagline}
          />

          {/* Image Sectoin  */}
          <HeroImage dataInt={dataInt} image={image} />
        </div>

        {/* dots  */}
        <HeroDots dataInt={dataInt} setDataInt={setDataInt} />
      </section>
    </>
  );
};
export default HeroSection;
