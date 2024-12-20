'use client'

import Image from 'next/image'
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'
import { StaticImageData } from 'next/image'

type PDPImagesProps = {
  images: StaticImageData[]
}

const PDPImages = ({ images }: PDPImagesProps) => {
  const [emblaRef] = useEmblaCarousel(
    { 
      loop: true,
      align: 'start',
      skipSnaps: false,
      dragFree: true,
      startIndex: 0
    },
    [Autoplay({ delay: 4000, stopOnInteraction: false })]
  )

  return (
    <section className="bg-[#FFF6EB] py-20">
      <div className="max-w-[1400px] mx-auto overflow-hidden" ref={emblaRef}>
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
    </section>
  )
}

export default PDPImages