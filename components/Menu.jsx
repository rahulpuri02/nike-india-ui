import Link from 'next/link'
import React from 'react'
import {BsChevronDown} from 'react-icons/bs';


const Menu = ({showCatMenu, setShowCatMenu}) => {

    const data = [
        { id: 1, name: "Home", url: "/" },
        { id: 2, name: "Categories", subMenu: true },
        { id: 3, name: "Contact", url: "/contact" },
    ]

    const subMenuData = [
        { id: 1, name: "Jordan Series", doc_count: 11 },
        { id: 2, name: "Sneakers", doc_count: 8 },
        { id: 3, name: "Running Shoes", doc_count: 64 },
        { id: 4, name: "Football Shoes", doc_count: 107 },

    ]
  return (
    <ul className=' hidden md:flex items-center gap-8 font-medium text-black'>
     {
        data.map((item) => {
         return (
           <React.Fragment key={item.id}>
           {item?.subMenu ? 
           <li 
           onMouseEnter={() => setShowCatMenu(true)}
           onMouseLeave={() => setShowCatMenu(false)}
           className='cursor-pointer flex items-center gap-2 relative'>
            {item.name}
            <BsChevronDown size={14} />
            
            {showCatMenu && (
                <ul className='bg-white absolute top-6 left-0 min-w-[220px] p-1 md:my-1 text-black shadow-lg'>
                 {subMenuData.map((submenu) => {
                    return (
                        <Link key={submenu.id} href="/"   onClick={() => setShowCatMenu(false)}>
                        <li className='h-12 flex justify-between items-center  pl-5 pr-3 text-sm hover:bg-black/[0.03] rounded-lg'>{submenu.name}                        
                        <span className='opacity-50 text-sm'>{submenu.doc_count}</span>
                        </li>
                        </Link>
                    )
                 })}
                </ul>
            )}

           </li> 
           : (
            <li className='cursor.pointer'>
             <Link href={item?.url}>
             {item.name}
             </Link>
            </li>
           )}
           </React.Fragment> 
         )
        })
     }
        </ul>
  )
}

export default Menu