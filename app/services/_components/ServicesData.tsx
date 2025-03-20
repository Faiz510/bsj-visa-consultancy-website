import student from '@/public/service/study.jpg';
import scholarship from '@/public/service/Scholarship.jpg';
import studyAbroadConsultant from '@/public/service/Study-abroad-consultant.jpg';
import hotel from '@/public/service/hotel.jpg';
import travel from '@/public/service/travel.jpg';
import globeIcon from '@/public/home-images/services/globe-bsj-icon.svg';
import bookIcon from '@/public/home-images/services/book-bsj-icon.svg';
import hotelIcon from '@/public/home-images/services/hotel-bsj-icon.svg';
import scholarshipIcon from '@/public/home-images/services/scholarship-bsj-icon.svg';
import studentIcon from '@/public/home-images/services/student-bsj-icon.svg';

interface SERVICES_DATA_TYPE {
  title: string;
  description: string;
  Icon: string;
  image: string;
  points: string[];
}

const SERVICES_DATA: SERVICES_DATA_TYPE[] = [
  {
    Icon: `${studentIcon.src}`,
    title: 'Student Visa',
    description:
      'Planning to study abroad? We provide expert guidance to help you navigate the entire student visa process smoothly. From choosing the right study destination and securing admissions to preparing financial documents and visa applications, we ensure a hassle-free experience so you can focus on your academic journey with confidence.',
    image: `${student.src}`,
    points: [
      'Complete student visa assistance',
      'University selection guidance',
      'Financial document preparation',
      'Smooth application process',
    ],
  },
  {
    Icon: `${globeIcon.src}`,
    title: 'Tour Packages',
    description:
      'Dreaming of an unforgettable travel experience? Our carefully curated tour packages are designed to fit every traveler’s needs—whether you’re a solo explorer, a family on vacation, or a group of adventure seekers. We take care of everything, from itinerary planning to accommodations, so you can enjoy your trip stress-free.',
    image: `${travel.src}`,
    points: [
      'Customized travel itineraries',
      'Hassle-free bookings & stays',
      'Solo, group, and family trips',
      '24/7 travel support',
    ],
  },
  {
    Icon: `${bookIcon.src}`,
    title: 'Study Abroad Consultancy',
    description:
      'Studying abroad is a life-changing decision, and we’re here to make it easier. Our consultants help you choose the best universities, craft compelling applications, secure scholarships, and manage all necessary paperwork, ensuring you take the right step toward a successful international education.',
    image: `${studyAbroadConsultant.src}`,
    points: [
      'Best university selection',
      'Application & visa assistance',
      'Scholarship guidance available',
      'Personalized study plans',
    ],
  },
  {
    Icon: `${scholarshipIcon.src}`,
    title: 'Scholarship Assistance',
    description:
      'Higher education can be expensive, but we believe finances shouldn’t hold back your dreams. We assist students in finding and applying for scholarships that match their academic achievements and financial needs, making quality education more accessible and affordable for all.',
    image: `${scholarship.src}`,
    points: [
      'Find top scholarship opportunities',
      'Eligibility & application support',
      'Reduce education costs',
      'Guidance for merit-based aid',
    ],
  },
  {
    Icon: `${hotelIcon.src}`,
    title: 'Hotel Reservation',
    description:
      "Finding the perfect stay is crucial for a great travel experience. Whether you're looking for luxury hotels, budget stays, or unique accommodations, we help you secure the best deals so you can enjoy a comfortable and convenient stay, no matter where you go.",
    image: `${hotel.src}`,
    points: [
      'Best hotel deals guaranteed',
      'Luxury & budget-friendly options',
      'Instant booking confirmation',
      'Safe & verified accommodations',
    ],
  },
];

export default SERVICES_DATA;
