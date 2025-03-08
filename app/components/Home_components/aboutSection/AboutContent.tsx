import { motion } from 'framer-motion';
import { FaArrowRight } from 'react-icons/fa';

const AboutContent = () => {
  return (
    <div className="py-6 md:col-span-6">
      <h2 className="text-6xl text-primary font-bold my-2"> BSJ </h2>
      <h3 className="text-4xl text-secondary my-2 font-medium tracking-wider">
        Consltant & Immigiration
      </h3>
      <h4 className="text-xl text-secondary tracking-wider">
        (SMC-Private) Limited
      </h4>
      <h4 className="text-sm text-secondary tracking-wider">
        Planning your next adventure? Let us handle the visa process while you
        focus on making memories. Whether it's a solo trip, a family vacation,
        or a getaway with friends, we ensure a smooth and stress-free visa
        application. Pack your bags—your journey starts here!
      </h4>
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
        <span className="tracking-wider">Learn More</span>
        <FaArrowRight className="text-white absolute opacity-0 group-hover:relative group-hover:opacity-100 group-hover:duration-500 group-hover:ease-out " />
      </motion.button>
    </div>
  );
};

export default AboutContent;
