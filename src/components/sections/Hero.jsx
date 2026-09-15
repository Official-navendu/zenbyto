import React, { useState, useEffect, useRef } from 'react'
import { motion, useScroll, useTransform, useReducedMotion } from 'framer-motion'
import { 
  ArrowUpRight, 
  ArrowRight,
  Star
} from 'lucide-react'
import { Link } from 'react-router-dom'

// Import existing visual showcase assets
import heroCompositionImg from '../../assets/hero1.png'
import webDevImg from '../../assets/hero2.png'
import appDevImg from '../../assets/hero4.png'
import aviationImg from '../../assets/hero3.png'
import lumenImg from '../../assets/hero5.png'

// Approved Rotating Final Line Phrases
const ROTATING_PHRASES = [
  'For Enterprise Brands.',
  'For High-Growth Brands.',
  'For Ambitious Brands.',
  'For Modern Enterprises.',
]

// Real SVG Logos for Platform Social Proof
function TrustLogo({ id }) {
  switch (id) {
    case 'clutch':
      return (
        <span className="font-extrabold tracking-tight text-[#111111] text-lg sm:text-xl font-serif italic">
          Clutch<span className="text-[#FE8233] not-italic">.</span>
        </span>
      )
    case 'google':
      return (
        <div className="flex items-center gap-1.5 text-slate-800">
          <svg className="w-4 h-4 sm:w-5 sm:h-5" viewBox="0 0 24 24">
            <path fill="#4285F4" d="M23.745 12.27c0-.7-.06-1.4-.19-2.07H12v4.51h6.6c-.29 1.52-1.14 2.82-2.4 3.68v3.05h3.88c2.27-2.09 3.665-5.17 3.665-9.17z" />
            <path fill="#34A853" d="M12 24c3.24 0 5.95-1.08 7.93-2.91l-3.88-3.05c-1.08.72-2.45 1.16-4.05 1.16-3.12 0-5.77-2.11-6.72-4.96H1.29v3.15C3.26 21.3 7.31 24 12 24z" />
            <path fill="#FBBC05" d="M5.28 14.24c-.25-.72-.38-1.49-.38-2.24s.13-1.52.38-2.24V6.61H1.29C.47 8.24 0 10.06 0 12s.47 3.76 1.29 5.39l3.99-3.15z" />
            <path fill="#EA4335" d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C17.95 1.19 15.24 0 12 0 7.31 0 3.26 2.7 1.29 6.61l3.99 3.15c.95-2.85 3.6-4.96 6.72-4.96z" />
          </svg>
          <span className="font-bold text-sm sm:text-base text-[#111111] tracking-tight">Google</span>
        </div>
      )
    case 'meta':
      return (
        <div className="flex items-center gap-1.5 text-slate-800">
          <svg className="w-4 h-4 sm:w-5 sm:h-5" viewBox="0 0 24 24" fill="none">
            <path d="M16.5 6C14.2 6 12.8 7.4 12 8.5C11.2 7.4 9.8 6 7.5 6C4.5 6 2 8.5 2 12C2 15.5 4.5 18 7.5 18C9.8 18 11.2 16.6 12 15.5C12.8 16.6 14.2 18 16.5 18C19.5 18 22 15.5 22 12C22 8.5 19.5 6 16.5 6ZM7.5 16C5.6 16 4 14.2 4 12C4 9.8 5.6 8 7.5 8C9.2 8 10.5 9.2 11.2 10.4C10.5 14.2 8.8 16 7.5 16ZM16.5 16C15.2 16 13.5 14.2 12.8 10.4C13.5 9.2 14.8 8 16.5 8C18.4 8 20 9.8 20 12C20 14.2 18.4 16 16.5 16Z" fill="#0668E1" />
          </svg>
          <span className="font-bold text-sm sm:text-base text-[#111111] tracking-tight">Meta</span>
        </div>
      )
    case 'microsoft':
      return (
        <div className="flex items-center gap-1.5 text-slate-800">
          <div className="grid grid-cols-2 gap-0.5 w-3.5 h-3.5">
            <div className="bg-[#F25022] w-full h-full" />
            <div className="bg-[#7FBA00] w-full h-full" />
            <div className="bg-[#00A4EF] w-full h-full" />
            <div className="bg-[#FFB900] w-full h-full" />
          </div>
          <span className="font-bold text-sm sm:text-base text-[#111111] tracking-tight">Microsoft</span>
        </div>
      )
    default:
      return null
  }
}

