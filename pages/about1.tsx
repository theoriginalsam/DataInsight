import SectionTitle from "../components/SectiionTitle";
import InfoCard from "../components/card/InfoCard";
import {
  faLaptopMedical,
  faDatabase,
  faStethoscope,
  faDna,
  faCode,
  faChalkboardTeacher,
} from "@fortawesome/free-solid-svg-icons";

const About = () => {
  return (
    <>
      <section id="features" className="flex py-[180px] bg-primary text-white">
        <div className="w-full mx-10 px-10">
          <div className="text-center">
            <SectionTitle
              title="About Us"
              paragraph="At AI Consulting, we're passionate about helping businesses leverage the power of artificial intelligence to solve complex problems and drive growth."
              center
            />
          </div>
        </div>
      </section>

      <section className="bg-gray-100 py-10">
        <div className="max-w-7xl mx-auto px-6 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-primary mb-4">
              DataInsight Services Overview
            </h2>
            <p className="text-lg text-gray-500"></p>
          </div>
          <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3">
            <InfoCard
              title="IT Training and Staffing"
              description="Comprehensive IT training and staffing solutions to bridge skill gaps and enhance your workforce."
              icon={faChalkboardTeacher}
            />
            <InfoCard
              title="Healthcare Staffing"
              description="Providing top-notch healthcare professionals to meet the diverse needs of the medical industry."
              icon={faLaptopMedical}
            />
            <InfoCard
              title="Bigdata and ML Solutions"
              description="Cutting-edge big data and machine learning solutions to drive innovation and efficiency in your business."
              icon={faDatabase}
            />
            <InfoCard
              title="Tele Health"
              description="Advanced telehealth services to ensure accessible and efficient healthcare delivery."
              icon={faStethoscope}
            />
            <InfoCard
              title="Genomic Clinical Research"
              description="Pioneering genomic research to advance clinical treatments and personalized medicine."
              icon={faDna}
            />
            <InfoCard
              title="Web Development"
              description="Expert web development services to create dynamic and responsive websites tailored to your needs."
              icon={faCode}
            />
            <InfoCard
              title="Kids Coding"
              description="Engaging coding programs for kids to foster early interest in technology and programming."
              icon={faChalkboardTeacher}
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
