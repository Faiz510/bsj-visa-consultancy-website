import Image from 'next/image';
import Binyamin from '@/public/team/binyanin-profile.jpg';

const CEOSection = () => {
  return (
    <section className="grid grid-cols-1 md:grid-cols-12 gap-4 md:px-20 px-6 justify-between items-center">
      <div className="col-span-5">
        <Image
          src={Binyamin.src}
          width={450}
          height={800}
          priority
          alt="Ceo profile image"
          className="rounded-2xl w-[450px] h-[450px] object-cover object-top"
        />
        <div className="flex flex-col justify-center items-center gap-2 my-2">
          <span className="text-xl font-medium">Younas Binyamin</span>
          <span className="text-lg">Chief Executive Officer</span>
        </div>
      </div>

      <div className="col-span-7 space-y-3">
        <h3 className="text-black text-xl">
          Dear BSJ Consultant & Immigration Team,
        </h3>
        <div className="text-lg opacity-90 space-y-3">
          <p>
            I want to take a moment to sincerely appreciate the dedication, hard
            work, and commitment each of you brings to our mission. Your
            expertise and passion for guiding students and travelers through the
            complexities of study and tour visas have made a lasting impact on
            countless lives.
          </p>
          <p>
            At BSJ Consultant & Immigration, we take pride in helping
            individuals achieve their dreams—whether it’s studying at top
            institutions abroad or exploring new destinations with ease. Your
            efforts in providing expert guidance, seamless processing, and
            exceptional client support have strengthened our reputation as a
            trusted consultancy.
          </p>
          <p>
            Let’s continue to uphold our values of integrity, excellence, and
            client satisfaction, ensuring that every student and traveler who
            comes to us receives the best possible support on their journey.
          </p>
          <p>
            Together, we are shaping futures and opening doors to endless
            opportunities.
          </p>
          <p>Sincerely</p>
        </div>

        <div className="flex flex-col justify-start items-start gap-2 my-2 text-lg">
          <span className=""> Binyamin</span>
          <span className="">CEO, BSJ Consltant & Immigiration</span>
        </div>
      </div>
    </section>
  );
};

export default CEOSection;
