import React, { useEffect, useRef } from 'react'
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
  const videoElementRefDesktop = useRef(null)
  const videoElementRefMobile = useRef(null)

  useEffect(() => {
    const playVideo = (video) => {
      if (!video) return
      video.muted = true
      video.playsInline = true
      const playPromise = video.play()
      if (playPromise !== undefined) {
        playPromise.catch(() => {})
      }
    }

    playVideo(videoElementRefDesktop.current)
    playVideo(videoElementRefMobile.current)
  }, [])

  useEffect(() => {
    if (
      shouldReduceMotion ||
      !sectionRef.current ||
      !videoWrapperRef.current
    )
      return

    const ctx = gsap.context(() => {
      // Set initial state for subtle cinematic reveal on desktop
      gsap.set(videoWrapperRef.current, {
        scale: 1.01,
        opacity: 0.9,
      })

      // Smooth scrubbed ScrollTrigger entrance timeline on desktop
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 85%',
          end: 'top 20%',
          scrub: 0.8,
          invalidateOnRefresh: true,
        },
      })

      tl.to(videoWrapperRef.current, {
        scale: 1,
        opacity: 1,
        ease: 'power2.out',
      })

      // Subtle exit transition as user scrolls past on desktop
      gsap.to(videoWrapperRef.current, {
        opacity: 0.92,
        scale: 0.99,
        ease: 'none',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'bottom 85%',
          end: 'bottom top',
          scrub: 0.8,
          invalidateOnRefresh: true,
        },
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [shouldReduceMotion])

  return (
    <>
      {/* DESKTOP PROMO VIDEO (>= 768px) — EXACTLY UNCHANGED */}
      <section
        ref={sectionRef}
        id="promo-video"
        className="hidden md:block relative w-full h-[100svh] min-h-[100svh] bg-black select-none overflow-hidden"
      >
        {/* FULL-STAGE ABSOLUTE VIDEO CONTAINER */}
        <div
          ref={videoWrapperRef}
          className="absolute inset-0 w-full h-full overflow-hidden bg-black"
        >
          <video
            ref={videoElementRefDesktop}
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            aria-label="Zenbyto Promotional Showcase Video"
            className="absolute inset-0 w-full h-full object-cover object-center block pointer-events-none select-none"
          >
            <source src={promoVideo} type="video/mp4" />
            Your browser does not support HTML5 video.
          </video>

          {/* Ambient subtle vignette overlay for premium depth */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-black/20 pointer-events-none" />
        </div>
      </section>

      {/* MOBILE PROMO VIDEO (< 768px) — CLEAN FULL-WIDTH STANDALONE NATURAL ASPECT RATIO SECTION */}
      <section
        id="promo-video-mobile"
        className="block md:hidden relative w-full bg-black select-none overflow-hidden"
      >
        <div className="w-full relative bg-black overflow-hidden leading-none">
          <video
            ref={videoElementRefMobile}
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            aria-label="Zenbyto Promotional Showcase Video"
            className="w-full h-auto block object-contain pointer-events-none select-none"
          >
            <source src={promoVideo} type="video/mp4" />
            Your browser does not support HTML5 video.
          </video>
        </div>
      </section>
    </>
  )
}
