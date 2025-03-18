import AboutContent from '@/app/components/Home_components/aboutSection/AboutContent';
import Image from 'next/image';
import aboutSectionImg from '@/public/about/about-section.jpg';
import aboutImg from '@/public/about/about.jpg';
import AnimatedLine from './AnimatedLine';

const AboutSection = () => {
  return (
    <section className="w-full my-10 md:px-20 px-4 py-6">
      <div className="text-center text-secondary my-10">
        <h3 className="text-5xl font-semibold tracking-wider">Who We Are</h3>
      </div>

      <div className="space-y-4  md:grid md:grid-cols-12 md:gap-2 md:justify-between md:items-center">
        {/* About content Section  */}
        <div className="py-6 md:col-span-6">
          <h2 className="text-8xl text-primary font-bold my-2 tracking-widest">
            {' '}
            BSJ{' '}
          </h2>
          <div className=" text-secondary my-2 font-medium tracking-wider flex justify-start items-end gap-2">
            <h3 className="text-2xl md:text-4xl"> Consltant & Immigiration</h3>{' '}
            <span className="text-lg">(pvt.ltd)</span>
          </div>
          <h4 className="text-2xl md:text-3xl text-secondary tracking-wider font-medium">
            Study And Tours
          </h4>
          <div className="text-[16px] text-secondary tracking-wider">
            <h4>
              BSJ Consultant & Immigration (Pvt. Ltd.) is your trusted partner
              in turning dreams into reality. Whether you aspire to study at top
              global universities or embark on unforgettable travel experiences,
              we specialize in seamless visa assistance for students and
              tourists.{' '}
            </h4>
            <AnimatedLine
              text="With expert guidance and a commitment to excellence, we navigate
                the complexities of immigration, ensuring a smooth and
                stress-free process."
            />
            <AnimatedLine
              text="Let us handle the paperwork while you focus on shaping your
                future and exploring the world. Your journey starts with us!"
            />
          </div>
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
