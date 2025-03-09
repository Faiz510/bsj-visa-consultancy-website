import Image from 'next/image';
import React from 'react';
import image4 from '@/public/HeroImages/image-4.jpg';
import IconBox from './IconBox';
import { FaUserGraduate } from 'react-icons/fa6';
import { AiOutlineCustomerService } from 'react-icons/ai';
import { GiTeacher } from 'react-icons/gi';

const ChooseUs = () => {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 gap-4 py-10 px-4 md:px-20">
      <div className="flex justify-between items-center w-full">
        <Image
          src={image4.src}
          alt="choose use section image"
          width={600}
          height={700}
          className="rounded-xl shadow-md"
        />
      </div>
      <div>
        <div>
          <h3 className="text-4xl text-black font-medium -tracking-wider my-2">
            Why Choose Us?
          </h3>
          <p className="text-lg font-light opacity-80 text-secondary">
            We are unique in the quality of our services and stand out from our
            competitors. Unlike other consultancy firms in Pakistan, we truly
            care our students.
          </p>
        </div>

        <div>
          <div>
            <IconBox
              title="Expert Guidance"
              desc="Our team of experts provides personalized guidance to help you navigate the complexities of visa applications"
              Icon={GiTeacher}
            />

            <IconBox
              title="Customer Satisfaction"
              desc="Our priority is customer satisfaction, and we strive to provide the best service possible to our clients"
              Icon={AiOutlineCustomerService}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ChooseUs;
