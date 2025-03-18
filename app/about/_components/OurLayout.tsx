import React from 'react';
import AnimatedLine from './AnimatedLine';
import Image from 'next/image';

interface OurLayoutPropType {
  mainHeading: string;
  topHeading: string;
  paraOne: string;
  paraTwo: string;
  imageSrc: string;
  our: string;
}

const OurLayout: React.FC<OurLayoutPropType> = ({
  mainHeading,
  topHeading,
  paraOne,
  paraTwo,
  imageSrc,
  our,
}) => {
  return (
    <section
      className={`grid md:grid-cols-12 gap-4 md:px-20 px-4 my-20 ${
        our === 'mission' ? '' : 'grid-flow-dense'
      }`}
    >
      <div className={`col-span-6 ${our === 'mission' ? '' : ' md:order-2'} `}>
        <Image
          src={imageSrc}
          alt="our mission image"
          width={400}
          height={500}
          className="w-[600px] h-[500px] object-center object-cover rounded-lg"
          priority
        />
      </div>
      <div
        className={`col-span-6 flex justify-center items-center flex-col gap-8 ${
          our === 'mission' ? '' : ' md:order-1'
        } `}
      >
        <h4 className="text-5xl tracking-wider font-semibold text-secondary">
          {mainHeading}
        </h4>
        <div className="text-lg text-secondary tracking-wider md:order-2">
          {topHeading}
          <AnimatedLine text={`${paraOne}`} />
          <AnimatedLine text={`${paraTwo}`} />
        </div>
      </div>
    </section>
  );
};

export default OurLayout;
