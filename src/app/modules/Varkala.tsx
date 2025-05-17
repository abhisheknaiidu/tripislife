"use client"
import { useState, useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { BookingWidget } from '../components/BookingWidget';

export function Varkala() {  
  // Animation state for coordinates
  const [latitudeValue, setLatitudeValue] = useState(0);
  const [longitudeValue, setLongitudeValue] = useState(0);
  const controls = useAnimation();

  // Animation for coordinates
  useEffect(() => {
    const targetLatitude = 8.7239731649145244;
    const targetLongitude = 76.71287693459008;
    
    const startTime = Date.now();
    const duration = 2000; // 2 seconds animation
    
    const animateNumbers = () => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / duration, 1);
      
      // Easing function for smooth animation
      const easeOutCubic = (progress: number) => 1 - Math.pow(1 - progress, 3);
      const easedProgress = easeOutCubic(progress);
      
      setLatitudeValue(easedProgress * targetLatitude);
      setLongitudeValue(easedProgress * targetLongitude);
      
      if (progress < 1) {
        requestAnimationFrame(animateNumbers);
      }
    };
    
    animateNumbers();
    controls.start({ opacity: 1, y: 0 });
    
    return () => {
      // Cleanup
    };
  }, [controls]);

  const handleBookingSubmit = (data: {
    property: string;
    checkInDate: Date;
    checkOutDate: Date;
    adultCount: string;
    kidCount: string;
  }) => {
    alert(`Booking submitted for ${data.property} from ${data.checkInDate.toLocaleDateString()} to ${data.checkOutDate.toLocaleDateString()} with ${data.adultCount} and ${data.kidCount}`);
  };

  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-4 sm:px-10 text-center bg-[#FFF6EB]">
      <div className="text-center mb-8 sm:mb-16 mt-[40px]">
        <motion.p 
          initial={{ opacity: 0, y: -10 }}
          animate={controls}
          transition={{ duration: 0.6 }}
          className="text-[36px] leading-[50px] font-mono mb-4"
        >
          o
        </motion.p>
        <motion.p 
          initial={{ opacity: 0, y: -10 }}
          animate={controls}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-[36px] leading-[50px] font-mono"
        >
          {latitudeValue.toFixed(13)}
        </motion.p>
        <motion.p 
          initial={{ opacity: 0, y: -10 }}
          animate={controls}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-[36px] leading-[50px] font-mono mb-8 sm:mb-16"
        >
          {longitudeValue.toFixed(14)}
        </motion.p>
        
        <h1 className="font-vvds-rashfield text-[80px] sm:text-[188px]  leading-none text-[#E73D00]">
          sanctuary
        </h1>
        
        <div className="mt-4 ">
          <p className="font-ivypresto-regular-italic sm:mt-8 text-[#294023] text-xl sm:text-2xl md:text-[60px] mx-auto font-ivy-headline ">We invite you to disconnect from the noise</p>
          <p className="font-ivypresto-regular-italic sm:mt-8 text-[#294023] text-xl sm:text-2xl md:text-[60px] mx-auto font-ivy-headline !font-light
">believe in the healing power of place.</p>
        </div>
      </div>
      
      <div className="max-w-2xl mx-auto text-center text-[#294023] text-sm leading-relaxed mb-8 sm:mb-16 px-4">
        <p>
          trip is life is an invitation to a world where time slows down and every moment is
          curated with meticulous care. we are purveyors of refined living, offering you a space
          where every detail is thoughtfully considered. our strong belief that travel is an art
          form has shaped our role as artisans of masterpieces that inspire and revitalise.
        </p>
      </div>
      
      <BookingWidget onSubmit={handleBookingSubmit} />
    </section>
  );
}


