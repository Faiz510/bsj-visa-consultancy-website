import Image from 'next/image';
import aboutImg from '@/public/about/about.jpg';
import AboutTextLayout from './AboutTextLayout';

const AboutSection = () => {
  return (
    <section className="w-full my-10 md:px-20 px-4 py-6">
      <div className="text-center text-secondary my-10">
        <h3 className="text-5xl font-semibold tracking-wider">Who We Are</h3>
      </div>

      <div className="space-y-4  md:grid md:grid-cols-12 md:gap-2 md:justify-between md:items-center">
        {/* About content Section  */}
        <div className="py-6 md:col-span-6">
          <AboutTextLayout isHome={false} />
        </div>

        {/* About Image Section */}
        <div className="md:col-span-6">
          <Image
            src={aboutImg.src}
            width={400}
            height={600}
            alt="map images"
            className="w-full h-[500px] object-center object-cover rounded-2xl"
          />
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
