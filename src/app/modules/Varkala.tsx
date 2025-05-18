"use client"
import { useState, useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { BookingWidget } from '../components/BookingWidget';

export function Varkala() {  
  // Animation state for coordinates
  const [latitudeValue, setLatitudeValue] = useState<number>(8.736637);
  const [longitudeValue, setLongitudeValue] = useState<number>(76.6762);
  const controls = useAnimation();
  
  // Use a ref to track if component is mounted
  const [isMounted, setIsMounted] = useState<boolean>(false);
  
  // Animation values for coordinates
  const [currentLatIndex, setCurrentLatIndex] = useState<number>(0);
  const [currentLongIndex, setCurrentLongIndex] = useState<number>(0);
  

  console.log("isMounted", isMounted, "currentLatIndex", currentLatIndex, "currentLongIndex", currentLongIndex)
  // Define animation duration
  const animationDuration = 5000; // 5 seconds
  
  // Generate arrays of coordinates values changing over time
  const targetLatitude = 8.736637;
  const targetLongitude = 76.6762;
  const steps = 20;

  // Animation variants
  const coordsAnimation = {
    hidden: { opacity: 0, y: -10 },
    visible: { 
      opacity: 1, 
      y: 0
    }
  };

  const headingAnimation = {
    hidden: { opacity: 0, y: -50 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" }
    }
  };

  const firstParagraphAnimation = {
    hidden: { opacity: 0, y: -30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.7, ease: "easeOut" }
    }
  };

  const secondParagraphAnimation = {
    hidden: { opacity: 0, y: -25 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.7, ease: "easeOut", delay: 0.2 }
    }
  };

  const descriptionAnimation = {
    hidden: { opacity: 0, y: -20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };
  
  useEffect(() => {
    // Start with random coordinates
    setLatitudeValue(Math.random() * 20 + 5);
    setLongitudeValue(Math.random() * 40 + 60);
    
    // Trigger animation
    controls.start("visible");
    setIsMounted(true);
    
    // Animate coordinates to target values
    const interval = setInterval(() => {
      setCurrentLatIndex(prev => {
        const newIndex = prev + 1;
        if (newIndex < steps) {
          const progress = newIndex / steps;
          const newValue = (Math.random() * 0.00005 - 0.000025) + 
            targetLatitude * progress + (Math.random() * 20 + 5) * (1 - progress);
          setLatitudeValue(newValue);
          return newIndex;
        } else {
          setLatitudeValue(targetLatitude);
          return prev;
        }
      });
      
      setCurrentLongIndex(prev => {
        const newIndex = prev + 1;
        if (newIndex < steps) {
          const progress = newIndex / steps;
          const newValue = (Math.random() * 0.00005 - 0.000025) + 
            targetLongitude * progress + (Math.random() * 40 + 60) * (1 - progress);
          setLongitudeValue(newValue);
          return newIndex;
        } else {
          setLongitudeValue(targetLongitude);
          return prev;
        }
      });
    }, animationDuration / steps);
    
    return () => clearInterval(interval);
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
          initial="hidden"
          animate={controls}
          transition={{ duration: 0.6 }}
          className="text-[36px] leading-[50px] font-mono mb-4"
          variants={coordsAnimation}
        >
          o
        </motion.p>
        <motion.p 
          initial="hidden"
          animate={controls}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-[36px] leading-[50px] font-mono"
          variants={coordsAnimation}
        >
          {latitudeValue.toFixed(13)}
        </motion.p>
        <motion.p 
          initial="hidden"
          animate={controls}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-[36px] leading-[50px] font-mono mb-8 sm:mb-16"
          variants={coordsAnimation}
        >
          {longitudeValue.toFixed(14)}
        </motion.p>
        
        <motion.h1 
          className="font-vvds-rashfield text-[80px] sm:text-[188px] leading-none text-[#E73D00]"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
          variants={headingAnimation}
        >
          sanctuary
        </motion.h1>
        
        <div className="mt-4">
          <motion.p 
            className="font-ivypresto-regular-italic sm:mt-8 text-[#294023] text-xl sm:text-2xl md:text-[60px] mx-auto font-ivy-headline"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.3 }}
            variants={firstParagraphAnimation}
          >
            We invite you to disconnect from the noise
          </motion.p>
          <motion.p 
            className="font-ivypresto-regular-italic sm:mt-8 text-[#294023] text-xl sm:text-2xl md:text-[60px] mx-auto font-ivy-headline !font-light"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.3 }}
            variants={secondParagraphAnimation}
          >
            believe in the healing power of place.
          </motion.p>
        </div>
      </div>
      
      <motion.div 
        className="max-w-2xl mx-auto text-center text-[#294023] text-sm leading-relaxed mb-8 sm:mb-16 px-4"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.4 }}
        variants={descriptionAnimation}
      >
        <p>
          trip is life is an invitation to a world where time slows down and every moment is
          curated with meticulous care. we are purveyors of refined living, offering you a space
          where every detail is thoughtfully considered. our strong belief that travel is an art
          form has shaped our role as artisans of masterpieces that inspire and revitalise.
        </p>
      </motion.div>
      
      <BookingWidget onSubmit={handleBookingSubmit} />
    </section>
  );
}


