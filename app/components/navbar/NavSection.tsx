import { motion } from 'framer-motion';
import React, { useEffect } from 'react';
import MenuIcons from './MenuIcons';
import Navlink from './Navlink';
import { body } from 'framer-motion/m';

interface NavSectionProps {
  showNav: boolean;
  setShowNav: React.Dispatch<React.SetStateAction<boolean>>;
}

const NavSection: React.FC<NavSectionProps> = ({ showNav, setShowNav }) => {
  const showNavClasses = 'opacity-0 pointer-events-none';

  useEffect(() => {
    showNav
      ? (document.body.style.overflow = 'hidden')
      : (document.body.style.overflow = 'auto');

    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [showNav]);

  return (
    <motion.nav
      className={`z-50   ${
        showNav ? '' : showNavClasses
      }  md:opacity-100 md:pointer-events-auto`}
      id="nav-links"
      key={`nav-links-key-${showNav}`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3, ease: 'easeInOut' }}
    >
      <ul
        className={`md:flex md:justify-center md:items-center md:space-x-4 md:mt-2 absolute  bg-white md:bg-transparent pl-2 top-0 w-40 md:w-[600px] md:right-4 md:h-full h-[100vh] 
        ${showNav ? 'right-0' : 'right-[-200px]'}
        `}
      >
        {/* Xmark Icons  */}
        {showNav && <MenuIcons icons="xmark" toggleIcons={setShowNav} />}

        {/* navlinks  */}
        <Navlink href="/" name="Home" />
        <Navlink href="/about" name="About" />
        <Navlink href="/team" name="Team" />
        <Navlink href="/services" name="Service" />
        <Navlink href="/destinations/both" name="Destinations" />
        <Navlink href="/contact" name="Contact" />
      </ul>
    </motion.nav>
  );
};

export default NavSection;
