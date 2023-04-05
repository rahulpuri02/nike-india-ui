import Link from 'next/link';
import React from 'react'
import Image from 'next/image';
import { getDiscountedPricePercent } from '@/utils/helper';

const ProductCard = ({ data: { attributes: p, id } }) => {
  return (
    <Link href={`/products/${p.slug}`}
    className="overflow-hidden bg-white duration-200 hover:scale-105 cursor-pointer">
    <Image 
    width={500}
    height={500}
    src={p.thumbnail.data.attributes.url}
     alt={p.name}
    />
    <div className='p-4  text-black/[0.9]'>
      <h3 className='text-lg font-medium mb-1'>{p.name}</h3>
      <div className="flex items-center text-black/[0.5]">
       <p className="mr-2 text-base font-semibold">₹{p.price}</p>
       {
        p.ogprice && (
         <>
          <p className='className="text-base  font-medium line-through'>₹{p.ogprice}</p>
          <p className="ml-auto text-base font-medium text-green-500">
            {getDiscountedPricePercent(p.ogprice, p.price)}% off
          </p>
          </>
        )}

      </div>
    </div>
    </Link>
  )
}

export default ProductCard;