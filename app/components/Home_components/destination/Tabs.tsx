import { motion } from 'framer-motion';
import React from 'react';

const ANIMATION_VARIANTS = {
  initail: {
    scale: 1.01,
    color: '#FFFFF',
    backgroundColor: '#fec60d',
    transition: {
      ease: 'easeOut',
      duration: 0.5,
      type: 'spring',
    },
    boxShadow: '0px 10px 30px rgba(0, 0, 0, 0.2)',
  },
};
enum VisaTabType {
  STUDENT = 'Student',
  TOURIST = 'Tourist',
  All = 'All',
}

interface TabsProps {
  isVisa: VisaTabType;
  setIsVisa: React.Dispatch<React.SetStateAction<VisaTabType>>;
  visaType: VisaTabType;
}

const Tabs: React.FC<TabsProps> = ({ isVisa, setIsVisa, visaType }) => {
  // const handleVisa = (visa: VisaTabType) => {
  //   // console.log('visaType', visa);

  //   setVisa(visa);
  //   console.log('is Visa', isVisa);
  // };
  return (
    <motion.div
      className={`text-lg font-medium tracking-wider text-secondary border-2 border-secondary rounded-2xl px-3 cursor-pointer hover:bg-primary hover:text-white hover:border-transparent ${
        isVisa == VisaTabType.All ? 'bg-primary border-none text-white' : ''
      }`}
      onClick={() => setIsVisa(visaType)}
      whileHover={ANIMATION_VARIANTS.initail}
      whileTap={{ scale: 0.95 }}
    >
      {visaType}
    </motion.div>
  );
};

export default Tabs;
