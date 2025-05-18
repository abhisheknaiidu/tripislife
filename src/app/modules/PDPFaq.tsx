'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'

type Question = {
  question: string
  answer: string
}

export type FaqProps = {
  title: string
  subtitle: string
  questions: Question[]
}

const PDPFaq = ({ data }: { data: FaqProps }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggleQuestion = (index: number) => {
    if (openIndex === index) {
      setOpenIndex(null)
    } else {
      setOpenIndex(index)
    }
  }

  const titleAnimation = {
    hidden: { opacity: 0, y: -40 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" }
    }
  }

  const questionAnimation = (index: number) => ({
    hidden: { opacity: 0, y: -20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: "easeOut", delay: index * 0.1 }
    }
  })

  const subtitleAnimation = {
    hidden: { opacity: 0, y: -30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.7, ease: "easeOut" }
    }
  }

  const answerAnimation = {
    initial: { opacity: 0, height: 0 },
    animate: { opacity: 1, height: "auto", transition: { duration: 0.3 } }
  }

  return (
    <section className="bg-[#FFF6EB] py-24">
      <div className="max-w-4xl mx-auto px-6">
        <motion.h2 
          className="text-[#294023] text-5xl md:text-6xl font-medium mb-16 text-center font-anth"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
          variants={titleAnimation}
        >
          {data.title}
        </motion.h2>

        <div className="space-y-6 mb-16">
          {data.questions.map((faq, index) => (
            <div key={index} className="border-b border-[#294023]">
              <button 
                className="w-full text-left py-4 pr-10 focus:outline-none relative"
                onClick={() => toggleQuestion(index)}
              >
                <motion.h3 
                  className="text-[#294023] text-xl font-medium font-area"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: false, amount: 0.5 }}
                  variants={questionAnimation(index)}
                >
                  {faq.question}
                </motion.h3>
                <span className="absolute right-0 top-1/2 transform -translate-y-1/2">
                  {openIndex === index ? '−' : '+'}
                </span>
              </button>
              {openIndex === index && (
                <motion.div 
                  className="pb-6"
                  initial="initial"
                  animate="animate"
                  variants={answerAnimation}
                >
                  <p className="text-[#294023] text-lg font-area">{faq.answer}</p>
                </motion.div>
              )}
            </div>
          ))}
        </div>

        <div className="text-center mt-32">
          <motion.h3 
            className="text-[#294023] text-6xl font-medium mb-4 font-anth" 
            dangerouslySetInnerHTML={{ __html: data.subtitle }}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.3 }}
            variants={subtitleAnimation}
          />
        </div>
      </div>
    </section>
  )
}

export default PDPFaq