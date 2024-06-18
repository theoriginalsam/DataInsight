import React from "react";

interface WeekCardProps {
  weekNumber: number;
  topics: string[];
}

const WeekCard: React.FC<WeekCardProps> = ({ weekNumber, topics }) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-4 mb-4">
      <h2 className="text-xl font-bold mb-2">Week {weekNumber}</h2>
      <ul className="list-disc list-inside">
        {topics.map((topic, index) => (
          <li key={index} className="text-gray-700">
            {topic}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default WeekCard;
