import React from 'react';
import ServiceSectionLayout from './ServiceSectionLayout';
import SERVICES_DATA from '../ServicesData';

const ServiceSection = () => {
  return (
    <>
      {SERVICES_DATA.map((data, index) => (
        <ServiceSectionLayout
          mainHeading={data.title}
          text={data.description}
          imageSrc={data.image}
          Index={index}
          points={data.points}
          key={index}
        />
      ))}
    </>
  );
};

export default ServiceSection;
