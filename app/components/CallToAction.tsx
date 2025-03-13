import React from 'react';
import { motion } from 'framer-motion';
import { FaArrowRight } from 'react-icons/fa6';
import Link from 'next/link';

interface CallToActionType {
  text: string;
  href: string;
}
const CallToAction: React.FC<CallToActionType> = ({ text, href }) => {
  return (
    <Link href={`${href}`}>
      {' '}
      <motion.button
        className="bg-secondary text-white hover:bg-primary hover:text-white rounded-4xl px-4 py-1 md:my-10 my-6 cursor-pointer  flex gap-2 items-center group"
        whileHover={{
          scale: 1.01,
          transition: {
            ease: 'easeOut',
            duration: 0.5,
            type: 'spring',
          },
          boxShadow: '0px 10px 30px rgba(0, 0, 0, 0.2)',
        }}
        whileTap={{ scale: 0.95 }}
      >
        <span className="tracking-wider">{text}</span>
        <FaArrowRight className="text-white absolute opacity-0 group-hover:relative group-hover:opacity-100 group-hover:duration-500 group-hover:ease-out " />
      </motion.button>{' '}
    </Link>
  );
};

export default CallToAction;
