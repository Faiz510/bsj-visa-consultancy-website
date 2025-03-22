import React from 'react';
import { IconType } from 'react-icons';

interface InfoPropType {
  Icon: IconType;
  detail: string;
}

const Info: React.FC<InfoPropType> = ({ Icon, detail }) => {
  return (
    <div className="flex justify-center gap-3 items-center text-secondary opacity-80">
      <span>
        <Icon />
      </span>
      <span>{detail}</span>
    </div>
  );
};

export default Info;
