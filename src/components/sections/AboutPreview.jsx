import React from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowUpRight } from 'lucide-react'
import { TechnologyCapsuleSlider } from './TrustedTechnologies'
import whyWeExistVisual from '../../assets/about1.png'

export default function AboutPreview() {
  const shouldReduceMotion = useReducedMotion()

  return (
    <section
      id="about"
      className="relative bg-white w-full select-none pt-8 sm:pt-10 lg:pt-12 pb-12 sm:pb-16 lg:pb-20 overflow-hidden"
    >
      {/* Background Atmosphere Glow */}
      <div className="absolute top-[10%] left-[-5%] w-[45%] h-[45%] rounded-full bg-gradient-radial from-[#FE8233]/[0.05] to-transparent blur-[140px] pointer-events-none" />
      <div className="absolute bottom-[10%] right-[-5%] w-[40%] h-[40%] rounded-full bg-gradient-radial from-[#33387A]/[0.04] to-transparent blur-[140px] pointer-events-none" />

      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 xl:gap-16 items-center w-full">
          
          {/* LEFT COLUMN: Clean Large Visual Image */}
          <motion.div
            initial={shouldReduceMotion ? { opacity: 1, x: 0 } : { opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-6 w-full"
          >
            <div className="w-full rounded-[24px] lg:rounded-[32px] overflow-hidden">
              <img
                src={whyWeExistVisual}
                alt="Zenbyto Growth Engine & Architecture"
                className="w-full h-auto max-h-[520px] object-cover object-center rounded-[24px] lg:rounded-[32px]"
                loading="eager"
              />
            </div>
          </motion.div>

          {/* RIGHT COLUMN: Streamlined Content Block */}
          <motion.div
            initial={shouldReduceMotion ? { opacity: 1, x: 0 } : { opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-6 w-full space-y-5 sm:space-y-6 text-left"
          >
            {/* Eyebrow Label */}
            <div className="flex items-center gap-2.5">
              <span className="w-2.5 h-2.5 rounded-full bg-[#FE8233]" />
              <span className="text-xs sm:text-sm font-semibold tracking-[0.14em] uppercase text-[#FE8233]">
                WHY WE EXIST
              </span>
            </div>

            {/* Main Heading */}
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-[-0.03em] text-[#151735] leading-[1.08] max-w-[580px]">
              We Connect Strategy, Tech & Performance Into One Growth System.
            </h2>

            {/* Main Description */}
            <p className="text-base sm:text-lg text-slate-600 font-normal leading-[1.6] max-w-[560px]">
              Disconnected tools, isolated ad channels, and fragmented tracking waste budget. Zenbyto replaces fragmented marketing with engineered acquisition infrastructure, high-converting digital experiences, and mathematical performance scale.
            </p>

            {/* Action CTA Button */}
            <div className="pt-1">
              <Link
                to="/about"
                className="px-7 py-3.5 rounded-full bg-[#FE8233] hover:bg-[#33387A] text-white text-sm font-bold transition-all duration-300 ease-out shadow-md hover:shadow-xl hover:-translate-y-0.5 inline-flex items-center gap-2 cursor-pointer border border-white/30"
              >
                <span>Explore About Us</span>
                <ArrowUpRight className="w-4 h-4" />
              </Link>
            </div>

            {/* Supporting Technology Marquee Slider */}
            <div className="pt-4 border-t border-slate-100">
              <TechnologyCapsuleSlider />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}
