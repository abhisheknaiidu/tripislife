'use client'

import Image from 'next/image'
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'
import { StaticImageData } from 'next/image'
import { useState, useCallback, useEffect, useRef } from 'react'
import { BookingWidget } from '../components/BookingWidget'
import { createPortal } from 'react-dom'

type PDPImagesProps = {
  images: StaticImageData[]
}

// Modal Component
const ImageGalleryModal = ({ images, isOpen, onClose, imageCaptions }: { 
  images: StaticImageData[], 
  isOpen: boolean, 
  onClose: () => void,
  imageCaptions: string[]
}) => {
  const modalRef = useRef<HTMLDivElement>(null)
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { 
      loop: true,
      align: 'center',
      skipSnaps: false,
    }
  )
  
  const [activeIndex, setActiveIndex] = useState(0)
  
  useEffect(() => {
    if (!emblaApi) return
    
    // Update active index when scrolling
    const onSelect = () => {
      setActiveIndex(emblaApi.selectedScrollSnap())
    }
    
    emblaApi.on('select', onSelect)
    
    // Return cleanup function
    return () => {
      emblaApi.off('select', onSelect)
    }
  }, [emblaApi])
  
  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev()
  }, [emblaApi])

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext()
  }, [emblaApi])
  
  useEffect(() => {
    // Prevent scrolling when modal is open
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    
    // Close modal on escape key
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    
    document.addEventListener('keydown', handleEscape)
    return () => {
      document.body.style.overflow = 'unset'
      document.removeEventListener('keydown', handleEscape)
    }
  }, [isOpen, onClose])
  
  // Close when clicking outside the content
  const handleBackdropClick = (e: React.MouseEvent) => {
    if (modalRef.current && !modalRef.current.contains(e.target as Node)) {
      onClose()
    }
  }
  
  if (!isOpen) return null
  
  return createPortal(
    <div 
      className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center"
      onClick={handleBackdropClick}
    >
      <div 
        ref={modalRef}
        className="w-full h-full flex flex-col"
      >
        <div className="flex justify-between items-center p-4 text-white">
          <h2 className="text-2xl font-medium">Gallery</h2>
          <div className="flex items-center gap-4">
            <span className="text-sm">
              {activeIndex + 1} / {images.length}
            </span>
            <button 
              onClick={onClose}
              className="text-2xl text-white hover:text-[#E73D00] transition-colors"
              aria-label="Close gallery"
            >
              ✕
            </button>
          </div>
        </div>
        
        <div className="flex-1 relative">
          <div className="overflow-hidden h-full" ref={emblaRef}>
            <div className="flex h-full">
              {images.map((image, index) => (
                <div key={index} className="flex-[0_0_100%] h-full flex flex-col items-center justify-center p-4">
                  <div className="relative w-full h-[85%] max-w-5xl mx-auto">
                    <Image
                      src={image}
                      alt={imageCaptions[index % imageCaptions.length]}
                      fill
                      className="object-contain"
                    />
                  </div>
                  <div className="text-white text-center mt-4 max-w-3xl">
                    <p className="text-lg font-light">
                      {imageCaptions[index % imageCaptions.length]}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Navigation Arrows */}
          <button 
            onClick={scrollPrev} 
            className="absolute left-4 top-1/2 -translate-y-1/2 text-4xl text-white bg-black/30 hover:bg-black/50 w-12 h-12 flex items-center justify-center rounded-full cursor-pointer z-10 transition-colors"
            aria-label="Previous image"
          >
            &lt;
          </button>
          <button 
            onClick={scrollNext} 
            className="absolute right-4 top-1/2 -translate-y-1/2 text-4xl text-white bg-black/30 hover:bg-black/50 w-12 h-12 flex items-center justify-center rounded-full cursor-pointer z-10 transition-colors"
            aria-label="Next image"
          >
            &gt;
          </button>
        </div>
        
        {/* Dot Indicators */}
        <div className="flex justify-center py-4 space-x-2">
          {images.map((_, idx) => (
            <button
              key={idx}
              onClick={() => emblaApi?.scrollTo(idx)}
              className={`w-2 h-2 rounded-full transition-colors ${
                idx === activeIndex ? 'bg-white' : 'bg-white/30'
              }`}
              aria-label={`Go to image ${idx + 1}`}
            />
          ))}
        </div>
      </div>
    </div>,
    document.body
  )
}

const PDPImages = ({ images }: PDPImagesProps) => {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { 
      loop: true,
      align: 'start',
      skipSnaps: false,
      dragFree: false,
      containScroll: 'trimSnaps'
    },
    [Autoplay({ delay: 4000, stopOnInteraction: false })]
  )
  
  const [showModal, setShowModal] = useState(false)
  const [activeIndex, setActiveIndex] = useState(0)

  // Sample captions for images - replace with actual descriptions
  const imageCaptions = [
    "Bedroom with king size bed and mountain view",
    "Spacious living room with modern furnishings",
    "Fully equipped kitchen with premium appliances",
    "Private balcony overlooking the ocean",
    "Luxurious bathroom with soaking tub",
    "Dining area with seating for 6",
    "Home office space with fast wifi",
    "Cozy reading nook with natural lighting",
    "Entertainment area with large screen TV",
    "Outdoor lounge space with comfortable seating"
  ]

  useEffect(() => {
    if (!emblaApi) return
    
    // Update active index when scrolling
    const onSelect = () => {
      setActiveIndex(emblaApi.selectedScrollSnap())
    }
    
    emblaApi.on('select', onSelect)
    
    // Return cleanup function
    return () => {
      emblaApi.off('select', onSelect)
    }
  }, [emblaApi])

  const handleBookingSubmit = (data: {
    property: string;
    checkInDate: Date;
    checkOutDate: Date;
    adultCount: string;
    kidCount: string;
  }) => {
    console.log('Booking data:', data);
    alert(`Booking submitted for ${data.property} from ${data.checkInDate.toLocaleDateString()} to ${data.checkOutDate.toLocaleDateString()} with ${data.adultCount} and ${data.kidCount}`);
  };

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
        <BookingWidget 
          onSubmit={handleBookingSubmit}
          className="rounded-md"
          variant="pdp"
          price="24,999"
        />
      </div>

      {/* 60/20/20 Distribution Carousel */}
      <div className="relative max-w-[1400px] mx-auto px-4">
        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex">
            {images.map((_, index) => (
              <div key={index} className="flex flex-col shrink-0 w-full">
                <div className="flex space-x-4">
                  {/* Main large image (60%) */}
                  <div 
                    className="relative rounded-2xl overflow-hidden"
                    style={{ width: 'calc(60% - 8px)', height: '500px' }}
                  >
                    <Image
                      src={images[index % images.length]}
                      alt={imageCaptions[index % imageCaptions.length]}
                      fill
                      className="object-cover transition-transform duration-300"
                      priority={index === 0}
                    />
                    <div className="absolute inset-0 bg-black/20 hover:bg-black/0 transition-all duration-300" />
                  </div>
                  
                  {/* Second image (20%) */}
                  <div 
                    className="relative rounded-2xl overflow-hidden cursor-pointer"
                    style={{ width: 'calc(20% - 8px)', height: '500px' }}
                    onClick={() => emblaApi?.scrollNext()}
                  >
                    <Image
                      src={images[(index + 1) % images.length]}
                      alt={imageCaptions[(index + 1) % imageCaptions.length]}
                      fill
                      className="object-cover transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-black/20 hover:bg-black/10 transition-all duration-300" />
                  </div>
                  
                  {/* Third image (20%) */}
                  <div 
                    className="relative rounded-2xl overflow-hidden cursor-pointer"
                    style={{ width: 'calc(20% - 8px)', height: '500px' }}
                    onClick={() => {
                      emblaApi?.scrollTo(index + 2)
                    }}
                  >
                    <Image
                      src={images[(index + 2) % images.length]}
                      alt={imageCaptions[(index + 2) % imageCaptions.length]}
                      fill
                      className="object-cover transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-black/20 hover:bg-black/10 transition-all duration-300" />
                  </div>
                </div>
                
                {/* Caption for current slide */}
                <div className="mt-6 text-left text-[#294023]">
                  <p className="text-lg font-medium">
                    {imageCaptions[index % imageCaptions.length]}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      {/* Dot Indicators */}
      <div className="flex justify-center mt-6 space-x-2">
        {images.map((_, idx) => (
          <button
            key={idx}
            onClick={() => emblaApi?.scrollTo(idx)}
            className={`w-2 h-2 rounded-full transition-colors ${
              idx === activeIndex ? 'bg-[#294023]' : 'bg-[#294023]/30'
            }`}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>

      {/* View More Button */}
      <div className="flex justify-center mt-6 relative">
        <button 
          onClick={() => setShowModal(true)}
          className="border border-[#294023] text-[#294023] text-center font-medium py-3 px-12 rounded-full hover:bg-[#294023] hover:text-white transition-colors"
        >
          VIEW MORE
        </button>
        
        {/* Navigation Arrows */}
        <button 
          onClick={scrollPrev} 
          className="absolute left-4 -top-[250px] text-4xl text-white bg-black/30 hover:bg-black/50 w-12 h-12 flex items-center justify-center rounded-full cursor-pointer z-10 transition-colors"
          aria-label="Previous slide"
        >
          &lt;
        </button>
        <button 
          onClick={scrollNext} 
          className="absolute right-4 -top-[250px] text-4xl text-white bg-black/30 hover:bg-black/50 w-12 h-12 flex items-center justify-center rounded-full cursor-pointer z-10 transition-colors"
          aria-label="Next slide"
        >
          &gt;
        </button>
      </div>
      
      {/* Modal */}
      <ImageGalleryModal 
        images={images} 
        isOpen={showModal} 
        onClose={() => setShowModal(false)} 
        imageCaptions={imageCaptions}
      />
    </section>
  )
}

export default PDPImages