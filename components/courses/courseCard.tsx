import React from "react";

interface CourseCardProps {
  title: string;
  description: string;
  image: string;
}

const CourseCard: React.FC<CourseCardProps> = ({
  title,
  description,
  image,
}) => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg py-5 px-5 bg-white hover:shadow-2xl transition-shadow duration-300">
      <img
        className="w-w-full h-48 object-contain rounded-md mb-4 mx-auto"
        src={image}
        alt={title}
      />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2 text-gray-800">{title}</div>
        <p className="text-gray-700 text-base">{description}</p>
      </div>
      <div className="px-6 pt-4 pb-2 mx-auto">
        <button className="bg-primary hover:bg-secondary text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
          Enroll Today
        </button>
        <button className="bg-primary hover:bg-secondary text-white font-bold py-2 px-4 ml-4 rounded focus:outline-none focus:shadow-outline">
          View Timeline
        </button>
      </div>
    </div>
  );
};

export default CourseCard;
