import React from 'react';
import Banner from '../components/Banner';
import TeamBanner from '@/public/team/team-banner.jpg';
import CEOSection from './_components/CEOSection';
import TeamSection from './_components/TeamSection';

const page = () => {
  return (
    <div className="pt-16">
      <Banner bgImg={TeamBanner.src} key={'our-team-banner'} />
      <CEOSection />
      <h3 className="text-center font-semibold text-4xl text-black opacity-90 tracking-wide my-16">
        {' '}
        Our Team Member{' '}
      </h3>
      <TeamSection />
    </div>
  );
};

export default page;
