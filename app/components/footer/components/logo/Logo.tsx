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
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex magni nemo
        similique a mollitia, facilis sed quaerat error facere odio.
      </p>
    </div>
  );
};

export default Logo;
