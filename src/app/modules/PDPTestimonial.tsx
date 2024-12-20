'use client'

import useEmblaCarousel from 'embla-carousel-react'
import { useCallback } from 'react'

type Testimonial = {
  quote: string
  author: string
  role: string
}

const PDPTestimonial = ({ testimonials }: { testimonials: Testimonial[] }) => {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true },
  )

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi])
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi])

  return (
    <section className="py-[100px] bg-[#FFF6EB] flex flex-col justify-center px-4">
      <h2 className="text-[#294023] text-[64px] mb-[80px] text-center font-area font-bold">
        REVIEWS
      </h2>

      <div className="relative">
        <button 
          onClick={scrollPrev}
          className="absolute left-10 top-1/2 -translate-y-1/2 z-10 w-12 h-12 flex items-center justify-center"
        >
          <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M25.912 7.87366L25.336 7.98166C25.156 6.54166 24.292 6.10966 22.564 6.79366L22.564 6.75766C16.768 8.91766 9.568 11.6897 4.636 13.7777C10.864 16.2617 17.74 18.9617 22.852 20.6897C24.436 21.0137 25.3 20.4377 25.336 19.0697L25.912 19.1417C25.804 20.5457 25.768 21.4097 25.768 22.7057C25.768 23.6417 25.84 24.5777 25.912 25.6577L25.336 25.7297C25.3 24.9017 24.688 24.0377 23.212 23.2817C16.66 20.3297 8.02 16.8017 0.927999 14.0657C0.963999 13.7417 0.999999 13.2377 0.999999 12.7697C0.999999 12.3017 0.963999 11.6897 0.927999 11.3657C7.552 8.95366 15.94 5.67766 22.78 2.83366C24.292 2.07766 25.12 1.32166 25.336 0.277656L25.912 0.349656C25.84 1.17766 25.804 1.93366 25.768 2.83366L25.768 3.91366C25.768 5.46166 25.804 6.57766 25.912 7.87366Z" fill="black"/>
          </svg>
        </button>

        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="flex-[0_0_100%] min-w-0">
                <div className="max-w-4xl mx-auto text-center">
                  <blockquote className="text-[#294023] text-[48px] font-anth leading-tight mb-8">
                   {`"${testimonial.quote}"`}
                  </blockquote>
                  <div className="text-[#294023]">
                    <p className="text-xl font-semibold font-area">{testimonial.author}</p>
                    <p className="text-lg font-semibold font-area">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <button 
          onClick={scrollNext}
          className="absolute right-10 top-1/2 -translate-y-1/2 z-10 w-12 h-12 flex items-center justify-center"
        >
          <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0.0879992 7.87366L0.663998 7.98166C0.844 6.54166 1.708 6.10966 3.436 6.79366L3.436 6.75766C9.232 8.91766 16.432 11.6897 21.364 13.7777C15.136 16.2617 8.26 18.9617 3.148 20.6897C1.564 21.0137 0.7 20.4377 0.663999 19.0697L0.0879997 19.1417C0.196001 20.5457 0.232 21.4097 0.232 22.7057C0.232 23.6417 0.159999 24.5777 0.088 25.6577L0.663999 25.7297C0.700001 24.9017 1.312 24.0377 2.788 23.2817C9.34 20.3297 17.98 16.8017 25.072 14.0657C25.036 13.7417 25 13.2377 25 12.7697C25 12.3017 25.036 11.6897 25.072 11.3657C18.448 8.95366 10.06 5.67766 3.22 2.83366C1.708 2.07766 0.879999 1.32166 0.663998 0.277656L0.0879989 0.349656C0.159998 1.17766 0.196 1.93366 0.231999 2.83366L0.231999 3.91366C0.231999 5.46166 0.196 6.57766 0.0879992 7.87366Z" fill="black"/>
          </svg>
        </button>
      </div>
    </section>
  )
}

export default PDPTestimonial