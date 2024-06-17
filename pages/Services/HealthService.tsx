import React, { useEffect, useState } from "react";
import SectionTitle from "../../components/SectiionTitle";
import {
  faChartLine,
  faUserMd,
  faHospital,
} from "@fortawesome/free-solid-svg-icons";
import InfoCard from "../../components/card/InfoCard";

const Health = () => {
  const [offsetX, setOffsetX] = useState(0);
  const handleScroll = () => setOffsetX(window.scrollY);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <div id="features" className="flex pt-[60px] bg-primary text-white"></div>
      <section className="relative flex justify-center items-center  h-screen bg-[url('/health/insideHospital.jpg')] bg-cover bg-center text-primary">
        <img
          src="/health/robot-leftSide.png"
          alt="Robot"
          className="absolute left-1 top-1/2 transform -translate-y-5"
          style={{
            width: "25%",
            transform: `translateX(${offsetX * 0.3}px) translateY(-25%)`,
          }}
        />
        <div className="bg-white bg-opacity-80 p-8 rounded-lg shadow-lg max-w-3xl text-center">
          <h2 className="mb-6 text-4xl font-extrabold text-gray-900 dark:text-gray-900 sm:text-5xl md:text-6xl lg:text-7xl leading-tight">
            Healthcare Analytics
          </h2>
          <p className="text-lg md:text-xl lg:text-2xl font-medium text-gray-700 dark:text-gray-700 max-w-prose mx-auto">
            Our healthcare system utilizes cutting-edge big data analytics and
            deep learning solutions to provide personalized and efficient
            patient care.
          </p>
        </div>
      </section>

      <section className="bg-gray-100 py-10">
        <div className="max-w-7xl mx-auto px-6 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-primary mb-4">
              Advanced Healthcare Solutions
            </h2>
            <p className="text-lg text-gray-500">
              Discover our innovative healthcare services powered by big data
              analytics and deep learning technology.
            </p>
          </div>
          <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3">
            <InfoCard
              title="Predictive Analytics"
              description="Leverage our big data solutions to predict health trends and improve patient outcomes."
              icon={faChartLine}
            />
            <InfoCard
              title="Personalized Care"
              description="Utilize deep learning algorithms to provide personalized treatment plans for each patient."
              icon={faUserMd}
            />
            <InfoCard
              title="Operational Efficiency"
              description="Optimize hospital operations with our data-driven insights, reducing wait times and improving care."
              icon={faHospital}
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Health;
