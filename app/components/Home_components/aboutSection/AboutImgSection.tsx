import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import dotImg from '@/public/home-images/dot-bg.png';
import about1 from '@/public/home-images/about/about-1.jpg';
import about2 from '@/public/home-images/about/about-2.jpg';
import about3 from '@/public/home-images/about/about-3.jpg';
import AboutImg from './AboutImg';

const ANIMATION_VARIANTS = {
  initial: {
    scale: 0,
    rotate: 0,
    marginTop: 0,
    opacity: 0,
    marginLeft: 0,
  },
};

const AboutImgSection = () => {
  return (
    <div className="md:col-span-6 relative w-full h-[400px] flex justify-between items-center ">
      <Image
        className="absolute top-0 left-0 opacity-5"
        src={`${dotImg.src}`}
        alt="this is image"
        width={400}
        height={400}
      />

      <div className="relative top-[-50px] left-[50%] md:left-[60%]">
        <motion.div
          initial={ANIMATION_VARIANTS.initial}
          whileInView={{
            scale: 1,
            rotate: 10,
            marginTop: -128,
            opacity: 1,
          }}
          transition={{ duration: 0.3 }}
        >
          <AboutImg image={`${about1.src}`} />
        </motion.div>
        <motion.div
          className="absolute "
          initial={ANIMATION_VARIANTS.initial}
          whileInView={{
            scale: 1,
            rotate: -10,
            marginTop: -180,
            marginLeft: -180,
            opacity: 1,
          }}
          transition={{ duration: 0.5 }}
        >
          <AboutImg image={`${about2.src}`} />
        </motion.div>
        <motion.div
          className="absolute"
          initial={ANIMATION_VARIANTS.initial}
          whileInView={{
            scale: 1,
            opacity: 1,
            rotate: 10,
          }}
          transition={{ duration: 0.7 }}
        >
          <AboutImg image={`${about3.src}`} />
        </motion.div>
      </div>
    </div>
  );
};

export default AboutImgSection;
