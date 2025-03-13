'use client';
import AboutContent from './AboutContent';
import AboutImgSection from './AboutImgSection';

const About = () => {
  return (
    <section className="w-full my-10 md:px-20 px-4 py-6 mb-20 pb-20">
      <div className="text-center text-secondary my-6">
        <h3 className="text-5xl font-semibold tracking-wider">Who We Are</h3>
      </div>

      <div className="space-y-4  md:grid md:grid-cols-12 md:gap-2 md:justify-between md:items-center">
        {/* About content Section  */}
        <AboutContent />

        {/* About Image Section */}
        <AboutImgSection />
      </div>
    </section>
  );
};

export default About;
