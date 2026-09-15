import React, { useState, useEffect, useRef } from 'react'
import { useReducedMotion } from 'framer-motion'
import { Cpu, CheckCircle2, TrendingUp, Users } from 'lucide-react'

export default function StatsCounterSection() {
  const shouldReduceMotion = useReducedMotion()
  const sectionRef = useRef(null)

  // Viewport intersection visibility state
  const [isVisible, setIsVisible] = useState(false)

  // Animated numeric states
  const [stat1, setStat1] = useState(0) // target: 250
  const [stat2, setStat2] = useState(0) // target: 95
  const [stat3, setStat3] = useState(0) // target: 2
  const [stat4, setStat4] = useState(0) // target: 25

  // 1. Intersection Observer to detect ENTERS and LEAVES viewport for replay
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        } else {
          // Reset when leaving viewport so animation replays on return
          setIsVisible(false)
        }
      },
      {
        threshold: 0.25, // Trigger when 25% of section is visible
      }
    )

    const currentRef = sectionRef.current
    if (currentRef) {
      observer.observe(currentRef)
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef)
      }
    }
  }, [])

  // 2. Count-up Animation Engine triggered by isVisible
  useEffect(() => {
    if (shouldReduceMotion) {
      setStat1(250)
      setStat2(95)
      setStat3(2)
      setStat4(25)
      return
    }

    if (!isVisible) {
      // Instant reset to 0 when section leaves viewport
      setStat1(0)
      setStat2(0)
      setStat3(0)
      setStat4(0)
      return
    }

    // Animation Duration ~1400ms
    const duration = 1400
    const startTime = performance.now()

    let animationFrameId

    const step = (currentTime) => {
      const elapsed = currentTime - startTime
      const progress = Math.min(elapsed / duration, 1)

      // Ease-out quad formula for smooth decelerating count-up
      const easeProgress = 1 - Math.pow(1 - progress, 3)

      setStat1(Math.floor(easeProgress * 250))
      setStat2(Math.floor(easeProgress * 95))
      setStat3(Math.floor(easeProgress * 2))
      setStat4(Math.floor(easeProgress * 25))

      if (progress < 1) {
        animationFrameId = requestAnimationFrame(step)
      } else {
        setStat1(250)
        setStat2(95)
        setStat3(2)
        setStat4(25)
      }
    }

    animationFrameId = requestAnimationFrame(step)

    return () => {
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId)
      }
    }
  }, [isVisible, shouldReduceMotion])

  const stats = [
    {
      value: `${stat1}+`,
      finalValue: '250+',
      labelLine1: 'Growth Systems',
      labelLine2: 'Deployed',
      iconContainer: 'bg-[#33387A] text-white',
      icon: <Cpu className="w-5 h-5 sm:w-6 sm:h-6" />,
    },
    {
      value: `${stat2}%`,
      finalValue: '95%',
      labelLine1: 'Client Retention',
      labelLine2: 'Rate',
      iconContainer: 'bg-[#FE8233] text-white',
      icon: <CheckCircle2 className="w-5 h-5 sm:w-6 sm:h-6" />,
    },
    {
      value: `${stat3}X+`,
      finalValue: '2X+',
      labelLine1: 'Average',
      labelLine2: 'Revenue Growth',
      iconContainer: 'bg-[#4F46E5] text-white',
      icon: <TrendingUp className="w-5 h-5 sm:w-6 sm:h-6" />,
    },
    {
      value: `${stat4}+`,
      finalValue: '25+',
      labelLine1: 'Industries',
      labelLine2: 'Served',
      iconContainer: 'bg-[#FF9F1C] text-white',
      icon: <Users className="w-5 h-5 sm:w-6 sm:h-6" />,
    },
  ]

  return (
    <section
      ref={sectionRef}
      id="stats-counter"
      className="relative bg-white pt-1 sm:pt-2 pb-2 sm:pb-3 w-full overflow-hidden"
    >
      <div className="max-w-[1340px] mx-auto px-4 sm:px-6 relative z-10 w-full">
        {/* Desktop 4 Columns in 1 Single Horizontal Row, Mobile 2x2 Grid (Sitting Directly on Background) */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 items-center w-full">
          {stats.map((item, idx) => (
            <div
              key={idx}
              className="flex flex-row items-center gap-3 sm:gap-3.5"
            >
              {/* Rounded-Square Icon Container */}
              <div className={`w-11 h-11 sm:w-12 sm:h-12 rounded-xl ${item.iconContainer} flex items-center justify-center shrink-0 shadow-xs`}>
                {item.icon}
              </div>

              {/* Right Text Content Block: Number on Top, Label Directly Below */}
              <div className="flex flex-col text-left">
                <span className="text-lg sm:text-xl md:text-[22px] font-bold text-slate-900 tracking-tight leading-none min-w-[60px]">
                  {shouldReduceMotion ? item.finalValue : item.value}
                </span>
                
                <span className="text-[12px] sm:text-[13px] font-medium text-slate-600 leading-tight mt-1">
                  <span className="block whitespace-nowrap">{item.labelLine1}</span>
                  <span className="block whitespace-nowrap">{item.labelLine2}</span>
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
