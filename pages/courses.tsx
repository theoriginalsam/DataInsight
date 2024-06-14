import SectionTitle from "../components/SectiionTitle";
import CourseCard from "../components/courses/courseCard";
import EnrollToday from "../components/courses/EnrollToday";

const KidsCoding = () => {
  return (
    <>
      <section id="features" className="flex py-[200px] bg-primary text-white">
        <div className="w-full mx-10 px-10">
          <div className="text-center">
            <SectionTitle
              title="Courses Available"
              paragraph="Kickstart your journey into data analytics, engineering, and machine learning."
              center
            />
          </div>
          <EnrollToday />
          <br />
          <br />
          <br />
          <div className="grid grid-cols-1 gap-x-8 gap-y-14 md:grid-cols-3 lg:grid-cols-3">
            <CourseCard
              title="Data Analytics"
              description="Learn to analyze and interpret complex data to drive informed decisions."
              image="/DA.png"
              timeline="3 months"
            />
            <CourseCard
              title="Data Engineering"
              description="Master the skills to design, build, and manage robust data pipelines."
              image="/data-engineer.png"
              timeline="3 months"
            />
            <CourseCard
              title="Machine Learning"
              description="Dive into machine learning algorithms and build predictive models."
              image="/ML.png"
              timeline="3 months"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default KidsCoding;
