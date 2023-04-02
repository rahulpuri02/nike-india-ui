import ProductDetailsCrousal from '@/components/ProductDetailsCarousel'
import RelatedProducts from '@/components/RelatedProducts'
import Wrapper from '@/components/Wrapper'
import React from 'react'
import { IoMdHeartEmpty } from 'react-icons/io'
import { ReactMarkdown } from 'react-markdown/lib/react-markdown'

const ProductDetails = () => {
  return (
    <div className="w-full md:py-20">
    <Wrapper>
        <div className="flex flex-col lg:flex-row md:px-10 gap-[50px] lg:gap-[100px]">
            {/* left column start */}
            <div className="w-full md:w-auto flex-[1.5] max-w-[500px] lg:max-w-full mx-auto lg:mx-0">
                <ProductDetailsCrousal/>
            </div>
            {/* left column end */}

            {/* right column start */}
            <div className="flex-[1] py-3">
                {/* PRODUCT TITLE */}
                <div className="text-[34px] font-semibold mb-2 leading-tight">
                Air Jordan XXXVII Low PF
                </div>

                {/* PRODUCT SUBTITLE */}
                <div className="text-lg font-semibold mb-5">
                Men's Basketball Shoes
                </div>

                {/* PRODUCT PRICE */}
                <div className="flex items-center">
                    <p className="mr-2 text-lg font-semibold">
                        MRP : $200
                    </p>

                        <>
                            <p className="text-base  font-medium line-through">
                                &#8377; $180
                            </p>
                            <p className="ml-auto text-base font-medium text-green-500">                               
                               10 % off
                            </p>
                        </>

                </div>

                <div className="text-md font-medium text-black/[0.5]">
                    incl. of taxes
                </div>
                <div className="text-md font-medium text-black/[0.5] mb-20">
                    {`(Also includes all applicable duties)`}
                </div>

                {/* PRODUCT SIZE RANGE START */}
                <div className="mb-10">
                    {/* HEADING START */}
                    <div className="flex justify-between mb-2">
                        <div className="text-md font-semibold">
                            Select Size
                        </div>
                        <div className="text-md font-medium text-black/[0.5] cursor-pointer">
                            Select Guide
                        </div>
                    </div>
                    {/* HEADING END */}

                    {/* SIZE START */}
                    <div
                        id="sizesGrid"
                        className="grid grid-cols-3 gap-2"
                    >
                    <div className='border rounded-md text-center py-3 font-medium hover:border-black cursor-pointer'>
                        UK 5
                    </div>
                    <div className='border rounded-md text-center py-3 font-medium hover:border-black cursor-pointer'>
                        UK 5
                    </div>
                    <div className='border rounded-md text-center py-3 font-medium hover:border-black cursor-pointer'>
                        UK 5
                    </div>
                    <div className='border rounded-md text-center py-3 font-medium hover:border-black cursor-pointer'>
                        UK 5
                    </div>
                    <div className='border rounded-md text-center py-3 font-medium hover:border-black cursor-pointer'>
                        UK 5
                    </div>
                     <div className='border rounded-md text-center py-3 font-medium hover:border-black cursor-pointer'>
                        UK 5
                    </div> <div className='border rounded-md text-center py-3 font-medium hover:border-black cursor-pointer'>
                        UK 5
                    </div>
                     <div className='border rounded-md text-center py-3 font-medium hover:border-black cursor-pointer'>
                        UK 5
                    </div> <div className='border rounded-md text-center py-3 font-medium hover:border-black cursor-pointer'>
                        UK 5
                    </div>
                  

                    </div>
                    {/* SIZE END */}

                    {/* SHOW ERROR START */}

                        <div className="text-red-600 mt-1">
                            Size selection is required
                        </div>

                    {/* SHOW ERROR END */}
                </div>
                {/* PRODUCT SIZE RANGE END */}

                {/* ADD TO CART BUTTON START */}
                <button
                    className="w-full py-4 rounded-full bg-black text-white text-lg font-medium transition-transform active:scale-95 mb-3 hover:opacity-75"
                >
                    Add to Cart
                </button>
                {/* ADD TO CART BUTTON END */}

                {/* WISHLIST BUTTON START */}
                <button className="w-full py-4 rounded-full border border-black text-lg font-medium transition-transform active:scale-95 flex items-center justify-center gap-2 hover:opacity-75 mb-10">
                    Wishlist
                    <IoMdHeartEmpty size={20} />
                </button>
                {/* Wishlist BUTTON END */}

                <div>
                    <div className="text-lg font-bold mb-5">
                        Product Details
                    </div>
                    <div className="markdown text-md mb-5">
                        <ReactMarkdown>You've got the hops and the speed—lace up in shoes that enhance what you bring to the court. The latest AJ is all about take-offs and landings, with multiple Air units to get you off the ground. The upper is made with strong, reinforced leno-weave fabric that'll keep you contained and leave your game uncompromised. This low-top model is designed for playing on outdoor courts.</ReactMarkdown>
                    </div>
                    <ol className="-mr[12px] text-md  mb-5">
                        <li>Colour Shown: Sesame/Chambray</li>
                        <li>Style: DN2647-200</li>
                    </ol>
                </div>
            </div>
            {/* right column end */}
        </div>

        <RelatedProducts />

    </Wrapper>
</div>
  )
}

export default ProductDetails