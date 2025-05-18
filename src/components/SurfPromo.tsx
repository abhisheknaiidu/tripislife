"use client";

import Image from "next/image";
import { motion } from 'framer-motion';

export type SurfPromoProps = {
  image: string;
  title: string;
  ctaText: string;
};

export function SurfPromo({ image, title, ctaText }: SurfPromoProps) {
  const titleAnimation = {
    hidden: { opacity: 0, y: -40 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" }
    }
  };

  return (
    <div className="w-full flex justify-center">
      <div className="relative w-[70%] mb-[100px]">
        <Image src={image} alt={title} className="w-full h-auto" />
        <div className="absolute bottom-8 left-8">
          <motion.p 
            className="text-[#FAFF00] text-[64px] font-bold font-anton leading-none max-w-[320px]"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.5 }}
            variants={titleAnimation}
          >
            {title}
          </motion.p>
        </div>
        <button className="absolute bottom-8 right-8 border border-[#FAFF00] text-[#FAFF00] px-14 py-2 rounded-full hover:bg-[#FAFF00] hover:text-[#294023] transition-colors">
          {ctaText}
        </button>
      </div>
    </div>
  );
} 