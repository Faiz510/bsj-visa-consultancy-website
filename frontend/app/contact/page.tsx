import React from 'react';
import bgImg from '@/public/contact/contact-bg.jpg';
import ContactInfo from './_components/ContactInfo';
import ContactForm from './_components/ContactForm';
import Image from 'next/image';

const ContactPage = () => {
  return (
    <section className="w-full h-[120vh] relative flex justify-center items-center overflow-hidden">
      <Image
        src={bgImg}
        alt="Contact Background"
        fill
        quality={75}
        priority
        className="object-cover z-[-1]"
      />
      <div className="w-[100%] md:w-[80%] lg:w-[70%] mx-auto z-20  rounded-2xl p-6 grid grid-cols-1  md:grid-cols-2 gap-4">
        <ContactInfo />

        <ContactForm />
      </div>
      <div className="absolute w-full h-full top-0 left-0 inset-0 bg-black opacity-40 z-10" />

      {/* <OverlaySection /> */}
    </section>
  );
};

export default ContactPage;
