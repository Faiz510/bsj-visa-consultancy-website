import React from 'react';
import { FaWhatsapp } from 'react-icons/fa6';
import Info from './Info';
import { FiPhoneCall } from 'react-icons/fi';
import { CiLocationOn } from 'react-icons/ci';
import { TfiEmail } from 'react-icons/tfi';

const ContactInfo = () => {
  return (
    <div className="flex justify-center items-start flex-col gap-5">
      <h4 className="text-secondary opacity-90 font-semibold">Contact Info</h4>

      <div className="flex justify-center items-start flex-col gap-1">
        <Info Icon={FaWhatsapp} detail="+92 318 9185600" />
        <Info Icon={FiPhoneCall} detail="+92 091 3104369" />
        <Info Icon={FiPhoneCall} detail="+44 7413 182059" />
        <Info Icon={TfiEmail} detail="bsconsultanlts999@gmail.com" />
        <Info
          Icon={CiLocationOn}
          detail="TF-347, Deans Trade Center Peshawar Cantt Peshawar"
        />
      </div>
    </div>
  );
};

export default ContactInfo;
