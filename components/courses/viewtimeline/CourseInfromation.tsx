import React from "react";
import SectionTitle from "../../SectiionTitle";

const CourseInformation = () => {
  return (
    // <div className="max-w-4xl mx-auto p-8 bg-white shadow-md rounded-lg">
    <div>
      <section id="features" className="flex pt-9  bg-primary text-white">
        <div className="w-full mx-10 px-10">
          <div className="text-center">
            <SectionTitle
              title="Data Analytics Course"
              paragraph="Embark on a transformative career journey with our Data Analyst course.
        Meticulously crafted for essential skills in data prep, analysis, and
        visualization, earning you a coveted certification"
              center
            />
          </div>
        </div>
      </section>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-gray-100 p-8 rounded-lg mb-6 bg-white">
          <h2 className="text-2xl  font-semibold mb-4">
            Who is this course for?
          </h2>
          <p className="text-lg mb-2">
            If you're eager to learn and explore the data industry or
            contemplating a career change, this Data Analytics Course is for
            you, providing hands-on introduction, covering analytics, basic
            python and industry relevant experience and job opportunities with
            major Healthcare and Manufacture data in the US.
          </p>
          <p className="text-red-500 font-semibold">
            No Data - Experience required
          </p>
        </div>

        <div className="bg-gray-100 pt-6 rounded-lg mb-6 shadow-md bg-white text-black">
          <div className="flex flex-col items-center ">
            <h3 className="bg-blue-600 text-3xl text-bold text-primary py-3 px-6 rounded-lg mb-4 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-opacity-50">
              Application Open for First Batch!
            </h3>
          </div>
          <div className="text-center">
            <p className="text-2xl font-semibold text-gray-800 mb-2">
              Price: $2500
            </p>
            <p className="text-lg text-gray-600 mb-4">
              (Deposit: $250 + After Enrollment: $2250)
            </p>
            <button className="bg-primary text-white border border-blue-600 py-3 px-6 rounded-lg mb-4 hover:bg-secondary focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-opacity-50">
              Enroll Now
            </button>
          </div>
          <p className="bg-purple-600 text-primary text-center py-3 px-6 rounded-lg hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-opacity-50">
            Scholarships and Loans Available
          </p>
        </div>
      </div>
    </div>
  );
};

export default CourseInformation;
