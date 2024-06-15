import React from "react";
import Link from "next/link";

interface CourseCardProps {
  title: string;
  description: string;
  image: string;
  timeline: string;
}

const CourseCard: React.FC<CourseCardProps> = ({
  title,
  description,
  image,
  timeline,
}) => {
  return (
    <div className="border-2 border-black px-6 py-4 rounded-2xl">
      <img
        src={image}
        alt={title}
        className="w-full h-48 object-contain rounded-md mb-4"
      />
      <h3 className="text-xl font-semibold text-blue-600 mb-2">{title}</h3>
      <p className="text-gray-600 mb-2">{description}</p>
      {/* <p className="text-gray-500 mb-4">Timeline: {timeline}</p> */}
      <div className="flex justify-between items-center">
        <Link href="/contact">
          <button className="flex bg-black text-black px-4 py-2 border rounded-md hover:scale-105 ">
            Enroll Today
          </button>
        </Link>
        <Link href="/ViewTimeline">
          <button className="flex bg-indigo-500 text-black px-4 py-2 border rounded-md hover:bg-green-500 hover:border-indigo-500 hover:scale-105 ">
            View Timeline
          </button>
        </Link>
      </div>
    </div>
  );
};

export default CourseCard;
