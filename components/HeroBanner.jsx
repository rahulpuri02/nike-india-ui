import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

const HeroBanner = () => {
  return (
    <div className='relative text-white text-sm w-full max-w-[1360px] mx-auto'>
         <Carousel
          autoPlay={true}
          infiniteLoop={true}
          showThumbs={false}
          showIndicators={false}
          showStatus={false}
          showArrows={false}
          >
                <div>
                    <img
                    className="aspect-[16/10] md:aspect-auto"
                     src="/slide-1.png"  />
                   <div className="shop-now">
                        Shop now
                    </div>
                </div>
                <div>
                    <img
                    className="aspect-[16/10] md:aspect-auto"
                     src="/slide-2.png"  />
                   <div className="shop-now">
                        Shop now
                    </div>
                </div>
                <div>
                    <img
                    className="aspect-[16/10] md:aspect-auto"
                     src="/slide-3.png"  />
                   <div className="shop-now">
                        Shop now
                    </div>
                </div>
            </Carousel>
    </div>
  )
}

export default HeroBanner