export default function Hero() {
  const shouldReduceMotion = useReducedMotion()
  const sectionRef = useRef(null)
  const galleryStageRef = useRef(null)

  // Hero Initial Stage States
  const [dotVisible, setDotVisible] = useState(false)
  const [typingStarted, setTypingStarted] = useState(false)
  const [initialComplete, setInitialComplete] = useState(false)

  // Controlled Typewriter State Engine for Line 2
  const [phraseIndex, setPhraseIndex] = useState(0)
  const [charCount, setCharCount] = useState(0)
  const [phase, setPhase] = useState('typing_initial')

  // Initial Entrance Sequence
  useEffect(() => {
    if (shouldReduceMotion) {
      setDotVisible(true)
      setTypingStarted(true)
      setCharCount(ROTATING_PHRASES[0].length)
      setPhase('idle')
      setInitialComplete(true)
      return
    }

    const dotTimer = setTimeout(() => {
      setDotVisible(true)
    }, 50)

    const startTimer = setTimeout(() => {
      setTypingStarted(true)
    }, 350)

    return () => {
      clearTimeout(dotTimer)
      clearTimeout(startTimer)
    }
  }, [shouldReduceMotion])

  // Single Controlled Typewriter State Engine
  useEffect(() => {
    if (shouldReduceMotion || !typingStarted) return

    let timer
    const currentPhrase = ROTATING_PHRASES[phraseIndex]

    if (phase === 'typing_initial' || phase === 'typing') {
      if (charCount < currentPhrase.length) {
        timer = setTimeout(() => {
          setCharCount((prev) => prev + 1)
        }, 35)
      } else {
        setInitialComplete(true)
        timer = setTimeout(() => {
          setPhase('deleting')
        }, 2200)
      }
    } else if (phase === 'deleting') {
      if (charCount > 0) {
        timer = setTimeout(() => {
          setCharCount((prev) => prev - 1)
        }, 25)
      } else {
        timer = setTimeout(() => {
          const nextIndex = (phraseIndex + 1) % ROTATING_PHRASES.length
          setPhraseIndex(nextIndex)
          setPhase('typing')
        }, 300)
      }
    }

    return () => clearTimeout(timer)
  }, [typingStarted, charCount, phase, phraseIndex, shouldReduceMotion])

  const displayedLine2 = ROTATING_PHRASES[phraseIndex].slice(0, charCount)

  // Scroll Progress Engine for Morphing Gallery (0 = Compact Strip, 1 = Asymmetric Bento Wall)
  const { scrollYProgress } = useScroll({
    target: galleryStageRef,
    offset: ['start 85%', 'start 20%']
  })

  // Smooth Motion Interpolations for Desktop Bento Morphing
  const heightCol1 = useTransform(scrollYProgress, [0, 0.85], [140, 600])
  const heightCol2Top = useTransform(scrollYProgress, [0, 0.85], [140, 340])
  const heightCol2Stats = useTransform(scrollYProgress, [0.15, 0.85], [0, 220])
  const opacityCol2Stats = useTransform(scrollYProgress, [0.2, 0.8], [0, 1])

  const heightCol3 = useTransform(scrollYProgress, [0, 0.85], [140, 580])

  const heightCol4Stats = useTransform(scrollYProgress, [0.15, 0.85], [0, 220])
  const opacityCol4Stats = useTransform(scrollYProgress, [0.2, 0.8], [0, 1])
  const heightCol4Bottom = useTransform(scrollYProgress, [0, 0.85], [140, 340])

  const heightCol5 = useTransform(scrollYProgress, [0, 0.85], [140, 600])

  return (
    <section
      ref={sectionRef}
      id="home"
      className="relative overflow-hidden flex flex-col justify-center pt-[105px] sm:pt-[115px] lg:pt-[125px] pb-8 lg:pb-12 w-full select-none isolation-auto"
    >
      {/* CONTINUOUSLY ANIMATED LIGHT GRADIENT (WHITE -> SOFT PEACH -> ZENBYTO ORANGE) */}
      {!shouldReduceMotion ? (
        <motion.div
          animate={{
            backgroundPosition: ['0% 0%', '0% 100%', '0% 0%'],
          }}
          transition={{
            duration: 14,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="absolute inset-0 pointer-events-none z-0"
          style={{
            backgroundImage: 'linear-gradient(180deg, #FFFFFF 0%, #FFF8F4 25%, #FFDCC8 60%, #FE8233 100%)',
            backgroundSize: '100% 180%',
          }}
        />
      ) : (
        <div
          className="absolute inset-0 pointer-events-none z-0"
          style={{
            backgroundImage: 'linear-gradient(180deg, #FFFFFF 0%, #FFF8F4 30%, #FFDCC8 65%, #FE8233 100%)',
          }}
        />
      )}

      {/* SUBTLE AMBIENT RADIAL LIGHT GLOWS (BEHIND AURORA) */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[90%] h-[70%] rounded-full bg-gradient-radial from-white/40 via-orange-100/10 to-transparent blur-[120px] pointer-events-none z-0" />
      <div className="absolute top-[25%] right-[-5%] w-[40%] h-[40%] rounded-full bg-gradient-radial from-[#FE8233]/15 via-[#FE8233]/4 to-transparent blur-[130px] pointer-events-none z-0" />
      <div className="absolute top-[25%] left-[-5%] w-[40%] h-[40%] rounded-full bg-gradient-radial from-[#33387A]/10 via-[#33387A]/3 to-transparent blur-[130px] pointer-events-none z-0" />

      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 md:px-8 relative z-10 w-full text-center my-auto flex flex-col items-center">
        
        {/* 1. Eyebrow Badge */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.05 }}
          className="inline-flex mb-4 sm:mb-5"
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 text-[11px] sm:text-xs font-semibold tracking-[0.14em] uppercase rounded-full bg-white/90 text-[#33387A] border border-white/80 shadow-2xs">
            <span className="w-2 h-2 rounded-full bg-[#FE8233] animate-pulse" />
            DIGITAL GROWTH PARTNER
          </span>
        </motion.div>

        {/* 2. Main Headline (EXACTLY 2 LINES ON DESKTOP: Line 1 "We Engineer Growth Systems", Line 2 "For Ambitious Brands.") */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="hero-heading-wrapper relative w-full max-w-[1150px] mx-auto flex flex-col items-center justify-center text-center min-h-[95px] sm:min-h-[120px] md:min-h-[145px] lg:min-h-[165px]"
        >
          {!shouldReduceMotion && !typingStarted && (
            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: dotVisible ? 1 : 0, opacity: dotVisible ? 1 : 0 }}
              transition={{ duration: 0.4, ease: 'easeOut' }}
              className="w-3 h-3 rounded-full bg-[#FE8233] my-3 shadow-xs"
            />
          )}

          {(typingStarted || shouldReduceMotion) && (
            <h1 className="text-[30px] sm:text-[44px] md:text-[54px] lg:text-[clamp(50px,4.5vw,66px)] font-semibold text-[#111111] tracking-tight leading-[0.98] lg:leading-[1.02] text-center">
              {/* Line 1: We Engineer Growth Systems */}
              <span className="block md:whitespace-nowrap">
                We Engineer <span className="text-[#33387A]">Growth Systems</span>
              </span>
              
              {/* Line 2: Rotating Phrase + Attached Blinking Orange Cursor */}
              <div className="rotating-text-wrapper relative w-full flex items-center justify-center overflow-visible mt-0.5 sm:mt-1">
                <span className="inline-block md:whitespace-nowrap text-[24px] xs:text-[32px] sm:text-[40px] md:text-[48px] lg:text-[clamp(44px,4.1vw,60px)] text-[#111111] font-semibold">
                  {displayedLine2}
                  {!shouldReduceMotion && (
                    <motion.span
                      animate={{ opacity: [1, 0, 1] }}
                      transition={{ duration: 0.7, repeat: Infinity }}
                      className="inline-block w-[3px] sm:w-[4px] h-[0.82em] bg-[#FE8233] ml-1.5 align-baseline pointer-events-none"
                    />
                  )}
                </span>
              </div>
            </h1>
          )}
        </motion.div>

        {/* 3. Editorial Description */}
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{
            opacity: (initialComplete || shouldReduceMotion) ? 1 : 0,
            y: (initialComplete || shouldReduceMotion) ? 0 : 12,
          }}
          transition={{ duration: 0.6, delay: 0.25 }}
          className="text-base sm:text-lg lg:text-[19px] text-[#1E293B] leading-relaxed max-w-[760px] mx-auto text-center font-normal mt-4 sm:mt-5"
        >
          We design custom-engineered, data-driven customer acquisition systems that scale revenue and maximize efficiency for enterprise brands.
        </motion.p>

        {/* 4. Refined CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{
            opacity: (initialComplete || shouldReduceMotion) ? 1 : 0,
            y: (initialComplete || shouldReduceMotion) ? 0 : 12,
          }}
          transition={{ duration: 0.6, delay: 0.35 }}
          className="flex flex-col xs:flex-row items-center justify-center gap-3 sm:gap-5 mt-7 sm:mt-8 w-full max-w-md mx-auto"
        >
          <Link
            to="/free-consultation"
            className="w-full xs:w-auto px-5 sm:px-7 py-3 sm:py-3.5 rounded-full bg-[#33387A] hover:bg-[#FE8233] text-white text-xs sm:text-base font-semibold transition-all duration-300 ease-out shadow-md hover:shadow-xl hover:-translate-y-0.5 inline-flex items-center justify-center gap-2 cursor-pointer whitespace-nowrap"
          >
            <span>Book Free Consultation</span>
            <ArrowUpRight className="w-4 h-4 shrink-0" />
          </Link>

          <Link
            to="/services"
            className="w-full xs:w-auto px-5 sm:px-7 py-3 sm:py-3.5 rounded-full bg-[#FE8233] hover:bg-[#33387A] text-white text-xs sm:text-base font-semibold transition-all duration-300 ease-out shadow-md hover:shadow-xl hover:-translate-y-0.5 inline-flex items-center justify-center gap-2 cursor-pointer whitespace-nowrap border border-white/40"
          >
            <span>Explore Services</span>
            <ArrowRight className="w-4 h-4 shrink-0" />
          </Link>
        </motion.div>

        {/* 5. Integrated Social Proof & Brand SVG Logos */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{
            opacity: (initialComplete || shouldReduceMotion) ? 1 : 0,
            y: (initialComplete || shouldReduceMotion) ? 0 : 12,
          }}
          transition={{ duration: 0.6, delay: 0.45 }}
          className="mt-8 sm:mt-10 flex flex-col items-center justify-center space-y-3 pt-4 border-t border-slate-900/10 w-full max-w-xl mx-auto"
        >
          {/* Rating Badge */}
          <div className="flex items-center gap-2 text-xs sm:text-sm font-semibold text-slate-800">
            <span>Based On 250+ Growth Systems</span>
            <div className="flex items-center text-[#FE8233]">
              <Star className="w-3.5 h-3.5 fill-[#FE8233]" />
              <Star className="w-3.5 h-3.5 fill-[#FE8233]" />
              <Star className="w-3.5 h-3.5 fill-[#FE8233]" />
              <Star className="w-3.5 h-3.5 fill-[#FE8233]" />
              <Star className="w-3.5 h-3.5 fill-[#FE8233]" />
            </div>
          </div>

          {/* SVG Logos Row */}
          <div className="flex flex-wrap items-center justify-center gap-8 sm:gap-10 opacity-90 hover:opacity-100 transition-opacity pt-1">
            <TrustLogo id="clutch" />
            <TrustLogo id="google" />
            <TrustLogo id="meta" />
            <TrustLogo id="microsoft" />
          </div>
        </motion.div>

        {/* 6. SCROLL-DRIVEN MORPHING GALLERY STAGE (COMPACT STRIP -> ASYMMETRIC BENTO WALL) */}
        <div ref={galleryStageRef} className="mt-12 sm:mt-16 w-full max-w-[1400px] mx-auto pt-2">
          
          {/* Desktop & Laptop Scroll-Linked 5-Column Bento Morphing Stage */}
          <div className="hidden lg:flex items-center justify-center gap-2.5 xl:gap-3.5 w-full min-h-[600px] items-stretch">
            
            {/* COLUMN 1: Image 1 — Left Tall Editorial Column */}
            <motion.div
              style={{ height: shouldReduceMotion ? 600 : heightCol1 }}
              className="flex-1 rounded-[14px] overflow-hidden border border-white/60 shadow-lg relative bg-slate-900/10"
            >
              <img
                src={heroCompositionImg}
                alt="Zenbyto Growth Architecture"
                className="w-full h-full object-cover object-center"
                loading="eager"
              />
            </motion.div>

            {/* COLUMN 2: Stack (Top: Project Image 2, Bottom: Orange Stats Card) */}
            <div className="flex-1 flex flex-col gap-2.5 xl:gap-3.5 justify-between">
              <motion.div
                style={{ height: shouldReduceMotion ? 340 : heightCol2Top }}
                className="w-full rounded-[14px] overflow-hidden border border-white/60 shadow-md relative bg-slate-900/10"
              >
                <img
                  src={webDevImg}
                  alt="Custom Web Engineering"
                  className="w-full h-full object-cover object-center"
                  loading="eager"
                />
              </motion.div>

              <motion.div
                style={{
                  height: shouldReduceMotion ? 220 : heightCol2Stats,
                  opacity: shouldReduceMotion ? 1 : opacityCol2Stats
                }}
                className="w-full rounded-[14px] bg-[#FE8233] text-white p-5 flex flex-col justify-center items-center text-center shadow-lg overflow-hidden border border-white/20"
              >
                <span className="text-3xl xl:text-4xl font-extrabold tracking-tight">7.4X</span>
                <span className="text-xs xl:text-sm font-semibold opacity-95 mt-1 leading-snug">
                  Average Revenue Growth
                </span>
              </motion.div>
            </div>

            {/* COLUMN 3: Image 3 — Center Primary Feature Card */}
            <motion.div
              style={{ height: shouldReduceMotion ? 580 : heightCol3 }}
              className="w-[28%] rounded-[14px] overflow-hidden border-2 border-white shadow-2xl relative bg-slate-900/10 z-20 group"
            >
              <img
                src={aviationImg}
                alt="Finer Aviation Platform"
                className="w-full h-full object-cover object-center group-hover:scale-[1.02] transition-transform duration-500"
                loading="eager"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-end p-5 text-left">
                <span className="text-white/75 text-xs font-semibold uppercase tracking-wider">Website Design</span>
                <h4 className="text-white text-lg xl:text-xl font-bold tracking-tight mt-0.5">Finer Aviation</h4>
              </div>
            </motion.div>

            {/* COLUMN 4: Stack (Top: Orange Stats Card, Bottom: Project Image 4) */}
            <div className="flex-1 flex flex-col gap-2.5 xl:gap-3.5 justify-between">
              <motion.div
                style={{
                  height: shouldReduceMotion ? 220 : heightCol4Stats,
                  opacity: shouldReduceMotion ? 1 : opacityCol4Stats
                }}
                className="w-full rounded-[14px] bg-[#FE8233] text-white p-5 flex flex-col justify-center items-center text-center shadow-lg overflow-hidden border border-white/20"
              >
                <span className="text-3xl xl:text-4xl font-extrabold tracking-tight">250+</span>
                <span className="text-xs xl:text-sm font-semibold opacity-95 mt-1 leading-snug">
                  Growth Systems Deployed Across SEO & PPC
                </span>
              </motion.div>

              <motion.div
                style={{ height: shouldReduceMotion ? 340 : heightCol4Bottom }}
                className="w-full rounded-[14px] overflow-hidden border border-white/60 shadow-md relative bg-slate-900/10"
              >
                <img
                  src={appDevImg}
                  alt="Cross-Platform Mobile App"
                  className="w-full h-full object-cover object-center"
                  loading="eager"
                />
              </motion.div>
            </div>

            {/* COLUMN 5: Image 5 — Right Tall Phone/Mobile Column */}
            <motion.div
              style={{ height: shouldReduceMotion ? 600 : heightCol5 }}
              className="flex-1 rounded-[14px] overflow-hidden border border-white/60 shadow-lg relative bg-slate-900/10"
            >
              <img
                src={lumenImg}
                alt="SaaS Cloud App Interface"
                className="w-full h-full object-cover object-center"
                loading="eager"
              />
            </motion.div>

          </div>

          {/* Mobile & Tablet Responsive Layout (< 1024px) */}
          <div className="lg:hidden grid grid-cols-2 sm:grid-cols-3 gap-3.5 w-full">
            <div className="rounded-xl overflow-hidden h-[180px] sm:h-[220px] shadow-md border border-white/60">
              <img src={heroCompositionImg} alt="Growth Systems" className="w-full h-full object-cover" />
            </div>
            <div className="rounded-xl overflow-hidden h-[180px] sm:h-[220px] shadow-md border border-white/60">
              <img src={webDevImg} alt="Web Dev" className="w-full h-full object-cover" />
            </div>
            <div className="col-span-2 sm:col-span-1 rounded-xl overflow-hidden h-[180px] sm:h-[220px] shadow-md border border-white/60">
              <img src={aviationImg} alt="Aviation Platform" className="w-full h-full object-cover" />
            </div>
          </div>

        </div>

      </div>
    </section>
  )
}
