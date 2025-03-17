import Link from 'next/link';
import Logo from '@/public/LOGO.png';
import Image from 'next/image';

const NavLogo = () => {
  return (
    <Link href={'/'}>
      <Image src={Logo} alt="Logo img" width={75} height={75} priority />
    </Link>
  );
};

export default NavLogo;
