import React from 'react';
import DESTINATION_DATA from '../DestinationData';
import DestinationHomeCard from './DestinationHomeCard';

enum VisaTabType {
  STUDENT = 'Students',
  TOURIST = 'Tourists',
  BOTH = 'Both',
}

interface FilteredDestinationProp {
  isVisa: VisaTabType;
}

const FilteredDestination: React.FC<FilteredDestinationProp> = ({ isVisa }) => {
  let filterDestination = DESTINATION_DATA;

  if (isVisa === VisaTabType.STUDENT) {
    filterDestination = filterDestination.filter(
      (data) => data.visa === 'Student Visa',
    );
  } else if (isVisa === VisaTabType.TOURIST) {
    filterDestination = filterDestination.filter(
      (data) => data.visa === 'Tourist Visa',
    );
  } else {
    filterDestination = DESTINATION_DATA;
  }

  return filterDestination
    .slice(0, 4)
    .map((data, index) => (
      <DestinationHomeCard
        key={index}
        imgSrc={data.image}
        title={data.title}
        visa={data.visa}
        altText={data.title}
      />
    ));
};

export default FilteredDestination;
