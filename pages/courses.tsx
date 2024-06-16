import SectionTitle from "../components/SectiionTitle";
import CourseCard from "../components/courses/courseCard";
import EnrollToday from "../components/courses/EnrollToday";
import Reviews from "../components/reviews";
import CourseList from "../components/courses/CourseList";

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

      <section className="bg-primary py-8 py pb-20 ">
        <CourseList />
      </section>

      <section>
        <Reviews />
      </section>
    </>
  );
};

export default Courses;
