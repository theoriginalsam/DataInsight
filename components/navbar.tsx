import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';
import { HiMenu,HiArrowLeft } from 'react-icons/hi';


const navbar = ({ children }:any) => {

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const dropdownRef = useRef(null);

 const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const [showDropdown, setShowDropdown] = useState(false);
  useEffect(() => {
    if (showDropdown) {
      document.body.classList.add('overflow-y-hidden');
      window.addEventListener('mousedown', handleMouseClickOutside);
      window.addEventListener('scroll', handleScroll, { passive: false });
    } else {
      document.body.classList.remove('overflow-y-hidden');
      window.addEventListener('mousedown', handleMouseClickOutside);
      window.removeEventListener('scroll', handleScroll);
    }
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.addEventListener('mousedown', handleMouseClickOutside);

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

  const handleMouseClickOutside = (event: any) => {
    if (dropdownRef.current && (dropdownRef.current as HTMLElement).contains(event.target as Node)) {
      clearTimeout(timeoutId.current);
      timeoutId.current = setTimeout(() => {
        setShowDropdown(false);
      }, 500);
    }
  }
  return (
    <>
      <nav className=" mt-[1%] top-[0] z-1000 font-sans font-bold  absolute flex w-screen  justify-around bg-gradient-to-r from-primarylight to-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between ">
            <div className="flex items-center text-4xl">
            
            
    <img src="/DATAIN-White.png" alt="Logo" className="h-10  w-auto cursor-pointer" />
  
                  
              <div  className=" hidden md:justify-center md:block ">
                <div className="ml-10 flex items-baseline space-x-4">
                  <Link href="/">
                    <div className="text-white hover:bg-primarylight hover:text-white px-3 py-2 rounded-md text-3xl font-medium cursor-pointer " onClick={closeMenu}>
                      Home
                    </div>
                  </Link>
                  <Link href="/about">
                    <div 
                    className="text-white hover:bg-primarylight hover:text-white px-3 py-2 rounded-md text-3xl font-medium cursor-pointer">
                      About
                    </div>
                  </Link>
                
                  <div className="relative">
                    <div
                   
                     onClick={handleMouseEnter}
                     
                    
                     onMouseDown={handleMouseClickOutside}
                     
                      
                      className="text-white z-[100] hover:bg-primarylight hover:text-white px-3 py-2 rounded-md text-3xl font-medium cursor-pointer"
                    >
                      Service
                    </div>
                    <div
                      className={
                        showDropdown
                          ? 'dropdown-content fixed  w-56 z-[52]  bg-white py-2 mt-2  rounded-md shadow-lg'
                          : 'dropdown-content hidden'
                      }
                    >
                      <Link href="/Services/bigdata">
                        <div 
                             onClick={handleMouseEnter}
                        className="block px-4 py-2 text-xl text-primary hover:bg-primarylight hover:text-white hover:underline cursor-pointer">
                          Bigdata
                        </div>
                      </Link>
                      <Link href="/aiml">
                        <div className="block px-4 py-2 text-xl text-primary hover:bg-primarylight hover:text-white hover:underline cursor-pointer">
                         AI-ML
                        </div>
                      </Link>
                      <Link href="/page3">
                        <div className="block px-4 py-2 text-xl text-primary hover:bg-primarylight hover:text-white hover:underline cursor-pointer">
                        Computer Vision
                        </div>
                      </Link>
                      <Link href="/page3">
                        <div className="block px-4 py-2 text-xl text-primary hover:bg-primarylight hover:text-white hover:underline cursor-pointer">
                        Natural Language Processing 
                        </div>
                      </Link>
                      <Link href="/page3">
                        <div className="block px-4 py-2 text-xl text-primary hover:bg-primarylight hover:text-white hover:underline cursor-pointer">
                         Deep Learning
                        </div>
                      </Link>
                      
                    </div>
                  </div>
                  <Link href="/contact">
                    <div className="text-white hover:bg-primarylight hover:text-white px-3 py-2 rounded-md text-3xl font-medium cursor-pointer">
                      Contact
                    </div>
                  </Link>
                  <Link href="/work">
                    <div className="text-white hover:bg-primarylight hover:text-white px-3 py-2 rounded-md text-3xl font-medium cursor-pointer">
                      Request Demo
                    </div>
                  </Link>
                </div>
              </div>
              
            </div>
            <div className="md:hidden z-[99] fixed top-0 left-0 m-4">
        <HiMenu
          className="text-white  text-3xl cursor-pointer"
          onClick={toggleMenu}
        />
      </div>
      {isMenuOpen && (
        <div className="fixed top-0 left-0 w-full h-full bg-white z-[100]">
          <div className="flex items-center justify-between px-4 py-2">
            <HiArrowLeft
              className="text-primarylight text-3xl cursor-pointer"
              onClick={toggleMenu}
            />
            <div className="text-primarylight text-xl font-medium">BACK</div>
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
          </div>
        </div>
      )}
          </div>


         
        </div>


        
      </nav>



      <main>{children}</main>
      </>
  )
  

                    }
export default navbar
  
