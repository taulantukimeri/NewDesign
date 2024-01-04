

import React, { useState } from 'react';
import '../../../../styles/Navbar/NavLinks/NavLinks.css';
import LinkModal from '../LinkModal/LinkModal';

function NavLinks({ link }) {

  return (


      <div className='nav-link'>
        
        <div className='title'>{link.title}
        {link.isToggle && <span className='nav-arrow'></span>}
        </div>
       {link.isToggle && <div className='links-description'><LinkModal primary={link.primary} secondary={link.secondary} /></div>}
      </div>


  );
}

export default NavLinks;
