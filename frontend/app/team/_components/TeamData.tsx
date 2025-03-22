import profilePic from '@/public/team/profile-picture.webp';
import hasroonImg from '@/public/team/hasroon-profile.jpg';
import samroonImg from '@/public/team/samroon-profile.jpg';
import romanImg from '@/public/team/roman-profile.jpg';
import faroonImg from '@/public/team/faroon-profile.jpg';
import faizyabProfile from '@/public/team/faizyab-profile.png';
import amirProfile from '@/public/team/amir-profile.jpg';

interface TEAM_DATA_TYPE {
  name: string;
  designation: string;
  picture: string;
}

const TEAM_DATA: TEAM_DATA_TYPE[] = [
  {
    name: 'Samroon',
    designation: 'Director',
    picture: `${samroonImg.src}`,
  },
  {
    name: 'Hasroon',
    designation: 'Operation Manager',
    picture: `${hasroonImg.src}`,
  },
  {
    name: 'Kashif',
    designation: 'Managing Director',
    picture: `${profilePic.src}`,
  },
  {
    name: 'Amir ',
    designation: 'Director UK',
    picture: `${amirProfile.src}`,
  },
  {
    name: 'Faizyab Khalid',
    designation: 'Digital Strategy Consltant',
    picture: `${faizyabProfile.src}`,
  },
  {
    name: 'Faroon Arif',
    designation: 'Digital Marketer',
    picture: `${faroonImg.src}`,
  },
  {
    name: 'Roman CJ',
    designation: 'Graphic Designer',
    picture: `${romanImg.src}`,
  },
];

export default TEAM_DATA;
