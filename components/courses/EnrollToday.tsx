import React from "react";

const EnrollToday = () => {
  return (
    <div className="flex flex-col items-left bg-primary justify-center border-2 m-6 p-6 border-3 border-gray-300 rounded-lg bg-gray-50 shadow-lg transition-transform duration-300 hover:scale-105">
      <h2 className="text-2xl font-bold mb-4 text-blue-">
        Enroll Today to get premium access to:
      </h2>
      <ul className="space-y-4">
        <li>
          <h3 className="text-xl font-semibold">Job Network</h3>
          <p className="text-gray-600">
            We have a network of employers constantly looking to hire.
          </p>
        </li>
        <li>
          <h3 className="text-xl font-semibold">Projects</h3>
          <p className="text-gray-600">
            Build exciting projects with guidance from mentors.
          </p>
        </li>
        <li>
          <h3 className="text-xl font-semibold">Support</h3>
          <p className="text-gray-600">
            Get exceptional support from instructors and course mentors.
          </p>
        </li>
      </ul>
    </div>
  );
};

export default EnrollToday;
