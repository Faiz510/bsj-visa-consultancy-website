'use client';

import ServiceCard from './ServiceCard';
import arrowRightIcon from '@/public/home-images/services/arrow-right-bsj-icon.svg';
import { motion } from 'framer-motion';
import HomeSectionHeading from '../HomeSectionHeading';
import SERVICES_DATA from '@/app/services/_components/ServicesData';

const Service = () => {
  const row = (Index: number): boolean => (Index % 2 === 0 ? true : false);

  return (
    <motion.section
      className="my-10 md:px-20 px-4 py-6"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1, transition: { duration: 0.6 } }}
      viewport={{ once: true }}
    >
      <HomeSectionHeading
        SectionHeading="What We Offer"
        key={'servie_heading'}
      />

      <div className="text-center text-secondary my-6">
        <h3 className="text-2xl font-medium tracking-wider">
          {' '}
          We Strive to Provide the Finest Service Possible to Our Clients
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 my-6">
          {SERVICES_DATA.map((service, i) => {
            const { Icon, title, description } = service;
            return (
              <ServiceCard
                Icon={Icon}
                title={title}
                description={
                  description.split(' ').slice(0, 25).join(' ') + ' ...'
                }
                color={row(i) ? 'secondary' : 'primary'}
                key={i}
              />
            );
          })}
          <ServiceCard
            Icon={arrowRightIcon}
            title={'Veiw Services'}
            description="To complete view of all Service click on and you will navigated to Services Page"
            color="primary"
          />
        </div>
      </div>
    </motion.section>
  );
};

export default Service;
