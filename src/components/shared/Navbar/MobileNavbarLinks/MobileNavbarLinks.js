import React, { useState } from 'react'
import '../../../../styles/Navbar/MobileNavbarMenu/MobileNavbarMenu.css';

function MobileNavbarLinks({title, body}) {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(isDropdownOpen => !isDropdownOpen)
  };

  return (
    <div className='accordion'>
      <div className='sidebar-links' onClick={toggleDropdown}>
        <div className='sidebar-link '><p>{title}</p>{isDropdownOpen ? '' : ''}</div>
        {/* <p className='accordion-icon'></p> */}
      </div>
      {body && isDropdownOpen && (
        <div className='accordion-body'>
          {body.map((body) => (
            <p key={body} className='body-paragraph'>{body}</p>
          ))}
        </div>
      )}
    </div>
  );
}

export default MobileNavbarLinks;