"use client"

import { useState } from "react"
import { ChevronDown, ArrowRight } from "lucide-react"

const FAQSection = () => {
  const [expandedIndex, setExpandedIndex] = useState(0)

  const faqs = [
    {
      id: 1,
      question: "How does the posture corrector work?",
      answer:
        "A posture corrector works by providing support and gentle alignment to your shoulders, back, and spine, encouraging you to maintain proper posture throughout the day. Here's how it typically functions: A posture corrector works by providing support and gentle alignment to your shoulders.",
    },
    {
      id: 2,
      question: "Is it suitable for all ages and body types?",
      answer:
        "Yes, our posture corrector is designed to be adjustable and suitable for most body types and ages. It comes with multiple size options and adjustable straps to ensure a comfortable fit for everyone.",
    },
    {
      id: 3,
      question: "Does it really help with back pain and posture improvement?",
      answer:
        "Many users report significant improvements in back pain and posture within the first few weeks of regular use. The corrector provides consistent support that helps train your muscles to maintain proper alignment.",
    },
    {
      id: 4,
      question: "Does it have smart features like vibration alerts?",
      answer:
        "Our premium model includes smart vibration alerts that notify you when you're slouching. This helps you develop better posture habits by providing real-time feedback throughout the day.",
    },
    {
      id: 5,
      question: "How will I be notified when the product is back in stock?",
      answer:
        "You can sign up for our stock notification system on the product page. We'll send you an email as soon as the item is back in stock, and you'll have priority access to purchase.",
    },
  ]

  const toggleExpand = (index) => {
    setExpandedIndex(expandedIndex === index ? -1 : index)
  }

  return (
    <section className="w-full py-12 md:py-20 px-4 md:px-8 bg-slate-100">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4 text-balance">
            Frequently Asked Question (FAQ)
          </h2>
          <p className="text-slate-600 text-sm md:text-base max-w-2xl mx-auto text-balance">
            Enhance posture, mobility, and well-being effortlessly with Posture Pro. Achieve proper alignment, reduce
            pain, and strengthen your body with ease!
          </p>
        </div>

        {/* FAQ Items */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={faq.id}
              className={`border rounded-lg transition-all duration-300 ${
                expandedIndex === index
                  ? "border-teal-500 bg-teal-50 shadow-md"
                  : "border-slate-200 bg-white hover:border-slate-300"
              }`}
            >
              <button
                onClick={() => toggleExpand(index)}
                className="w-full px-6 py-4 md:py-5 flex items-center justify-between text-left hover:bg-opacity-50 transition-colors"
              >
                <span className="font-semibold text-slate-900 text-sm md:text-base pr-4">{faq.question}</span>
                <ChevronDown
                  className={`w-5 h-5 text-slate-600 flex-shrink-0 transition-transform duration-300 ${
                    expandedIndex === index ? "rotate-180" : ""
                  }`}
                />
              </button>

              {/* Expanded Content */}
              {expandedIndex === index && (
                <div className="px-6 pb-4 md:pb-5 border-t border-teal-200">
                  <p className="text-slate-600 text-sm md:text-base leading-relaxed">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* See More Button */}
        <div className="flex justify-center mt-10 md:mt-12">
          <button className="inline-flex items-center gap-2 px-6 md:px-8 py-3 md:py-3 bg-lime-400 hover:bg-lime-500 text-slate-900 font-semibold rounded-full transition-colors duration-200 text-sm md:text-base">
            See More FAQ's
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  )
}

export default FAQSection
