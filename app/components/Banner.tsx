'use client';
import React from 'react';
import OverlaySection from './OverlaySection';
import { motion } from 'framer-motion';
import { usePathname } from 'next/navigation';

interface BannerPropType {
  bgImg: string;
}

const Banner: React.FC<BannerPropType> = ({ bgImg }) => {
  const pathname = usePathname();
  const pageName = pathname.slice(1).split('');
  const pagetitle =
    pageName[0].toUpperCase() +
    `${pageName.slice(1, pageName.length).join('')}`;
  return (
    <section
      className="w-full h-[300px] bg-cover bg-center relative flex justify-center items-center mb-20 overflow-y-hidden"
      style={{ backgroundImage: `url(${bgImg})` }}
    >
      <motion.h2
        className="text-5xl font-semibold tracking-wider text-white z-30"
        initial={{ y: 500, opacity: 0 }}
        animate={{ y: 0, opacity: 1, transition: { duration: 0.6 } }}
      >
        {/* {title} */} {pagetitle} Page
      </motion.h2>

      <OverlaySection />
    </section>
  );
};

export default Banner;
