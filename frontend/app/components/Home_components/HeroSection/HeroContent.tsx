import { motion } from 'framer-motion';
import React from 'react';
import CallToAction from '../../CallToAction';

interface HeroContentProp {
  dataInt: number;
  title: string;
  subheading: string;
  tagline: string;
}

const HeroContent: React.FC<HeroContentProp> = ({
  dataInt,
  title,
  subheading,
  tagline,
}) => {
  return (
    <motion.div
      className="md:col-span-6 flex justify-center items-center "
      initial={{ opacity: 0, x: -100 }}
      animate={{
        opacity: 1,
        x: 0,
        transition: { duration: 0.5, type: 'spring' },
      }}
      key={`${dataInt}-content`}
    >
      <div className="">
        <h2 className="text-5xl text-primary font-bold my-2">{title}</h2>
        <h3 className="text-3xl text-secondary my-2 font-medium tracking-wider">
          {subheading}
        </h3>
        <h4 className="text-sm text-secondary tracking-wider">{tagline}</h4>
        <CallToAction
          href="/contact"
          text="Contact Us"
          key={'hero-callToAction'}
        />
      </div>
    </motion.div>
  );
};

export default HeroContent;
