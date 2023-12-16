import Head from "next/head";
import Link from "next/link";
import Waves from "../components/Waves";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTrophy,
  faChartLine,
  faUser,
  faProjectDiagram,
} from "@fortawesome/free-solid-svg-icons";

const about = () => {
    return ( 

      
      <div>
           <Head>
        <title>About Us | AI Consulting</title>
      </Head>
        
        <div className="flex flex-col items-center justify-center h-[50vh]  md:h-[75vh]  bg-gradient-to-r from-primarylight to-primary">
  <div className="text-center text-white">
    <h1 className="font-sans font-bold text-4xl md:text-7xl">ABOUT</h1>
    <h4 className="font-sans font-bold text-xl md:text-2xl mt-4 md:mt-5">
      We're here for your A.I. and Big Data needs.
      
    </h4>
  </div>
</div>

    
    
    <div >
   
     
    <div className="flex flex-col md:flex-row items-center justify-center h-screen mt-[1%] md:-mt-[5%]">
  <div className="max-w-4xl md:w-1/2 text-primarylight rounded-md shadow-lg p-8 md:mr-4">
    <h2 className="text-2xl font-bold mb-4">About Us</h2>
    <p className="text-xl mb-8">
      At AI Consulting, we're passionate about helping businesses leverage the
      power of artificial intelligence to solve complex problems and drive
      growth.
    </p>
    <p className="text-xl mb-8">
      Our team of expert data scientists, engineers, and machine learning
      specialists work together to build custom AI solutions that are tailored
      to your specific business needs. We believe that AI has the potential to
      revolutionize the way businesses operate, and we're dedicated to helping
      our clients stay ahead of the curve.
    </p>
    <p className="text-xl">
      Whether you're looking to implement AI for the first time or need help
      optimizing your existing AI systems, we're here to help. Contact us today
      to learn more about how we can help your business succeed with AI.
    </p>
  </div>
  <div className="w-full md:w-1/2 flex justify-center">
    <img src="https://assets.website-files.com/61554cf069663530fc823d21/637e608d345b29800e3870cb_image-2.webp" alt="Your Image" className="max-w-md rounded-md shadow-lg" />
  </div>
</div>

      <section className="bg-gray-100 mt-[25%] md:mt-[2%] ">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-primary mb-4">
              Our Achievements
            </h2>
            <p className="text-lg text-gray-500">
              We're proud to have accomplished the following in our AI
              consulting work.
            </p>
          </div>
          <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-4">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="flex items-center justify-center h-12 w-12 rounded-md bg-primary text-white">
                <FontAwesomeIcon icon={faTrophy} className="h-6 w-6" />
              </div>
              <div className="mt-5">
                <p className="text-lg font-bold text-gray-700">
                  50+ successful projects delivered
                </p>
                <p className="mt-2 text-base text-gray-500">
                  We have a proven track record of delivering successful AI
                  projects for our clients.
                </p>
              </div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="flex items-center justify-center h-12 w-12 rounded-md bg-primary text-white">
                <FontAwesomeIcon icon={faChartLine} className="h-6 w-6" />
              </div>
              <div className="mt-5">
                <p className="text-lg font-bold text-gray-700">
                  20% increase in revenue for clients
                </p>
                <p className="mt-2 text-base text-gray-500">
                  Our AI solutions have helped our clients achieve significant
                  revenue growth.
                </p>
              </div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="flex items-center justify-center h-12 w-12 rounded-md bg-primary text-white">
                <FontAwesomeIcon icon={faUser} className="h-6 w-6" />
              </div>
              <div className="mt-5">
                <p className="text-lg font-bold text-gray-700">
                  50+ satisfied clients
                </p>
                <p className="mt-2 text-base text-gray-500">
                  We pride ourselves on delivering top-quality AI consulting
                  services that leave our clients happy and satisfied.
                </p>
              </div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="flex items-center justify-center h-12 w-12 rounded-md bg-primary text-white">
                <FontAwesomeIcon icon={faProjectDiagram} className="h-6 w-6" />
              </div>
              <div className="mt-5">
                <p className="text-lg font-bold text-gray-700">
                  Expertise in a wide range of AI applications
                </p>
                <p className="mt-2 text-base text-gray-500">
                  From computer vision to natural language processing, we have
                  extensive experience in a variety of AI applications.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
    
  
    </div>


     );
}
 
export default about;