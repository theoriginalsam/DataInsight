import React from "react";
import CourseInformation from "../components/courses/viewtimeline/CourseInfromation";
import FillForm from "../components/courses/viewtimeline/FillForm";
import CurriculumCard from "../components/courses/viewtimeline/CurriculumCard";

const Timeline: React.FC = () => {
  return (
    <div className="bg-primary text-black">
      <div className="min-h-screen bg-gray-100 p-6">
        <div className="max-w-7xl mx-auto">
          <section className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12 py-20">
            <div>
              <CourseInformation />
            </div>
            <div>
              <FillForm />
            </div>
          </section>
          <section className=" bg-white rounded py-2 item-center ">
            <CurriculumCard />
          </section>
        </div>
      </div>
    </div>
  );
};

export default Timeline;
