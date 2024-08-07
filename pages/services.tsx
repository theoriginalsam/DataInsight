import Link from "next/link";

const services = () => {
  const styling = {
    backgroundImage:
      "url('https://img.freepik.com/premium-vector/technology-background-digital-technology-network-connection-communication-concept_302149-27.jpg?w=2000')",
  };
  return (
    <div className="">
      <div className=" flex-col   top-10 left-[0] right-[0] ">
        <h1 className="font-roboto   font-bold mt-[130px] md:mt-[100px]  text-4xl md:text-7xl text-center text-primarylight">
          SERVICES
        </h1>
        <h4 className="font-roboto font-bold text-primarylight text-10px md:text-xl text-center pt-5">
          We&#39;re here for your A.I. and Big Data needs.
        </h4>
      </div>
      <div>
        <div className="relative  mt-[20%] md: mt-[5%]">
          <div className="grid grid-rows-3 grid-flow-col gap-8 justify-center max-w m-[2%] mt-[75%] md:mt-[25%] text-gray-900  dark:text-primarylight  text-center text-20px md:text-2xl ">
            <div className="flex flex-col pb-3">
              <Link
                href="/Services/bigdata"
                className="mb-1 text-gray-500 text:1xlmd:text-4xl font-semibold no-underline hover:underline"
              >
                BIG DATA : Data Science
              </Link>
              <dd className="text-lg font-semibold ">
                Explore more on Big Data
              </dd>
            </div>
            <div className="flex flex-col pb-3">
              <Link
                href="/about"
                className="mb-1 text-gray-500 text:1xlmd:text-4xl font-semibold no-underline hover:underline"
              >
                AI Analytics : Data Science
              </Link>
              <dd className="text-lg font-semibold ">
                Explore more on AI Analytics
              </dd>
            </div>
            <div className="flex flex-col pb-3">
              <Link
                href="/about"
                className="mb-1 text-gray-500 text:1xlmd:text-4xl font-semibold no-underline hover:underline"
              >
                Machine Learning : Data Science
              </Link>
              <dd className="text-lg font-semibold ">Explore more on ML</dd>
            </div>
            <div className="flex flex-col pb-3">
              <Link
                href="/about"
                className="mb-1 text-gray-500 text:1xlmd:text-4xl font-semibold no-underline hover:underline"
              >
                BIG DATA : Data Science
              </Link>
              <dd className="text-lg font-semibold ">
                Explore more on Big Data
              </dd>
            </div>
            <div className="flex flex-col pb-3">
              <Link
                href="/about"
                className="mb-1 text-gray-500 text:1xlmd:text-4xl font-semibold no-underline hover:underline"
              >
                AI Analytics : Data Science
              </Link>
              <dd className="text-lg font-semibold ">
                Explore more on AI Analytics
              </dd>
            </div>
            <div className="flex flex-col pb-3">
              <Link
                href="/about"
                className="mb-1 text-gray-500 text:1xlmd:text-4xl font-semibold no-underline hover:underline"
              >
                Machine Learning : Data Science
              </Link>
              <dd className="text-lg font-semibold ">Explore more on ML</dd>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default services;
