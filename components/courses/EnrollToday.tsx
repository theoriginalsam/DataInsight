import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHeadset,
  faBriefcase,
  faProjectDiagram,
} from "@fortawesome/free-solid-svg-icons";
import InfoCard from "../card/InfoCard";

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
          <InfoCard
            title="Job Network"
            description="We have a network of employers constantly looking to hire talented individuals like you."
            icon={faBriefcase}
          />
          <InfoCard
            title="Support"
            description="Get exceptional support from instructors and course mentors to ensure you succeed in your learning journey."
            icon={faHeadset}
          />
          <InfoCard
            title="Projects"
            description="Build exciting projects with guidance from experienced mentors to enhance your skills and portfolio."
            icon={faProjectDiagram}
          />
        </div>
      </div>
    </section>
  );
};

export default EnrollToday;
