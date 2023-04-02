import Link from 'next/link';
import React from 'react'

const ProductCard = () => {
  return (
    <Link href={'/product/1'}
    className="overflow-hidden bg-white duration-200 hover:scale-105 cursor-pointer">
    <img src="/product-1.webp"
    className='w-full' />
    <div className='p-4  text-black/[0.9]'>
      <h3 className='text-lg font-medium mb-1'>Product Name</h3>
      <div className="flex items-center text-black/[0.5]">
       <p className="mr-2 text-base font-semibold">$200</p>
        <p className='className="text-base  font-medium line-through'>$230</p>
        <p className="ml-auto text-base font-medium text-green-500">23% off</p>
      </div>
    </div>
    </Link>
  )
}

export default ProductCard;