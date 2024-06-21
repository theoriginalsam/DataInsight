import Head from "next/head";
import Router from "next/router";
import React, { useState, ChangeEvent, FormEvent } from "react";

interface FormData {
  firstName: string;
  middleName: string;
  lastName: string;
  email: string;
  resume: File | null;
}

const FillForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    firstName: "",
    middleName: "",
    lastName: "",
    email: "",
    resume: null,
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value, files } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: files ? files[0] : value,
    }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    const data = new FormData();
    data.append("firstName", formData.firstName);
    data.append("middleName", formData.middleName);
    data.append("lastName", formData.lastName);
    data.append("email", formData.email);
    if (formData.resume) {
      data.append("resume", formData.resume);
    }

    try {
      const response = await fetch("/api/server", {
        method: "POST",
        body: data,
      });

      if (response.ok) {
        console.log("Form submitted successfully");
        // Reset form data after successful submission
        setFormData({
          firstName: "",
          middleName: "",
          lastName: "",
          email: "",
          resume: null,
        });
        Router.push("/thankyou");
      } else {
        console.error("Form submission failed");
      }
    } catch (error) {
      console.error("Error submitting the form:", error);
    }
  };

  return (
    <div>
      <Head>
        <title>Fill Form | AI Consulting site</title>
        <meta
          name="description"
          content="Fill the form to get started on your Data Analytics Journey with Experts."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="max-w-lg mx-auto p-8 bg-white shadow-md rounded-lg">
        <h1 className="text-2xl font-bold text-center mb-6">
          <a href="#" className="text-blue-600 hover:underline">
            Fill the form below to get started on your Data Analytics Journey
            with Experts
          </a>
        </h1>
        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-2 gap-4 mb-4">
            <div>
              <label className="block text-gray-700">First Name *</label>
              <input
                type="text"
                name="firstName"
                placeholder="E.g. John"
                value={formData.firstName}
                onChange={handleChange}
                className="mt-1 p-2 border rounded w-full"
                required
              />
            </div>
            <div>
              <label className="block text-gray-700">Middle Name</label>
              <input
                type="text"
                name="middleName"
                placeholder="E.g. Smith"
                value={formData.middleName}
                onChange={handleChange}
                className="mt-1 p-2 border rounded w-full"
              />
            </div>
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Last Name *</label>
            <input
              type="text"
              name="lastName"
              placeholder="E.g. Doe"
              value={formData.lastName}
              onChange={handleChange}
              className="mt-1 p-2 border rounded w-full"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Email Address *</label>
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              value={formData.email}
              onChange={handleChange}
              className="mt-1 p-2 border rounded w-full"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">
              Please upload your resume *
            </label>
            <input
              type="file"
              name="resume"
              onChange={handleChange}
              className="mt-1 p-2 border rounded w-full"
              required
            />
          </div>
          <div className="text-center">
            <button
              type="submit"
              className="bg-gray-500 text-white py-2 px-6 rounded hover:bg-gray-700"
            >
              Enroll
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default FillForm;
