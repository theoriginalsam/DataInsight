import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { HiMenu, HiArrowLeft } from "react-icons/hi";
import "@fortawesome/fontawesome-free/css/all.min.css";

const navbar = ({ children }: any) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const [showDropdown, setShowDropdown] = useState(false);
  useEffect(() => {
    // Function to close the dropdown if the click is outside
    const handleClickOutside = (event: { target: any }) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setShowDropdown(false);
      }
    };

    // Attach the listener to the window object to capture all clicks.
    if (showDropdown) {
      document.body.classList.add("overflow-y-hidden");

      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.body.classList.remove("overflow-y-hidden");
    }

    // Return a cleanup function to remove the event listener
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [showDropdown]);

  function handleScroll(event: Event) {
    event.preventDefault();
  }

  let timeoutId = useRef<NodeJS.Timeout | undefined>(undefined);

  function handleMouseEnter() {
    clearTimeout(timeoutId.current);
    setShowDropdown(!showDropdown);
  }

  return (
    <>
      <nav className=" pt-[0%] md:pt-[1%] top-[0] z-1000 font-sans font-bold  absolute flex w-screen  justify-around bg-gradient-to-r from-primarylight to-primary ">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between ">
            <div className="flex items-center text-4xl">
              <img
                src="/DATAIN-White.png"
                alt="Logo"
                className="h-10  w-auto cursor-pointer"
              />

              <div className=" hidden md:justify-center md:block ">
                <div className="ml-10 flex items-baseline space-x-4">
                  <Link href="/">
                    <div
                      className="text-white hover:bg-primarylight hover:text-white px-3 py-2 rounded-md text-xl font-medium cursor-pointer "
                      onClick={closeMenu}
                    >
                      Home
                    </div>
                  </Link>
                  <Link href="/about">
                    <div className="text-white hover:bg-primarylight hover:text-white px-3 py-2 rounded-md text-xl font-medium cursor-pointer">
                      About
                    </div>
                  </Link>

                  <div className="relative">
                    <div
                      onClick={handleMouseEnter}
                      className="text-white z-[100] hover:bg-primarylight hover:text-white px-3 py-2 rounded-md text-xl font-medium cursor-pointer"
                    >
                      Service
                    </div>
                    <div
                      className={
                        showDropdown
                          ? "dropdown-content fixed  w-56 z-[52]  bg-white py-2 mt-2  rounded-md shadow-lg"
                          : "dropdown-content hidden"
                      }
                    >
                      <Link href="/Services/bigdata">
                        <div className="block px-4 py-2 text-xl text-primary hover:bg-primarylight hover:text-white hover:underline cursor-pointer">
                          IT Training and Staffing
                        </div>
                      </Link>
                      <Link href="/aiml">
                        <div className="block px-4 py-2 text-xl text-primary hover:bg-primarylight hover:text-white hover:underline cursor-pointer">
                          Healthcare Staffing
                        </div>
                      </Link>
                      <Link href="/page3">
                        <div className="block px-4 py-2 text-xl text-primary hover:bg-primarylight hover:text-white hover:underline cursor-pointer">
                          Bigdata and ML Solutions
                        </div>
                      </Link>
               
                      <Link href="/page3">
                        <div className="block px-4 py-2 text-xl text-primary hover:bg-primarylight hover:text-white hover:underline cursor-pointer">
                          Tele Health
                        </div>
                      </Link>
                      <Link href="/page3">
                        <div className="block px-4 py-2 text-xl text-primary hover:bg-primarylight hover:text-white hover:underline cursor-pointer">
                         Genomic Clinical Research
                        </div>
                      </Link>
                      <Link href="/Services/webDevelopment">
                        <div className="block px-4 py-2 text-xl text-primary hover:bg-primarylight hover:text-white hover:underline cursor-pointer">
                         Web Development
                        </div>
                      </Link>
                    </div>
                  </div>
                  <Link href="/contact">
                    <div className="text-white hover:bg-primarylight hover:text-white px-3 py-2 rounded-md text-xl font-medium cursor-pointer">
                      Contact
                    </div>
                  </Link>
                  <Link href="/work">
                    <div className="text-white hover:bg-primarylight hover:text-white px-3 py-2 rounded-md text-xl font-medium cursor-pointer">
                      Request Demo
                    </div>
                  </Link>
                  <a href="https://courses.datainsight.cloud">
                    <div className="text-primarylight bg-white hover:bg-primarylight hover:text-white px-3 rounded-md flex items-center cursor-pointer">
                      Courses
                      <i className="fas fa-book ml-3"></i>
                    </div>
                  </a>
                </div>
              </div>
            </div>
            <div className="md:hidden z-[99] fixed top-0 left-0 m-4">
              <HiMenu
                className="text-white  text-xl cursor-pointer"
                onClick={toggleMenu}
              />
            </div>
            {isMenuOpen && (
              <div className="fixed top-0 left-0 w-full h-full bg-white z-[100]">
                <div className="flex items-center justify-between px-4 py-2">
                  <HiArrowLeft
                    className="text-primarylight text-xl cursor-pointer"
                    onClick={toggleMenu}
                  />
                  <div className="text-primarylight text-xl font-medium">
                    BACK
                  </div>
                </div>
                <div className="flex flex-col ml-10 mt-16 space-y-2">
                  <Link href="/">
                    <div
                      className="text-primarylight hover:bg-white hover:text-primarylight px-3 py-2 rounded-md text-xl font-medium cursor-pointer"
                      onClick={closeMenu}
                    >
                      Home
                    </div>
                  </Link>
                  <Link href="/about">
                    <div
                      className="text-primarylight hover:bg-white hover:text-primarylight px-3 py-2 rounded-md text-xl font-medium cursor-pointer"
                      onClick={closeMenu}
                    >
                      About
                    </div>
                  </Link>
                  <Link href="/contact">
                    <div
                      className="text-primarylight hover:bg-white hover:text-primarylight px-3 py-2 rounded-md text-xl font-medium cursor-pointer"
                      onClick={closeMenu}
                    >
                      Services
                    </div>
                  </Link>
                  <Link href="/contact">
                    <div
                      className="text-primarylight hover:bg-white hover:text-primarylight px-3 py-2 rounded-md text-xl font-medium cursor-pointer"
                      onClick={closeMenu}
                    >
                      Contact
                    </div>
                  </Link>
                  <Link href="/work">
                    <div
                      className="text-primarylight hover:bg-white hover:text-primarylight px-3 py-2 rounded-md text-xl font-medium cursor-pointer"
                      onClick={closeMenu}
                    >
                      Request a Demo
                    </div>
                  </Link>
                  <a
                    href="https://courses.datainsight.cloud"
                    className="text-primarylight hover:bg-white hover:text-primarylight px-3 py-2 rounded-md text-xl font-medium cursor-pointer"
                    onClick={closeMenu}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Courses
                  </a>
                </div>
              </div>
            )}
          </div>
        </div>
      </nav>

      <main>{children}</main>
    </>
  );
};
export default navbar;
