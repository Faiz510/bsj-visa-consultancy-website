'use client';
import React, { useState } from 'react';
import { IconType } from 'react-icons';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

interface ServiceCardProps {
  Icon: string;
  title: string;
  description: string;
  color: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({
  Icon,
  title,
  description,
  color,
}) => {
  const [isHover, setIsHover] = useState<boolean>(false);

  return (
    <Link href={'/service'}>
      <motion.div
        className={`${
          color == 'primary' ? 'bg-primary' : 'bg-secondary'
        } rounded-2xl text-white p-6 flex justify-between items-center flex-col opacity-85 h-[450px] cursor-pointer group`}
        whileHover={{ y: -15, transition: { duration: 0.3 } }}
        onHoverStart={() => setIsHover(true)}
        onHoverEnd={() => setIsHover(false)}
      >
        <div className="">
          <motion.div
            className=""
            initial={{ scale: 0 }}
            animate={{
              scale: isHover ? 1.2 : 1,
              transition: { duration: 0.3 },
            }}
          >
            <Image src={Icon} width={80} height={80} alt="service icon" />
          </motion.div>
        </div>
        <h4 className="text-3xl font-medium tracking-wider text-left">
          {title}
        </h4>
        <motion.div
          className="w-[20%] mx-auto h-1 bg-white"
          initial={{ width: '20%' }}
          animate={{
            width: isHover ? '40%' : '20%',
            transition: { duration: 0.3 },
          }}
        >
          {' '}
        </motion.div>
        <p className="text-lg/tight font-extralight tracking-wider text-left px-2 my-2">
          {description}
        </p>
      </motion.div>
    </Link>
  );
};

export default ServiceCard;
