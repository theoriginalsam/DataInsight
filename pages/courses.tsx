import SectionTitle from "../components/SectiionTitle";
import CourseCard from "../components/courses/courseCard";
import EnrollToday from "../components/courses/EnrollToday";
import Reviews from "../components/reviews";

const Courses = () => {
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
        </div>
      </section>
      <section>
        <EnrollToday />
      </section>

      <section className="bg-primary py-8 py pb-20">
        <div className="container mx-auto  px-6">
          <h2 className="text-center mb-4 text-3xl font-bold !leading-tight text-black dark:text-white sm:text-4xl md:text-[45px] py-6">
            Our Courses
          </h2>
          <div className="grid grid-cols-1 gap-x-8 gap-y-20 md:grid-cols-3 lg:grid-cols-3">
            <CourseCard
              title="Data Analytics"
              description="Learn to analyze and interpret complex data to drive informed decisions."
              image="/DA.png"
            />
            <CourseCard
              title="Data Engineering"
              description="Master the skills to design, build, and manage robust data pipelines."
              image="/data-engineer.png"
            />
            <CourseCard
              title="Machine Learning"
              description="Dive into machine learning algorithms and build predictive models."
              image="/ML.png"
            />
            <CourseCard
              title="Quality Assurance"
              description="Explore techniques for ensuring software quality and reliability."
              image="/QA.png"
            />
            <CourseCard
              title="UI/UX Design"
              description="Learn the principles of user interface and user experience design."
              image="/UI-UX.png"
            />
            <CourseCard
              title="Big Data"
              description="Understand the strategies for processing vast  amound of data."
              image="/BigData.png"
            />
          </div>
        </div>
      </section>

      <section>
        <Reviews />
      </section>
    </>
  );
};

export default Courses;
