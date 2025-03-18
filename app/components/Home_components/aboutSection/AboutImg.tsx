import Image from 'next/image';
import React from 'react';

interface AboutImgProps {
  image: string;
}

const AboutImg: React.FC<AboutImgProps> = ({ image }) => {
  return (
    <Image
      className="rounded-2xl border-2 border-gray-400 shadow-black/35  shadow-xl"
      src={`${image}`}
      alt="travel Images"
      width={200}
      height={200}
      loading="lazy"
    />
  );
};

export default AboutImg;
