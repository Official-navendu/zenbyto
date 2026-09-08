import React from 'react'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import Magnetic from '../ui/Magnetic'

export default function CTA({
  heading = "Ready to Scale Your Brand?",
  description = "Book a direct consulting sync with our senior performance directors. We will perform a free audit of your paid campaigns and search indexing.",
  primaryButtonText = "Book Free Consultation",
  primaryButtonLink = "/free-consultation",
  secondaryButtonText = "Email Us Directly",
  secondaryButtonLink = "mailto:info@zenbyto.com",
  bgVariant = "dark"
}) {
  const isDark = bgVariant === "dark"

  return (
    <section className="py-12 md:py-16 bg-white px-6 md:px-12 relative overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: 35 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.15 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className={`max-w-[1340px] mx-auto rounded-3xl p-8 md:p-14 relative overflow-hidden text-center shadow-xl border ${
          isDark 
            ? 'bg-gradient-to-br from-[#33387A] via-[#1c1f44] to-black text-white border-white/10' 
            : 'bg-gradient-to-br from-white via-orange-50/20 to-white text-brand-dark border-brand-dark/10'
        }`}
      >
        {/* Animated glowing background lights */}
        <div className="absolute top-[-30%] left-[-15%] w-[60%] h-[60%] rounded-full bg-[#FE8233]/15 blur-[120px] pointer-events-none animate-pulse" />
        <div className="absolute bottom-[-30%] right-[-15%] w-[60%] h-[60%] rounded-full bg-[#33387A]/30 blur-[120px] pointer-events-none animate-pulse" />

        <div className="relative z-10 space-y-6 max-w-3xl mx-auto">
          {/* Badge */}
          <div className="inline-flex">
            <span className="glass-badge-orange inline-flex items-center gap-1.5 px-3 py-1 text-[9.5px] font-bold tracking-widest uppercase bg-[#FE8233]/15 text-[#FE8233] rounded-full">
              Get Started
            </span>
          </div>

          {/* Heading */}
          <h2 
            className="font-bold tracking-tight leading-tight"
            style={{ fontSize: 'clamp(1.75rem, 3.5vw, 2.75rem)' }}
          >
            {heading}
          </h2>

          {/* Description */}
          <p className={`text-sm md:text-base leading-relaxed font-normal max-w-xl mx-auto ${
            isDark ? 'text-white/70' : 'text-brand-gray'
          }`}>
            {description}
          </p>

          {/* CTA Actions */}
          <div className="flex flex-wrap gap-4 justify-center items-center pt-4">
            {primaryButtonText && (
              <Magnetic>
                {primaryButtonLink.startsWith('http') || primaryButtonLink.startsWith('mailto') ? (
                  <a
                    href={primaryButtonLink}
                    className="glass-btn-primary inline-flex items-center gap-2 px-6 h-11 text-xs font-bold rounded-xl"
                  >
                    {primaryButtonText}
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                ) : (
                  <Link
                    to={primaryButtonLink}
                    className="glass-btn-primary inline-flex items-center gap-2 px-6 h-11 text-xs font-bold rounded-xl"
                  >
                    {primaryButtonText}
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                )}
              </Magnetic>
            )}

            {secondaryButtonText && (
              <a
                href={secondaryButtonLink}
                className={`inline-flex items-center gap-1.5 text-xs font-bold transition-all duration-300 hover:scale-[1.02] ${
                  isDark 
                    ? 'text-white/80 hover:text-[#FE8233]' 
                    : 'text-brand-dark hover:text-[#FE8233]'
                }`}
              >
                {secondaryButtonText}
                <ArrowRight className="w-3.5 h-3.5 opacity-60" />
              </a>
            )}
          </div>
        </div>
      </motion.div>
    </section>
  )
}
