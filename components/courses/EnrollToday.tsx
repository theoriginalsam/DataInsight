import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHeadset,
  faBriefcase,
  faProjectDiagram,
} from "@fortawesome/free-solid-svg-icons";

const EnrollToday = () => {
  return (
    <section className="bg-gray-100 py-10">
      <div className="max-w-7xl mx-auto px-6  sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-primary mb-4">
            Unlock Premium Access
          </h2>
          <p className="text-lg text-gray-500">
            Enroll today to get exclusive benefits for your learning journey.
          </p>
        </div>
        <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <div className="flex items-center justify-center h-12 w-12 rounded-md bg-primary text-white">
              <FontAwesomeIcon icon={faBriefcase} className="h-6 w-6" />
            </div>
            <div className="mt-5">
              <p className="text-lg font-bold text-gray-700">Job Network</p>
              <p className="mt-2 text-base text-gray-500">
                We have a network of employers constantly looking to hire
                talented individuals like you.
              </p>
            </div>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <div className="flex items-center justify-center h-12 w-12 rounded-md bg-primary text-white">
              <FontAwesomeIcon icon={faProjectDiagram} className="h-6 w-6" />
            </div>
            <div className="mt-5">
              <p className="text-lg font-bold text-gray-700">Projects</p>
              <p className="mt-2 text-base text-gray-500">
                Build exciting projects with guidance from experienced mentors
                to enhance your skills and portfolio.
              </p>
            </div>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <div className="flex items-center justify-center h-12 w-12 rounded-md bg-primary text-white">
              <FontAwesomeIcon icon={faHeadset} className="h-6 w-6" />
            </div>
            <div className="mt-5">
              <p className="text-lg font-bold text-gray-700">Support</p>
              <p className="mt-2 text-base text-gray-500">
                Get exceptional support from instructors and course mentors to
                ensure you succeed in your learning journey.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EnrollToday;
