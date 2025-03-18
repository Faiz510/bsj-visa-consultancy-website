'use client';
import Image from 'next/image';
import React, { useState } from 'react';
import { motion } from 'framer-motion';

interface DestinationHomeCardProps {
  imgSrc: string;
  altText: string;
  title: string;
  visa: string;
}

const DestinationHomeCard: React.FC<DestinationHomeCardProps> = ({
  imgSrc,
  altText,
  title,
  visa,
}) => {
  const [isHover, setIsHover] = useState<boolean>(false);
  return (
    <motion.div className=" cursor-pointer relative overflow-hidden rounded-md">
      <motion.div
        className="relative w-[600px] h-[300px] overflow-hidden "
        whileHover={{ scale: 1.1, transition: { duration: 0.3 } }}
        onHoverStart={() => setIsHover(true)}
        onHoverEnd={() => setIsHover(false)}
      >
        <Image
          src={imgSrc}
          alt={`${altText}`}
          width={600}
          height={300}
          className="w-full h-full object-cover rounded-md transition-transform duration-300 group"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-black opacity-10 group-hover:opacity-80 transition-opacity duration-300"></div>
      </motion.div>

      <div className="absolute bottom-4 left-5 text-white font-semibold tracking-widest text-5xl z-20">
        {title}
      </div>
      <span className="bg-primary/95 text-white px-2 rounded-2xl text-sm font-medium tracking-widest absolute right-5 top-3 z-20">
        {visa}
      </span>
      <div
        className={`absolute w-full h-full top-0 left-0 inset-0  ${
          isHover ? 'bg-secondary/50' : 'bg-secondary/25'
        }  z-10 pointer-events-none duration-300 transition-all`}
      />
    </motion.div>
  );
};

export default DestinationHomeCard;
