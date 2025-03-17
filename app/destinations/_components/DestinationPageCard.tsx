import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import OverlaySection from '@/app/components/OverlaySection';

interface DestinationPageCardProps {
  imgSrc: string;
  altText: string;
  title: string;
  visa: string;
}

const DestinationPageCard: React.FC<DestinationPageCardProps> = ({
  imgSrc,
  altText,
  title,
  visa,
}) => {
  return (
    <motion.div className=" cursor-pointer relative overflow-hidden rounded-md ">
      <motion.div
        className="relative w-[400px] h-[300px] overflow-hidden"
        whileHover={{ scale: 1.1, transition: { duration: 0.3 } }}
      >
        <Image
          src={imgSrc}
          alt={`${altText}`}
          width={600}
          height={300}
          className="w-full h-full object-cover rounded-md transition-transform duration-300 group"
          priority
        />
        <div className="absolute inset-0 bg-black opacity-10 group-hover:opacity-80 transition-opacity duration-300"></div>
      </motion.div>

      <div className="absolute bottom-2 left-3 text-white font-semibold tracking-wide text-4xl">
        {title}
      </div>
      <span className="bg-primary text-white px-2 rounded-2xl text-sm font-medium tracking-widest absolute right-3 top-3">
        {visa}
      </span>
    </motion.div>
  );
};

export default DestinationPageCard;
