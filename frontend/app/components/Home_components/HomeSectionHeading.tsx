import React from 'react';

interface HomeSectionHeadingProp {
  SectionHeading: string;
}
const HomeSectionHeading: React.FC<HomeSectionHeadingProp> = ({
  SectionHeading,
}) => {
  return (
    <div className="text-center text-secondary my-6">
      <h3 className="text-5xl font-semibold tracking-wider">
        {SectionHeading}
      </h3>
    </div>
  );
};

export default HomeSectionHeading;
