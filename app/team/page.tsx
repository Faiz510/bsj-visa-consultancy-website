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
      <TeamSection />
    </div>
  );
};

export default page;
