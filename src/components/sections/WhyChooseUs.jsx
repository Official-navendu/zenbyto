import React, { useEffect, useRef } from 'react'
import { useReducedMotion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { ClientLogoCapsuleSlider } from './OurClients'

// Import asset
import whyChooseUsImg from '../../assets/why-choose-us.png'

// Register GSAP ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger)

export default function WhyChooseUs() {
  const shouldReduceMotion = useReducedMotion()
  const sectionRef = useRef(null)
  const leftRef = useRef(null)
  const rightRef = useRef(null)

  useEffect(() => {
    if (shouldReduceMotion || !sectionRef.current || !leftRef.current || !rightRef.current) return

    const ctx = gsap.context(() => {
      const isMobile = window.innerWidth < 1024
      const xOffset = isMobile ? 40 : 100

      // Set initial transform state before scroll trigger begins
      gsap.set(leftRef.current, { x: -xOffset, opacity: 0 })
      gsap.set(rightRef.current, { x: xOffset, opacity: 0 })

      // Create 1:1 scrubbed timeline directly linked to scroll progress
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 85%',
          end: 'center 45%',
          scrub: 1,
          invalidateOnRefresh: true,
        },
      })

      tl.to(leftRef.current, { x: 0, opacity: 1, ease: 'power2.out' }, 0)
        .to(rightRef.current, { x: 0, opacity: 1, ease: 'power2.out' }, 0)
    }, sectionRef)

    return () => ctx.revert()
  }, [shouldReduceMotion])

  return (
    <section
      ref={sectionRef}
      id="why-us"
      className="relative bg-white bg-atmosphere-grain w-full select-none py-10 sm:py-14 lg:py-16 overflow-hidden"
    >
      {/* Background Radial Light Glows */}
      <div className="absolute top-[25%] left-[-5%] w-[45%] h-[45%] rounded-full bg-gradient-radial from-[#FE8233]/[0.04] to-transparent blur-[140px] pointer-events-none" />
      <div className="absolute bottom-[10%] right-[-5%] w-[40%] h-[40%] rounded-full bg-gradient-radial from-[#33387A]/[0.04] to-transparent blur-[140px] pointer-events-none" />

      <div className="max-w-[1400px] mx-auto px-6 sm:px-8 xl:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 xl:gap-16 items-center">
          
          {/* LEFT COLUMN: CONTENT + CAPSULE LOGO SLIDER (Enters from LEFT: -100px -> 0px) */}
          <div
            ref={leftRef}
            className="lg:col-span-6 space-y-5 text-left order-1"
            style={{ willChange: 'transform, opacity' }}
          >
            {/* Eyebrow Label */}
            <div className="flex items-center gap-2.5">
              <span className="w-2.5 h-2.5 rounded-full bg-[#FE8233]" />
              <span className="text-xs xl:text-[13px] font-semibold tracking-[0.16em] uppercase text-[#FE8233]">
                THE ZENBYTO EDGE
              </span>
              <div className="w-12 h-[1px] bg-[#FE8233]/35" />
            </div>

            {/* Main Headline */}
            <h2 className="text-[28px] sm:text-[36px] lg:text-[40px] xl:text-[44px] font-semibold text-[#33387A] tracking-tight leading-tight">
              Data-Driven Strategy & High-Performance Growth
            </h2>

            {/* Supporting Description */}
            <p className="text-base sm:text-lg text-[#475569] font-normal leading-[1.6]">
              We build clear acquisition strategies, engineered digital infrastructure, and mathematical marketing campaigns that replace guesswork with predictable business outcomes.
            </p>

            {/* Key Edge Highlights / Features Grid */}
            <div className="pt-1 grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              <div className="p-3.5 rounded-2xl bg-slate-50/80 border border-slate-100 space-y-1">
                <h4 className="text-sm font-bold text-[#33387A]">Engineered Scale</h4>
                <p className="text-xs text-slate-500 leading-relaxed">Conversion-first web architectures built for revenue precision.</p>
              </div>
              <div className="p-3.5 rounded-2xl bg-slate-50/80 border border-slate-100 space-y-1">
                <h4 className="text-sm font-bold text-[#33387A]">Data Mastery</h4>
                <p className="text-xs text-slate-500 leading-relaxed">Server-side tracking and transparent ROI measurement.</p>
              </div>
            </div>

            {/* CTA Button */}
            <div className="pt-2">
              <Link
                to="/about"
                className="px-7 py-3 rounded-full bg-[#FE8233] hover:bg-[#33387A] text-white text-sm font-bold transition-all duration-300 shadow-md hover:shadow-xl hover:-translate-y-0.5 inline-flex items-center gap-2 cursor-pointer border border-white/20"
              >
                <span>About Us</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            {/* CAPSULE LOGO SLIDER DIRECTLY BELOW LEFT CONTENT */}
            <div className="pt-3 w-full">
              <ClientLogoCapsuleSlider />
            </div>

          </div>

          {/* RIGHT COLUMN: IMAGE / VISUAL (Enters from RIGHT: +100px -> 0px) */}
          <div
            ref={rightRef}
            className="lg:col-span-6 w-full order-2 flex items-center justify-center"
            style={{ willChange: 'transform, opacity' }}
          >
            <div className="w-full h-[320px] sm:h-[420px] lg:h-[540px] relative flex items-center justify-center overflow-hidden">
              <img
                src={whyChooseUsImg}
                alt="Data-Driven Strategy & High-Performance Growth"
                className="w-full h-full object-contain object-center rounded-none border-none shadow-none outline-none block"
                loading="eager"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
