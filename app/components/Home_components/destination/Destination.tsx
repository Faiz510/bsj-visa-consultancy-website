'use client';
import { motion } from 'framer-motion';
import { useState } from 'react';
import CallToAction from '../../CallToAction';
import FilteredDestination from './components/FilteredDestination';

enum VisaTabType {
  STUDENT = 'Students',
  TOURIST = 'Tourists',
  BOTH = 'Both',
}
const Destination = () => {
  const [isVisa, setIsVisa] = useState<VisaTabType>(VisaTabType.BOTH);
  const activeTabClass = 'bg-primary border-white text-white scale-110';

  const ANIMATION_VARIANTS = {
    initail: {
      scale: 1.05,
      transition: {
        ease: 'easeOut',
        duration: 0.5,
        type: 'spring',
      },
      boxShadow: '0px 10px 30px rgba(0, 0, 0, 0.2)',
    },
  };

  return (
    <motion.section
      className="w-full px-4 md:px-24 my-6 py-10 bg-[#F3F4F6]"
      initial={{ opacity: 0, x: -400 }}
      whileInView={{ opacity: 1, x: 0, transition: { duration: 0.6 } }}
    >
      <h3 className="text-secondary text-4xl font-semibold tracking-wider text-center">
        Top Destinations Visa For{' '}
      </h3>

      <div className="flex justify-center items-center gap-4 my-8">
        <motion.div
          className={`text-lg font-medium tracking-wider text-secondary border-2 border-secondary rounded-2xl px-3 cursor-pointer hover:bg-primary hover:text-white hover:border-transparent ${
            isVisa == VisaTabType.BOTH
              ? 'bg-primary border-none text-white'
              : ''
          }`}
          onClick={() => setIsVisa(VisaTabType.BOTH)}
          whileHover={ANIMATION_VARIANTS.initail}
          whileTap={{ scale: 0.95 }}
        >
          Both
        </motion.div>

        <motion.div
          className={`text-lg font-medium tracking-wider text-secondary border-2 border-secondary rounded-2xl px-3 cursor-pointer hover:bg-primary hover:text-white hover:border-transparent ${
            isVisa == VisaTabType.STUDENT
              ? 'bg-primary border-none text-white'
              : ''
          }`}
          onClick={() => setIsVisa(VisaTabType.STUDENT)}
          whileHover={ANIMATION_VARIANTS.initail}
          whileTap={{ scale: 0.95 }}
        >
          Student
        </motion.div>

        <motion.div
          className={`text-lg font-medium tracking-wider text-secondary border-2 border-secondary rounded-2xl px-3 cursor-pointer hover:bg-primary hover:text-white hover:border-transparent ${
            isVisa == VisaTabType.TOURIST
              ? 'bg-primary border-none text-white shadow-2xl text-xl'
              : ''
          }`}
          onClick={() => setIsVisa(VisaTabType.TOURIST)}
          whileHover={ANIMATION_VARIANTS.initail}
          whileTap={{ scale: 0.95 }}
        >
          Tourist
        </motion.div>
      </div>

      <motion.div
        className="grid grid-cols-1 md:grid-cols-2  justify-between items-center gap-6 my-4 mx-auto w-full"
        initial={{ opacity: 0 }}
        animate={{ transition: { duration: 0.8 }, opacity: 1 }}
        key={`cards-${isVisa}`}
      >
        {/* Filter Destination Btn  */}
        <FilteredDestination isVisa={isVisa} />
      </motion.div>

      {/* Call To Action Btn  */}
      <div className="w-full flex justify-center">
        <CallToAction
          text={`View More ${
            isVisa === VisaTabType.BOTH ? '' : isVisa
          } Destination`}
          href="/destination"
        />
      </div>
    </motion.section>
  );
};

export default Destination;
