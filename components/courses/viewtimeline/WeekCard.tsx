import React from "react";

interface WeekCardProps {
  title: string;
  weekNumber: number;
  topics: string[];
  skills: string[];
}

const WeekCard: React.FC<WeekCardProps> = ({
  title,
  weekNumber,
  topics,
  skills,
}) => {
  return (
    <div className="bg-white shadow-lg rounded-lg p-6 mb-8 border border-gray-200">
      <h2 className="text-2xl font-bold mb-4">
        Week {weekNumber}: {title}
      </h2>
      <div>
        <h3 className="text-xl font-semibold mb-2">Topics:</h3>
        <ul className="list-disc list-inside mb-4">
          {topics.map((topic, index) => (
            <li key={index} className="text-gray-800">
              {topic}
            </li>
          ))}
        </ul>
      </div>
      <div>
        <h3 className="text-xl font-semibold mb-2">Skills:</h3>
        <ul className="list-disc list-inside">
          {skills.map((skill, index) => (
            <li key={index} className="text-gray-800">
              {skill}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default WeekCard;
