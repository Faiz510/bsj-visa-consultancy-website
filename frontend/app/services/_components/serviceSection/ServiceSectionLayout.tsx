'use client';
import Image from 'next/image';
import React from 'react';
import { motion } from 'framer-motion';
import tickIcon from '@/public/service/tick-icon.png';

interface ServiceSectionLayoutPropType {
  imageSrc: string;
  mainHeading: string;
  text: string;
  Index: number;
  points: string[];
}

const container = {
  hidden: { opacity: 1, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delayChildren: 0.2,
      staggerChildren: 0.1,
    },
  },
};

const item = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
  },
};

const ServiceSectionLayout: React.FC<ServiceSectionLayoutPropType> = ({
  imageSrc,
  mainHeading,
  Index,
  text,
  points,
}) => {
  const serviceRow = (Index: number): boolean =>
    Index % 2 === 0 ? true : false;

  const OrderClassOne = serviceRow(Index) ? 'md:pr-8' : 'md:order-1  md:pl-8';
  const OrderClassTwo = serviceRow(Index) && ' md:order-2';
  return (
    <section
      className={`grid md:grid-cols-12  gap:6 md:px-20  md:grid-flow-dense`}
    >
      <div className={`col-span-6  ${OrderClassTwo} `}>
        <Image
          src={imageSrc}
          alt="serviceRowmission image"
          width={700}
          height={500}
          className="w-[700px] h-[600px] object-center object-cover "
          loading="lazy"
        />
      </div>
      <div
        className={`col-span-6 flex justify-center items-start flex-col gap-8  ${OrderClassOne}  `}
      >
        <h4 className="text-3xl md:text-5xl tracking-wider font-semibold text-secondary opacity-90">
          {mainHeading}
        </h4>

        <motion.div
          className="h-1 bg-secondary opacity-80"
          initial={{ width: 30, opacity: 0 }}
          whileInView={{
            width: 150,
            opacity: 1,
            transition: { duration: 0.6 },
          }}
          viewport={{ once: true }}
        />

        <div className="text-lg text-secondary tracking-wider opacity-75">
          {text}
        </div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-2 space-x-2"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {points.map((point, i) => (
            <motion.div
              key={i}
              className="flex justify-start gap-2 items-center"
              variants={item}
              viewport={{ once: true }}
            >
              <Image
                src={tickIcon.src}
                width={25}
                height={25}
                alt="tick icon"
                loading="lazy"
              />
              <span className="text-[16px] text-secondary opacity-75">
                {point}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ServiceSectionLayout;
