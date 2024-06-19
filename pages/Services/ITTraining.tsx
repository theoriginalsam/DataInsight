import SectionTitle from "../../components/SectiionTitle";
// import ControlledCarousel from "../../components/card/ControllerdCarousel";

export default function ITTraining() {
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
        </div>
      </section>
      {/* <ControlledCarousel /> */}
    </>
  );
}
