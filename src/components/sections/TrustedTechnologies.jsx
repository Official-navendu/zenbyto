import React from 'react'
import { useReducedMotion } from 'framer-motion'

// Authentic Official Brand SVG Logos
export function TechSvg({ id, name }) {
  switch (id) {
    case 'google':
      return (
        <svg className="w-5 h-5 sm:w-6 sm:h-6 shrink-0" viewBox="0 0 24 24" aria-label={name}>
          <path fill="#4285F4" d="M23.745 12.27c0-.7-.06-1.4-.19-2.07H12v4.51h6.6c-.29 1.52-1.14 2.82-2.4 3.68v3.05h3.88c2.27-2.09 3.665-5.17 3.665-9.17z" />
          <path fill="#34A853" d="M12 24c3.24 0 5.95-1.08 7.93-2.91l-3.88-3.05c-1.08.72-2.45 1.16-4.05 1.16-3.12 0-5.77-2.11-6.72-4.96H1.29v3.15C3.26 21.3 7.31 24 12 24z" />
          <path fill="#FBBC05" d="M5.28 14.24c-.25-.72-.38-1.49-.38-2.24s.13-1.52.38-2.24V6.61H1.29C.47 8.24 0 10.06 0 12s.47 3.76 1.29 5.39l3.99-3.15z" />
          <path fill="#EA4335" d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C17.95 1.19 15.24 0 12 0 7.31 0 3.26 2.7 1.29 6.61l3.99 3.15c.95-2.85 3.6-4.96 6.72-4.96z" />
        </svg>
      )
    case 'meta':
      return (
        <svg className="w-5 h-5 sm:w-6 sm:h-6 shrink-0" viewBox="0 0 24 24" fill="none" aria-label={name}>
          <path d="M16.5 6C14.2 6 12.8 7.4 12 8.5C11.2 7.4 9.8 6 7.5 6C4.5 6 2 8.5 2 12C2 15.5 4.5 18 7.5 18C9.8 18 11.2 16.6 12 15.5C12.8 16.6 14.2 18 16.5 18C19.5 18 22 15.5 22 12C22 8.5 19.5 6 16.5 6ZM7.5 16C5.6 16 4 14.2 4 12C4 9.8 5.6 8 7.5 8C9.2 8 10.5 9.2 11.2 10.4C10.5 14.2 8.8 16 7.5 16ZM16.5 16C15.2 16 13.5 14.2 12.8 10.4C13.5 9.2 14.8 8 16.5 8C18.4 8 20 9.8 20 12C20 14.2 18.4 16 16.5 16Z" fill="#0668E1" />
        </svg>
      )
    case 'react':
      return (
        <svg className="w-5 h-5 sm:w-6 sm:h-6 shrink-0" viewBox="0 0 24 24" fill="none" aria-label={name}>
          <ellipse cx="12" cy="12" rx="10" ry="4.2" stroke="#61DAFB" strokeWidth="1.6" transform="rotate(0 12 12)" />
          <ellipse cx="12" cy="12" rx="10" ry="4.2" stroke="#61DAFB" strokeWidth="1.6" transform="rotate(60 12 12)" />
          <ellipse cx="12" cy="12" rx="10" ry="4.2" stroke="#61DAFB" strokeWidth="1.6" transform="rotate(120 12 12)" />
          <circle cx="12" cy="12" r="1.8" fill="#61DAFB" />
        </svg>
      )
    case 'nextjs':
      return (
        <svg className="w-5 h-5 sm:w-6 sm:h-6 shrink-0" viewBox="0 0 24 24" fill="none" aria-label={name}>
          <circle cx="12" cy="12" r="10" fill="#000000" />
          <path d="M14.8 16.5L9.2 9V16.5H7.5V7.5H9.2L14.8 15V7.5H16.5V16.5H14.8Z" fill="#FFFFFF" />
        </svg>
      )
    case 'aws':
      return (
        <svg className="w-6 h-6 sm:w-7 sm:h-7 shrink-0" viewBox="0 0 24 24" fill="none" aria-label={name}>
          <path d="M6.5 14.5C8 16.5 12 18 17.5 16" stroke="#FF9900" strokeWidth="2.2" strokeLinecap="round" />
          <path d="M16 14.5L18.5 16L17 18.5" stroke="#FF9900" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
          <text x="2" y="11" fill="#232F3E" fontSize="9.5" fontWeight="bold" fontFamily="sans-serif">aws</text>
        </svg>
      )
    case 'nodejs':
      return (
        <svg className="w-5 h-5 sm:w-6 sm:h-6 shrink-0" viewBox="0 0 24 24" fill="none" aria-label={name}>
          <path d="M12 2L21 7V17L12 22L3 17V7L12 2Z" stroke="#339933" strokeWidth="2" fill="#339933" fillOpacity="0.15" />
          <path d="M12 6L17 9V15L12 18L7 15V9L12 6Z" fill="#339933" />
        </svg>
      )
    case 'python':
      return (
        <svg className="w-5 h-5 sm:w-6 sm:h-6 shrink-0" viewBox="0 0 24 24" fill="none" aria-label={name}>
          <path d="M11.8 2C7.5 2 7.7 3.8 7.7 3.8V5.6H12V6.5H5.8C5.8 6.5 2 6.1 2 10.4C2 14.7 5.3 14.4 5.3 14.4H6.8V12.6C6.8 12.6 6.7 10.4 8.9 10.4H13.2C13.2 10.4 15.2 10.4 15.2 8.4V4C15.2 4 15.7 2 11.8 2ZM9.8 3.5C10.3 3.5 10.7 3.9 10.7 4.4C10.7 4.9 10.3 5.3 9.8 5.3C9.3 5.3 8.9 4.9 8.9 4.4C8.9 3.9 9.3 3.5 9.8 3.5Z" fill="#3776AB" />
          <path d="M12.2 22C16.5 22 16.3 20.2 16.3 20.2V18.4H12V17.5H18.2C18.2 17.5 22 17.9 22 13.6C22 9.3 18.7 9.6 18.7 9.6H17.2V11.4C17.2 11.4 17.3 13.6 15.1 13.6H10.8C10.8 13.6 8.8 13.6 8.8 15.6V20C8.8 20 8.3 22 12.2 22ZM14.2 20.5C13.7 20.5 13.3 20.1 13.3 19.6C13.3 19.1 13.7 18.7 14.2 18.7C14.7 18.7 15.1 19.1 15.1 19.6C15.1 20.1 14.7 20.5 14.2 20.5Z" fill="#FFD43B" />
        </svg>
      )
    case 'shopify':
      return (
        <svg className="w-5 h-5 sm:w-6 sm:h-6 shrink-0" viewBox="0 0 24 24" fill="none" aria-label={name}>
          <path d="M18.5 6.5L16.2 4.5C16.2 4.5 16 4.3 15.7 4.5C15.4 4.7 14.2 5.8 14.2 5.8L12.5 4.2L7 19.5L19.5 16.5L18.5 6.5Z" fill="#96BF48" />
          <path d="M15.5 8L13.8 6.4L12.5 19L19.5 16.5L18.5 6.5Z" fill="#7AB038" />
        </svg>
      )
    case 'tailwind':
      return (
        <svg className="w-5 h-5 sm:w-6 sm:h-6 shrink-0" viewBox="0 0 24 24" fill="none" aria-label={name}>
          <path d="M12 6C9.3 6 7.7 7.3 7 10C8 8.7 9.2 8.2 10.5 8.5C11.5 8.7 12.2 9.4 13 10.2C14.3 11.5 15.7 13 19 13C21.7 13 23.3 11.7 24 9C23 10.3 21.8 10.8 20.5 10.5C19.5 10.3 18.8 9.6 18 8.8C16.7 7.5 15.3 6 12 6ZM5 13C2.3 13 0.7 14.3 0 17C1 15.7 2.2 15.2 3.5 15.5C4.5 15.7 5.2 16.4 6 17.2C7.3 18.5 8.7 20 12 20C14.7 20 16.3 18.7 17 16C16 17.3 14.8 17.8 13.5 17.5C12.5 17.3 11.8 16.6 11 15.8C9.7 14.5 8.3 13 5 13Z" fill="#38BDF8" />
        </svg>
      )
    case 'postgresql':
      return (
        <svg className="w-5 h-5 sm:w-6 sm:h-6 shrink-0" viewBox="0 0 24 24" fill="none" aria-label={name}>
          <path d="M12 3C7 3 3 7 3 12C3 17 7 21 12 21C17 21 21 17 21 12C21 7 17 3 12 3ZM15.5 16.5C14.2 16.8 12.8 16.5 11.8 15.8C10.8 15.1 10.2 14 10.2 12.8C10.2 11.6 10.8 10.5 11.8 9.8C12.8 9.1 14.2 8.8 15.5 9.1" stroke="#336791" strokeWidth="2" strokeLinecap="round" />
        </svg>
      )
    default:
      return null
  }
}

