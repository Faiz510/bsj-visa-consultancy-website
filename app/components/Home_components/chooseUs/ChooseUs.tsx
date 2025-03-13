import Image from 'next/image';
import React from 'react';
import IconBox from './IconBox';
import { AiOutlineCustomerService } from 'react-icons/ai';
import { GiTeacher } from 'react-icons/gi';
import chooseUsImg from '@/public/home-images/Choose-img.jpg';

const ChooseUs = () => {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 gap-4 py-10 px-4 md:px-20">
      <div className="flex justify-between items-center w-full">
        <Image
          src={chooseUsImg.src}
          alt="choose use section image"
          width={600}
          height={200}
          className="rounded-xl shadow-md w-[600px] h-[550px] object-bottom object-cover"
        />
      </div>
      <div className="flex justify-center items-center flex-col gap-4">
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
