"use client";

import Image from 'next/image';
import { Footer } from '../modules/Footer';
import { Nav } from '@/components/Nav';
import aboutImage from '@/app/assets/about_us_header.png';
import image1 from '@/app/assets/image_1.png';
import image2 from '@/app/assets/image_2.png';
import image3 from '@/app/assets/image_3.png';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { getMockData } from '@/lib/getData';

// Animation variants - removing unused fadeIn
const slideInLeft = {
  hidden: { x: -50, opacity: 0 },
  visible: { 
    x: 0, 
    opacity: 1,
    transition: { duration: 0.8, ease: "easeOut" }
  }
};

const slideInRight = {
  hidden: { x: 50, opacity: 0 },
  visible: { 
    x: 0, 
    opacity: 1,
    transition: { duration: 0.8, ease: "easeOut" }
  }
};

const textReveal = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.5,
      ease: "easeOut"
    }
  })
};

// Add hover animation
const hoverScale = {
  hover: { 
    scale: 1.05,
    transition: { duration: 0.3 }
  }
};

type Data = {
  footer: {
    links: { title: string; href: string }[];
    brandName: string;
  };
};

export default function AboutPage() {
  const [data, setData] = useState<Data | null>(null);
  useEffect(() => {
    // Simulate fetching data
    const fetchData = async () => {
      try {
        const mockData = await getMockData();

        // Replace with actual data fetching if needed
        setData(mockData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    
    fetchData();
  }, []);

  return (
    <main className="min-h-screen">
      {/* Hero Section with Surfer */}
      <section className="relative h-screen">
      <Nav />
      <Image
        src={aboutImage}
        alt="Luxury villa with pool"
        fill
        className="object-cover"
        priority
        quality={100}
      />
    </section>

      {/* About Content */}
      <div className="bg-[#fdf6ed] py-16 px-4 md:px-8">
        <div className="max-w-4xl mx-auto">
          <p className="text-center font-mono text-gray-600 mb-[70px] text-[24px]">about trip is life</p>
          
          <motion.h2 
            className="text-center text-4xl md:text-[142px] leading-[110px] font-vvds-rashfield text-[#E73D00] mb-[80px]"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            catching<br />
            waves<br />
            & good vibes
          </motion.h2>
          
          <p className="text-center text-gray-700 mb-12 max-w-[1200px] mx-auto font-mono text-[18px] leading-[24px]">
            born from a shared passion for exploration and culture adventure.<br />
            Trip is life is a celebration of the simple pleasures.
          </p>
          
          <div className="space-y-8 mb-16">
            <p className="text-center text-gray-700 max-w-[1200px] mx-auto font-mono text-[18px] leading-[24px]">
              we believe in the power of slow is luxurious the human spirit and embracing
              that life&apos;s most cherished memories are forged in moments of tranquility and
              connection. life has inspired us to create spaces are sanctuaries, designed to
              disconnect you from the noise and reconnect you with yourself.
            </p>
            
            <p className="text-center text-gray-700 max-w-[1200px] mx-auto font-mono text-[18px] leading-[24px]">
              at trip is life, we&apos;re not just creating places to stay—we&apos;re crafting experiences
              almost authentically. from finding the fast-paced rat race to creating a world
              of intentional living, we look at each detail as a deliberate invitation to
              relish the moment.
            </p>
            
            <p className="text-center text-gray-700 max-w-[1200px] mx-auto font-mono text-[18px] leading-[24px]">
              simply put: we&apos;re all about a deep simplicity that nourishes the soul.
            </p>
          </div>
          
          {/* Coffee and Images Section */}
          <motion.div 
            className="mb-[100px]"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            transition={{ staggerChildren: 0.3 }}
          >
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
              <motion.div 
                className="md:col-span-1"
                variants={slideInLeft}
              >
                {/* Sunset beach image */}
                <motion.div
                  whileHover="hover"
                  variants={hoverScale}
                >
                  <Image 
                    src={image2} 
                    alt="Sunset at the beach" 
                    width={400} 
                    height={400} 
                    className="w-full h-auto rounded-sm"
                  />
                </motion.div>
              </motion.div>
              
              <div className="md:col-span-1 text-center">
                <h3 className="text-2xl text-[#2d4c34] font-medium font-mono text-[40px] leading-[50px]">
                  {["we all", "believe", "in", "great", "coffee"].map((text, index) => (
                    <motion.span 
                      key={index}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true }}
                      custom={index}
                      variants={textReveal}
                      className="block"
                    >
                      {text}
                    </motion.span>
                  ))}
                </h3>
              </div>
              
              <motion.div 
                className="md:col-span-1"
                variants={slideInRight}
              >
                {/* Friends beach image */}
                <motion.div
                  className="mb-6"
                  whileHover="hover"
                  variants={hoverScale}
                >
                  <Image 
                    src={image1}
                    alt="Friends at the beach" 
                    width={400} 
                    height={400} 
                    className="w-full h-auto rounded-sm"
                  />
                </motion.div>
                
                {/* Relaxing beach image */}
                <motion.div
                  whileHover="hover"
                  variants={hoverScale}
                >
                  <Image 
                    src={image3}
                    alt="Relaxing at the beach" 
                    width={836} 
                    height={600} 
                    className="w-full h-auto rounded-sm"
                  />
                </motion.div>
              </motion.div>
            </div>
          </motion.div>
          
          {/* Our Story Section */}
          <div className="mb-16">
            <h3 className="text-[#2d4c34] text-xl mb-6 text-center">our story</h3>
            <p className="text-gray-700 mb-8 text-center">
              we are a group of friends who love to travel and explore new places.<br />
              we believe that travel is not just about visiting new places, but about<br />
              experiencing new cultures, meeting new people, and creating memories that last a lifetime.
            </p>
            <p className="text-gray-700 mb-8 text-center">
              our journey started in 2018 when we decided to take a trip to bali.<br />
              we fell in love with the place and the people, and we knew that we wanted<br />
              to share our experiences with others.
            </p>
            <p className="text-gray-700 text-center">
              that&apos;s how trip is life was born - a platform for travelers to share their<br />
              experiences and inspire others to explore the world.
            </p>
          </div>

          {/* Community Section */}
          <div className="border border-black p-8 pt-[100px] mb-16 text-center">
            <h3 className="text-[#2d4c34] text-xl mb-6">want to experience the community?</h3>
            <p className="text-gray-700 mb-8">
              we welcome volunteers across the globe to help<br />
              us sustain and evolve the brand.
            </p>
            <div className="mb-4">
              <input
                type="email"
                placeholder="email id"
                className="w-64 px-4 py-2 mb-4 border-t-0 border-l-0 border-r-0 border-b border-gray-400 text-center focus:outline-none focus:border-gray-700 bg-transparent"
              />
              <br />
              <a href="mailto:hello@tripislife.com" className="text-gray-600 hover:text-gray-800">
                email us
              </a>
            </div>
            <button className="bg-[#c3ff5b] text-gray-800 px-8 py-2 rounded-full hover:bg-[#b3ef4b] transition">
              SUBSCRIBE
            </button>
          </div>
          
          {/* Typo Section */}
          <div className="mb-16 text-center w-max mt-[150px]">
            <h2 className="text-[142px] w-full leading-[110px] font-vvds-rashfield text-[#E73D00]">
              a neat typo here
            </h2>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="bg-[#fdf6ed] pt-8">
        {data && <Footer data={data.footer} />}
      </div>
    </main>
  );
} 