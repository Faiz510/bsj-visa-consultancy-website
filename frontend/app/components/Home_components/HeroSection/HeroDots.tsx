import React from 'react';
import HERO_DATA from './HeroSectionData';

interface HeroDotsProps {
  dataInt: number;
  setDataInt: React.Dispatch<React.SetStateAction<number>>;
}

const HeroDots: React.FC<HeroDotsProps> = ({ dataInt, setDataInt }) => {
  return (
    <div className="md:flex justify-center items-center gap-2 absolute bottom-6 hidden">
      {HERO_DATA.map((_, i) => (
        <div
          key={i}
          className={`${
            dataInt === i ? 'bg-gray-600 w-3 h-3' : 'bg-gray-400'
          } rounded-full w-2.5 h-2.5 cursor-pointer`}
          onClick={() => setDataInt(i)}
        />
      ))}
    </div>
  );
};

export default HeroDots;
