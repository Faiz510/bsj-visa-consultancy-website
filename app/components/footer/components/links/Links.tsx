import Link from 'next/link';
import React from 'react';
import Headings from '../../Headings';

const Links = () => {
  interface navLinsType {
    name: string;
    href: string;
  }
  const navLinks: navLinsType[] = [
    { name: 'About', href: '/about' },
    { name: 'Services', href: '/service' },
    { name: 'Contact', href: '/contact' },
    { name: 'Destination', href: '/destination' },
  ];
  return (
    <div className="flex justify-center items-start flex-col gap-5">
      <Headings heading="Links" />
      <div className="flex flex-col justify-center items-start gap-2">
        {navLinks.map((link, i) => (
          <Link
            href={`${link.href}`}
            key={i}
            className="hover:opacity-100 opacity-80 text-secondary"
          >
            {link.name}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Links;
