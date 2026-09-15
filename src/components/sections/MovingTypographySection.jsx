import React from 'react'
import { useReducedMotion } from 'framer-motion'
import marqueeCenterWoman from '../../assets/markquee.png'

export default function MovingTypographySection() {
  const shouldReduceMotion = useReducedMotion()

  // Marquee phrase strings
  const row1Phrase = "Content Marketing Search Engine"
  const row2Phrase = "Optimization Social Media"

  // Duplicated arrays for seamless 100% infinite marquee loop
  const row1Items = Array(6).fill(row1Phrase)
  const row2Items = Array(6).fill(row2Phrase)

  return (
    <section className="relative w-full overflow-hidden bg-[#33387A] bg-atmosphere-grain h-[clamp(210px,30vw,520px)] flex items-center justify-center select-none">
      
      {/* 1. SEAMLESS INFINITE MARQUEE & STABLE ANCHORED COMPOSITION */}
      <style>{`
        @keyframes marquee-right {
          0% { transform: translate3d(-50%, 0, 0); }
          100% { transform: translate3d(0, 0, 0); }
        }
        @keyframes marquee-left {
          0% { transform: translate3d(0, 0, 0); }
          100% { transform: translate3d(-50%, 0, 0); }
        }
        @keyframes ambient-glow-pulse {
          0%, 100% { opacity: 0.6; transform: scale(1); }
          50% { opacity: 0.85; transform: scale(1.08); }
        }
        .animate-marquee-right {
          animation: marquee-right 52s linear infinite;
        }
        .animate-marquee-left {
          animation: marquee-left 52s linear infinite;
        }
        .animate-glow-pulse {
          animation: ambient-glow-pulse 12s ease-in-out infinite;
        }
        @media (prefers-reduced-motion: reduce) {
          .animate-marquee-right,
          .animate-marquee-left,
          .animate-glow-pulse {
            animation-play-state: paused !important;
          }
        }
      `}</style>

      {/* 2. BACKGROUND AMBIENT GLOW ORBS & NOISE LAYER */}
      {/* Top-Right Soft Orange Glow */}
      <div className="absolute -top-[10%] -right-[5%] w-[clamp(220px,30vw,450px)] h-[clamp(220px,30vw,450px)] rounded-full bg-gradient-radial from-[#FE8233]/25 via-[#FE8233]/10 to-transparent blur-[clamp(60px,8vw,130px)] pointer-events-none z-0 animate-glow-pulse" />
      
      {/* Bottom-Left Subtle Blue Glow */}
      <div className="absolute -bottom-[10%] -left-[5%] w-[clamp(250px,35vw,500px)] h-[clamp(250px,35vw,500px)] rounded-full bg-gradient-radial from-[#4A50A3]/30 via-[#33387A]/20 to-transparent blur-[clamp(70px,9vw,140px)] pointer-events-none z-0" />
      
      {/* Tiny Blurred Floating Dots */}
      <div className="absolute top-[25%] left-[12%] w-1.5 sm:w-2 h-1.5 sm:h-2 rounded-full bg-[#FE8233]/40 blur-[1px] pointer-events-none z-0 animate-pulse" />
      <div className="absolute bottom-[30%] right-[15%] w-2 sm:w-3 h-2 sm:h-3 rounded-full bg-white/20 blur-[1.5px] pointer-events-none z-0 animate-pulse" />
      <div className="absolute top-[65%] left-[22%] w-1 sm:w-1.5 h-1 sm:h-1.5 rounded-full bg-[#FE8233]/30 blur-[1px] pointer-events-none z-0" />

      {/* 3. LAYER 1 (z-10): UPPER MARQUEE ROW — BEHIND CENTER PERSON (z-10 < z-20) */}
      <div className="absolute top-[16%] sm:top-[18%] lg:top-[20%] left-0 w-full z-10 overflow-hidden pointer-events-none select-none whitespace-nowrap">
        <div className={`flex items-center gap-[clamp(16px,2.5vw,48px)] w-max ${shouldReduceMotion ? '' : 'animate-marquee-right'}`}>
          {[...row1Items, ...row1Items].map((text, idx) => (
            <span 
              key={idx} 
              className="text-[clamp(28px,7.5vw,170px)] font-bold uppercase tracking-[-0.04em] text-white/14 leading-none whitespace-nowrap"
            >
              {text}
            </span>
          ))}
        </div>
      </div>

      {/* 4. LAYER 2 (z-20): STABLE ANCHORED CENTER FOCAL PORTRAIT WITH GLOW (z-20) */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 z-20 pointer-events-none select-none flex justify-center items-end h-[96%] sm:h-[98%] max-h-[600px]">
        {/* Soft Orange Glow Behind Focal Person */}
        <div className="absolute bottom-[10%] left-1/2 -translate-x-1/2 w-[85%] h-[60%] rounded-full bg-[#FE8233]/25 blur-xl sm:blur-2xl lg:blur-3xl pointer-events-none z-0" />

        {/* Stable Anchored Center Woman Cutout Image (~10% larger, zero jitter/crop) */}
        <div className="relative z-10 w-[clamp(195px,32vw,510px)] h-full flex items-end justify-center">
          <img
            src={marqueeCenterWoman}
            alt="Zenbyto Digital Growth & Strategy"
            className="w-full h-auto object-contain object-bottom drop-shadow-[0_15px_25px_rgba(0,0,0,0.35)] lg:drop-shadow-[0_20px_35px_rgba(0,0,0,0.35)] block"
            loading="eager"
          />
        </div>
      </div>

      {/* 5. LAYER 3 (z-10 on mobile, z-30 on desktop): LOWER MARQUEE ROW — BEHIND PERSON ON MOBILE, FRONT ON DESKTOP */}
      <div className="absolute bottom-[14%] sm:bottom-[16%] lg:bottom-[18%] left-0 w-full z-10 md:z-30 overflow-hidden pointer-events-none select-none whitespace-nowrap">
        <div className={`flex items-center gap-[clamp(16px,2.5vw,48px)] w-max ${shouldReduceMotion ? '' : 'animate-marquee-left'}`}>
          {[...row2Items, ...row2Items].map((text, idx) => (
            <span 
              key={idx} 
              className="text-[clamp(28px,7.5vw,170px)] font-bold uppercase tracking-[-0.04em] text-white/14 leading-none whitespace-nowrap"
            >
              {text}
            </span>
          ))}
        </div>
      </div>

    </section>
  )
}
