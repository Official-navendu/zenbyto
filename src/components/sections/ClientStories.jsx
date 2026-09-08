import React, { useState, useRef } from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import { Star, Quote } from 'lucide-react'

// Import Authentic Client Logos
import nexzenLogo from '../../assets/logos/nexzen_logo.png'
import lumenLogo from '../../assets/logos/lumen_logo.png'
import brightgridLogo from '../../assets/logos/brightgrid_logo.png'
import skyseekerLogo from '../../assets/logos/skyseeker_logo.png'
import cloudLogo from '../../assets/logos/cloud_logo.png'

const testimonials = [
  {
    id: 1,
    quote: "Zenbyto transformed our WooCommerce platform, rebuilt our email automations, and scaled our paid ads. Our revenue surpassed $1M with outstanding attribution clarity.",
    name: "Marcus Vance",
    role: "Founder & CEO",
    company: "NexZen Extracts",
    logo: nexzenLogo,
    rating: 5,
    source: "Google Reviews"
  },
  {
    id: 2,
    quote: "The team delivered a high-converting private flight charter booking engine with sub-second page loads. Their engineering expertise and design precision are world-class.",
    name: "Elena Rostova",
    role: "Managing Director",
    company: "AzuraFly Aviation",
    logo: skyseekerLogo,
    rating: 5,
    source: "Clutch"
  },
  {
    id: 3,
    quote: "Working with Zenbyto on our crypto exchange platform was seamless. They scaled our user base past 10,000 active traders with zero downtime.",
    name: "Darren Hayes",
    role: "Chief Marketing Officer",
    company: "NavExM Exchange",
    logo: cloudLogo,
    rating: 5,
    source: "Google Reviews"
  },
  {
    id: 4,
    quote: "Zenbyto engineered a clean, modern web infrastructure that increased our B2B SaaS demo requests by 140%. Exceptional communication and rapid delivery.",
    name: "Sarah Lin",
    role: "Lead Architect",
    company: "LumenCloud Technologies",
    logo: lumenLogo,
    rating: 5,
    source: "Clutch"
  },
  {
    id: 5,
    quote: "Zenbyto's data-driven acquisition framework allowed us to scale our solar and renewable lead volume by 3x while cutting CAC by 35%.",
    name: "David Miller",
    role: "Director of Growth",
    company: "BrightGrid LLC",
    logo: brightgridLogo,
    rating: 5,
    source: "Google Reviews"
  }
]

