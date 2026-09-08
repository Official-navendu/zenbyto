import React, { useEffect, useRef, useState } from 'react'
import { useReducedMotion } from 'framer-motion'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import promoVideo from '../../assets/Zenbyto Promo.mp4'

// Register GSAP ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger)

export default function PromoVideoSection() {
  const shouldReduceMotion = useReducedMotion()
  const sectionRef = useRef(null)
  const videoWrapperRef = useRef(null)
  const videoElementRef = useRef(null)
  const [aspectRatio, setAspectRatio] = useState(null)

  useEffect(() => {
    const video = videoElementRef.current
    if (!video) return

    // Ensure strict browser autoplay policy compliance (Chrome, Safari, iOS mobile)
    video.muted = true
    video.playsInline = true

    const playPromise = video.play()
    if (playPromise !== undefined) {
      playPromise.catch(() => {
        // Fallback for strict browser autoplay restrictions
      })
    }
  }, [])

  // Automatically extract native video dimensions on metadata load to prevent layout shift
  const handleLoadedMetadata = () => {
    const video = videoElementRef.current
    if (video && video.videoWidth && video.videoHeight) {
      setAspectRatio(`${video.videoWidth} / ${video.videoHeight}`)
    }
  }

  useEffect(() => {
    if (
      shouldReduceMotion ||
      !sectionRef.current ||
      !videoWrapperRef.current
    )
      return

    const ctx = gsap.context(() => {
      const isMobile = window.innerWidth < 768
      const initialY = isMobile ? 20 : 35
      const initialScale = isMobile ? 0.98 : 0.96

      // Initial animation state (Scale never exceeds 1.0 to prevent cropping)
      gsap.set(videoWrapperRef.current, {
        y: initialY,
        scale: initialScale,
        opacity: 0,
      })

      // 1:1 Scrubbed ScrollTrigger entrance animation
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 88%',
          end: 'center 50%',
          scrub: 1,
          invalidateOnRefresh: true,
        },
      })

      tl.to(videoWrapperRef.current, {
        y: 0,
        scale: 1,
        opacity: 1,
        ease: 'power2.out',
      })

      // Subtle container parallax scrubbed relative to section scroll
      gsap.to(videoWrapperRef.current, {
        y: isMobile ? -8 : -15,
        ease: 'none',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'center bottom',
          end: 'bottom top',
          scrub: 1.2,
          invalidateOnRefresh: true,
        },
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [shouldReduceMotion])

  return (
    <section
      ref={sectionRef}
      id="promo-video"
      className="relative w-full select-none overflow-hidden py-8 sm:py-12 lg:py-16"
    >
      {/* Subtle Ambient Background Radial Light Glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60%] h-[70%] rounded-full bg-gradient-radial from-[#FE8233]/[0.035] via-[#33387A]/[0.03] to-transparent blur-[140px] pointer-events-none" />

      <div className="max-w-[1400px] mx-auto px-6 sm:px-8 xl:px-12 relative z-10 w-full">
        {/*
          CRITICAL NO-CROP VIDEO CONTAINER:
          • Uses object-fit: contain
          • Width: 100%, Height: auto
          • Absolutely ZERO cropping of top/bottom or left/right video edges
          • Scales 100% naturally across all screen sizes (375px to 2560px)
        */}
        <div
          ref={videoWrapperRef}
          className="relative w-full rounded-2xl sm:rounded-3xl overflow-hidden shadow-[0_20px_50px_-12px_rgba(51,56,122,0.12)] border border-slate-200/80 bg-black/90"
          style={aspectRatio ? { aspectRatio } : undefined}
        >
          <video
            ref={videoElementRef}
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            onLoadedMetadata={handleLoadedMetadata}
            aria-label="Zenbyto Promotional Showcase Video"
            className="w-full h-full object-contain block rounded-2xl sm:rounded-3xl pointer-events-none select-none"
          >
            <source src={promoVideo} type="video/mp4" />
            Your browser does not support HTML5 video.
          </video>

          {/* Direct 1px subtle edge highlight border overlay */}
          <div className="absolute inset-0 rounded-2xl sm:rounded-3xl border border-white/10 pointer-events-none" />
        </div>
      </div>
    </section>
  )
}
