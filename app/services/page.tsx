import Banner from '../components/Banner';
import serviceBanner from '@/public/service/service-banner.jpg';
import ServiceSection from './_components/serviceSection/ServiceSection';

const Service = () => {
  return (
    <div className="pt-16">
      <Banner title="Services page" bgImg={serviceBanner.src} />
      <ServiceSection />
    </div>
  );
};

export default Service;
