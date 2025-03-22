import React from 'react';
import { motion } from 'framer-motion';
import { MdArrowRightAlt } from 'react-icons/md';

interface AnimatedLinePropType {
  text: string;
}
const AnimatedLine: React.FC<AnimatedLinePropType> = ({ text }) => {
  return (
    <motion.div
      className="flex justify-center gap-2 pl-2 mt-4"
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0, transition: { duration: 0.6 } }}
      viewport={{ once: true }}
    >
      {' '}
      <span>{<MdArrowRightAlt />}</span> <span>{text}</span>
    </motion.div>
  );
};

export default AnimatedLine;
