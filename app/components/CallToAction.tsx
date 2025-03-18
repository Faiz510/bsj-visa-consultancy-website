import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaArrowRight } from 'react-icons/fa6';
import Link from 'next/link';

interface CallToActionType {
  text: string;
  href: string;
}
const CallToAction: React.FC<CallToActionType> = ({ text, href }) => {
  const [isHover, setIsHover] = useState<boolean>(false);
  return (
    <Link href={href}>
      {' '}
      <motion.button
        className="bg-secondary text-white hover:bg-primary hover:text-white rounded-4xl px-4 py-1 md:my-10 my-6 cursor-pointer  flex gap-2 items-center group"
        onHoverStart={() => setIsHover(true)}
        onHoverEnd={() => setIsHover(false)}
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
        <motion.div
          initial={{ opacity: isHover ? 0 : 1, position: 'absolute', x: -20 }}
          animate={{
            x: isHover ? 0 : -20,
            opacity: isHover ? 1 : 0,
            position: isHover ? 'relative' : 'absolute',
            transition: { duration: 0.5, type: 'spring' },
          }}
          exit={{ opacity: 0 }}
        >
          <FaArrowRight className={`text-white  ${!isHover && 'opacity-0'}`} />
        </motion.div>
      </motion.button>{' '}
    </Link>
  );
};

export default CallToAction;
