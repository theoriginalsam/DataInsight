import React from "react";
import WeekCard from "./WeekCard";

const CurriculumCard: React.FC = () => {
  const weeks = [
    {
      title: "Introduction to Data Analysis",
      weekNumber: 1,
      topics: [
        "Introduction to Data Analytics",
        "Basic Statistics",
        "Data Cleaning",
      ],
      skills: ["Data Collection and Cleaning", "Excel"],
    },
    {
      title: "Python for Data Analysis",
      weekNumber: 2,
      topics: [
        "Python Fundamentals",
        "Data Manipulation with Pandas",
        "Data Visualization with Matplotlib",
        "Numerical Computing with Numpy",
        "Workflow Automation with Apache Airflow",
      ],
      skills: ["Python", "Pandas", "Matplotlib", "Numpy", "Apache Airflow"],
    },
    {
      title: "Database Fundamentals",
      weekNumber: 3,
      topics: [
        "Relational Databases and SQL",
        "Data Extraction and Transformation with SQL",
        "Introduction to Regular Expressions (REGEX)",
        "Data Visualization with Tableau",
        "Data Preparation with Alteryx",
        "Dashboard Creation with PowerBI",
      ],
      skills: ["SQL", "REGEX", "Tableau", "Alteryx", "PowerBI"],
    },
    {
      title: "Industry and Career Insights",
      weekNumber: 4,
      topics: [
        "Career Paths in Data Analytics",
        "Networking and Building Professional Relationships",
        "Interview Preparation for Data Analyst Roles",
      ],
      skills: ["Data Analytics in Cloud", "Google Cloud BigQuery"],
    },
  ];

  return (
    <div className="max-w-4xl mx-auto p-10  bg-primary shadow-1xl hover:shadow-2xl rounded-lg border border-gray-300">
      <h1 className="text-4xl font-bold text-center text-white mb-10">
        Curriculum
      </h1>
      {weeks.map((week) => (
        <WeekCard
          key={week.weekNumber}
          title={week.title}
          weekNumber={week.weekNumber}
          topics={week.topics}
          skills={week.skills}
        />
      ))}
    </div>
  );
};

export default CurriculumCard;
