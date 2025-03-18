import { motion } from 'framer-motion';
import { FaArrowRight } from 'react-icons/fa';
import CallToAction from '../../CallToAction';

const AboutContent = () => {
  return (
    <div className="py-6 md:col-span-6">
      <h2 className="text-8xl text-primary font-bold my-2 tracking-widest">
        {' '}
        BSJ{' '}
      </h2>
      <div className=" text-secondary my-2 font-medium tracking-wider flex justify-start items-end gap-1">
        <h3 className="text-2xl md:text-4xl"> Consltant & Immigiration</h3>{' '}
        <span className="text-lg">(pvt.ltd)</span>
      </div>
      <h4 className="text-2xl md:text-3xl text-secondary tracking-wider font-medium">
        Study And Tours
      </h4>
      <h4 className="text-sm text-secondary tracking-wider">
        Your trusted partner in immigration services! Whether you're planning to
        study abroad or explore new destinations, we simplify your student and
        tourist visa process for a hassle-free journey. Pack your bags—your
        journey cenjustify-centers here!
      </h4>
      <CallToAction text="More About" href="/about" />
    </div>
  );
};

export default AboutContent;
