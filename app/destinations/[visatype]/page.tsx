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

  return (
    <div className="pt-18">
      <Banner title="Destination Page" bgImg={DestBgImg.src} key={''} />
      <div className="flex justify-center items-center gap-4 my-8 ">
        <motion.div
          className={`text-lg font-medium tracking-wider text-secondary border-2 border-secondary rounded-2xl px-3 cursor-pointer hover:bg-primary hover:text-white hover:border-transparent ${
            visaType === 'both' ? 'bg-primary border-none text-white' : ''
          }`}
          whileHover={ANIMATION_VARIANTS.initail}
          whileTap={{ scale: 0.95 }}
        >
          <Link href={'/destinations/both'}> Both </Link>
        </motion.div>

        <motion.div
          className={`text-lg font-medium tracking-wider text-secondary border-2 border-secondary rounded-2xl px-3 cursor-pointer hover:bg-primary hover:text-white hover:border-transparent ${
            visaType === 'student' ? 'bg-primary border-none text-white' : ''
          }`}
          whileHover={ANIMATION_VARIANTS.initail}
          whileTap={{ scale: 0.95 }}
        >
          <Link href={'/destinations/student'}>Student </Link>
        </motion.div>

        <motion.div
          className={`text-lg font-medium tracking-wider text-secondary border-2 border-secondary rounded-2xl px-3 cursor-pointer hover:bg-primary hover:text-white hover:border-transparent ${
            visaType === 'tourist'
              ? 'bg-primary border-none text-white shadow-2xl text-xl'
              : ''
          }`}
          whileHover={ANIMATION_VARIANTS.initail}
          whileTap={{ scale: 0.95 }}
        >
          <Link href={'/destinations/tourist'}>Tourist</Link>
        </motion.div>
      </div>

      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  justify-between items-center gap-6 my-4 mx-auto w-full px-20"
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
