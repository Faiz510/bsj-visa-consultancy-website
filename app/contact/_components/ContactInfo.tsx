import React from 'react';
import CONTACT_INFO from './ContactData';

const ContactInfo = () => {
  return (
    <div className="flex justify-center gap-3 items-start opacity-80 z-30 flex-col">
      <h4 className="text-5xl text-white my-4">Contact Info</h4>

      {CONTACT_INFO.map((info) => (
        <div
          className="text-white text-start flex items-start justify-start gap-4"
          key={info.name}
        >
          <info.icon className="text-xl font-semibold mt-2" />{' '}
          <div className="flex flex-col gap-2 justify-start items-start my-0">
            <span className="uppercase text-lg text-gray-400 font-medium">
              {info.name} :
            </span>
            <span className="text-xl tracking-wide">{info.detail}</span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ContactInfo;
