import HeroBanner from '@/components/HeroBanner'
import ProductCard from '@/components/ProductCard'
import Wrapper from '@/components/Wrapper'
import { fetchDataFromAPI } from '@/utils/api';
import Head from 'next/head'
import { useEffect, useState } from 'react';


export default function Home() {
  const [data, setData] = useState(null);
 
 useEffect(() => {
  fetchProducts();
 } , [])

 const fetchProducts =  async () => {
 const {data} =  await fetchDataFromAPI('/api/products');
  setData(data);
  
 }
  return (
    <>
      <Head>
        <title>Nike. Just Do It. Nike IN</title>
        <meta name="description" content="Inspiring the world's athletes, Nike delivers innovative products, experiences and services." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
      <HeroBanner />
      <Wrapper>
       
                   {/* heading and paragaph start */}
                   <div className="text-center max-w-[800px] mx-auto my-[50px] md:my-[80px]">
                    <div className="text-[28px] md:text-[34px] mb-5 font-semibold leading-tight">
                        Cushioning for Your Miles
                    </div>
                    <p className="text-md md:text-xl">
                        A lightweight Nike ZoomX midsole is combined with
                        increased stack heights to help provide cushioning
                        during extended stretches of running.
                    </p>
                </div>
                {/* heading and paragaph end */}

                {/*Product Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 my-14 px-5 md:px-0">
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                </div>

      </Wrapper>
      </main>
    </>
  )
}
