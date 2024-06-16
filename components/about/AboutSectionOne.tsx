import React from "react";
import SectionTitle from "../SectiionTitle";
import ServiceList from "./ServiceList";
import SectionImage from "./SectionImage";
import SectionText from "./SectionText";
import BreadcrumbSection from "./BreadcrumbSection";

const AboutSectionOne: React.FC = () => (
  <>
    <BreadcrumbSection
      pageName="About Page"
      description="At AI Consulting, we're passionate about helping businesses leverage the power of artificial intelligence to solve complex problems and drive growth."
    />
    <div className="bg-primary text-white">
      <section
        id="about"
        className="pt-16 md:pt-20 lg:pt-28 bg-gradient-to-r from-primarylight to-primary text-white"
      >
        <div className="container items-center justify-center md:mx-10 mx-2">
          <div className="border-b border-body-color/[.15] pb-16 dark:border-white/[.15] md:pb-20 lg:pb-28">
            <div className="-mx-4 flex flex-wrap items-center">
              <div className="w-full px-4 lg:w-1/2">
                <SectionTitle
                  title="DataInsight Services Overview."
                  paragraph="DataInsight offers a comprehensive suite of services aimed at addressing diverse industry needs. Our solutions cater to IT training and staffing, healthcare staffing, big data, and machine learning solutions, telehealth, genomic clinical research, and web development."
                  mb="44px"
                />
                <ServiceList />
              </div>
              <div className="w-full px-4 lg:w-1/2">
                <SectionImage src="/about1.png" alt="about-image" />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="py-16 md:py-20 lg:py-28 bg-white text-primary">
        <div className="container items-center justify-center md:mx-10 mx-2">
          <div className="-mx-4 flex flex-wrap items-center">
            <div className="w-full px-4 lg:w-1/2">
              <SectionImage src="/about2.jpeg" alt="about image" />
            </div>
            <div className="w-full px-4 lg:w-1/2">
              <SectionText
                title="IT Training and Staffing"
                paragraph="Tailored training and staffing solutions for the IT industry."
              />
              <SectionText
                title="Big Data and ML Solutions"
                paragraph="Cutting-edge solutions harnessing big data and machine learning capabilities."
              />
              <SectionText
                title="Web Development"
                paragraph="Customized web development services for various business needs."
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  </>
);

export default AboutSectionOne;
