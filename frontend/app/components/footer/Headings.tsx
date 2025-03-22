import React from 'react';
interface HeadingPropsType {
  heading: string;
}

const Headings: React.FC<HeadingPropsType> = ({ heading }) => {
  return <h4 className="text-secondary opacity-90 font-semibold">{heading}</h4>;
};

export default Headings;
