import DestinationHomeCard from '@/app/components/Home_components/destination/components/DestinationHomeCard';
import DESTINATION_DATA from '@/app/components/Data/DestinationData';
import React from 'react';
import DestinationPageCard from './DestinationPageCard';

// enum VisaTabType {
//   STUDENT = 'students',
//   TOURIST = 'tourists',
//   BOTH = 'both',
// }

// interface FilteredDestinationProp {
//   isVisa: VisaTabType;
// }

const FilteredDestination = ({ isVisa }: { isVisa: string }) => {
  let filterDestination = DESTINATION_DATA;

  if (isVisa === 'students') {
    filterDestination = filterDestination.filter(
      (data) => data.visa === 'Student Visa',
    );
  } else if (isVisa === 'tourists') {
    filterDestination = filterDestination.filter(
      (data) => data.visa === 'Tourist Visa',
    );
  } else {
    filterDestination = DESTINATION_DATA;
  }

  return filterDestination.map((data, index) => (
    <DestinationPageCard
      key={index}
      imgSrc={data.image}
      title={data.title}
      visa={data.visa}
      altText={data.title}
    />
  ));
};

export default FilteredDestination;
