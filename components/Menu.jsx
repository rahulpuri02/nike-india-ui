import Link from 'next/link'
import React from 'react'
import {BsChevronDown} from 'react-icons/bs';


const Menu = ({showCatMenu, setShowCatMenu, categories}) => {

    const data = [
        { id: 1, name: "Home", url: "/" },
        { id: 2, name: "Categories", subMenu: true },
        { id: 3, name: "Contact", url: "/contact" },
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
                 {categories?.map(
                  ({ attributes: c, id }) => {
                    return (
                        <Link key={c.id} href={`/category/${c.slug}`}   onClick={() => setShowCatMenu(false)}>
                        <li className='h-12 flex justify-between items-center  pl-5 pr-3 text-sm hover:bg-black/[0.03] rounded-lg'>{c.name}                        
                        <span className='opacity-50 text-sm'>{c.products.data.length}</span>
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