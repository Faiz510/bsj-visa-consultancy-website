'use client';
import AboutTextLayout from '@/app/about/_components/AboutTextLayout';
import AboutImgSection from './AboutImgSection';
import HomeSectionHeading from '../HomeSectionHeading';

const About = () => {
  return (
    <section className="w-full my-10 md:px-20 px-4 py-6 mb-20 pb-20">
      <HomeSectionHeading SectionHeading="Who We Are" key={'about_heading'} />

      <div className="space-y-4  md:grid md:grid-cols-12 md:gap-2 md:justify-between md:items-center">
        {/* About content Section  */}
        <div className="py-6 md:col-span-6">
          <AboutTextLayout isHome={true} />
        </div>

        {/* About Image Section */}
        <AboutImgSection />
      </div>
    </section>
  );
};

export default About;
