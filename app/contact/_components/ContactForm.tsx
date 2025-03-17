'use client';
import React from 'react';

const ContactForm = () => {
  const submitHandler = () => {
    alert('submited');
  };

  return (
    <div className="bg-white rounded-2xl px-8  flex justify-start items-start flex-col w-[50%]]">
      <h3 className="text-secondary text-3xl my-6 font-medium"> Contact Us</h3>
      <form action="" onSubmit={submitHandler}>
        <input
          placeholder="Full Name"
          className="w-[100%] focus:outline-none my-2 px-1 text-xl border-[1px] border-secondary/50  text-secondary/85"
          required
        />
        <input
          placeholder="Email"
          className="w-[100%] focus:outline-none my-2 px-1 text-xl border-[1px] border-secondary/50  text-secondary/85"
          required
        />
        <input
          placeholder="Subject"
          className="w-[100%] focus:outline-none my-2 px-1 text-xl border-[1px] border-secondary/50  text-secondary/85"
          required
        />
        <textarea
          name=""
          id=""
          placeholder="Your Message"
          className="w-[100%] focus:outline-none my-2 px-1 text-xl border-[1px] border-secondary/50  text-secondary/85"
        />
        <button
          type="submit"
          className="bg-secondary/90 border-none px-4 text-white cursor-pointer tracking-wider py-1  my-6"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
