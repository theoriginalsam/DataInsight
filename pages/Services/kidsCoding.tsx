import SectionTitle from "../../components/SectiionTitle";
import SingleFeature from "../../components/SingleFeature";
import featuresData from "../../components/chaptersData";

const webdevelopment = () => {
  return (
    <>
      <section id="features" className="flex py-[200px] bg-primary text-white ">
        <div className="w-[100%] mx-10 px-10 ">
          <div className="text-center">
            <SectionTitle
              title="Kids Coding"
              paragraph="Empowering Kids to Unleash Their Imagination and Build the Future, One Line of Code at a Time!"
              center
            />
          </div>

          <div className="grid grid-cols-1 gap-x-8 gap-y-14 md:grid-cols-2 lg:grid-cols-2">
            {featuresData.map((feature) => (
              <SingleFeature key={feature.id} feature={feature} />
            ))}
          </div>
        </div>
      </section>
      <div>
        <a
          href="https://internal-flock-00d.notion.site/KIDS-CODING-6971da064fab492da4444a0d892259d9?pvs=4"
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center  bg-primary justify-center m-6 p-6 border-3 border-gray-300 rounded-lg bg-gray-50 shadow-lg transition-transform duration-300 hover:scale-105"
        >
          <div>
            <h1 className="text-3xl font-bold text-white mb-4">
              FULL KIDS CODING SYLLABUS
            </h1>
            {/* <h1 className="text-3xl py-[200px]  text-white ">FULL KIDS CODING SYLLABUS</h1> */}
          </div>
        </a>
      </div>
    </>
  );
};

export default webdevelopment;
