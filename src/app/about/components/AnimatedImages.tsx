"use client"

import Image from 'next/image';
import { motion } from 'framer-motion';
import { StaticImageData } from 'next/image';

// Animated Images component
const AnimatedImages = ({ 
  image1, 
  image2, 
  image3 
}: { 
  image1: StaticImageData; 
  image2: StaticImageData; 
  image3: StaticImageData; 
}) => {
  // Animation variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" }
    }
  };
  
  const staggerChildren = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  return (
    <div className="mb-[100px]">
      <motion.div 
        className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={staggerChildren}
      >
        <motion.div className="md:col-span-1" variants={fadeInUp}>
          {/* Sunset beach image */}
          <Image 
            src={image2} 
            alt="Sunset at the beach" 
            width={400} 
            height={400} 
            className="w-full h-auto rounded-sm"
          />
        </motion.div>
        
        <motion.div className="md:col-span-1 text-center" variants={fadeInUp}>
          <h3 className="text-2xl text-[#2d4c34] font-medium font-mono text-[40px] leading-[50px]">
            we all<br />
            believe<br />
            in<br />
            great<br />
            coffee
          </h3>
        </motion.div>
        
        <div className="md:col-span-1">
          <motion.div variants={fadeInUp} className="mb-6">
            {/* Friends beach image */}
            <Image 
              src={image1}
              alt="Friends at the beach" 
              width={400} 
              height={400} 
              className="w-full h-auto rounded-sm"
            />
          </motion.div>
          
          <motion.div variants={fadeInUp}>
            {/* Relaxing beach image */}
            <Image 
              src={image3}
              alt="Relaxing at the beach" 
              width={836} 
              height={600} 
              className="w-full h-auto rounded-sm"
            />
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default AnimatedImages; 