import Link from 'next/link';
import { useState } from 'react';

const bigdata = ({ children }:any) => {
  const [showDropdown, setShowDropdown] = useState(false);

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  return (
    <>
    <h1>THIS IS A SECTION</h1>
     </>
  )
  

                    }
export default bigdata
  
