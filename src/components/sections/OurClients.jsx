import React from 'react'

// Import assets
import logoNexzen from '../../assets/logos/nexzen_logo.png'
import logoLumen from '../../assets/logos/lumen_logo.png'
import logoCloud from '../../assets/logos/cloud_logo.png'
import logoBrightgrid from '../../assets/logos/brightgrid_logo.png'
import logoDigi from '../../assets/logos/digi_logo.png'
import logoSkyseeker from '../../assets/logos/skyseeker_logo.png'

export function ClientLogoCapsuleSlider() {
  const clientBrands = [
    { id: 1, label: 'NexZen Extracts', imageSrc: logoNexzen },
    { id: 2, label: 'Lumen Cloud', imageSrc: logoLumen },
    { id: 3, label: 'Cloud IT', imageSrc: logoCloud },
    { id: 4, label: 'Bright Grid', imageSrc: logoBrightgrid },
    { id: 5, label: 'Digi', imageSrc: logoDigi },
    { id: 6, label: 'Skyseeker IT Solutions', imageSrc: logoSkyseeker },
  ]

  // Duplicate for seamless marquee looping
  const scrollBrands = [...clientBrands, ...clientBrands, ...clientBrands]

  return (
    <div className="w-full relative select-none">
      <div 
        className="relative w-full overflow-hidden rounded-full border border-slate-200/80 bg-slate-50/60 backdrop-blur-sm py-2.5 px-4 shadow-sm"
        style={{
          maskImage: 'linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%)',
          WebkitMaskImage: 'linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%)',
        }}
      >
        <div className="animate-marquee flex gap-8 sm:gap-10 items-center hover:[animation-play-state:paused] cursor-pointer">
          {scrollBrands.map((logo, idx) => (
            <div
              key={idx}
              className="flex items-center justify-center px-2 shrink-0 h-8"
            >
              <img
                src={logo.imageSrc}
                className="h-6 sm:h-7 w-auto max-w-[110px] object-contain filter grayscale contrast-125 opacity-75 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
                alt={logo.label}
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default function OurClients() {
  return null
}
