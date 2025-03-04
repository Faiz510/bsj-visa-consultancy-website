import { motion } from 'framer-motion';
import Image from 'next/image';
import React from 'react';

interface HeroImageProp {
  dataInt: number;
  image: string;
}

const HeroImage: React.FC<HeroImageProp> = ({ dataInt, image }) => {
  return (
    <motion.div
      className="md:col-span-6 flex justify-center items-center"
      initial={{ opacity: 0, x: 200 }}
      animate={{
        opacity: 1,
        x: 0,
        transition: { duration: 0.5, type: 'spring' },
      }}
      whileHover={{
        scale: 1.01,
        transition: { duration: 0.3, ease: 'easeOut' },
        boxShadow: '0px 20px 40px rgba(0, 0, 0, 0.15)',
      }}
      key={`${dataInt}`}
    >
      <Image
        src={image}
        alt="travel destination Images"
        width={700}
        height={700}
        className={`rounded-2xl cursor-pointer`}
      />
    </motion.div>
  );
};

export default HeroImage;
