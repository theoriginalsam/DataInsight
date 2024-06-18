import React from "react";

const CourseInformation = () => {
  return (
    <div className="max-w-4xl mx-auto p-8 bg-white shadow-md rounded-lg">
      <h1 className="text-4xl font-bold text-center mb-6">
        Data Analytics Course
      </h1>
      <p className="text-lg mb-6 text-center">
        Embark on a transformative career journey with our Data Analyst course.
        Meticulously crafted for essential skills in data prep, analysis, and
        visualization, earning you a coveted certification and{" "}
        <em>many job opportunities</em>.
      </p>

      <div className="bg-gray-100 p-6 rounded-lg mb-6">
        <h2 className="text-2xl font-semibold mb-4">Who is this course for?</h2>
        <p className="text-lg mb-2">
          If you're eager to learn and explore the data industry or
          contemplating a career change, this Data Analytics Course is for you,
          providing hands-on introduction, covering analytics, basic python and
          industry relevant experience and job opportunities with major
          Healthcare and Manufacture data in the US.
        </p>
        <p className="text-red-500 font-semibold">
          No Data - Experience required
        </p>
      </div>

      <div className="flex flex-col items-center mb-6">
        <button className="bg-blue-600 text-white py-3 px-6 rounded-lg mb-4 hover:bg-blue-700">
          Application Open for first batch!
        </button>
        <button className="bg-white text-blue-600 border border-blue-600 py-3 px-6 rounded-lg hover:bg-blue-50">
          Enroll Now
        </button>
      </div>

      <div className="text-center">
        <p className="text-xl font-semibold">Price: $2500</p>
        <p className="text-md">(Deposit: $250 + After Enrollment: $2250)</p>
        <button className="bg-purple-600 text-white py-3 px-6 rounded-lg mt-4 hover:bg-purple-700">
          Scholarships and Loan Available
        </button>
      </div>
    </div>
  );
};

export default CourseInformation;
