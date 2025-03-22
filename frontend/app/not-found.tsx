import React from 'react';

const NotFoundPage = () => {
  return (
    <section className="flex justify-center items-center w-full h-[100vh]">
      <div className="text-center space-y-4">
        <h3 className="text-secondary/90 font-semibold text-5xl">
          Page Not Found
        </h3>
        <p className="text-secondary/90 font-semibold text-2xl tracking-wider">
          The the page your requested is not found!
        </p>
      </div>
    </section>
  );
};

export default NotFoundPage;
