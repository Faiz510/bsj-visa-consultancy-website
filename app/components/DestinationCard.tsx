import Image from 'next/image';
import React from 'react';
import { motion } from 'framer-motion';

interface DestinationCardProps {
  imgSrc: string;
  altText: string;
  title: string;
  visa: string;
}

const DestinationCard: React.FC<DestinationCardProps> = ({
  imgSrc,
  altText,
  title,
  visa,
}) => {
  return (
    <motion.div
      className={`relative cursor-pointer group rounded-md overflow-hidden w-[300px] h-[200px] bg-cover bg-center mx-auto`}
      // style={{ backgroundImage: `url(${imgSrc})` }}
      whileHover={{
        scale: 1.02,
        transition: { duration: 0.3 },
        boxShadow: '0px 10px 30px rgba(0, 0, 0, 0.2)',
        // backgroundColor: '#000000',
      }}
    >
      {/* Image */}
      <Image
        className="rounded-md group-hover:opacity-80 duration-300 "
        src={imgSrc}
        alt={`Image of ${altText}`}
        width={300}
        height={200}
      />

      {/* Animated Text Overlay */}
      <motion.div
        className="absolute bottom-4 left-0 flex justify-between items-center px-2 w-full opacity-0 group-hover:opacity-100"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, ease: 'easeOut' }}
      >
        <span className="bg-primary text-white px-2 rounded-2xl text-sm font-medium tracking-widest">
          {title}
        </span>
        <span className="bg-primary text-white px-2 rounded-2xl text-sm font-medium tracking-widest">
          {visa}
        </span>
      </motion.div>
    </motion.div>
  );
};

export default DestinationCard;
