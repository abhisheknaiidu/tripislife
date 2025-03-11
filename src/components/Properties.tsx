"use client"

import Image, { StaticImageData } from 'next/image';
import Link from 'next/link';
import useEmblaCarousel from 'embla-carousel-react';
import { useCallback, useEffect, useState } from 'react';

type Property = {
  title: string;
  image: StaticImageData;
  slug: string;
  subtitle?: string;
};

export function Properties({ items }: { items: Property[] }) {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: 'start',
    slidesToScroll: 1,
    dragFree: true,
    inViewThreshold: 0
  });
  const [scrollProgress, setScrollProgress] = useState(0);

  const onScroll = useCallback(() => {
    if (!emblaApi) return;
    const progress = emblaApi.scrollProgress();
    const normalizedProgress = progress < 0 ? 1 + progress : progress;
    setScrollProgress(normalizedProgress);
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onScroll();
    emblaApi.on('scroll', onScroll);
    emblaApi.on('reInit', onScroll);
    return () => {
      emblaApi.off('scroll', onScroll);
      emblaApi.off('reInit', onScroll);
    };
  }, [emblaApi, onScroll]);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  return (
    <section className="max-w-7xl mx-auto py-32 px-4">
      <div className="flex flex-col mb-[74px] justify-center items-center">
        <h2 className="font-area text-[#294023] font-bold text-[64px]">PROPERTIES</h2>
        <p className="text-[#294023] text-[20px] flex items-end mb-4">CONSCIOUSLY DESIGNED & HANDPICKED FOR YOU</p>
      </div>

      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex" style={{ gap: '1.5rem' }}>
          {items.map((property) => (
            <div className="flex-[0_0_calc(33.333%-1rem)]" key={property.slug}>
              <Link
                href={`/property/${property.slug}`}
                className="group relative aspect-[3/4] block overflow-hidden rounded-2xl"
              >
                <Image
                  src={property.image}
                  alt={property.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute  left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 text-white text-center w-full flex justify-center">
                  <h3 className="font-anth text-4xl sm:text-[64px] mb-2 leading-none lowercase max-w-[200px] ">{property.title}</h3>
                  {/* <p className="text-xl font-light">{property.subtitle}</p> */}
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>

      <div className="flex justify-center items-center gap-8 mt-12">
        <button
          onClick={scrollPrev}
          className="w-12 h-12 rounded-full border border-neutral-300 flex items-center justify-center hover:bg-neutral-100 transition-colors"
        >
          <span className="sr-only">Previous</span>
          <svg width="24" height="24" viewBox="0 0 24 24">
            <path d="M15 18l-6-6 6-6" stroke="currentColor" fill="none" strokeWidth="2" />
          </svg>
        </button>

        <div className="w-64 h-[2px] bg-neutral-200 relative">
          <div
            className="absolute top-0 left-0 h-full bg-black transition-all duration-300"
            style={{
              width: `${Math.max(15, scrollProgress * 100)}%`
            }}
          />
        </div>

        <button
          onClick={scrollNext}
          className="w-12 h-12 rounded-full border border-neutral-300 flex items-center justify-center hover:bg-neutral-100 transition-colors"
        >
          <span className="sr-only">Next</span>
          <svg width="24" height="24" viewBox="0 0 24 24">
            <path d="M9 6l6 6-6 6" stroke="currentColor" fill="none" strokeWidth="2" />
          </svg>
        </button>
      </div>
    </section>
  );
} 