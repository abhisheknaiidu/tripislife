'use client'

import { useState } from 'react'

type FaqProps = {
  title: string
  questions: {
    question: string
    answer: string
  }[]
  subtitle: string
}

const PDPFaq = ({ data }: { data: FaqProps }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <section className="min-h-screen bg-[#FFF6EB] px-10 py-32">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-[#294023] text-[140px] font-anth mb-20">{data.title}</h2>
        
        <div className="space-y-4">
          {data.questions.map((faq, index) => (
            <div key={index} className="border-b border-[#294023]">
              <button
                className="w-full py-3 flex justify-between items-center text-left"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span className="text-[#294023] text-[27px] font-bold font-area">{faq.question}</span>
                <svg 
                  className={`transition-transform ${
                    openIndex === index ? '' : 'rotate-90'
                  }`}
                  width="26" 
                  height="26" 
                  viewBox="0 0 26 26" 
                  fill="none" 
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path 
                    d="M0.0879992 7.87366L0.663998 7.98166C0.844 6.54166 1.708 6.10966 3.436 6.79366L3.436 6.75766C9.232 8.91766 16.432 11.6897 21.364 13.7777C15.136 16.2617 8.26 18.9617 3.148 20.6897C1.564 21.0137 0.7 20.4377 0.663999 19.0697L0.0879997 19.1417C0.196001 20.5457 0.232 21.4097 0.232 22.7057C0.232 23.6417 0.159999 24.5777 0.088 25.6577L0.663999 25.7297C0.700001 24.9017 1.312 24.0377 2.788 23.2817C9.34 20.3297 17.98 16.8017 25.072 14.0657C25.036 13.7417 25 13.2377 25 12.7697C25 12.3017 25.036 11.6897 25.072 11.3657C18.448 8.95366 10.06 5.67766 3.22 2.83366C1.708 2.07766 0.879999 1.32166 0.663998 0.277656L0.0879989 0.349656C0.159998 1.17766 0.196 1.93366 0.231999 2.83366L0.231999 3.91366C0.231999 5.46166 0.196 6.57766 0.0879992 7.87366Z" 
                    fill="black"
                  />
                </svg>
              </button>
              {openIndex === index && (
                <div className="pb-6">
                  <p className="text-[#294023] text-lg font-area">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="text-center mt-32">
          <h3 className="text-[#294023] text-6xl font-medium mb-4 font-anth" dangerouslySetInnerHTML={{ __html: data.subtitle }} />
        </div>
      </div>
    </section>
  )
}

export default PDPFaq