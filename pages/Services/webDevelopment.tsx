import SectionTitle from "../../components/SectiionTitle";
import SingleFeature from "../../components/SingleFeature";
import featuresData from "../../components/featuresData";

const webdevelopment = () => {
  return (
    <>
      <section id="features" className="flex py-[200px] bg-primary text-white ">
        <div className="w-[100%] mx-10 px-10 ">
            <div className="text-center">
          <SectionTitle
          
            title="Web Development"
            paragraph="Code, Create, Connect: Empowering Your Online Journey."
            center
          />
          </div>

          <div className="grid grid-cols-1 gap-x-8 gap-y-14 md:grid-cols-2 lg:grid-cols-3">
            {featuresData.map((feature) => (
              <SingleFeature key={feature.id} feature={feature} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default webdevelopment;