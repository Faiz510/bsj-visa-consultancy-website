import { motion } from 'framer-motion';
import React from 'react';
import { FaBars, FaXmark } from 'react-icons/fa6';

interface MenuIconsProps {
  icons: string;
  toggleIcons: React.Dispatch<React.SetStateAction<boolean>>;
}

// if fabars then show bar icons else show x icons
const MenuIcons: React.FC<MenuIconsProps> = ({ icons, toggleIcons }) => {
  const BarStyleClasses = 'absolute top-6 right-6 ';
  const XmarkStyleClasses = 'my-6 ml-24 ';
  return (
    <motion.div
      className={`md:hidden text-secondary cursor-pointer ${
        icons === 'bars' ? BarStyleClasses : XmarkStyleClasses
      } `}
      whileHover={{
        transition: { duration: 0.1 },
        scale: 1.05,
      }}
      whileTap={{
        scale: 0.9,
      }}
      onClick={() => toggleIcons((pre) => !pre)}
    >
      {icons === 'bars' ? <FaBars size={25} /> : <FaXmark size={25} />}
    </motion.div>
  );
};

export default MenuIcons;
