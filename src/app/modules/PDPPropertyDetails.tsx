'use client'

import { useState } from 'react';
import { PDPData } from '@/lib/pdpData';
import Image from 'next/image';

// Use the same Amenity interface as in AmenitiesList component
interface Amenity {
  label: string;
  imageSrc?: string;
  [key: string]: string | undefined;
}

export function PDPPropertyDetails({ data }: { data: PDPData['details'] }) {
  // Convert image sources to strings
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const getImageUrl = (img: any) => {
    if (!img) return '/placeholder.jpg';
    // Handle both string paths and Next.js image objects
    return typeof img.src === 'string' ? img.src : img.src.src || '/placeholder.jpg';
  };

  const defaultLeftImage = data.amenityImages && data.amenityImages[0] 
    ? getImageUrl(data.amenityImages[0])
    : '/placeholder.jpg';
    
  const defaultRightImage = data.amenityImages && data.amenityImages[1] 
    ? getImageUrl(data.amenityImages[1])
    : '/placeholder.jpg';
  
  const [leftImageSrc, setLeftImageSrc] = useState<string>(defaultLeftImage);
  const [rightImageSrc, setRightImageSrc] = useState<string>(defaultRightImage);
  console.log(setRightImageSrc, 'rightImageSrc')

  // Prepare amenities data with image sources
  const amenitiesWithImages: Amenity[] = data.amenities.map((amenity, index) => {
    // Alternate between left and right images
    let imageSrc;
    if (data.amenityImages && data.amenityImages.length > 0) {
      const amenityImage = data.amenityImages[index % data.amenityImages.length];
      imageSrc = amenityImage ? getImageUrl(amenityImage) : '/placeholder.jpg';
    }
    
    return {
      ...amenity,
      imageSrc
    };
  });

  const handleImageHover = (imageSrc: string | undefined) => {
    if (!imageSrc) return;
    
    // Update the left image when hovering
    setLeftImageSrc(imageSrc);
  };

  return (
    <section className="min-h-screen bg-[#FFF6EB] py-20 overflow-hidden">
      
      <div className="flex flex-col items-center justify-center mb-10">
      <svg width="58" height="58" viewBox="0 0 58 58" fill="none" xmlns="http://www.w3.org/2000/svg">
<g opacity="0.2">
<g clip-path="url(#clip0_525_192)">
<path d="M57.3763 0.304743C57.0752 1.39249 56.7688 2.47803 56.4743 3.568C51.7037 21.2096 46.9346 38.8511 42.1641 56.4927C42.1004 56.728 42.0146 56.9574 41.7948 57.1868C39.9101 45.2163 38.0247 33.2466 36.1282 21.2029C24.0734 19.2523 12.043 17.3062 0.0125794 15.3594C0.00813964 15.3179 0.00369984 15.2772 0 15.2358C0.191652 15.1692 0.380343 15.0885 0.576434 15.0367C11.488 12.1538 22.4003 9.27314 33.3126 6.39393C41.0267 4.35828 48.7424 2.32707 56.4558 0.289203C56.7192 0.219647 56.9686 0.0982919 57.2246 0.000616265C57.5236 -0.0223227 57.3142 0.208547 57.3763 0.304003V0.304743Z" fill="#294023"/>
<path d="M20.9296 43.8608C17.0107 43.8911 13.2643 40.7559 13.2561 36.1155C13.248 31.8518 16.7606 28.4435 21.0369 28.4828C25.2843 28.522 28.6837 31.9488 28.6778 36.1843C28.6711 40.4406 25.1992 43.8807 20.9303 43.86L20.9296 43.8608Z" fill="#294023"/>
</g>
</g>
<defs>
<clipPath id="clip0_525_192">
<rect width="57.3904" height="57.1869" fill="white"/>
</clipPath>
</defs>
</svg>
</div>
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="text-center mb-20">

          <h2 className="font-anth text-6xl md:text-8xl text-[#294023] leading-none mb-6">
            {data.title}
          </h2>
          <p className="text-[#294023] text-lg md:text-xl uppercase font-area">
            {data.location}
          </p>
        </div>

        <div className="max-w-4xl mx-auto text-center mb-24">
          {data.description.map((paragraph, i) => (
            <p key={i} className="text-[#294023] text-lg md:text-xl leading-relaxed mb-6">
              {paragraph}
            </p>
          ))}
        </div>

        <div className="mb-32">
          <div className="max-w-4xl mx-auto">
            <h3 className="font-anth text-5xl md:text-6xl text-[#294023] leading-none mb-8 text-center">
              amenities
            </h3>
            <div className="flex justify-center mb-12">
              <div className="h-0.5 w-32 bg-[#294023]/30"></div>
            </div>
          </div>
          
          <div className="flex flex-col md:flex-row max-w-6xl mx-auto">
            {/* Left image column */}
            <div className="w-full md:w-1/3 relative">
              <div className="aspect-[3/4] w-full overflow-hidden">
                <Image 
                  src={leftImageSrc} 
                  alt="Amenity" 
                  className="object-cover transition-all duration-500 ease-in-out h-full w-full"
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
            </div>
            
            {/* Middle column with amenities list */}
            <div className="w-full md:w-1/3 flex items-center justify-center px-8 py-10 md:py-0">
              <div className="space-y-6 w-full">
                {amenitiesWithImages.map((amenity, i) => (
                  <div 
                    key={i}
                    className="text-[#294023] text-center cursor-pointer transition-all duration-300 hover:text-[#1a2a17] group relative"
                    onMouseEnter={() => handleImageHover(amenity.imageSrc)}
                  >
                    <span className="relative inline-block transition-transform group-hover:translate-y-[-2px] group-hover:font-medium group-hover:text-[#1a2a17]">
                      {amenity.label}
                      <span className="absolute bottom-[-3px] left-0 w-0 h-[1px] bg-[#1a2a17] transition-all duration-300 group-hover:w-full"></span>
                    </span>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Right image column */}
            <div className="w-full md:w-1/3 relative">
              <div className="aspect-[3/4] w-full overflow-hidden">
                <Image 
                  src={rightImageSrc} 
                  alt="Amenity" 
                  className="object-cover h-full w-full"
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
