import { IconType } from 'react-icons';
import { IoLogoWhatsapp } from 'react-icons/io';
import { FaPhoneAlt } from 'react-icons/fa';
import { FaLocationDot } from 'react-icons/fa6';
import { MdEmail } from 'react-icons/md';

interface CONTACT_INFO_TYPE {
  name?: string;
  icon?: IconType;
  detail: string;
}

const CONTACT_INFO: CONTACT_INFO_TYPE[] = [
  {
    name: 'WhatsApp',
    icon: IoLogoWhatsapp,
    detail: '+92 318 9185600',
  },
  {
    name: 'Phone',
    icon: FaPhoneAlt,
    detail: '+92 091 3104369',
  },
  {
    name: 'UK No',
    icon: FaPhoneAlt,
    detail: '+44 7413 182059',
  },
  {
    name: 'Email',
    icon: MdEmail,
    detail: 'bsconsultanlts999@gmail.com',
  },
  {
    name: 'Location',
    icon: FaLocationDot,
    detail: 'TF-347, Deans Trade Center Peshawar Cantt Peshawar',
  },
];

export default CONTACT_INFO;
