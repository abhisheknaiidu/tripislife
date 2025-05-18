"use client";

import { motion } from 'framer-motion';

export function ReadMore() {
  const textAnimation = {
    hidden: { opacity: 0, y: -40 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" }
    }
  };

  const titleAnimation = {
    hidden: { opacity: 0, y: -30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.7, ease: "easeOut" }
    }
  };

  const subtitleAnimation = {
    hidden: { opacity: 0, y: -20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: "easeOut", delay: 0.2 }
    }
  };

  return (
    <section className="min-h-screen flex flex-col justify-center px-14 pb-[350px]">
      <motion.h2 
        className="text-[#294023] text-[64px] mb-[200px] text-center font-anth"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.3 }}
        variants={textAnimation}
      >
        read more of these stories?
      </motion.h2>

      <div className="flex h-[630px] items-center justify-center">
        <div>
          <motion.h3 
            className="text-[#294023] font-anth text-[64px] font-medium"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.3 }}
            variants={titleAnimation}
          >
            COLLECTION
          </motion.h3>
          <motion.p 
            className="text-[#294023] text-[24px] font-bold font-area text-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.3 }}
            variants={subtitleAnimation}
          >
            by trip is life
          </motion.p>
        </div>
        
        <div className="w-px h-full bg-[#294023] mx-[150px]"></div>

        <div className="flex items-start flex-col">
          <motion.span 
            className="text-[#294023] text-[40px] font-bold font-area"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.3 }}
            variants={titleAnimation}
          >
            til
          </motion.span>
          <motion.span 
            className="text-[#294023] text-[64px] font-area font-bold leading-[30px]"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.3 }}
            variants={subtitleAnimation}
          >
            experiences
          </motion.span>
        </div>
      </div>
    </section>
  );
}