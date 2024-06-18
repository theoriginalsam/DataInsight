import React from "react";
import CourseInformation from "../components/courses/viewtimeline/CourseInfromation";
import FillForm from "../components/courses/viewtimeline/FillForm";
import CurriculumCard from "../components/courses/viewtimeline/CurriculumCard";

const Timeline: React.FC = () => {
  return (
    <div className="bg-primary text-black">
      <div className="min-h-screen bg-gray-100 p-6">
        <div className="max-w-7xl mx-auto">
          <section className="md:grid-cols-2 gap-8 mb-12 py-20">
            <div>
              <CourseInformation />
            </div>
          </section>

          <section className="grid grid-cols-1 md:grid-cols-2 gap-4 bg-white rounded-lg shadow-md pt-10 px-6 items-start">
            <div className="w-full md:col-span-1 px-4 py-4">
              <CurriculumCard />
            </div>
            <div className="md:col-span-1">
              <div className="md:top-0 px-4 py-4">
                <FillForm />
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Timeline;
