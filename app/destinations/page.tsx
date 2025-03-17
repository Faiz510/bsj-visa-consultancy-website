import React from 'react';
import Banner from '../components/Banner';
import DestBannerImg from '../../public/destination/destination-banner.jpg';
import Destination from '../components/Home_components/destination/Destination';

const Destinations = () => {
  return (
    <div className="pt-18">
      <Banner
        title="Destination"
        key={'destintion banner'}
        bgImg={DestBannerImg.src}
      />
    </div>
  );
};

export default Destinations;
