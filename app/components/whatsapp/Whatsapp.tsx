'use client';
import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';
import { motion } from 'framer-motion';

const WhatsApp = () => {
  const phoneNumber = '+923189185600';
  const message = encodeURIComponent(
    'Hello! I would like to know more about your services.',
  );

  const handleChat = () => {
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
  };
  return (
    <motion.div
      whileHover={{ scale: 1.1, transition: { duration: 0.3 } }}
      className="fixed bottom-6 right-6 bg-green-500 text-white p-3 rounded-full shadow-lg cursor-pointer hover:bg-green-600 "
      onClick={handleChat}
    >
      <FaWhatsapp size={32} />
    </motion.div>
  );
};

export default WhatsApp;
