import Image from 'next/image';
import LogoImg from '@/public/LOGO.png';

const Logo = () => {
  return (
    <div className="flex justify-center items-start flex-col gap-3">
      <Image
        src={LogoImg.src}
        alt="BSJ logo image"
        width={140}
        height={140}
        priority
      />
      <p className="pl-4 text-secondary opacity-85">
        Your trusted partner in immigration services! Whether you&apos;re
        planning to study abroad or explore new destinations.
      </p>
    </div>
  );
};

export default Logo;
