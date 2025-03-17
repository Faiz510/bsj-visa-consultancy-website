import React from 'react';
import OverlaySection from './OverlaySection';

interface BannerPropType {
  title: string;
  bgImg: string;
}

const Banner: React.FC<BannerPropType> = ({ title, bgImg }) => {
  return (
    <section
      className="w-full h-[250px] bg-cover bg-center relative flex justify-center items-center mb-20"
      style={{ backgroundImage: `url(${bgImg})` }}
    >
      <h2 className="text-5xl font-semibold tracking-wider text-white z-30">
        {title}
      </h2>

      <OverlaySection />
    </section>
  );
};

export default Banner;
