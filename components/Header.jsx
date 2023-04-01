import React, { useState } from 'react'
import Wrapper from './Wrapper';

const Header = () => {

  const[mobileMenu, setMobileMenu] = useState(false);
  const[showCartMenu, setShowCartMenu] = useState(false);
  const[show, setShow] = useState("translate-y-0");
  const[LastScrollY, setLastScrollY] = useState(0);


  return (
    <div className={`w-full h-[50px] md:h-20 bg-white flex items-center justify-between z-20 sticky top-0 transition-transform duration-300 
    ${show}`}>
     <Wrapper>
      
     </Wrapper>
      </div>
  )
}

export default Header