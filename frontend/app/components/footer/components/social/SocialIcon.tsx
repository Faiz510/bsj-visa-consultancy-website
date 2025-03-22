import Image from 'next/image';
import { motion } from 'framer-motion';

interface SocailIconProp {
  src: string;
  alt: string;
}

const SocialIcon: React.FC<SocailIconProp> = ({ src, alt }) => {
  return (
    <motion.div
      className="cursor-pointer"
      whileHover={{ scale: 1.1, transition: { duration: 0.3 }, opacity: 0.8 }}
    >
      {' '}
      <Image src={src} width={35} height={35} alt={`${alt} icon`} />
    </motion.div>
  );
};

export default SocialIcon;
