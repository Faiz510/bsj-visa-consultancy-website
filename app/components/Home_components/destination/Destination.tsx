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
  const activeTabClass = 'bg-primary border-none text-white shadow-2xl text-xl';
  const tabClasses =
    'text-lg font-medium tracking-wider text-secondary border-2 border-secondary rounded-2xl px-3 cursor-pointer hover:bg-primary hover:text-white hover:border-transparent';

  const tabVariant = {
    initail: {
      scale: 1.05,
      transition: {
        ease: 'easeOut',
        duration: 0.5,
        type: 'spring',
      },
      boxShadow: '0px 10px 30px rgba(0, 0, 0, 0.2)',
    },

    tap: { scale: 0.95 },
  };

  return (
    <motion.section
      className="w-full px-4 md:px-24 my-6 py-10 bg-[#F3F4F6]"
      initial={{ opacity: 0, x: -400 }}
      whileInView={{ opacity: 1, x: 0, transition: { duration: 0.6 } }}
      viewport={{ once: true }}
    >
      <h3 className="text-secondary text-4xl font-semibold tracking-wider text-center">
        Top Destinations Visa For{' '}
      </h3>

      <div className="flex justify-center items-center gap-4 my-8">
        <motion.div
          className={`${tabClasses} ${
            isVisa == VisaTabType.BOTH ? `${activeTabClass}` : ''
          }`}
          onClick={() => setIsVisa(VisaTabType.BOTH)}
          variants={tabVariant}
          whileHover={'initail'}
          whileTap={'tap'}
        >
          Both
        </motion.div>

        <motion.div
          className={`${tabClasses} ${
            isVisa == VisaTabType.STUDENT ? `${activeTabClass}` : ''
          }`}
          onClick={() => setIsVisa(VisaTabType.STUDENT)}
          variants={tabVariant}
          whileHover={'initail'}
          whileTap={'tap'}
        >
          Student
        </motion.div>

        <motion.div
          className={`${tabClasses} ${
            isVisa == VisaTabType.TOURIST ? `${activeTabClass}` : ''
          }`}
          onClick={() => setIsVisa(VisaTabType.TOURIST)}
          variants={tabVariant}
          whileHover={'initail'}
          whileTap={'tap'}
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
          href={`/destinations/${isVisa.toLowerCase()}`}
        />
      </div>
    </motion.section>
  );
};

export default Destination;
