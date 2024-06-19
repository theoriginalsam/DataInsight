import SectionTitle from "../../components/SectiionTitle";
// import ControlledCarousel from "../../components/card/ControllerdCarousel";
import Hero from "../../components/it-training/Hero";
// import ServiceList from "../../components/it-training/ServiceList";
import InfoCard from "../../components/card/InfoCard";
// import Testimonial from "../../components/it-training/Testimonials";
// import ContactForm from "../../components/it-training/ContactForm";
import FillForm from "../../components/courses/viewtimeline/FillForm";
import Reviews from "../../components/reviews";

import {
  faChalkboardTeacher,
  faUsers,
  faCloud,
  faShieldAlt,
  faDatabase,
  faCodeBranch,
} from "@fortawesome/free-solid-svg-icons";

export default function ITTraining() {
  return (
    <>
      <section id="features" className="flex py-[200px] bg-primary text-white ">
        <div className="w-[100%] mx-10 px-10 ">
          <div className="text-center">
            <SectionTitle
              title="IT Staffing & Consulting"
              paragraph="Providing top-notch IT staffing and consulting services to help your
        business thrive!"
              center
            />
          </div>
        </div>
      </section>

      <section className="bg-gray-100 py-10">
        <div className="max-w-7xl mx-auto px-6 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-primary mb-4">
              IT Staffing and Training Services
            </h2>
            <p className="text-lg text-gray-500"></p>
          </div>
          <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3">
            <InfoCard
              title="Customized IT Training Programs"
              description="Tailored IT training programs designed to meet your organization's specific needs. Enhance the skills of your workforce with our hands-on courses in cutting-edge technologies."
              icon={faChalkboardTeacher}
            />
            <InfoCard
              title="Staff Augmentation Services"
              description="Flexible staffing solutions to bolster your IT team with skilled professionals. Find the right talent to support your projects and meet your business goals."
              icon={faUsers}
            />
            <InfoCard
              title="Cloud Computing Training"
              description="Comprehensive training in cloud computing technologies. Equip your team with the knowledge to leverage cloud platforms efficiently and securely."
              icon={faCloud}
            />
            <InfoCard
              title="Cybersecurity Workshops"
              description="Interactive workshops on cybersecurity best practices and tools. Strengthen your organization's defenses against evolving cyber threats."
              icon={faShieldAlt}
            />
            <InfoCard
              title="Data Management Training"
              description="Learn advanced data management techniques and tools. Improve your team's ability to handle, store, and analyze data effectively."
              icon={faDatabase}
            />
            <InfoCard
              title="DevOps Integration"
              description="Training and staffing solutions for seamless DevOps integration. Enhance collaboration and streamline your development and operations processes."
              icon={faCodeBranch}
            />
          </div>
        </div>
      </section>

      <div className="flex space-x-4 p-20 bg-primary ">
        <div className="w-3/4 bg-white p-4 h-1/2 rounded-2xl py-[40px]">
          <Reviews />
        </div>
        <FillForm />
      </div>
    </>
  );
}
