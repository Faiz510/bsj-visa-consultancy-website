import React from 'react';
import { IconType } from 'react-icons';

interface IconBoxProps {
  title: string;
  desc: string;
  Icon: IconType;
}

const IconBox: React.FC<IconBoxProps> = ({ title, desc, Icon }) => {
  return (
    <div className="flex justify-between items-center gap-6 my-6 opacity-90">
      <div className="text-4xl text-secondary  font-semibold">
        <Icon className="" />
      </div>
      <div>
        <h4 className="text-xl font-semibold tracking-wider opacity-90">
          {title}
        </h4>
        <p className="text-lg font-light opacity-80 text-secondary">{desc}</p>
      </div>
    </div>
  );
};

export default IconBox;
