'use client';

import { FaArrowRight, FaGraduationCap } from 'react-icons/fa6';
import ServiceCart from '../../ServiceCart';
import { FaGlobeAfrica } from 'react-icons/fa';
import { FaBookOpen } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { IoDocumentText } from 'react-icons/io5';

const Service = () => {
  return (
    <section className="my-10 md:px-20 px-4 py-6  bg-[#F3F4F6]">
      <div className="text-center text-secondary my-6">
        <h3 className="text-5xl font-semibold tracking-wider">What We Offer</h3>
      </div>

      <div className="text-center text-secondary my-6">
        <h3 className="text-2xl font-medium tracking-wider">
          {' '}
          We Strive to Provide the Finest Service Possible to Our Clients
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 my-6">
          <ServiceCart
            Icon={FaGraduationCap}
            title={'Student Visa'}
            description="We provide expert guidance for students looking to study abroad. From securing student visa approvals to assisting with university
              selection, scholarships, and accommodation, we ensure a seamless
              journey for aspiring students."
          />

          <ServiceCart
            Icon={FaGlobeAfrica}
            title={'Tour Packages'}
            description="Discover the world with our carefully curated tour packages. Whether you’re looking for group tours, solo travel, or family adventures, we offer personalized itineraries to make your trip memorable.
            "
          />

          <ServiceCart
            Icon={FaBookOpen}
            title={'Study Abroad Consultancy'}
            description="Navigating international education can be complex. We assist students in choosing the right university, preparing applications, securing scholarships, and handling the visa process with precision and care."
          />
          <ServiceCart
            Icon={IoDocumentText}
            title={'Document & Legalization'}
            description="Our certified professionals handle the translation and notarization of important documents, ensuring they meet the legal requirements of your destination country. We make the process simple and stress-free."
          />
        </div>
      </div>

      <div className="w-full flex justify-center">
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
          <span className="tracking-wider">View More Servies</span>
          <FaArrowRight className="text-white absolute opacity-0 group-hover:relative group-hover:opacity-100 group-hover:duration-500 group-hover:ease-out " />
        </motion.button>
      </div>
    </section>
  );
};

export default Service;
