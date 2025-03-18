import thailand from '@/public/home-images/destination/tourist/thailand.jpg';
import singapore from '@/public/home-images/destination/tourist/singapore.jpeg';
import malaysia from '@/public/home-images/destination/tourist/malaysia.jpg';
import dubai from '@/public/home-images/destination/tourist/dubia.jpeg';
import maldives from '@/public/home-images/destination/tourist/maldives.jpg';
import bangkok from '@/public/home-images/destination/tourist/bangkok.jpeg';
import azherbhaijan from '@/public/home-images/destination/tourist/azherbhaijan.jpg';
import northCyprus from '@/public/home-images/destination/students/north-cyprus.jpg';
import russia from '@/public/home-images/destination/students/mascow.jpg';
import uk from '@/public/home-images/destination/students/uk.jpeg';
import china from '@/public/home-images/destination/students/china.jpeg';
import paris from '@/public/home-images/destination/tourist/paris.jpg';

enum VisaType {
  TOURIST = 'Tourist Visa',
  STUDENT = 'Student Visa',
}

interface DestinationDataType {
  image: string;
  title: string;
  visa: VisaType;
}
const DESTINATION_DATA: DestinationDataType[] = [
  {
    image: `${russia.src}`,
    title: 'Russia',
    visa: VisaType.STUDENT,
  },
  {
    image: `${northCyprus.src}`,
    title: 'North Cyprus',
    visa: VisaType.STUDENT,
  },
  {
    image: `${thailand.src}`,
    title: 'Thailand',
    visa: VisaType.TOURIST,
  },
  {
    image: `${singapore.src}`,
    title: 'Singapore',
    visa: VisaType.TOURIST,
  },
  {
    image: `${malaysia.src}`,
    title: 'Malaysia',
    visa: VisaType.TOURIST,
  },
  {
    image: `${dubai.src}`,
    title: 'Dubai',
    visa: VisaType.TOURIST,
  },
  {
    image: `${maldives.src}`,
    title: 'Maldives',
    visa: VisaType.TOURIST,
  },
  {
    image: `${bangkok.src}`,
    title: 'Bangkok',
    visa: VisaType.TOURIST,
  },
  {
    image: `${uk.src}`,
    title: 'UK',
    visa: VisaType.STUDENT,
  },
  {
    image: `${china.src}`,
    title: 'China',
    visa: VisaType.STUDENT,
  },
  {
    image: `${paris.src}`,
    title: 'Schengen',
    visa: VisaType.STUDENT,
  },
  {
    image: `${azherbhaijan.src}`,
    title: 'Azherbhaijan',
    visa: VisaType.TOURIST,
  },
];

export default DESTINATION_DATA;
