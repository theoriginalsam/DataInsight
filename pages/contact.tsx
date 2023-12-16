import React from 'react';
import Head from 'next/head';

const Contact = () => {
  const handleSubmit = (event: { preventDefault: () => void; }) => {
    event.preventDefault();
    // Handle form submission logic here
  };

  return (
    <div>
      <Head>
        <title>Contact Us | AI Consulting</title>
        <meta name="description" content="Contact AI Consulting for your AI needs." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="flex flex-col items-center justify-center h-[50vh] md:h-[75vh] bg-gradient-to-r from-primarylight to-primary">
        <div className="text-center text-white">
          <h1 className="font-sans font-bold text-4xl md:text-7xl">CONTACT</h1>
          <h4 className="font-sans font-bold text-xl md:text-2xl mt-4 md:mt-5">
            We're here for your A.I. and Big Data needs.
          </h4>
        </div>
      </div>

      <main className="max-w-lg mx-auto my-10 p-6 bg-white rounded-lg shadow-xl">
        <h1 className="text-3xl font-roboto font-bold text-gray-900 mb-5">Contact US!</h1>
        <p className="text-gray-700 mb-5">"Unlock the Power of Data: Reach Out for Insightful Solutions!"</p>

        <form onSubmit={handleSubmit} className="mb-5 ">
          <label htmlFor="name" className="block text-gray-700 font-bold mb-2">Name</label>
          <input type="text" id="name" name="name" required className="border border-gray-400 p-2 rounded-lg w-full mb-3" />

          <label htmlFor="email" className="block text-gray-700 font-bold mb-2">Email</label>
          <input type="email" id="email" name="email" required className="border border-gray-400 p-2 rounded-lg w-full mb-3" />
          <label htmlFor="phone" className="block text-gray-700 font-bold mb-2">Phone</label>
          <input type="phone" id="phone" name="phone" required className="border border-gray-400 p-2 rounded-lg w-full mb-3" />

      

          <label htmlFor="message" className="block text-gray-700 font-bold mb-2">Message</label>
          <textarea id="message" name="message" className="border border-gray-400 p-2 rounded-lg w-full mb-3"></textarea>
          <label htmlFor="terms" className="block text-gray-700 font-bold mb-2">
  <input type="checkbox" id="terms" name="terms" required className="mr-2 leading-tight" />
  <span className="text-sm">
    I agree to the 
    <a> </a>
    <a href="#" className="text-blue-500 hover:secondary">
       terms and conditions
    </a>
  </span>
</label>
          <button type="submit" className="bg-primarylight hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" style={{ backgroundColor: '#0a315e', color: '#FFFFFF' }}>
  Submit
</button>

   </form>
   </main>
    </div>
  );
};

export default Contact;
