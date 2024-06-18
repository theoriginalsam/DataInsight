import React from "react";
import WeekCard from "./weekCard";

const CurriculumCard: React.FC = () => {
  const weeks = [
    {
      weekNumber: 1,
      topics: [
        "Introduction to Data Analytics",
        "Basic Statistics",
        "Data Cleaning",
      ],
    },
    {
      weekNumber: 2,
      topics: ["Data Visualization", "Introduction to Python", "Pandas Basics"],
    },
    {
      weekNumber: 3,
      topics: [
        "Advanced Python for Data Analysis",
        "Data Manipulation with Pandas",
        "Exploratory Data Analysis",
      ],
    },
    {
      weekNumber: 4,
      topics: [
        "Introduction to Machine Learning",
        "Supervised Learning",
        "Unsupervised Learning",
      ],
    },
    {
      weekNumber: 5,
      topics: [
        "Machine Learning Model Evaluation",
        "Hyperparameter Tuning",
        "Model Deployment",
      ],
    },
  ];

  return (
    <div className="max-w-4xl mx-auto p-8 bg-gray-100 shadow-md rounded-lg">
      <h1 className="text-3xl font-bold text-center mb-6">Curriculum</h1>
      {weeks.map((week) => (
        <WeekCard
          key={week.weekNumber}
          weekNumber={week.weekNumber}
          topics={week.topics}
        />
      ))}
    </div>
  );
};

export default CurriculumCard;