export default function ClientStories() {
  const shouldReduceMotion = useReducedMotion()
  const [isHovered, setIsHovered] = useState(false)
  const [activeTestimonialIndex, setActiveTestimonialIndex] = useState(0)
  const testimonialScrollRef = useRef(null)

  const handleTestimonialScroll = () => {
    if (!testimonialScrollRef.current) return
    const { scrollLeft, clientWidth } = testimonialScrollRef.current
    const itemWidth = clientWidth * 0.84
    if (itemWidth > 0) {
      const index = Math.round(scrollLeft / itemWidth)
      setActiveTestimonialIndex(Math.min(Math.max(index, 0), testimonials.length - 1))
    }
  }

  return (
    <section
      id="client-stories"
      className="py-16 sm:py-24 lg:py-28 bg-white bg-atmosphere-grain w-full flex justify-center select-none"
    >
      {/* Keyframe Animation for True Seamless Vertical Auto-Loop */}
      <style>{`
        @keyframes vertical-testimonial-loop {
          0% { transform: translate3d(0, 0, 0); }
          100% { transform: translate3d(0, -50%, 0); }
        }
        .animate-vertical-testimonial-stream {
          animation: vertical-testimonial-loop 15s linear infinite;
          will-change: transform;
          backface-visibility: hidden;
        }
        @media (prefers-reduced-motion: reduce) {
          .animate-vertical-testimonial-stream {
            animation-play-state: paused !important;
          }
        }
      `}</style>

      {/* Editorial Premium Dark Navy Outer Container (#33387A) */}
      <div className="max-w-[1400px] w-full mx-4 sm:mx-6 lg:mx-10 rounded-[24px] sm:rounded-[36px] bg-[#33387A] text-white p-6 sm:p-12 lg:p-16 xl:p-20 relative overflow-hidden shadow-[0_25px_60px_-15px_rgba(20,24,70,0.25)] border border-white/10 flex flex-col justify-center">
        
        {/* 1px Material Top Edge Highlight */}
        <div className="absolute top-0 inset-x-[8%] h-[1px] bg-white/20 pointer-events-none" />

        {/* Subtle Ambient Radial Glow */}
        <div className="absolute top-[10%] right-[10%] w-[45%] h-[45%] rounded-full bg-gradient-radial from-[#FE8233]/[0.08] via-transparent to-transparent blur-[130px] pointer-events-none" />
        <div className="absolute bottom-[10%] left-[5%] w-[35%] h-[35%] rounded-full bg-gradient-radial from-white/[0.04] to-transparent blur-[120px] pointer-events-none" />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center relative z-10 w-full">
          
          {/* LEFT COLUMN (~42% Width): Section Header & Brand Statement */}
          <div className="lg:col-span-5 flex flex-col justify-between text-left space-y-4 sm:space-y-6">
            
            {/* Eyebrow Label */}
            <motion.div
              initial={shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="flex items-center gap-2.5"
            >
              <span className="w-2.5 h-2.5 rounded-full bg-[#FE8233]" />
              <span className="text-xs sm:text-[13px] font-semibold tracking-[0.16em] uppercase text-[#FE8233]">
                CLIENT STORIES
              </span>
              <div className="w-12 h-[1px] bg-[#FE8233]/35" />
            </motion.div>

            {/* Main Heading Matching Internal Pages Scale */}
            <motion.h2
              initial={shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
              className="text-[26px] sm:text-[36px] md:text-[42px] lg:text-[46px] font-semibold text-white tracking-tight leading-tight max-w-[500px]"
            >
              What Partners Say
            </motion.h2>

            {/* Supporting Paragraph */}
            <motion.p
              initial={shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.18, ease: [0.22, 1, 0.36, 1] }}
              className="text-xs sm:text-base lg:text-lg text-white/80 leading-relaxed sm:leading-[1.6] max-w-[440px] font-normal"
            >
              Real experiences and growth results from ambitious brands that trusted Zenbyto to move their digital presence forward.
            </motion.p>

            {/* Micro Live Status Indicator (Desktop/Tablet Only) */}
            <div className="hidden md:flex pt-4 items-center gap-3 text-xs font-semibold text-white/70 tracking-wider uppercase">
              <span className="w-2 h-2 rounded-full bg-[#FE8233] animate-pulse" />
              <span>CONTINUOUS REVIEWS STREAM • HOVER TO PAUSE</span>
            </div>

            {/* MOBILE-ONLY HORIZONTAL TESTIMONIAL SWIPE SLIDER (< 768px) */}
            <div className="block md:hidden w-full pt-2">
              <div
                ref={testimonialScrollRef}
                onScroll={handleTestimonialScroll}
                className="flex overflow-x-auto snap-x snap-mandatory scroll-smooth touch-pan-x gap-3.5 px-1 pb-3 -mx-2 px-2 select-none"
                style={{
                  scrollbarWidth: 'none',
                  msOverflowStyle: 'none',
                  WebkitOverflowScrolling: 'touch'
                }}
              >
                {testimonials.map((item) => (
                  <div
                    key={item.id}
                    className="w-[84vw] max-w-[340px] shrink-0 snap-center rounded-[20px] bg-white/[0.06] backdrop-blur-md border border-white/12 p-5 relative overflow-hidden flex flex-col justify-between shadow-xl min-h-[250px]"
                  >
                    {/* Subtle Background Decorative Quote Icon */}
                    <Quote className="absolute -bottom-3 -right-3 w-24 h-24 text-white/[0.03] pointer-events-none transform -rotate-12" />

                    {/* Card Header: 5-Star Rating & Source Badge */}
                    <div className="flex items-center justify-between gap-3 border-b border-white/10 pb-3 relative z-10 shrink-0">
                      <div className="flex items-center gap-1 text-[#FE8233]">
                        {[...Array(item.rating)].map((_, i) => (
                          <Star key={i} className="w-3.5 h-3.5 fill-current" />
                        ))}
                      </div>

                      <span className="px-2.5 py-0.5 rounded-full bg-white/10 text-white/90 text-[10px] font-semibold border border-white/15">
                        {item.source}
                      </span>
                    </div>

                    {/* Quote Content */}
                    <blockquote className="text-xs sm:text-sm font-medium text-white/95 leading-relaxed tracking-tight italic relative z-10 my-3 line-clamp-5">
                      "{item.quote}"
                    </blockquote>

                    {/* Card Footer: Author & Client Logo */}
                    <div className="flex items-center gap-3 pt-3 border-t border-white/12 relative z-10 shrink-0">
                      {item.logo && (
                        <div className="w-9 h-9 rounded-xl bg-white p-1.5 flex items-center justify-center shrink-0 shadow-sm border border-slate-200/80">
                          <img src={item.logo} alt={item.company} className="w-full h-full object-contain" />
                        </div>
                      )}

                      <div className="truncate">
                        <h3 className="text-xs font-bold text-white leading-snug truncate">
                          {item.name}
                        </h3>
                        <p className="text-[11px] text-white/75 font-normal truncate">
                          {item.role}, <span className="text-[#FE8233] font-semibold">{item.company}</span>
                        </p>
                      </div>
                    </div>

                  </div>
                ))}
              </div>

              {/* Mobile Testimonial Indicator Dots */}
              <div className="flex items-center justify-center gap-1.5 pt-3">
                {testimonials.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => {
                      if (testimonialScrollRef.current) {
                        const cardWidth = testimonialScrollRef.current.scrollWidth / testimonials.length
                        testimonialScrollRef.current.scrollTo({ left: cardWidth * idx, behavior: 'smooth' })
                      }
                    }}
                    aria-label={`Go to testimonial ${idx + 1}`}
                    className={`h-1.5 rounded-full transition-all duration-300 cursor-pointer ${
                      activeTestimonialIndex === idx ? 'w-5 bg-[#FE8233]' : 'w-1.5 bg-white/30'
                    }`}
                  />
                ))}
              </div>
            </div>

          </div>

          {/* RIGHT COLUMN (~58% Width): Vertical Auto-Loop Testimonial Viewport (Desktop/Tablet ONLY >= 768px) */}
          <div
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            className="hidden md:flex lg:col-span-7 h-[460px] sm:h-[500px] overflow-hidden relative w-full justify-center"
            style={{
              maskImage: 'linear-gradient(to bottom, transparent 0%, black 8%, black 92%, transparent 100%)',
              WebkitMaskImage: 'linear-gradient(to bottom, transparent 0%, black 8%, black 92%, transparent 100%)'
            }}
          >
            {/* CONTINUOUS VERTICAL STREAM TRACK */}
            <div
              className={`w-full max-w-[580px] flex flex-col space-y-6 ${
                shouldReduceMotion ? '' : 'animate-vertical-testimonial-stream'
              }`}
              style={{
                animationPlayState: isHovered ? 'paused' : 'running'
              }}
            >
              {/* Sequence Block A (Identical Card Dimensions) */}
              <div className="w-full flex flex-col space-y-6">
                {testimonials.map((item) => (
                  <div
                    key={`seqA-${item.id}`}
                    className="w-full h-[330px] sm:h-[350px] shrink-0 rounded-[24px] bg-white/[0.06] backdrop-blur-md border border-white/12 p-6 sm:p-8 relative overflow-hidden flex flex-col justify-between shadow-xl transition-all duration-300 hover:border-[#FE8233]/50 hover:bg-white/[0.09]"
                  >
                    {/* Subtle Background Decorative Quote Icon */}
                    <Quote className="absolute -bottom-3 -right-3 w-28 h-28 text-white/[0.03] pointer-events-none transform -rotate-12" />

                    {/* Card Header: 5-Star Rating & Source Badge */}
                    <div className="flex items-center justify-between gap-3 border-b border-white/10 pb-4.5 relative z-10 shrink-0">
                      <div className="flex items-center gap-1 text-[#FE8233]">
                        {[...Array(item.rating)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 fill-current" />
                        ))}
                      </div>

                      <span className="px-3 py-1 rounded-full bg-white/10 text-white/90 text-xs font-semibold border border-white/15">
                        {item.source}
                      </span>
                    </div>

                    {/* Quote Content (Natural Wrap with line clamp safeguard) */}
                    <blockquote className="text-base sm:text-lg font-medium text-white/95 leading-relaxed tracking-tight italic relative z-10 line-clamp-4 my-auto">
                      "{item.quote}"
                    </blockquote>

                    {/* Card Footer: Author & Client Logo */}
                    <div className="flex items-center gap-3.5 pt-4 border-t border-white/12 relative z-10 shrink-0">
                      {item.logo && (
                        <div className="w-11 h-11 rounded-xl bg-white p-2 flex items-center justify-center shrink-0 shadow-sm border border-slate-200/80">
                          <img src={item.logo} alt={item.company} className="w-full h-full object-contain" />
                        </div>
                      )}

                      <div className="truncate">
                        <h3 className="text-sm sm:text-base font-bold text-white leading-snug truncate">
                          {item.name}
                        </h3>
                        <p className="text-xs text-white/75 font-normal truncate">
                          {item.role}, <span className="text-[#FE8233] font-semibold">{item.company}</span>
                        </p>
                      </div>
                    </div>

                  </div>
                ))}
              </div>

              {/* Sequence Block B (Identical Twin for True Seamless Loop) */}
              <div className="w-full flex flex-col space-y-6" aria-hidden="true">
                {testimonials.map((item) => (
                  <div
                    key={`seqB-${item.id}`}
                    className="w-full h-[330px] sm:h-[350px] shrink-0 rounded-[24px] bg-white/[0.06] backdrop-blur-md border border-white/12 p-6 sm:p-8 relative overflow-hidden flex flex-col justify-between shadow-xl transition-all duration-300 hover:border-[#FE8233]/50 hover:bg-white/[0.09]"
                  >
                    <Quote className="absolute -bottom-3 -right-3 w-28 h-28 text-white/[0.03] pointer-events-none transform -rotate-12" />

                    <div className="flex items-center justify-between gap-3 border-b border-white/10 pb-4.5 relative z-10 shrink-0">
                      <div className="flex items-center gap-1 text-[#FE8233]">
                        {[...Array(item.rating)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 fill-current" />
                        ))}
                      </div>

                      <span className="px-3 py-1 rounded-full bg-white/10 text-white/90 text-xs font-semibold border border-white/15">
                        {item.source}
                      </span>
                    </div>

                    <blockquote className="text-base sm:text-lg font-medium text-white/95 leading-relaxed tracking-tight italic relative z-10 line-clamp-4 my-auto">
                      "{item.quote}"
                    </blockquote>

                    <div className="flex items-center gap-3.5 pt-4 border-t border-white/12 relative z-10 shrink-0">
                      {item.logo && (
                        <div className="w-11 h-11 rounded-xl bg-white p-2 flex items-center justify-center shrink-0 shadow-sm border border-slate-200/80">
                          <img src={item.logo} alt={item.company} className="w-full h-full object-contain" />
                        </div>
                      )}

                      <div className="truncate">
                        <h3 className="text-sm sm:text-base font-bold text-white leading-snug truncate">
                          {item.name}
                        </h3>
                        <p className="text-xs text-white/75 font-normal truncate">
                          {item.role}, <span className="text-[#FE8233] font-semibold">{item.company}</span>
                        </p>
                      </div>
                    </div>

                  </div>
                ))}
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
