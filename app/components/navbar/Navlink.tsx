'use client';
import Link from 'next/link';
import React from 'react';
import { usePathname } from 'next/navigation';
import { motion } from 'framer-motion';

interface NavlinkProps {
  href: string;
  name: string;
}
const Navlink: React.FC<NavlinkProps> = ({ href, name }) => {
  const pathname = usePathname();
  const acitveLinkOnMobile =
    'bg-primary text-white md:bg-transparent md:text-black';

  return (
    <motion.li
      className={`w-40 md:w-24 group px-2 md:hover:bg-transparent md:hover:text-black rounded-4xl  text-secondary my-1 py-1 hover:bg-primary hover:text-white cursor-pointer  ${
        pathname == href ? acitveLinkOnMobile : ''
      }`}
      whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
      whileTap={{ scale: 0.95 }}
    >
      <Link
        href={`${href}`}
        className="text-lg  tracking-wider font-medium group "
      >
        {name}
      </Link>
      <div
        className={`md:w-full md:mt-3 md:h-1 rounded-3xl bg-primary  ${
          pathname == href ? 'opacity-100' : 'opacity-0'
        } transition-opacity duration-300 group-hover:opacity-100`}
      />
    </motion.li>
  );
};

export default Navlink;