// Approved Technology Dataset
export const TECHNOLOGIES = [
  { id: 'google', name: 'Google Ads & SEO' },
  { id: 'meta', name: 'Meta Ads' },
  { id: 'react', name: 'React' },
  { id: 'nextjs', name: 'Next.js' },
  { id: 'aws', name: 'AWS Cloud' },
  { id: 'nodejs', name: 'Node.js' },
  { id: 'python', name: 'Python AI' },
  { id: 'shopify', name: 'Shopify Plus' },
  { id: 'tailwind', name: 'Tailwind CSS' },
  { id: 'postgresql', name: 'PostgreSQL' },
]

export function TechnologyCapsuleSlider() {
  const shouldReduceMotion = useReducedMotion()

  return (
    <div className="w-full max-w-[560px] relative select-none">
      {/* Seamless Marquee CSS Animation */}
      <style>{`
        @keyframes marquee-tech-infinite {
          0% { transform: translate3d(0, 0, 0); }
          100% { transform: translate3d(-50%, 0, 0); }
        }
        .animate-marquee-tech-stream {
          animation: marquee-tech-infinite 28s linear infinite;
        }
        @media (prefers-reduced-motion: reduce) {
          .animate-marquee-tech-stream {
            animation-play-state: paused !important;
          }
        }
      `}</style>

      <div className="w-full rounded-full border border-[#33387A]/16 bg-white shadow-[inset_0_1px_0_rgba(255,255,255,0.9),0_4px_20px_-4px_rgba(51,56,122,0.06)] px-3 sm:px-4 py-1.5 sm:py-2 h-[56px] sm:h-[62px] flex items-center overflow-hidden relative">
        {/* Mask Fade Viewport for Smooth Auto-Slider Rail (ZERO VISIBLE SCROLLBAR & NO BLANK SPACES) */}
        <div 
          className="w-full overflow-hidden py-1"
          style={{
            scrollbarWidth: 'none',
            msOverflowStyle: 'none',
            maskImage: 'linear-gradient(to right, transparent 0%, black 3%, black 97%, transparent 100%)',
            WebkitMaskImage: 'linear-gradient(to right, transparent 0%, black 3%, black 97%, transparent 100%)'
          }}
        >
          {/* Continuous Stream Track (Translates 0% -> -50%) */}
          <div className={`flex items-center w-max ${shouldReduceMotion ? '' : 'animate-marquee-tech-stream'}`}>
            {/* Sequence Block A */}
            <div className="flex items-center gap-6 sm:gap-9 shrink-0 pr-6 sm:pr-9">
              {TECHNOLOGIES.map((tech) => (
                <div
                  key={`seqA-${tech.id}`}
                  className="flex items-center gap-2 sm:gap-2.5 shrink-0 px-3 py-1.5 rounded-full border border-slate-100 bg-slate-50/70 text-[#33387A] opacity-95 hover:opacity-100 hover:bg-white hover:border-[#33387A]/20 transition-all duration-300"
                >
                  <TechSvg id={tech.id} name={tech.name} />
                  <span className="text-xs sm:text-[13px] font-semibold text-[#33387A] whitespace-nowrap">
                    {tech.name}
                  </span>
                </div>
              ))}
            </div>

            {/* Sequence Block B (Identical Twin for 100% Seamless Infinite Loop) */}
            <div className="flex items-center gap-6 sm:gap-9 shrink-0 pr-6 sm:pr-9" aria-hidden="true">
              {TECHNOLOGIES.map((tech) => (
                <div
                  key={`seqB-${tech.id}`}
                  className="flex items-center gap-2 sm:gap-2.5 shrink-0 px-3 py-1.5 rounded-full border border-slate-100 bg-slate-50/70 text-[#33387A] opacity-95 hover:opacity-100 hover:bg-white hover:border-[#33387A]/20 transition-all duration-300"
                >
                  <TechSvg id={tech.id} name={tech.name} />
                  <span className="text-xs sm:text-[13px] font-semibold text-[#33387A] whitespace-nowrap">
                    {tech.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default function TrustedTechnologies() {
  return null
}
