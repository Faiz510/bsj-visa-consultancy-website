'use client';
import { useState } from 'react';
import NavLogo from './NavLogo';
import Overlay from '../Overlay';
import MenuIcons from './MenuIcons';
import NavSection from './NavSection';

const Navbar = () => {
  const [showNav, setShowNav] = useState<boolean>(false);

  return (
    <div className="h-[70px] flex items-center justify-between md:px-20 absolute w-full z-50 bg-[#F3F4F6]">
      {/* Navbar logo  */}
      <NavLogo />

      {/* Bars icons  */}
      <MenuIcons icons="bars" toggleIcons={setShowNav} />

      {/* NavSection  */}
      <NavSection showNav={showNav} setShowNav={setShowNav} />

      {/* navbar overlay on mobile  */}
      {showNav && <Overlay Toggle={setShowNav} />}
    </div>
  );
};

export default Navbar;
