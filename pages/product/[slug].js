import ProductDetailsCrousal from '@/components/ProductDetailsCarousel'
import RelatedProducts from '@/components/RelatedProducts'
import Wrapper from '@/components/Wrapper'
import { fetchDataFromAPI } from '@/utils/api'
import { getDiscountedPricePercent } from '@/utils/helper'
import { data } from 'autoprefixer'
import React, { useState } from 'react'
import { IoMdHeartEmpty } from 'react-icons/io'
import { ReactMarkdown } from 'react-markdown/lib/react-markdown'
import { useSelector, useDispatch } from 'react-redux'
import { addToCart } from '@/redux/cartSlice';
import toast, { Toaster } from 'react-hot-toast';


const ProductDetails = ({product, relativeProducts}) => {

    const p = product?.data[0]?.attributes;

    const[selectedSize, setSelectedSize] = useState();
    const[showError, setShowError] = useState(false);

    const dispatch = useDispatch()

    const notify = () => toast.success('Success. Check your cart', {
        duration: 1500,
        position: 'bottom-center',
      });

      const error = () => toast.error('Please, select a size first.' ,{
       
        duration: 1500,
        position: 'bottom-center',
      })


  return (
    <div className="w-full md:py-20">
   
   <Toaster />
    <Wrapper>

        <div className="flex flex-col lg:flex-row md:px-10 gap-[50px] lg:gap-[100px]">
            {/* left column start */}
            <div className="w-full md:w-auto flex-[1.5] max-w-[500px] lg:max-w-full mx-auto lg:mx-0">
                <ProductDetailsCrousal images={p.image.data} />
            </div>
            {/* left column end */}

            {/* right column start */}
            <div className="flex-[1] py-3">
                {/* PRODUCT TITLE */}
                <div className="text-[34px] font-medium mb-2 leading-tight">
                {p.name}
                </div>

                {/* PRODUCT SUBTITLE */}
                <div className="text-lg font-medium mb-5">
                {p.subtitle}
                </div>

                {/* PRODUCT PRICE */}
                <div className="flex items-center">
                    <p className="mr-2 text-lg font-medium">
                        Price : &#8377;{p.price}
                    </p>

                        <>
                            <p className="text-base  font-medium line-through">
                                &#8377;{p.ogprice}
                            </p>
                            <p className="ml-auto text-base font-medium text-green-500">                               
                               {getDiscountedPricePercent(p.ogprice, p.price)}% off
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
                    </div>
                    {/* HEADING END */}

                    {/* SIZE START */}
                    <div
                        id="sizesGrid"
                        className="grid grid-cols-3 gap-2"
                    >
                    
                        {p?.size?.data.map((item) => (
                        <div key={item.id} 
                        className={`border rounded-md text-center py-3 font-medium
                        ${item.enabled ? " hover:border-black cursor-pointer" : "cursor-not-allowed bg-black/[0.1] opacity-50"} 
                        ${selectedSize === item.size ? "border-black" : ""}`}
                        onClick={() => {
                            setSelectedSize(item.size)
                            setShowError(false)
                        }}>
                            {item.size}
                            </div>
                        ))}
                
                    
                  

                    </div>
                    {/* SIZE END */}

                    {/* SHOW ERROR START */}

                      {
                        showError && (
                            <div className="text-red-600 mt-1">
                            Size selection is required
                        </div>
                        )
                      }

                    {/* SHOW ERROR END */}
                </div>
                {/* PRODUCT SIZE RANGE END */}

                {/* ADD TO CART BUTTON START */}

                <button
                    className="w-full py-4 rounded-full bg-black text-white text-lg font-medium transition-transform active:scale-95 mb-3 hover:opacity-75"
                    onClick={() => {
                        if(!selectedSize) {
                            setShowError(true)
                            error()
                            document.getElementById("sizesGrid").scrollIntoView({
                                block: "center",
                                behavior: 'smooth'
                            })
                        }
                        else {
                        dispatch(addToCart({
                            ...product?.data?.[0],
                            selectedSize,
                            oneQuantityPrice: p.price
                        }))
                        notify()
                    }}
                }
                >
                    Add to Cart
                </button>
                {/* ADD TO CART BUTTON END */}

                {/* favourite button start */}
                <button className="w-full py-4 rounded-full border border-black text-lg font-medium transition-transform active:scale-95 flex items-center justify-center gap-2 hover:opacity-75 mb-10">
                Favourite
                    <IoMdHeartEmpty size={20} />
                </button>
                {/* favourite  button end */}

                <div>
                    <div className="text-lg font-medium mb-5">
                        Product Details
                    </div>
                    <div className="markdown text-md mb-5">
                        <ReactMarkdown>{p.description}</ReactMarkdown>
                    </div>
                </div>
            </div>
            {/* right column end */}
        </div>

        <RelatedProducts relativeProducts={relativeProducts}/>
   
    </Wrapper>
</div>
  )
}

export default ProductDetails


// `getStaticPaths` requires using `getStaticProps`

  
export async function getStaticPaths() {
    const products = await fetchDataFromAPI("/api/products?populate=*");
    const paths = products?.data?.map((p) => ({
        params: {
            slug: p.attributes.slug,
        },
    }));

    return {
        paths,
        fallback: false,
    };
}

export async function getStaticProps({ params: { slug } }) {
    const product = await fetchDataFromAPI(
        `/api/products?populate=*&filters[slug][$eq]=${slug}`
    );
    const relativeProducts = await fetchDataFromAPI(
        `/api/products?populate=*&[filters][slug][$ne]=${slug}`
    );

    return {
        props: {
            product,
            relativeProducts,
        },
    };
}