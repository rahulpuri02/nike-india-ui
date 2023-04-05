import React, { useEffect, useState } from 'react'
import Wrapper from './Wrapper';
import Link from 'next/link';
import Menu from './Menu';

import { IoMdHeartEmpty } from "react-icons/io";
import { BsCart } from "react-icons/bs";
import { BiMenuAltRight } from "react-icons/bi";
import { GrSearch } from "react-icons/gr";
import { VscChromeClose } from "react-icons/vsc";
import MobileMenu from './MobileMenu';

const Header = ({className}) => {
 
  const[mobileMenu, setMobileMenu] = useState(false);
  const[showCatMenu, setShowCatMenu] = useState(false);
  const[show, setShow] = useState("translate-y-0");
  const[LastScrollY, setLastScrollY] = useState(0);
  
  const controlNavbar = () => {
   if(window.scrollY > 200) {
    if(window.scrollY > LastScrollY && !mobileMenu){
      setShow("-translate-y-[80px]")
    }else {
      setShow("shadow-sm]")
    }
    
   }else {
    setShow("translate-y-0")
   }
   setLastScrollY(window.scrollY)
  }



  useEffect(() => {
    window.addEventListener('scroll', controlNavbar)
    return (
      () => {
        window.removeEventListener('scroll', controlNavbar)
      }
    )
  }, [LastScrollY])


  return (
    <div className={`w-full h-[50px] md:h-20 bg-white flex items-center justify-between z-20 sticky top-0 transition-transform duration-300 
    ${show}`}>
     <Wrapper className="h-15 flex items-center justify-between" >
      <Link href={'/'}>
      <img className='w-10 md:w-15' src="/logo.svg" alt="logo" />
      </Link>
      <Menu showCatMenu={showCatMenu} setShowCatMenu={setShowCatMenu} />
       
       {
        mobileMenu && (
        <MobileMenu 
      showCatMenu={showCatMenu} 
      setShowCatMenu={setShowCatMenu}
      setMobileMenu={setMobileMenu}/> 
        )
       }

       {/*Icons start */}

      <div className='flex items-center gap-[12px] md:gap-[9px] text-black'>
       

       {/*heart-Icon Start 
      <div className='w-8 h-9 md:w-11 md:h-11 rounded-full flex justify-center items-center 
      hover:bg-black/[0.05] cursor-pointer relative'>
      <IoMdHeartEmpty  className='text-[18px] md:text-[21px]'/>
       <div className='h-[14px] md:h-[18px] rounded-full bg-red-600 absolute top-1 left-5 md:left-7 text-white text-[10px] flex justify-center items-center py-0.5 px-1'>12</div>
      </div>
      */}

        {/*Cart-Icon Start */}
      <div className='w-8 h-9 md:w-11 md:h-11 rounded-full flex justify-center items-center 
      hover:bg-black/[0.05] cursor-pointer relative'>
      <BsCart  className='text-[15px] md:text-[20px]'/>
       <div className='h-[14px] md:h-[18px] rounded-full bg-red-600 absolute top-1 left-5 md:left-7 text-white text-[10px] flex justify-center items-center py-0.5 px-1'>5</div>
      </div>

       {/*search-Icon Start  */}
       <div className='w-8 h-8 md:w-11 md:h-11 rounded-full flex justify-center items-center 
      hover:bg-black/[0.05] cursor-pointer relative'>
      <GrSearch  className='text-[18px] md:text-[21px]'/>
      </div>

       {/*Icons -end */}
      
      {/*Mobile View Start*/}
      <div className='flex md:hidden'>
     <div className='md:w-9 h-10 rounded-full flex justify-center items-center 
      hover:bg-black/[0.05] cursor-pointer relative'>
      {
        mobileMenu ? (
         <VscChromeClose 
         onClick={() => setMobileMenu(false)}
         className='text-[16px] ' />
        ) : (
          <BiMenuAltRight 
          onClick={() => setMobileMenu(true)}
          className='text-[20px] '/>
        )
      }
     </div>
      </div>


      </div>
   
     
 
     
     


     
      
     </Wrapper>
      </div>
  )
}

export default Header