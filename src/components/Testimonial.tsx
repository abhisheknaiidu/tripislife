"use client";

import { SurfPromo, SurfPromoProps } from "@/components/SurfPromo";
import { motion } from 'framer-motion';

type TestimonialProps = {
  quote: string;
  author: string;
  role: string;
  surfPromo: SurfPromoProps;
};

export function Testimonial({ quote, author, role, surfPromo }: TestimonialProps) {
  const headingAnimation = {
    hidden: { opacity: 0, y: -30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.7, ease: "easeOut" }
    }
  };

  const quoteAnimation = {
    hidden: { opacity: 0, y: -40 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" }
    }
  };

  const authorAnimation = {
    hidden: { opacity: 0, y: -20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: "easeOut", delay: 0.2 }
    }
  };

  return (
    <section className="min-h-screen flex flex-col justify-center px-4 bg-[#FFF6EB]">
      <motion.h2 
        className="text-[#294023] text-[64px] mb-[150px] text-center font-anth"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.3 }}
        variants={headingAnimation}
      >
        pack your bags and leave now!
      </motion.h2>
      <SurfPromo {...surfPromo} />
      <div className="max-w-4xl mx-auto text-center">
        <motion.blockquote 
          className="text-[#294023] text-[48px] leading-tight mb-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.4 }}
          variants={quoteAnimation}
        >
          &quot;{quote}&quot;
        </motion.blockquote>
        <motion.div 
          className="text-[#294023]"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.5 }}
          variants={authorAnimation}
        >
          <p className="text-xl font-medium">{author}</p>
          <p className="text-lg">{role}</p>
        </motion.div>
      </div>
    </section>
  );
}