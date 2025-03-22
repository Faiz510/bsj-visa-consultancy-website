'use client';
import Banner from '@/app/components/Banner';
import { motion } from 'framer-motion';
import Link from 'next/link';
import DestBgImg from '../../../public/destination/destination-banner.jpg';
import { useParams } from 'next/navigation';
import FilteredDestination from '../_components/FilterDestination';

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

const VisaTypeSlug = () => {
  const params = useParams();
  const visaType = params.visatype;
  const tabActiveClass =
    'bg-secondary border-none text-white shadow-2xl text-xl';
  const tabClasses =
    'text-lg font-medium tracking-wider text-secondary border-2 border-secondary rounded-2xl px-3 cursor-pointer hover:bg-secondary hover:text-white hover:border-transparent';

  return (
    <div className="pt-18">
      <Banner bgImg={DestBgImg.src} key={''} />
      <div className="flex justify-center items-center gap-4 my-8 ">
        <Link href={'/destinations/both'}>
          <motion.div
            className={`${tabClasses} ${
              visaType === 'both' ? `${tabActiveClass}` : ''
            }`}
            whileHover={ANIMATION_VARIANTS.initail}
            whileTap={{ scale: 0.95 }}
          >
            Both
          </motion.div>
        </Link>

        <Link href={'/destinations/students'}>
          <motion.div
            className={`${tabClasses} ${
              visaType === 'students' ? `${tabActiveClass}` : ''
            }`}
            whileHover={ANIMATION_VARIANTS.initail}
            whileTap={{ scale: 0.95 }}
          >
            Student
          </motion.div>
        </Link>

        <Link href={'/destinations/tourists'}>
          <motion.div
            className={`${tabClasses} ${
              visaType === 'tourists' ? `${tabActiveClass}` : ''
            }`}
            whileHover={ANIMATION_VARIANTS.initail}
            whileTap={{ scale: 0.95 }}
          >
            Tourist
          </motion.div>
        </Link>
      </div>

      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  justify-between items-center gap-6 my-8 mx-auto w-full px-20"
        initial={{ opacity: 0 }}
        animate={{ transition: { duration: 0.8 }, opacity: 1 }}
        key={`cards-${visaType}`}
      >
        {/* Filter Destination Btn  */}
        <FilteredDestination isVisa={`${visaType}`} />
      </motion.div>
    </div>
  );
};

export default VisaTypeSlug;
