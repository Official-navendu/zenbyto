import React, { useState, useRef } from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight, Lock } from 'lucide-react'

// Import real project responsive WebP visual assets
import nexzenWebp from '../../assets/portfolio/nexzen_extracts.webp'
import nexzenDesktop from '../../assets/portfolio/nexzen_extracts_desktop.webp'
import nexzenTablet from '../../assets/portfolio/nexzen_extracts_tablet.webp'

import azuraWebp from '../../assets/portfolio/azurafly_aviation.webp'
import azuraDesktop from '../../assets/portfolio/azurafly_aviation_desktop.webp'
import azuraTablet from '../../assets/portfolio/azurafly_aviation_tablet.webp'

import navexmWebp from '../../assets/portfolio/navexm_exchange.webp'
import navexmDesktop from '../../assets/portfolio/navexm_exchange_desktop.webp'
import navexmTablet from '../../assets/portfolio/navexm_exchange_tablet.webp'

export default function PortfolioPreview() {
  const shouldReduceMotion = useReducedMotion()
  const [activePortfolioIndex, setActivePortfolioIndex] = useState(0)
  const portfolioScrollRef = useRef(null)

  const projects = [
    {
      title: 'NexZen Extracts',
      slug: 'nexzen-extracts',
      url: 'nexzenextracts.com',
      websiteUrl: 'https://nexzenextracts.com',
      industry: 'E-commerce & Wellness',
      shortDescription: 'Custom React e-commerce engine with real-time inventory and high-converting checkout flows.',
      image: {
        webp: nexzenWebp,
        desktop: nexzenDesktop,
        tablet: nexzenTablet,
      },
      technologies: ['React.js', 'WooCommerce', 'Tailwind'],
      link: '/portfolio/nexzen-extracts',
    },
    {
      title: 'AzuraFly Aviation',
      slug: 'azurafly-aviation',
      url: 'azurafly.com',
      websiteUrl: 'https://azurafly.com',
      industry: 'Private Aviation & Booking',
      shortDescription: 'Headless private jet charter & flight booking web app engineered for sub-second page loads.',
      image: {
        webp: azuraWebp,
        desktop: azuraDesktop,
        tablet: azuraTablet,
      },
      technologies: ['Next.js', 'TypeScript', 'Node.js'],
      link: '/portfolio/azurafly-aviation',
    },
    {
      title: 'NavExM Exchange',
      slug: 'navexm-exchange',
      url: 'navexm.com',
      websiteUrl: 'https://navexm.com',
      industry: 'FinTech & Crypto Exchange',
      shortDescription: 'High-frequency trading platform with live WebSocket market charts and zero-downtime scalability.',
      image: {
        webp: navexmWebp,
        desktop: navexmDesktop,
        tablet: navexmTablet,
      },
      technologies: ['React.js', 'Node.js', 'AWS'],
      link: '/portfolio/navexm-exchange',
    },
  ]

  const featuredProject = projects[0]
  const secondaryProjects = projects.slice(1)

  const handlePortfolioScroll = () => {
    if (!portfolioScrollRef.current) return
    const { scrollLeft, clientWidth } = portfolioScrollRef.current
    const itemWidth = clientWidth * 0.84
    if (itemWidth > 0) {
      const index = Math.round(scrollLeft / itemWidth)
      setActivePortfolioIndex(Math.min(Math.max(index, 0), projects.length - 1))
    }
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.12 },
    },
  }

  const cardVariants = {
    hidden: { opacity: 0, y: 25 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
    },
  }

  return (
    <section id="portfolio" className="py-12 sm:py-16 md:py-20 lg:py-24 bg-white bg-atmosphere-grain relative overflow-hidden select-none">
      
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 relative z-10">
        
        {/* NORMALIZED SECTION HEADER MATCHING HOMEPAGE DESIGN SYSTEM */}
        <div className="text-center max-w-[700px] mx-auto space-y-3 sm:space-y-4 mb-8 sm:mb-12 lg:mb-16">
          <motion.div
            initial={shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="flex items-center justify-center gap-2.5"
          >
            <span className="w-2.5 h-2.5 rounded-full bg-[#FE8233]" />
            <span className="text-xs sm:text-[13px] font-semibold tracking-[0.16em] uppercase text-[#FE8233]">
              PORTFOLIO
            </span>
            <div className="w-12 h-[1px] bg-[#FE8233]/35" />
          </motion.div>

          <motion.h2
            initial={shouldReduceMotion ? { opacity: 1, y: 0, filter: 'blur(0px)' } : { opacity: 0, y: 20, filter: 'blur(4px)' }}
            whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
            className="text-[clamp(22px,5.8vw,28px)] sm:text-[36px] md:text-[42px] lg:text-[46px] font-semibold text-[#33387A] tracking-tight leading-[1.18] sm:leading-tight"
          >
            Featured Case Studies & Work
          </motion.h2>

          <motion.p
            initial={shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.18, ease: [0.22, 1, 0.36, 1] }}
            className="text-xs sm:text-base lg:text-lg text-[#475569] font-normal leading-relaxed sm:leading-[1.55] max-w-[540px] sm:max-w-[600px] mx-auto px-2 sm:px-0"
          >
            Explore our latest engineered web platforms, custom applications, and high-converting growth systems.
          </motion.p>
        </div>
        
        {/* MOBILE-ONLY HORIZONTAL LEFT-RIGHT SWIPE SLIDER (< 768px) */}
        <div className="block md:hidden mb-8">
          <div 
            ref={portfolioScrollRef}
            onScroll={handlePortfolioScroll}
            className="flex overflow-x-auto snap-x snap-mandatory scroll-smooth touch-pan-x gap-4 px-1 pb-3 -mx-4 px-4 select-none"
            style={{
              scrollbarWidth: 'none',
              msOverflowStyle: 'none',
              WebkitOverflowScrolling: 'touch'
            }}
          >
            {projects.map((project) => (
              <div
                key={project.slug}
                className="w-[84vw] max-w-[340px] shrink-0 snap-center rounded-[20px] bg-[#33387A] text-white border border-white/10 shadow-xl overflow-hidden flex flex-col justify-between"
              >
                {/* Header Bar */}
                <div className="p-4 flex items-center justify-between gap-2 border-b border-white/15 bg-[#33387A]">
                  <div className="flex items-center gap-2 min-w-0">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#FE8233] shrink-0" />
                    <h3 className="text-base font-bold text-white tracking-tight truncate">
                      {project.title}
                    </h3>
                  </div>
                  <span className="px-2.5 py-0.5 rounded-full bg-[#FE8233]/20 text-[#FE8233] text-[10px] font-semibold border border-[#FE8233]/30 w-fit shrink-0">
                    {project.industry}
                  </span>
                </div>

                {/* Project Image */}
                <div className="relative w-full aspect-[16/10] overflow-hidden bg-slate-950">
                  <img
                    src={project.image.webp}
                    alt={`${project.title} Web Application`}
                    className="w-full h-full object-cover object-top"
                    loading="lazy"
                  />
                  <div className="absolute top-2.5 left-2.5 right-2.5 max-w-[220px] mx-auto px-2.5 py-0.5 bg-black/60 backdrop-blur-md rounded-full border border-white/20 text-[9px] text-slate-300 font-mono truncate text-center flex items-center justify-center gap-1 z-10 pointer-events-none">
                    <Lock className="w-2.5 h-2.5 text-emerald-400 shrink-0" />
                    <span className="opacity-90">https://www.{project.url}</span>
                  </div>
                </div>

                {/* Info Block */}
                <div className="p-4 bg-[#33387A] border-t border-white/10 space-y-2.5 flex-1 flex flex-col justify-between">
                  <p className="text-xs text-white/85 font-normal leading-relaxed">
                    {project.shortDescription}
                  </p>
                  <div className="pt-1">
                    <Link
                      to={project.link}
                      className="px-5 py-2 rounded-full bg-[#FE8233] text-white text-xs font-bold inline-flex items-center gap-1.5 shadow-sm"
                    >
                      <span>View Project</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Mobile Carousel Indicators */}
          <div className="flex items-center justify-center gap-1.5 pt-3">
            {projects.map((_, idx) => (
              <button
                key={idx}
                onClick={() => {
                  if (portfolioScrollRef.current) {
                    const cardWidth = portfolioScrollRef.current.scrollWidth / projects.length
                    portfolioScrollRef.current.scrollTo({ left: cardWidth * idx, behavior: 'smooth' })
                  }
                }}
                aria-label={`Go to project ${idx + 1}`}
                className={`h-1.5 rounded-full transition-all duration-300 cursor-pointer ${
                  activePortfolioIndex === idx ? 'w-5 bg-[#FE8233]' : 'w-1.5 bg-slate-300'
                }`}
              />
            ))}
          </div>
        </div>

        {/* DESKTOP & TABLET LAYOUT (100% INTENDED & UNTOUCHED FOR >= 768px) */}
        <div className="hidden md:block">
          {/* 2. FEATURED LARGE PROJECT CARD (FULL-WIDTH ON DESKTOP - ZENBYTO NAVY #33387A SHELL) */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="mb-8 sm:mb-12"
          >
            <motion.div
              variants={cardVariants}
              className="group relative rounded-[20px] sm:rounded-[24px] lg:rounded-[28px] bg-[#33387A] text-white border border-white/10 shadow-xl lg:shadow-2xl overflow-hidden text-left"
            >
              {/* Top Header Bar: Project Name (Left) + Service Tags (Right) */}
              <div className="p-4 sm:p-6 lg:p-7 flex flex-col xs:flex-row xs:items-center justify-between gap-2.5 sm:gap-4 border-b border-white/15 bg-[#33387A]">
                <div className="flex items-center gap-2.5 sm:gap-3">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#FE8233] shrink-0" />
                  <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-white tracking-tight group-hover:text-[#FE8233] transition-colors duration-300">
                    {featuredProject.title}
                  </h3>
                </div>

                {/* Service Category Pills */}
                <div className="flex flex-wrap gap-1.5 sm:gap-2">
                  <span className="px-2.5 py-0.5 sm:px-3 sm:py-1 rounded-full bg-[#FE8233]/20 text-[#FE8233] text-[10px] sm:text-xs font-semibold border border-[#FE8233]/30">
                    {featuredProject.industry}
                  </span>
                  {featuredProject.technologies.map((tech, idx) => (
                    <span key={idx} className="px-2.5 py-0.5 sm:px-3 sm:py-1 rounded-full bg-white/10 text-white/90 text-[10px] sm:text-xs font-medium border border-white/15">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Cinematic Large Image Area */}
              <div className="relative w-full aspect-[16/10] sm:aspect-auto sm:h-[360px] md:h-[420px] lg:h-[480px] overflow-hidden bg-slate-950">
                <picture>
                  <source media="(min-width: 1024px)" srcSet={featuredProject.image.desktop} type="image/webp" />
                  <source media="(min-width: 768px)" srcSet={featuredProject.image.tablet} type="image/webp" />
                  <img
                    src={featuredProject.image.webp}
                    alt={`${featuredProject.title} Web Application`}
                    className="w-full h-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-[1.05]"
                    loading="eager"
                  />
                </picture>

                {/* Browser Address Bar Overlay */}
                <div className="absolute top-2.5 sm:top-4 left-3 right-3 sm:left-4 sm:right-4 max-w-[260px] sm:max-w-[320px] mx-auto px-2.5 sm:px-3 py-1 bg-black/60 backdrop-blur-md rounded-full border border-white/20 text-[9px] sm:text-[10px] text-slate-300 font-mono truncate text-center flex items-center justify-center gap-1.5 z-10 pointer-events-none">
                  <Lock className="w-3 h-3 text-emerald-400 shrink-0" />
                  <span className="opacity-90">https://www.{featuredProject.url}</span>
                </div>

                {/* Desktop Hover Overlay (Translucent Backdrop Blur + Project Description + View Project Button) */}
                <div className="hidden lg:flex absolute inset-0 bg-slate-950/80 backdrop-blur-md opacity-0 group-hover:opacity-100 transition-all duration-500 ease-out flex-col justify-center items-center text-center p-10 z-20 space-y-5">
                  <span className="px-3.5 py-1 rounded-full bg-[#FE8233]/20 text-[#FE8233] text-xs font-extrabold tracking-widest uppercase border border-[#FE8233]/30">
                    CASE STUDY OVERVIEW
                  </span>
                  
                  <p className="text-base xl:text-lg text-slate-200 font-normal leading-relaxed max-w-2xl transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 ease-out">
                    {featuredProject.shortDescription}
                  </p>

                  <div className="pt-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 ease-out delay-75">
                    <Link
                      to={featuredProject.link}
                      className="px-8 py-3.5 rounded-full bg-[#FE8233] hover:bg-white hover:text-[#33387A] text-white text-sm font-bold transition-all duration-300 shadow-lg hover:shadow-2xl inline-flex items-center gap-2 cursor-pointer border border-white/20"
                    >
                      <span>View Project</span>
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </div>

              {/* Mobile / Tablet Direct Information Block */}
              <div className="lg:hidden p-4 sm:p-6 bg-[#33387A] border-t border-white/10 space-y-2.5 sm:space-y-3">
                <p className="text-xs sm:text-sm text-white/85 font-normal leading-relaxed">
                  {featuredProject.shortDescription}
                </p>
                
                <div className="pt-0.5">
                  <Link
                    to={featuredProject.link}
                    className="px-5 sm:px-6 py-2 sm:py-2.5 rounded-full bg-[#FE8233] text-white text-xs font-bold inline-flex items-center gap-2 shadow-sm"
                  >
                    <span>View Project</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>

            </motion.div>
          </motion.div>

          {/* 3. SECONDARY PROJECTS GRID (2 EQUAL-WIDTH COLUMNS ON DESKTOP - ZENBYTO NAVY #33387A SHELL) */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 lg:gap-10 mb-8 sm:mb-12 lg:mb-16"
          >
            {secondaryProjects.map((project) => (
              <motion.div
                key={project.title}
                variants={cardVariants}
                className="group relative rounded-[18px] sm:rounded-[22px] lg:rounded-[24px] bg-[#33387A] text-white border border-white/10 shadow-lg lg:shadow-xl overflow-hidden text-left flex flex-col justify-between"
              >
                {/* Top Header Bar: Project Name + Category Pill */}
                <div className="p-4 sm:p-5 lg:p-6 flex flex-col xs:flex-row xs:items-center justify-between gap-2 sm:gap-3 border-b border-white/15 bg-[#33387A]">
                  <div className="flex items-center gap-2 sm:gap-2.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#FE8233] shrink-0" />
                    <h3 className="text-base sm:text-lg lg:text-xl font-bold text-white tracking-tight group-hover:text-[#FE8233] transition-colors duration-300">
                      {project.title}
                    </h3>
                  </div>

                  <span className="px-2.5 py-0.5 rounded-full bg-[#FE8233]/20 text-[#FE8233] text-[10px] sm:text-xs font-semibold border border-[#FE8233]/30 w-fit">
                    {project.industry}
                  </span>
                </div>

                {/* Image Area */}
                <div className="relative w-full aspect-[16/10] sm:aspect-auto sm:h-[280px] lg:h-[320px] overflow-hidden bg-slate-950">
                  <picture>
                    <source media="(min-width: 1024px)" srcSet={project.image.desktop} type="image/webp" />
                    <source media="(min-width: 768px)" srcSet={project.image.tablet} type="image/webp" />
                    <img
                      src={project.image.webp}
                      alt={`${project.title} Web Application`}
                      className="w-full h-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-[1.05]"
                      loading="lazy"
                    />
                  </picture>

                  {/* Address Bar */}
                  <div className="absolute top-2.5 left-2.5 right-2.5 sm:top-3 sm:left-3 sm:right-3 max-w-[200px] sm:max-w-[240px] mx-auto px-2 sm:px-2.5 py-0.5 bg-black/60 backdrop-blur-md rounded-full border border-white/20 text-[9px] sm:text-[9.5px] text-slate-300 font-mono truncate text-center flex items-center justify-center gap-1 z-10 pointer-events-none">
                    <Lock className="w-2.5 h-2.5 text-emerald-400 shrink-0" />
                    <span className="opacity-90">https://www.{project.url}</span>
                  </div>

                  {/* Desktop Hover Overlay */}
                  <div className="hidden lg:flex absolute inset-0 bg-slate-950/80 backdrop-blur-md opacity-0 group-hover:opacity-100 transition-all duration-500 ease-out flex-col justify-center items-center text-center p-8 z-20 space-y-4">
                    <p className="text-sm xl:text-base text-slate-200 font-normal leading-relaxed max-w-sm transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 ease-out">
                      {project.shortDescription}
                    </p>

                    <div className="pt-1 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 ease-out delay-75">
                      <Link
                        to={project.link}
                        className="px-7 py-3 rounded-full bg-[#FE8233] hover:bg-white hover:text-[#33387A] text-white text-xs font-bold transition-all duration-300 shadow-md hover:shadow-xl inline-flex items-center gap-2 cursor-pointer border border-white/20"
                      >
                        <span>View Project</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </Link>
                    </div>
                  </div>
                </div>

                {/* Mobile / Tablet Information Block */}
                <div className="lg:hidden p-4 sm:p-5 bg-[#33387A] border-t border-white/10 space-y-2.5 sm:space-y-3">
                  <p className="text-xs text-white/80 font-normal leading-relaxed">
                    {project.shortDescription}
                  </p>

                  <div className="pt-0.5">
                    <Link
                      to={project.link}
                      className="px-5 py-2 rounded-full bg-[#FE8233] text-white text-xs font-bold inline-flex items-center gap-1.5 shadow-sm"
                    >
                      <span>View Project</span>
                      <ArrowRight className="w-3 h-3" />
                    </Link>
                  </div>
                </div>

              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* 4. VIEW ALL PROJECTS CTA BUTTON */}
        <div className="text-center">
          <Link
            to="/portfolio"
            className="px-6 sm:px-8 py-3 sm:py-4 rounded-full bg-[#33387A] hover:bg-[#FE8233] text-white text-xs sm:text-sm font-bold transition-all duration-300 shadow-md hover:shadow-xl inline-flex items-center justify-center gap-2 cursor-pointer"
          >
            <span>Explore All Work</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

      </div>
    </section>
  )
}
