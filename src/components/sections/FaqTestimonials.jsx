import React, { useState } from 'react'
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion'
import { Plus, Minus } from 'lucide-react'

export default function FaqTestimonials() {
  const shouldReduceMotion = useReducedMotion()
  const [activeFaq, setActiveFaq] = useState(0)

  const faqs = [
    {
      q: 'How long does SEO take to produce measurable results?',
      a: 'Technical infrastructure fixes reflect in 2–4 weeks, while organic search rankings and high-intent customer traffic typically scale significantly within 3 to 6 months.',
    },
    {
      q: 'Do you work with international clients?',
      a: 'Yes. We serve enterprise brands, tech startups, and e-commerce platforms across North America, Europe, Asia, Australia, and worldwide.',
    },
    {
      q: 'Can you redesign an existing legacy website?',
      a: 'Absolutely. We redesign and migrate legacy websites into high-speed React/WooCommerce architectures while maintaining 100% SEO authority and canonical URL structures.',
    },
    {
      q: 'Do you provide ongoing technical and marketing growth support?',
      a: 'Yes. We offer continuous growth engineering, paid ad management (Google & Meta CAPI), conversion rate optimization, and dedicated monthly technical support.',
    },
    {
      q: 'How do I get started with Zenbyto?',
      a: 'Simply click "Book Free Consultation" or submit your project details through our contact form. Our engineering team will prepare a customized growth blueprint.',
    },
  ]

  return (
    <section
      id="faq"
      className="py-10 sm:py-14 lg:py-16 bg-white bg-atmosphere-grain border-t border-slate-100 relative z-20 overflow-hidden select-none"
    >
      {/* Subtle Background Radial Glow */}
      <div className="absolute top-1/2 left-[-10%] w-[35%] h-[50%] rounded-full bg-gradient-radial from-[#FE8233]/[0.03] to-transparent blur-[120px] pointer-events-none" />

      <div className="max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12 relative z-10 text-left">
        
        {/* EDITORIAL TWO-COLUMN LAYOUT */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          
          {/* LEFT COLUMN: Section Eyebrow, Heading & Supporting Paragraph */}
          <div className="lg:col-span-5 flex flex-col justify-start space-y-5 lg:sticky lg:top-32 relative">
            
            {/* Subtle Vertical Accent Detail */}
            <div className="hidden lg:block absolute -left-6 top-1 bottom-1 w-[2px] bg-gradient-to-b from-[#FE8233] via-[#33387A]/30 to-transparent rounded-full" />

            {/* Eyebrow Label */}
            <motion.div
              initial={shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="flex items-center gap-2.5"
            >
              <span className="w-2.5 h-2.5 rounded-full bg-[#FE8233] animate-pulse" />
              <span className="text-xs sm:text-[13px] font-semibold tracking-[0.16em] uppercase text-[#FE8233]">
                FAQ
              </span>
              <div className="w-12 h-[1px] bg-[#FE8233]/35" />
            </motion.div>

            {/* Controlled Heading Matching Homepage System */}
            <motion.h2
              initial={shouldReduceMotion ? { opacity: 1, y: 0, filter: 'blur(0px)' } : { opacity: 0, y: 18, filter: 'blur(4px)' }}
              whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
              className="text-[28px] sm:text-[36px] md:text-[40px] lg:text-[44px] font-semibold text-[#33387A] tracking-tight leading-tight max-w-[460px]"
            >
              Frequently Asked Questions
            </motion.h2>

            {/* Supporting Paragraph */}
            <motion.p
              initial={shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.18, ease: [0.22, 1, 0.36, 1] }}
              className="text-base sm:text-lg text-[#475569] font-normal leading-[1.65] max-w-[440px]"
            >
              Everything you need to know about our growth engineering, technology stack, and partnership process.
            </motion.p>

          </div>

          {/* RIGHT COLUMN: Clean Editorial Accordion List */}
          <div className="lg:col-span-7 w-full border-t border-slate-200/80">
            {faqs.map((faq, idx) => {
              const isOpen = activeFaq === idx
              const numStr = (idx + 1).toString().padStart(2, '0')

              return (
                <div
                  key={idx}
                  className={`border-b border-slate-200/80 transition-all duration-300 relative ${
                    isOpen
                      ? 'bg-slate-50/70 border-l-2 border-l-[#FE8233] pl-2 sm:pl-3'
                      : 'hover:bg-slate-50/40 border-l-2 border-l-transparent'
                  }`}
                >
                  <button
                    id={`faq-button-${idx}`}
                    onClick={() => setActiveFaq(isOpen ? null : idx)}
                    aria-expanded={isOpen}
                    aria-controls={`faq-answer-${idx}`}
                    className="w-full py-5 sm:py-6 px-2 sm:px-3 text-left flex items-start justify-between gap-4 sm:gap-6 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#FE8233]/60 focus-visible:ring-offset-2 rounded-lg group"
                  >
                    <div className="flex items-start gap-3.5 sm:gap-5 pt-0.5 min-w-0">
                      {/* Subtle Numbering */}
                      <span className={`font-mono text-xs sm:text-sm font-bold tracking-wider transition-colors duration-300 pt-0.5 shrink-0 ${
                        isOpen ? 'text-[#FE8233]' : 'text-slate-400 group-hover:text-[#33387A]'
                      }`}>
                        {numStr}
                      </span>

                      {/* Question Text */}
                      <span className={`text-base sm:text-lg md:text-[19px] font-bold leading-snug tracking-tight transition-colors duration-300 ${
                        isOpen ? 'text-[#33387A]' : 'text-[#1E293B] group-hover:text-[#33387A]'
                      }`}>
                        {faq.q}
                      </span>
                    </div>

                    {/* Plus/Minus Icon */}
                    <div className={`w-8 h-8 sm:w-9 sm:h-9 rounded-full flex items-center justify-center shrink-0 transition-all duration-300 ${
                      isOpen
                        ? 'bg-[#FE8233] text-white shadow-sm rotate-180'
                        : 'bg-slate-100/80 border border-slate-200/80 text-[#33387A] group-hover:bg-[#FE8233]/15 group-hover:text-[#FE8233] group-hover:border-[#FE8233]/30'
                    }`}>
                      {isOpen ? (
                        <Minus className="w-4 h-4 transition-transform duration-300" />
                      ) : (
                        <Plus className="w-4 h-4 transition-transform duration-300 group-hover:scale-105" />
                      )}
                    </div>
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        id={`faq-answer-${idx}`}
                        role="region"
                        aria-labelledby={`faq-button-${idx}`}
                        initial={shouldReduceMotion ? { height: 'auto', opacity: 1 } : { height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={shouldReduceMotion ? { height: 0, opacity: 0 } : { height: 0, opacity: 0 }}
                        transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                        className="overflow-hidden"
                      >
                        <motion.div
                          initial={shouldReduceMotion ? { y: 0 } : { y: -8 }}
                          animate={{ y: 0 }}
                          exit={shouldReduceMotion ? { y: 0 } : { y: -8 }}
                          transition={{ duration: 0.25, ease: 'easeOut' }}
                          className="pl-9 sm:pl-12 pr-4 sm:pr-8 pb-6 pt-1 text-sm sm:text-base text-[#475569] font-normal leading-[1.68]"
                        >
                          {faq.a}
                        </motion.div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              )
            })}
          </div>

        </div>

      </div>
    </section>
  )
}

