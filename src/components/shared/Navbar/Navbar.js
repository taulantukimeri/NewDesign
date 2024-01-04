
import React, { useState, useEffect } from 'react';
import DesktopNavbarMenu from '../Navbar/DesktopNavbarMenu/DesktopNavbarMenu';
import MobileNavbarMenu from '../Navbar/MobileNavbarMenu/MobileNavbarMenu';

const Navbar = () => {
  const [isDesktop, setIsDesktop] = useState(window.innerWidth > 1230);

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth > 1230);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className='navbar'>
              
      {isDesktop ? <DesktopNavbarMenu /> : <MobileNavbarMenu />}
    </div>
  );
};

export default Navbar;
