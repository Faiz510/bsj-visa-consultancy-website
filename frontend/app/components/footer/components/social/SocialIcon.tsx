import Image from 'next/image';
import { motion } from 'framer-motion';
import Link from 'next/link';

interface SocailIconProp {
  src: string;
  alt: string;
  href: string;
}

const SocialIcon: React.FC<SocailIconProp> = ({ src, alt, href }) => {
  return (
    <Link href={`${href}`} target="_blank">
      <motion.div
        className="cursor-pointer"
        whileHover={{ scale: 1.1, transition: { duration: 0.3 }, opacity: 0.8 }}
      >
        {' '}
        <Image src={src} width={35} height={35} alt={`${alt} icon`} />
      </motion.div>
    </Link>
  );
};

export default SocialIcon;
