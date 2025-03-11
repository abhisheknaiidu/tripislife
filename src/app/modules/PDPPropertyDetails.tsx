'use client'

import { useEffect, useRef, useState } from 'react';
import { PDPData } from '@/lib/pdpData';
import Image from 'next/image';

export function PDPPropertyDetails({ data }: { data: PDPData['details'] }) {
  const [visibleAmenities, setVisibleAmenities] = useState<number[]>([]);
  const amenityRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const index = amenityRefs.current.findIndex(ref => ref === entry.target);
          if (entry.isIntersecting && index !== -1 && !visibleAmenities.includes(index)) {
            setTimeout(() => {
              setVisibleAmenities(prev => [...prev, index]);
            }, index * 150);
          }
        });
      },
      { threshold: 0.3, rootMargin: '0px 0px -100px 0px' }
    );

    // Store a copy of the current refs for cleanup
    const currentRefs = [...amenityRefs.current];

    currentRefs.forEach(ref => {
      if (ref) observer.observe(ref);
    });

    return () => {
      currentRefs.forEach(ref => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, [visibleAmenities]);

  return (
    <section className="min-h-screen bg-[#FFF6EB] py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="text-center mb-20">
          <h2 className="font-anth text-6xl md:text-8xl text-[#294023] leading-none mb-6 uppercase">
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
          <h3 className="font-anth text-5xl md:text-7xl text-[#294023] leading-none mb-16 text-center">
            amenities
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {/* Left column with image */}
            <div className="relative">
              {data.amenityImages && data.amenityImages[0] && (
                <div className="w-full aspect-square">
                  <Image 
                    src={data.amenityImages[0].src} 
                    alt={data.amenityImages[0].alt || "Amenity"} 
                    className="object-cover rounded-lg"
                    fill
                  />
                </div>
              )}
            </div>
            
            {/* Middle column with amenities list */}
            <div className="flex flex-col items-center justify-center space-y-6">
              {data.amenities.map((amenity, i) => (
                <div 
                  key={i} 
                  ref={el => amenityRefs.current[i] = el}
                  className={`transition-all duration-700 ease-in-out w-full ${
                    visibleAmenities.includes(i) 
                      ? 'opacity-100 translate-y-0' 
                      : 'opacity-0 translate-y-10'
                  }`}
                >
                  <div className="text-[#294023] text-xl font-medium text-center">
                    {amenity.label}
                  </div>
                </div>
              ))}
            </div>
            
            {/* Right column with image */}
            <div className="relative flex items-end">
              {data.amenityImages && data.amenityImages[1] && (
                <div className="w-full aspect-square">
                  <Image 
                    src={data.amenityImages[1].src} 
                    alt={data.amenityImages[1].alt || "Amenity"} 
                    className="object-cover rounded-lg"
                    fill
                  />
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
