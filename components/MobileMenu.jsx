import Link from 'next/link'
import React from 'react'
import {BsChevronDown} from 'react-icons/bs';


const MobileMenu = ({showCatMenu, setShowCatMenu, setMobileMenu, categories}) => {
 

  const data = [
    { id: 1, name: "Home", url: "/" },
    { id: 2, name: "Categories", subMenu: true },
    { id: 3, name: "Contact", url: "/contact" },
];


  return (
    <ul className='flex flex-col md:hidden font-semibold absolute top-[50px] left-0 w-full h-[calc(100vh - 50px)] bg-white text-black'>
     {
        data.map((item) => {
         return (
           <React.Fragment key={item.id}>
           {item?.subMenu ? 
           <li 
           onClick={() => setShowCatMenu(!showCatMenu)}
           className='cursor-pointer py-4 px-5 border-b flex flex-col relative'>            
            
            <div className='flex justify-between items-center'>{item.name}
            <BsChevronDown size={14} />
            </div>
            
            {showCatMenu && (
                <ul className='bg-black/[0.05] -mx-5 mt-4 -mb-4 '>
                 {categories?.map(({attributes: c, id}) => {
                    return (
                        <Link key={c.id} href={`/category/${c.slug}`}  
                        onClick={() => {
                            setShowCatMenu(false) 
                            setMobileMenu(false)
                        }
                            }
                            >
                        <li className='py-4 px-8 border-t flex justify-between '>{c.name}                        
                        <span className='opacity-50 text-sm'>{c.products.data.length}</span>
                        </li>
                        </Link>
                    )
                 })}
                </ul>
            )}

           </li> 
           : (
            <li className='py-4 px-5 border-1'>
             <Link href={item?.url}
             onClick={() => setMobileMenu(false)}>
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

export default MobileMenu