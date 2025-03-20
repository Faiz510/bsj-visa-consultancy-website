'use client';
import { motion } from 'framer-motion';
const loading = () => {
  return (
    <section className="flex items-center justify-center h-screen w-full">
      <motion.div
        className="w-16 h-16 border-4 border-t-primary border-secondary rounded-full"
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 1, ease: 'linear' }}
      />
    </section>
  );
};

export default loading;
