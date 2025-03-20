import CallToAction from '@/app/components/CallToAction';
import React from 'react';
import AnimatedLine from './AnimatedLine';

interface AboutTextLayoutProp {
  isHome: boolean;
}

const AboutTextLayout: React.FC<AboutTextLayoutProp> = ({ isHome }) => {
  return (
    <>
      <h2 className="text-8xl text-primary font-bold my-2 tracking-widest">
        {' '}
        BSJ{' '}
      </h2>
      <div className=" text-secondary my-2 font-medium tracking-wider flex justify-start items-end gap-2">
        <h3 className="text-2xl md:text-4xl"> Consltant & Immigiration</h3>{' '}
        <span className="text-lg">(pvt.ltd)</span>
      </div>
      <h4 className="text-2xl md:text-3xl text-secondary tracking-wider font-medium">
        Study And Tours
      </h4>

      <div className="text-[16px] text-secondary tracking-wider">
        <h4>
          BSJ Consultant & Immigration (Pvt. Ltd.) is your trusted partner in
          turning dreams into reality. Whether you aspire to study at top global
          universities or embark on unforgettable travel experiences, we
          specialize in seamless visa assistance for students and tourists.{' '}
        </h4>

        {isHome ? (
          <CallToAction text="More About" href="/about" />
        ) : (
          <>
            {' '}
            <AnimatedLine
              text="With expert guidance and a commitment to excellence, we navigate
   the complexities of immigration, ensuring a smooth and
   stress-free process."
            />
            <AnimatedLine
              text="Let us handle the paperwork while you focus on shaping your
   future and exploring the world. Your journey starts with us!"
            />
          </>
        )}
      </div>
    </>
  );
};

export default AboutTextLayout;
