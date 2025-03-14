'use client';
import Banner from '../components/Banner';
import Img from '@/public/about/about-banner.jpg';
import AboutSection from './_components/AboutSection';
import OurLayout from './_components/OurLayout';
import visionImg from '@/public/about/vision-bsj.jpg';
import missionImg from '@/public/about/mission-bsj.jpg';

const About = () => {
  return (
    <div className="pt-16">
      <Banner title="About Us" bgImg={`${Img.src}`} />
      <AboutSection />

      <OurLayout
        our="mission"
        mainHeading="Our Mission"
        topHeading=" Our mission is to bridge the gap between ambition and reality. Whether
          you seek higher education abroad or wish to explore new destinations,
          we are dedicated to delivering personalized, reliable, and ethical
          visa consultation services."
        paraOne="Through expert guidance, integrity, and a
        commitment to excellence, we aim to make international education and
        travel accessible to all. "
        paraTwo="At BSJ Consultant & Immigration, we don’t just
        process visas—we open doors to new possibilities."
        imageSrc={`${missionImg.src}`}
      />

      <OurLayout
        our="vision"
        mainHeading="Our Vision"
        topHeading="At BSJ Consultant & Immigration (Pvt. Ltd.), we envision a world where
          opportunities are boundless, and borders are no longer barriers. Our
          goal is to empower students and travelers by providing seamless
          immigration solutions, ensuring they achieve their dreams with
          confidence."
        paraOne="We strive to be a trusted global partner, guiding
        individuals toward academic excellence and enriching travel experiences."
        paraTwo="While making the visa process simple, transparent, hassle free and stress-free."
        imageSrc={`${visionImg.src}`}
      />
    </div>
  );
};

export default About;
