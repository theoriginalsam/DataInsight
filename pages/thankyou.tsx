// pages/thankyou.js

import React from 'react';
import { useRouter } from 'next/router';

const ThankYouPage = () => {
  const router = useRouter();

  const returnHome = () => {
    router.push('/');
  };

  return (
    <div className=" min-h-screen  flex items-center justify-center bg-gradient-to-r from-primarylight to-primary">
      <div className="max-w-md mx-auto p-6 bg-white w-[60%] shadow-md rounded-md">
        <h1 className="text-3xl md:text-6xl font-bold text-center text-gray-800 ">
          Thank You!
        </h1>
        <p className="text-center text-small md:text-2xl text-gray-700 mb-6">
          Your message has been received.
          <br />
          We appreciate your time and will get back to you shortly.
        </p>
   
        <div className="mt-8 text-center">
          <button
            className="bg-gradient-to-r from-primarylight to-primary text-white rounded-md p-2 font-semibold hover:underline"
            onClick={returnHome}
          >
            Return to Home
          </button>
        </div>
      </div>
    </div>
  );
};

export default ThankYouPage;
