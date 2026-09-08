import React from 'react'

export default function InternalHero({
  badge,
  heading,
  description,
  children,
  image,
  imageAlt = '',
  center = false,
}) {
  return (
    <section className="relative pt-[110px] md:pt-[125px] lg:pt-[140px] pb-10 md:pb-14 bg-transparent overflow-visible">
      {/* Subtle Background Radial Glow (3-5% Opacity, 100-140px Blur) */}
      <div className="absolute top-[10%] left-[-5%] w-[40%] h-[40%] rounded-full bg-[#FE8233]/[0.04] blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[10%] right-[-5%] w-[40%] h-[40%] rounded-full bg-[#33387A]/[0.04] blur-[120px] pointer-events-none" />

      <div className="max-w-[1280px] mx-auto px-6 md:px-12 relative z-10">
        {/* Transparent Hero Box with 1px rgba(254,130,51,0.18) border, 32px radius, and margin-top offset so border line never touches header */}
        <div className="mt-6 sm:mt-8 lg:mt-10 p-6 sm:p-8 md:p-12 rounded-[32px] border border-[#FE8233]/20 bg-transparent relative overflow-visible shadow-[0_4px_20px_rgba(0,0,0,0.02)]">
          <div className={`grid grid-cols-1 ${image && !center ? 'lg:grid-cols-12 gap-8 lg:gap-12 items-center' : 'max-w-4xl mx-auto text-center'}`}>
            
            {/* Left Content */}
            <div className={`${image && !center ? 'lg:col-span-7 text-center md:text-center lg:text-left' : 'w-full text-center'}`}>
              
              {/* Badge */}
              {badge && (
                <div className={`inline-flex mb-5 ${image && !center ? 'justify-center lg:justify-start' : 'justify-center'}`}>
                  <span className="glass-badge-orange inline-flex items-center gap-1.5 px-3.5 py-1 text-[11px] sm:text-xs font-extrabold tracking-widest uppercase bg-[#FE8233]/10 text-[#FE8233] border border-[#FE8233]/20 rounded-full">
                    {badge}
                  </span>
                </div>
              )}

              {/* Heading */}
              <h1 className="text-[32px] sm:text-[36px] md:text-[44px] lg:text-[54px] font-black text-brand-dark tracking-tight leading-[1.15] mb-6">
                {heading}
              </h1>

              {/* Description */}
              {description && (
                <p className={`text-[16px] md:text-[18px] text-brand-gray leading-[1.6] font-normal ${image && !center ? 'max-w-2xl mx-auto lg:mx-0' : 'max-w-3xl mx-auto'}`}>
                  {description}
                </p>
              )}

              {/* Buttons */}
              {children && (
                <div className={`pt-7 flex flex-wrap gap-4 ${image && !center ? 'justify-center lg:justify-start' : 'justify-center'}`}>
                  {children}
                </div>
              )}
            </div>

            {/* Right Image (NO BLACK CONTAINER / TRANSPARENT BG) */}
            {image && (
              <div className={`${center ? 'w-full max-w-[320px] md:max-w-[420px] lg:max-w-[520px] mx-auto mt-8' : 'lg:col-span-5'} relative flex justify-center items-center mt-6 lg:mt-0`}>
                <div className="w-full max-w-[320px] md:max-w-[420px] lg:max-w-[520px] bg-transparent flex items-center justify-center">
                  <img
                    src={image}
                    alt={imageAlt || heading}
                    className="w-full h-auto object-contain rounded-2xl drop-shadow-md"
                    loading="eager"
                  />
                </div>
              </div>
            )}

          </div>
        </div>
      </div>
    </section>
  )
}
