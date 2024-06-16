import React from "react";
import Link from "next/link";
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
    <div className="max-w-sm rounded overflow-hidden shadow-lg py-5 px-5 bg-primary hover:shadow-2xl transition-shadow duration-300 hover:scale-105 justify-center">
      <img
        className="w-w-full h-36 object-contain rounded-md mb-4 mx-auto"
        src={image}
        alt={title}
      />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2 text-white">{title}</div>
        <p className="text-white text-base">{description}</p>
      </div>
      <div className="px-6 pt-4 pb-2 mx-auto">
        <Link href="/contact">
          <button className="bg-primary hover:bg-secondary text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
            Enroll Today
          </button>
        </Link>
        <button className="bg-primary hover:bg-secondary text-white font-bold py-2 px-4 ml-4 rounded focus:outline-none focus:shadow-outline">
          View Timeline
        </button>
      </div>
    </div>
  );
};

export default CourseCard;
