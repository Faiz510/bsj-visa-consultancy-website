import Image from 'next/image';
import React from 'react';

interface AboutImgProps {
  image: string;
}

const AboutImg: React.FC<AboutImgProps> = ({ image }) => {
  return (
    <Image
      className="rounded-2xl border-2 border-gray-400 shadow-2xl"
      src={`${image}`}
      alt="this is image"
      width={150}
      height={150}
    />
  );
};

export default AboutImg;
