import React from "react";

const ApplicationForm: React.FC = () => {
  return (
    <div className="p-6 bg-white rounded-lg shadow-md w-full max-w-md">
      <h2 className="text-xl font-bold mb-4">
        Fill the form below to get started on your Data Analytics Journey with
        Experts
      </h2>
      <form>
        <div className="mb-4">
          <label className="block text-gray-700">First Name *</label>
          <input
            type="text"
            className="w-full p-2 border border-gray-300 rounded-md"
            placeholder="E.g. John"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Middle Name</label>
          <input
            type="text"
            className="w-full p-2 border border-gray-300 rounded-md"
            placeholder="E.g. Smith"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Last Name *</label>
          <input
            type="text"
            className="w-full p-2 border border-gray-300 rounded-md"
            placeholder="E.g. Doe"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Email Address *</label>
          <input
            type="email"
            className="w-full p-2 border border-gray-300 rounded-md"
            placeholder="Email Address"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">
            Please upload your resume *
          </label>
          <input
            type="file"
            className="w-full p-2 border border-gray-300 rounded-md"
          />
        </div>
        <button
          type="submit"
          className="w-full bg-blue-600 text-white p-2 rounded-md"
        >
          Enroll
        </button>
      </form>
    </div>
  );
};

export default ApplicationForm;
