import SectionTitle from "../../components/SectiionTitle";
import SingleFeature from "../../components/SingleFeature";
import featuresData from "../../components/chaptersData";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import ImageSlide from "../../components/imageSlide";

// const responsive = {
//   superLargeDesktop: {
//     // the naming can be any, depends on you.
//     breakpoint: { max: 4000, min: 3000 },
//     items: 5,
//   },
//   desktop: {
//     breakpoint: { max: 3000, min: 1024 },
//     items: 3,
//   },
//   tablet: {
//     breakpoint: { max: 1024, min: 464 },
//     items: 2,
//   },
//   mobile: {
//     breakpoint: { max: 464, min: 0 },
//     items: 1,
//   },
// };

const responsive = {
  all: {
    breakpoint: { max: 4000, min: 0 },
    items: 1,
  },
};

const imageList = [
  { src: "/kidscodingimages/ai.jpg", alt: "Image 1" },
  { src: "/kidscodingimages/expresscoding.jpg", alt: "Image 2" },
  { src: "/kidscodingimages/introcomputer.jpg", alt: "Image 3" },
  { src: "/kidscodingimages/poster.png", alt: "Image 4" },
];

const kidsCoding = () => {
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
      {/* <div className="flex items-center justify-center">
        <img
          src="/kidscodingimages/poster.png"
          alt="poster"
          className="max-w-full h-70 rounded-lg shadow-lg"
        ></img>
      </div> */}
      <Carousel responsive={responsive} itemClass="carousel-item-padding-40-px">
        {imageList.map((image, index) => (
          <ImageSlide key={index} src={image.src} alt={image.alt} />
        ))}
      </Carousel>

      <div>
        <a
          href="https://internal-flock-00d.notion.site/KIDS-CODING-6971da064fab492da4444a0d892259d9?pvs=4"
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center  bg-primary justify-center m-2 p-6 rounded- bg-gray-50 shadow-lg transition-transform duration-300 hover:scale-105"
        >
          <div>
            <h1 className="text-3xl font-bold bo text-white mb-4">
              FULL KIDS CODING SYLLABUS
            </h1>
            {/* <h1 className="text-3xl py-[200px]  text-white ">FULL KIDS CODING SYLLABUS</h1> */}
          </div>
        </a>
      </div>
    </>
  );
};

export default kidsCoding;
