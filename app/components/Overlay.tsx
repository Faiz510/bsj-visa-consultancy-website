import { motion } from 'framer-motion';
import React from 'react';

interface ToggleProps {
  Toggle: React.Dispatch<React.SetStateAction<boolean>>;
}

const Overlay: React.FC<ToggleProps> = ({ Toggle }) => {
  return (
    <motion.div
      className="opacity-30 md:hidden bg-black h-[100vh] w-full absolute cursor-pointer top-0 left-0 z-10"
      onClick={() => Toggle((pre) => !pre)}
      initial={{ opacity: 0 }}
      animate={{ opacity: 0.3 }}
      transition={{ duration: 0.5 }}
      exit={{ opacity: 0 }}
    />
  );
};

export default Overlay;
