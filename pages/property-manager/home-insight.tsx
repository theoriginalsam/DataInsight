import SectionTitle from "../../components/SectiionTitle";
import Reviews from "../../components/reviews";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUserCheck,
  faFileContract,
  faTools,
  faFileAlt,
  faDoorOpen,
  faToolbox,
} from "@fortawesome/free-solid-svg-icons";
import InfoCard from "../../components/card/InfoCard"; //

const Courses = () => {
  return (
    <>
      <section id="features" className="flex py-[180px] bg-primary text-white">
        <div className="w-full mx-10 px-10">
          <div className="text-center">
            <SectionTitle
              title="HomeInsight"
              paragraph="Connecting Buyers, Property Managers, and Handyman Services"
              center
            />
          </div>
        </div>
      </section>

      {/* Features Section */}

      <section className="bg-gray-100 py-10">
        <div className="max-w-7xl mx-auto px-6 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-primary mb-4">
              HomeInsight Services Overview
            </h2>
            {/* <p className="text-lg text-gray-500"></p>you  */}
          </div>
          <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3">
            <InfoCard
              title="Tenant Screening"
              description="Screen potential tenants thoroughly to ensure reliable occupancy."
              icon={faUserCheck}
            />
            <InfoCard
              title="Lease Management"
              description="Efficiently manage lease agreements and renewals."
              icon={faFileContract}
            />
            <InfoCard
              title="Handyman Services"
              description="Get access to reliable handyman services for all your property maintenance needs."
              icon={faToolbox}
            />
            <InfoCard
              title="Maintenance Requests"
              description="Streamline maintenance requests and track their progress."
              icon={faTools}
            />
            <InfoCard
              title="Financial Reporting"
              description="Generate detailed financial reports for property owners."
              icon={faFileAlt}
            />
            <InfoCard
              title="Vacancy Management"
              description="Manage vacancies effectively to minimize downtime."
              icon={faDoorOpen}
            />
          </div>
        </div>
      </section>
      {/* 
      <section>
        <Reviews />
      </section> */}
    </>
  );
};

export default Courses;
