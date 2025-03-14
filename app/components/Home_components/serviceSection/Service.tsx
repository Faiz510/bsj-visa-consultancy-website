'use client';

import { FaArrowRight, FaGraduationCap } from 'react-icons/fa6';
import { FaGlobeAfrica } from 'react-icons/fa';
import { FaBookOpen } from 'react-icons/fa';
import ServiceCard from './ServiceCard';
import globeIcon from '@/public/home-images/services/globe-bsj-icon.svg';
import bookIcon from '@/public/home-images/services/book-bsj-icon.svg';
import hotelIcon from '@/public/home-images/services/hotel-bsj-icon.svg';
import scholarshipIcon from '@/public/home-images/services/scholarship-bsj-icon.svg';
import studentIcon from '@/public/home-images/services/student-bsj-icon.svg';
import arrowRightIcon from '@/public/home-images/services/arrow-right-bsj-icon.svg';

const Service = () => {
  return (
    <section className="my-10 md:px-20 px-4 py-6  bg-[#F3F4F6] ">
      <div className="text-center text-secondary my-6">
        <h3 className="text-5xl font-semibold tracking-wider">What We Offer</h3>
      </div>

      <div className="text-center text-secondary my-6">
        <h3 className="text-2xl font-medium tracking-wider">
          {' '}
          We Strive to Provide the Finest Service Possible to Our Clients
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 my-6">
          <ServiceCard
            Icon={studentIcon}
            title={'Student Visa'}
            description="We provide expert guidance for students looking to study abroad. From securing student visa approvals to assisting with university
              selection, scholarships, and accommodation, we ensure a seamless 
              journey for aspiring students."
            color="secondary"
          />

          <ServiceCard
            Icon={globeIcon}
            title={'Tour Packages'}
            description="Discover the world with our carefully curated tour packages. Whether you’re looking for group tours, solo travel, or family adventures, we offer personalized itineraries to make your trip memorable. 
            "
            color="primary"
          />

          <ServiceCard
            Icon={bookIcon}
            title={'Study Abroad Consultancy'}
            description="Navigating international education can be complex. We assist students in choosing the right university, preparing applications, securing scholarships, and handling the visa process with precision and care."
            color="secondary"
          />

          <ServiceCard
            Icon={scholarshipIcon}
            title={'Scholarship Assistance'}
            description="We help students secure scholarships by guiding them through the application process and eligibility requirements, making education more accessible and affordable."
            color="primary"
          />

          <ServiceCard
            Icon={hotelIcon}
            title={'Hotel Reservation'}
            description="We assist in finding and booking the best hotels, ensuring a comfortable and budget-friendly stay for your travel needs."
            color="secondary"
          />
          <ServiceCard
            Icon={arrowRightIcon}
            title={'Veiw Services'}
            description="To complete view of all Service click on and you will navigated to Services Page"
            color="primary"
          />
        </div>
      </div>
    </section>
  );
};

export default Service;
