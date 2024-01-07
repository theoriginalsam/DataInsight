"use client"
import Link from "next/link";
import Waves from "../components/Waves";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTrophy,
  faChartLine,
  faUser,
  faProjectDiagram,
} from "@fortawesome/free-solid-svg-icons";
import  Webdevelopment from "../pages/Services/webDevelopment"


export default function Home() {
  return (
    <>
      <section
        id="hero-section"
        className="w-screen min-h-screen  flex justify-center items-center bg-primary text-white "
      >
        <div className="text-center">
          <h1 className="font-sans font-bold text-4xl md:text-7xl">
            DataInsight
          </h1>
          <h4 className="font-sans font-bold text-lg md:text-xl pt-3 md:pt-5">
            We're here for your A.I. and Big Data needs.
          </h4>
        </div>
        <style jsx>{`
          /* Add your keyframes outside the component */
          @keyframes fade-in {
            from {
              opacity: 0;
            }
            to {
              opacity: 1;
            }
          }

          /* Apply the animation to the headings */
          h1,
          h4 {
            animation: fade-in 1s ease-in forwards;
            opacity: 0;
          }
        `}</style>

        <Waves />
      </section>

      <section>
        {/*
    <div className="flex flex-col md:flex-row items-center justify-center h-screen md:-mt-[5%]">
      <div className="max-w-4xl md:w-1/2 text-primarylight rounded-md shadow-lg p-8 md:mr-10">
        <div className="flex flex-col md:flex-row items-center justify-center">
          <div className="md:w-1/2 md:mr-8">
            <img src="https://assets.website-files.com/61554cf069663530fc823d21/637e608d345b29800e3870cb_image-2.webp" alt="Your Image" className="w-full rounded-md shadow-lg" />
          </div>
          <div className="md:w-1/2">
            <h2 className="text-2xl font-bold mb-4">About Us</h2>
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
        </div>
      </div>
    </div>
  */}
      </section>

      <section className="bg-gray-100 py-16">
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
      <Webdevelopment/>
    </>
  );
}
