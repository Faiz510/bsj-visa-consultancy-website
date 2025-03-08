import React from 'react';
import { IconType } from 'react-icons';
import { motion } from 'framer-motion';

interface ServiceCartProps {
  Icon: IconType;
  title: string;
  description: string;
}

const ServiceCart: React.FC<ServiceCartProps> = ({
  Icon,
  title,
  description,
}) => {
  return (
    <motion.div
      className="p-6 bg-white rounded-2xl shadow-lg cursor-pointer"
      whileHover={{
        scale: 1.02,
        boxShadow: '0px 10px 30px rgba(0, 0, 0, 0.2)',
        backgroundColor: '#FEC60D',
        color: '#FFFFFF',
        opacity: 0.8,
      }}
      whileTap={{ scale: 0.95 }}
    >
      <div className="col-span-4">
        <Icon className="text-6xl my-2" />
      </div>
      <h4 className="text-2xl font-semibold tracking-wider text-left">
        {title}
      </h4>
      <p className="text-lg/tight font-light tracking-wider text-left">
        {description}
      </p>
    </motion.div>
  );
};

export default ServiceCart;
