'use client'

import Image from 'next/image';
import useEmblaCarousel from 'embla-carousel-react';
import { useCallback, useEffect } from 'react';
import Autoplay from 'embla-carousel-autoplay'
import { StaticImageData } from 'next/image';
export function PropertyCarousel({ images }: { images: StaticImageData[] }) {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true }, 
    [Autoplay({ delay: 2000, stopOnInteraction: false })]
  );

  return (
    <div className="overflow-hidden h-full" ref={emblaRef}>
      <div className="flex h-full">
        {images.map((image, index) => (
          <div 
            key={index} 
            className="flex-[0_0_100%] min-w-0 relative h-full"
          >
            <Image
              src={image}
              alt={`Property image ${index + 1}`}
              fill
              className="object-cover"
              priority={index === 0}
            />
          </div>
        ))}
      </div>
    </div>
  );
}