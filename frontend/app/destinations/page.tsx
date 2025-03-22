import React from 'react';
import Banner from '../components/Banner';
import DestBannerImg from '../../public/destination/destination-banner.jpg';

const Destinations = () => {
  return (
    <div className="pt-18">
      <Banner key={'destintion banner'} bgImg={DestBannerImg.src} />
    </div>
  );
};

export default Destinations;
