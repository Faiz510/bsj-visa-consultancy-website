import React from 'react';

interface BannerPropType {
  title: string;
  bgImg: string;
}

const Banner: React.FC<BannerPropType> = ({ title, bgImg }) => {
  return (
    <section
      className="w-full h-[250px] bg-cover bg-center relative flex justify-center items-center "
      style={{ backgroundImage: `url(${bgImg})` }}
    >
      <h2 className="text-5xl font-semibold tracking-wider text-white z-20">
        {title}
      </h2>

      <div className="absolute w-full h-full top-0 left-0 inset-0 bg-black opacity-20 z-10" />
    </section>
  );
};

export default Banner;
