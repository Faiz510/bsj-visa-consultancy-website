import SocialIcon from './SocialIcon';

import Fb from '@/public/Footer-images/facebook.svg';
import Insta from '@/public/Footer-images/instagram.svg';
import Twitter from '@/public/Footer-images/twitter.svg';
import LinkedIn from '@/public/Footer-images/linkedin.svg';
import Headings from '../../Headings';

const Social = () => {
  return (
    <div className="flex justify-center items-start flex-col gap-5">
      <Headings heading="Social Links" />

      <div className="flex justify-center items-start gap-4">
        <SocialIcon
          href="https://www.facebook.com/share/16UUB2S5nx/"
          src={Fb}
          alt="facebook"
        />
        <SocialIcon
          href="https://www.instagram.com/bsjconsultants/"
          src={Insta}
          alt="Instagram"
        />
        <SocialIcon href="" src={Twitter} alt="Twitter" />
        <SocialIcon href="" src={LinkedIn} alt="Linked" />
      </div>
    </div>
  );
};

export default Social;
