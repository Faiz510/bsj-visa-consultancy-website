'use client';
import CopywriteSection from './components/CopywriteSection';

import ContactInfo from './components/contactInfo/ContactInfo';
import Social from './components/social/Social';
import Links from './components/links/Links';
import Logo from './components/logo/Logo';

const Footer = () => {
  return (
    <footer className="w-full bg-[#F3F4F6] px-20">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-12 ">
        <Logo />

        <Links />

        <ContactInfo />

        <Social />
      </div>
      <CopywriteSection />
    </footer>
  );
};

export default Footer;
