import React, { useState } from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import { Search, Compass, Cpu, TrendingUp, BarChart3 } from 'lucide-react'

export default function Process() {
  const shouldReduceMotion = useReducedMotion()
  const [hoveredIndex, setHoveredIndex] = useState(null)

  const steps = [
    {
      num: '01',
      title: 'DISCOVER',
      subtitle: 'Understand',
      desc: 'We analyze your business, audience, market, and digital ecosystem to identify growth opportunities.',
      icon: <Search className="w-14 h-14 xl:w-16 xl:h-16 stroke-[2.2] stroke-linecap-round stroke-linejoin-round" />,
      cardBg: 'bg-gradient-to-b from-[#FFF5EF] to-[#FFE8DC] border-[#FE8233]/20 text-[#33387A]',
      iconColor: 'text-[#FE8233]',
      tagBg: 'bg-[#FE8233]/15 text-[#FE8233]',
      topHighlight: 'bg-white/60',
      baseRotation: -8,
      baseOffsetY: 16,
      iconActiveRotation: 12,
    },
    {
      num: '02',
      title: 'STRATEGY',
      subtitle: 'Plan',
      desc: 'We turn data insights into a clear growth roadmap defining priorities, channels, and measurable goals.',
      icon: <Compass className="w-14 h-14 xl:w-16 xl:h-16 stroke-[2.2] stroke-linecap-round stroke-linejoin-round" />,
      cardBg: 'bg-gradient-to-b from-[#FF8F44] to-[#F57625] border-white/20 text-white',
      iconColor: 'text-white',
      tagBg: 'bg-white/20 text-white',
      topHighlight: 'bg-white/30',
      baseRotation: -4,
      baseOffsetY: 6,
      iconActiveRotation: 45,
    },
    {
      num: '03',
      title: 'CREATE',
      subtitle: 'Build',
      desc: 'We bring strategy to life through React web development, high-converting interfaces, and brand precision.',
      icon: <Cpu className="w-14 h-14 xl:w-16 xl:h-16 stroke-[2.2] stroke-linecap-round stroke-linejoin-round" />,
      cardBg: 'bg-gradient-to-b from-[#FFFFFF] to-[#F1F5F9] border-[#33387A]/12 text-[#33387A]',
      iconColor: 'text-[#33387A]',
      tagBg: 'bg-[#33387A]/10 text-[#33387A]',
      topHighlight: 'bg-white/80',
      baseRotation: 0,
      baseOffsetY: 0,
      iconActiveRotation: -12,
    },
    {
      num: '04',
      title: 'GROW',
      subtitle: 'Scale',
      desc: 'We deploy targeted paid media campaigns, SEO authority, and automated acquisition funnels to drive revenue.',
      icon: <TrendingUp className="w-14 h-14 xl:w-16 xl:h-16 stroke-[2.2] stroke-linecap-round stroke-linejoin-round" />,
      cardBg: 'bg-gradient-to-b from-[#3B408B] to-[#2B2F68] border-white/20 text-white',
      iconColor: 'text-[#FE8233]',
      tagBg: 'bg-white/15 text-white',
      topHighlight: 'bg-white/25',
      baseRotation: 4,
      baseOffsetY: 6,
      iconActiveRotation: -8,
    },
    {
      num: '05',
      title: 'OPTIMISE',
      subtitle: 'Refine',
      desc: 'We measure attribution data, refine campaign efficiency, and continuously compound long-term client ROI.',
      icon: <BarChart3 className="w-14 h-14 xl:w-16 xl:h-16 stroke-[2.2] stroke-linecap-round stroke-linejoin-round" />,
      cardBg: 'bg-gradient-to-b from-[#FFF5EF] to-[#FFE8DC] border-[#FE8233]/20 text-[#33387A]',
      iconColor: 'text-[#FE8233]',
      tagBg: 'bg-[#FE8233]/15 text-[#FE8233]',
      topHighlight: 'bg-white/60',
      baseRotation: 8,
      baseOffsetY: 16,
      iconActiveRotation: 12,
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.12 },
    },
  }

  // Calculate dynamic transform based on hovered card index
  const getCardTransform = (index) => {
    const item = steps[index]

    if (shouldReduceMotion) {
      return {
        x: 0,
        y: 0,
        rotate: 0,
        scale: 1,
        zIndex: (index + 1) * 10,
      }
    }

    if (hoveredIndex === null) {
      return {
        x: 0,
        y: item.baseOffsetY,
        rotate: item.baseRotation,
        scale: 1,
        zIndex: (index + 1) * 10,
      }
    }

    const distance = index - hoveredIndex

    if (distance === 0) {
      return {
        x: 0,
        y: -14,
        rotate: item.baseRotation * 0.3,
        scale: 1.06,
        zIndex: 50,
      }
    }

    const direction = distance < 0 ? -1 : 1
    const absDist = Math.abs(distance)
    // Progressive shift: 75px for adjacent card, +35px for each subsequent card
    const xOffset = direction * (75 + (absDist - 1) * 35)

    return {
      x: xOffset,
      y: item.baseOffsetY,
      rotate: item.baseRotation,
      scale: 0.97,
      zIndex: (index + 1) * 10,
    }
  }

  return (
    <section id="process" className="py-10 sm:py-14 lg:py-16 bg-white bg-atmosphere-grain relative overflow-hidden select-none">
      
      {/* Hide Scrollbars Utility */}
      <style>{`
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>

      {/* Subtle Ambient Radial Accent Glows */}
      <div className="absolute top-[25%] left-[50%] -translate-x-1/2 w-[600px] h-[300px] rounded-full bg-gradient-radial from-[#FE8233]/[0.03] via-[#33387A]/[0.02] to-transparent blur-[140px] pointer-events-none" />

      <div className="max-w-[1400px] mx-auto px-6 sm:px-8 md:px-10 lg:px-12 relative z-10 space-y-8 sm:space-y-10">
        
        {/* NORMALIZED SECTION HEADER */}
        <div className="text-center max-w-[700px] mx-auto space-y-3">
          <motion.div
            initial={shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="flex items-center justify-center gap-2.5"
          >
            <span className="w-2.5 h-2.5 rounded-full bg-[#FE8233]" />
            <span className="text-xs sm:text-[13px] font-semibold tracking-widest uppercase text-[#FE8233]">
              OUR METHODOLOGY
            </span>
            <div className="w-12 h-[1px] bg-[#FE8233]/35" />
          </motion.div>

          <motion.h2
            initial={shouldReduceMotion ? { opacity: 1, y: 0, filter: 'blur(0px)' } : { opacity: 0, y: 20, filter: 'blur(4px)' }}
            whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
            className="text-[28px] sm:text-[36px] md:text-[42px] lg:text-[46px] font-semibold text-[#33387A] tracking-tight leading-tight"
          >
            Our Working Process
          </motion.h2>

          <motion.p
            initial={shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.18, ease: [0.22, 1, 0.36, 1] }}
            className="text-base sm:text-lg text-[#475569] font-normal leading-[1.6] max-w-[650px] mx-auto"
          >
            A clear, collaborative methodology designed to turn strategic insights into measurable digital growth.
          </motion.p>
        </div>

        {/* DESKTOP OVERLAPPING 5-CARD INTERACTIVE FAN-OUT COMPOSITION (lg:flex) */}
        <motion.div
          onMouseLeave={() => setHoveredIndex(null)}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="hidden lg:flex items-center justify-center -space-x-8 xl:-space-x-10 pt-4 pb-12 min-h-[460px]"
        >
          {steps.map((item, index) => {
            const isHovered = hoveredIndex === index

            return (
              <motion.div
                key={item.num}
                tabIndex={0}
                onMouseEnter={() => setHoveredIndex(index)}
                onFocus={() => setHoveredIndex(index)}
                onBlur={() => setHoveredIndex(null)}
                animate={getCardTransform(index)}
                transition={{
                  duration: 0.5,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="relative transform-gpu cursor-pointer group outline-none shrink-0"
              >
                <div
                  className={`w-[250px] xl:w-[275px] h-[390px] xl:h-[410px] rounded-[22px] border p-6 xl:p-7 flex flex-col justify-between text-left relative overflow-hidden backdrop-blur-md transition-shadow duration-300 ${
                    isHovered
                      ? 'shadow-[0_25px_50px_-12px_rgba(20,24,70,0.22)]'
                      : 'shadow-[0_12px_30px_-8px_rgba(20,24,70,0.12),0_3px_10px_-2px_rgba(20,24,70,0.06)]'
                  } ${item.cardBg}`}
                >
                  
                  {/* 1px Material Top Edge Highlight */}
                  <div className={`absolute top-0 inset-x-[8%] h-[1px] ${item.topHighlight} pointer-events-none`} />

                  {/* TOP: Step Number & Title */}
                  <div className="flex items-center justify-between gap-3">
                    <div className="space-y-0.5">
                      <div className="flex items-center gap-1.5">
                        <span className="font-mono text-xs font-bold opacity-60">
                          {item.num}
                        </span>
                        <span className="text-[11px] font-bold tracking-widest uppercase opacity-75">
                          • {item.subtitle}
                        </span>
                      </div>
                      <h3 className="text-xl xl:text-[22px] font-bold tracking-tight uppercase leading-tight">
                        {item.title}
                      </h3>
                    </div>

                    <span className={`w-8 h-8 rounded-full font-mono text-xs font-bold flex items-center justify-center shrink-0 ${item.tagBg}`}>
                      {item.num}
                    </span>
                  </div>

                  {/* CENTER: Minimal Line-Art SVG Icon with Subtle Micro-Interaction */}
                  <motion.div
                    animate={
                      isHovered
                        ? { scale: 1.12, y: -4, rotate: item.iconActiveRotation }
                        : { scale: 1, y: 0, rotate: 0 }
                    }
                    transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                    className={`my-auto flex items-center justify-center ${item.iconColor}`}
                  >
                    {item.icon}
                  </motion.div>

                  {/* BOTTOM: Short Process Description */}
                  <div className="pt-4 border-t border-current/15">
                    <p className="text-xs xl:text-[13.5px] font-normal leading-relaxed opacity-90">
                      {item.desc}
                    </p>
                  </div>

                </div>
              </motion.div>
            )
          })}
        </motion.div>

        {/* MOBILE & TABLET HORIZONTAL SNAP CAROUSEL (< 1024px) */}
        <div className="lg:hidden flex items-center gap-4 overflow-x-auto snap-x snap-mandatory no-scrollbar pb-6 px-4">
          {steps.map((item) => (
            <div
              key={item.num}
              className="w-[84vw] sm:w-[320px] shrink-0 snap-center"
            >
              <div className={`w-full h-[380px] sm:h-[400px] rounded-[20px] border shadow-md p-6 sm:p-7 flex flex-col justify-between text-left relative overflow-hidden ${item.cardBg}`}>
                
                {/* 1px Material Top Edge Highlight */}
                <div className={`absolute top-0 inset-x-[8%] h-[1px] ${item.topHighlight} pointer-events-none`} />

                <div className="flex items-center justify-between gap-3">
                  <div>
                    <div className="flex items-center gap-1.5 mb-0.5">
                      <span className="font-mono text-xs font-bold opacity-60">
                        {item.num}
                      </span>
                      <span className="text-[11px] font-bold tracking-widest uppercase opacity-75">
                        • {item.subtitle}
                      </span>
                    </div>
                    <h3 className="text-lg sm:text-xl font-bold tracking-tight uppercase">
                      {item.title}
                    </h3>
                  </div>

                  <span className={`w-8 h-8 rounded-full font-mono text-xs font-bold flex items-center justify-center shrink-0 ${item.tagBg}`}>
                    {item.num}
                  </span>
                </div>

                <div className={`my-auto flex items-center justify-center ${item.iconColor}`}>
                  {item.icon}
                </div>

                <div className="pt-3 border-t border-current/15">
                  <p className="text-xs sm:text-sm font-normal leading-relaxed opacity-90">
                    {item.desc}
                  </p>
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}