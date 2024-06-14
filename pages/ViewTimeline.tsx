import React from "react";
import CourseDescription from "../components/courses/CourseDescription";
import ApplicationForm from "../components/courses/ApplicationForm";

const ViewTimeline: React.FC = () => {
  return (
    <div className="flex flex-wrap justify-around items-start p-6">
      <CourseDescription
        title="Machine Learning Course"
        description="Dive into machine learning algorithms and build predictive models."
        whoIsThisFor="Ideal for those who have a basic understanding of programming and are looking to specialize in machine learning."
        additionalInfo="Some programming experience required"
        price="$3000"
        deposit="$300"
        afterEnrollment="$2700"
      />
      <ApplicationForm />
    </div>
  );
};

export default ViewTimeline;
