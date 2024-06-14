import React from "react";

interface CourseDescriptionProps {
  title: string;
  description: string;
  whoIsThisFor: string;
  additionalInfo: string;
  price: string;
  deposit: string;
  afterEnrollment: string;
}

const CourseDescription: React.FC<CourseDescriptionProps> = ({
  title,
  description,
  whoIsThisFor,
  additionalInfo,
  price,
  deposit,
  afterEnrollment,
}) => {
  return (
    <div className="p-6 bg-white rounded-lg shadow-md w-full">
      <h1 className="text-3xl font-bold mb-4">{title}</h1>
      <p className="mb-4">{description}</p>
      <h2 className="font-bold mb-2">Who is this course for?</h2>
      <p className="mb-4">{whoIsThisFor}</p>
      <p className="mb-4">{additionalInfo}</p>
      <div className="flex justify-between items-center mt-4">
        <button className="bg-blue-600 text-white px-4 py-2 rounded-md">
          Application Open for first batch!
        </button>
        <button className="bg-white border border-blue-600 text-blue-600 px-4 py-2 rounded-md">
          Enroll Now
        </button>
      </div>
      <div className="mt-4 text-center">
        <p className="font-bold">Price: {price}</p>
        <p>
          (<span className="font-bold">Deposit:</span> {deposit} +{" "}
          <span className="font-bold">After Enrollment:</span> {afterEnrollment}
          )
        </p>
        <button className="mt-2 bg-blue-100 text-blue-600 px-4 py-2 rounded-md">
          Scholarships and Loan Available
        </button>
      </div>
    </div>
  );
};

export default CourseDescription;
