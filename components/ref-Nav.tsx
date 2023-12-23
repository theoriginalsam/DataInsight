import { useEffect, useRef, useState } from 'react';

const Navbar = () => {
  const dropdownRef = useRef<HTMLDivElement>(null);

  
  const [showDropdown, setShowDropdown] = useState(false);

  useEffect(() => {
    const handleClickOutside = (event: { target: any; }) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setShowDropdown(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [dropdownRef]);

  return (
    <div ref={dropdownRef}>
    
      <button onClick={() => setShowDropdown(true)}>
        Show Dropdown  
      </button>

      {showDropdown && (
        <div className="dropdown">
          Dropdown Content
        </div>  
      )}
    
    </div>
  )

}