'use client'

import Image from 'next/image'
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'
import { StaticImageData } from 'next/image'
import { useState, useCallback } from 'react'

type PDPImagesProps = {
  images: StaticImageData[]
}

const PDPImages = ({ images }: PDPImagesProps) => {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { 
      loop: true,
      align: 'start',
      skipSnaps: false,
      dragFree: true,
      startIndex: 0
    },
    [Autoplay({ delay: 4000, stopOnInteraction: false })]
  )
  
  const [checkInDate, setCheckInDate] = useState('aug 20, 2024')
  const [checkOutDate, setCheckOutDate] = useState('aug 20, 2024')
  const [adults, setAdults] = useState('1 adult')
  const [children, setChildren] = useState('1 kid')

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev()
  }, [emblaApi])

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext()
  }, [emblaApi])

  return (
    <section className="bg-[#FFF6EB] py-20">
      {/* Booking Widget */}
      <div className="max-w-3xl mx-auto mb-20">
        <div className="border border-[#294023] rounded-md p-10">
          <div className="grid grid-cols-2 gap-8 mb-8">
            <div>
              <p className="text-[#294023] mb-2 text-center">dates</p>
              <input 
                type="text" 
                value={checkInDate}
                onChange={(e) => setCheckInDate(e.target.value)}
                className="w-full border-b border-[#294023] bg-transparent text-center py-2 focus:outline-none text-[#294023]"
              />
            </div>
            <div>
              <p className="text-[#294023] mb-2 text-center">with</p>
              <input 
                type="text" 
                value={adults}
                onChange={(e) => setAdults(e.target.value)}
                className="w-full border-b border-[#294023] bg-transparent text-center py-2 focus:outline-none text-[#294023]"
              />
            </div>
            <div>
              <input 
                type="text" 
                value={checkOutDate}
                onChange={(e) => setCheckOutDate(e.target.value)}
                className="w-full border-b border-[#294023] bg-transparent text-center py-2 focus:outline-none text-[#294023]"
              />
            </div>
            <div>
              <input 
                type="text" 
                value={children}
                onChange={(e) => setChildren(e.target.value)}
                className="w-full border-b border-[#294023] bg-transparent text-center py-2 focus:outline-none text-[#294023]"
              />
            </div>
          </div>
          <div className="flex justify-center">
            <button className="bg-[#C2F15C] text-[#294023] font-medium py-3 px-8 rounded-full hover:bg-[#b3e24d] transition-colors">
              CHECK AVAILABILITY
            </button>
          </div>
        </div>
      </div>

      {/* Original Carousel with Navigation Arrows */}
      <div className="relative max-w-[1400px] mx-auto">
        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex">
            {images.map((image, index) => (
              <div 
                key={index}
                className="relative mx-4 shrink-0"
                style={{
                  width: '800px',
                  height: '500px'
                }}
              >
                <Image
                  src={image}
                  alt={`Property image ${index + 1}`}
                  fill
                  className="object-cover rounded-2xl transition-transform duration-300"
                  priority={index === 0}
                />
                <div className="absolute inset-0 bg-black/20 hover:bg-black/0 transition-all duration-300 rounded-2xl" />
              </div>
            ))}
          </div>
        </div>
        

      </div>
      
      {/* View More Button */}
      <div className="flex justify-center mt-12 relative">
        <button className="border border-[#294023] text-[#294023] text-center font-medium py-3 px-12 rounded-full hover:bg-[#294023] hover:text-white transition-colors">
          VIEW MORE
        </button>
                {/* Navigation Arrows */}
        <button 
          onClick={scrollPrev} 
          className="absolute left-4 -top-[300px] -translate-y-1/2 text-4xl text-black bg-transparent w-12 h-12 flex items-center justify-center rounded-full cursor-pointer z-10"
          aria-label="Previous slide"
        >
          &lt;
        </button>
        <button 
          onClick={scrollNext} 
          className="absolute right-4 -top-[300px] -translate-y-1/2 text-4xl text-black bg-transparent] w-12 h-12 flex items-center justify-center rounded-full cursor-pointer z-10"
          aria-label="Next slide"
        >
          &gt;
        </button>
      </div>
    </section>
  )
}

export default PDPImages