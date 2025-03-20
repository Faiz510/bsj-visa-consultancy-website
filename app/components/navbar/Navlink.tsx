'use client';
import Link from 'next/link';
import React, { useMemo } from 'react';
import { usePathname } from 'next/navigation';
import { motion } from 'framer-motion';

interface NavlinkProps {
  href: string;
  name: string;
}
const Navlink: React.FC<NavlinkProps> = ({ href, name }) => {
  const pathname = usePathname();

  const isActiveLink = useMemo(() => {
    return (
      pathname === href ||
      (pathname.startsWith('/destinations') && href.startsWith('/destinations'))
    );
  }, [pathname, href]);

  const acitveLinkOnMobile =
    'bg-primary text-white md:bg-transparent md:text-black';

  return (
    <Link
      href={href}
      className="text-lg  tracking-wider font-medium group"
      prefetch
    >
      <motion.li
        className={`group px-1 md:hover:bg-transparent md:hover:text-black rounded-4xl  text-secondary  py-1 hover:bg-primary hover:text-white cursor-pointer  ${
          isActiveLink ? acitveLinkOnMobile : ''
        }`}
        whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
        whileTap={{ scale: 0.95 }}
      >
        {name}

        <div
          className={`md:w-full md:mt-3 md:h-1 rounded-3xl bg-primary  ${
            isActiveLink ? 'opacity-100' : 'opacity-0'
          } transition-opacity duration-300 group-hover:opacity-100`}
        />
      </motion.li>
    </Link>
  );
};

export default Navlink;
