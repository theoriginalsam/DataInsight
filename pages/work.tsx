import Head from 'next/head';
import { workerData } from 'worker_threads';


function WorkWithUs() {
  const handleSubmit = (event: { preventDefault: () => void; }) => {
    event.preventDefault();
    // Handle form submission logic here
  };

  return (
    <div className="">
      <Head>
        <title>Work With Us | Your Company Name</title>
        <meta name="description" content="Join our team and help us change the world with AI and Big Data!" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="flex flex-col items-center justify-center h-[50vh]  md:h-[75vh]  bg-gradient-to-r from-primarylight to-primary">
  <div className="text-center text-white">
    <h1 className="font-sans font-bold text-4xl md:text-7xl">Request a Demo</h1>
    <h4 className="font-sans font-bold text-xl md:text-2xl mt-4 md:mt-5">
      Tell us your needs
    </h4>
  </div>
</div>

      <main className="max-w-lg mx-auto my-10 p-6 bg-white rounded-lg shadow-xl">
        <h1 className="text-3xl font-roboto font-bold text-gray-900 mb-5">Join Our Team!</h1>
        <p className="text-gray-700 mb-5">We're always looking for talented individuals to help us build the future of AI and Big Data. Please fill out the form below and we'll get back to you as soon as possible:</p>

        <form onSubmit={handleSubmit} className="mb-5 ">
          <label htmlFor="name" className="block text-gray-700 font-bold mb-2">Name</label>
          <input type="text" id="name" name="name" required className="border border-gray-400 p-2 rounded-lg w-full mb-3" />

          <label htmlFor="email" className="block text-gray-700 font-bold mb-2">Email</label>
          <input type="email" id="email" name="email" required className="border border-gray-400 p-2 rounded-lg w-full mb-3" />
          <label htmlFor="phone" className="block text-gray-700 font-bold mb-2">Phone</label>
          <input type="phone" id="phone" name="phone" required className="border border-gray-400 p-2 rounded-lg w-full mb-3" />

          <label htmlFor="help" className="block text-gray-700 font-bold mb-2">How can we help you?</label>
          <select id="help" name="help" required className="border border-gray-400 p-2 rounded-lg w-full mb-3">
            <option value="">Please select an option</option>
            <option value="AI Researcher">AI Researcher</option>
            <option value="Data Analyst">Data Analyst</option>
            <option value="Software Engineer">Software Engineer</option>
          </select>

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
 )
  }
  export default WorkWithUs;
