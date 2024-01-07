import Image from "next/image";
import SectionTitle from "../components/SectiionTitle";
import Breadcrumb from "../components/breadCrumbs";

const checkIcon = (
  <svg width="16" height="13" viewBox="0 0 16 13" className="fill-current">
    <path d="M5.8535 12.6631C5.65824 12.8584 5.34166 12.8584 5.1464 12.6631L0.678505 8.1952C0.483242 7.99994 0.483242 7.68336 0.678505 7.4881L2.32921 5.83739C2.52467 5.64193 2.84166 5.64216 3.03684 5.83791L5.14622 7.95354C5.34147 8.14936 5.65859 8.14952 5.85403 7.95388L13.3797 0.420561C13.575 0.22513 13.8917 0.225051 14.087 0.420383L15.7381 2.07143C15.9333 2.26669 15.9333 2.58327 15.7381 2.77854L5.8535 12.6631Z" />
  </svg>
);

const AboutSectionOne = () => {


  interface ListProps {
    text: string; // Assuming 'text' is a string
  }
  
  const List: React.FC<ListProps> = ({ text }) => (
    <p className="mb-5 flex items-center text-lg font-medium text-body-color">
      <span className="mr-4 flex h-[30px] w-[30px] items-center justify-center rounded-md bg-white  text-white">
        {checkIcon}
      </span>
      {text}
    </p>
  );
  return (
    <>
    <div className="bg-primary text-white  ">
    <Breadcrumb
    
    pageName="About Page"
    description="At AI Consulting, we're passionate about helping businesses leverage the power of artificial intelligence to solve complex problems and drive growth.

    "
    />
    <div className="">
    <section id="about" className="pt-16 md:pt-20 lg:pt-28 bg-gradient-to-r from-primarylight to-primary text-white">
      <div className="container items-center justify-center  md:mx-10 mx-2">
        <div className="border-b border-body-color/[.15] pb-16 dark:border-white/[.15] md:pb-20 lg:pb-28">
          <div className="-mx-4 flex flex-wrap items-center">
            <div className="w-full px-4 lg:w-1/2">
              <SectionTitle
                title="DataInsight Services Overview."
                paragraph="DataInsight offers a comprehensive suite of services aimed at addressing diverse industry needs. Our solutions cater to IT training and staffing, healthcare staffing, big data, and machine learning solutions, telehealth, genomic clinical research, and web development."
                mb="44px"
              />

              <div
                className="wow fadeInUp mb-12 max-w-[570px] lg:mb-0"
                data-wow-delay=".15s"
              >
                <div className="mx-[-12px] flex flex-wrap">
                  <div className="w-full px-3 sm:w-1/2 lg:w-full xl:w-1/2">
                    <List text="IT Training and Staffing" />
                    <List text="Healthcare Staffing" />
                    <List text="Big Data and ML Solutions" />
                  </div>

                  <div className="w-full px-3 sm:w-1/2 lg:w-full xl:w-1/2">
                    <List text="Telehealth Services" />
                    <List text="Genomic Clinical Research" />
                    <List text="Web Development" />
                  </div>
                </div>
              </div>
            </div>

            <div className="w-full px-4 lg:w-1/2">
              <div
                className="wow fadeInUp relative mx-auto aspect-[25/24] max-w-[500px] lg:mr-0"
                data-wow-delay=".2s"
              >
                <Image
                  src="/../public/about1.png"
                  alt="about-image"
                  fill
                  className="drop-shadow-three mx-auto max-w-full dark:hidden dark:drop-shadow-none lg:mr-0"
                />
                <Image
                  src="/../public/about2.jpeg"
                  alt="about-image"
                  fill
                  className="drop-shadow-three mx-auto hidden max-w-full dark:block dark:drop-shadow-none lg:mr-0"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section className="py-16 md:py-20 lg:py-28 bg-white text-primary ">
    <div className="container items-center justify-center  md:mx-10 mx-2">
      <div className="-mx-4 flex flex-wrap items-center">
        <div className="w-full px-4 lg:w-1/2">
          <div
            className="wow fadeInUp relative mx-auto mb-12 aspect-[25/24] max-w-[500px] text-center lg:m-0"
            data-wow-delay=".15s"
          >
            <Image
              src="/../public/about2.jpeg"
              alt="about image"
              
              height={500}
              width={500}
              className="drop-shadow-three dark:hidden dark:drop-shadow-none"
            />
            <Image
              src="/../public/about2.jpeg"
              alt="about image"
              fill
              className="drop-shadow-three hidden dark:block dark:drop-shadow-none"
            />
          </div>
        </div>
        <div className="w-full px-4 lg:w-1/2">
          <div className="wow fadeInUp max-w-[470px]" data-wow-delay=".2s">
            <div className="mb-9">
              <h3 className="mb-4 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
              IT Training and Staffing
              </h3>
              <p className="text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
              Tailored training and staffing solutions for the IT industry.


              </p>
            </div>
            <div className="mb-9">
              <h3 className="mb-4 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
              Big Data and ML Solutions
              </h3>
              <p className="text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
              Cutting-edge solutions harnessing big data and machine learning capabilities.
              </p>
            </div>
            <div className="mb-1">
              <h3 className="mb-4 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
              Web Development
              </h3>
              <p className="text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
              Customized web development services for various business needs.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  
  </div>
  </div>
  </>
  );
};

export default AboutSectionOne;