import React, { useState, useEffect, useRef } from 'react'
import { Link, useNavigate, useLocation } from 'react-router-dom'
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion'
import {
  Menu,
  X,
  ArrowUpRight,
  ArrowRight,
  ChevronDown,
  Plus,
  Minus,
  Search,
  Target,
  Code,
  Smartphone,
  MailOpen,
  Palette,
  Cpu,
  Users,
  Code2,
  Building2,
  Plane,
  Clapperboard,
  Landmark,
  HeartPulse,
  ShoppingCart,
  Scale,
  GraduationCap,
  Leaf
} from 'lucide-react'

import logoDark from '../../assets/logos/logo-dark.png'
import { industriesList } from '../../data/industriesData'

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState(null) // 'services' | 'industries' | null
  const [mobileDropdown, setMobileDropdown] = useState(null) // 'services' | 'industries' | null
  
  const dropdownTimerRef = useRef(null)
  const shouldReduceMotion = useReducedMotion()
  const navigate = useNavigate()
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setIsMobileMenuOpen(false)
    setActiveDropdown(null)
    setMobileDropdown(null)
  }, [location.pathname])

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1280) {
        setIsMobileMenuOpen(false)
      }
    }
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  // Close dropdown on Escape key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        setActiveDropdown(null)
      }
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [])

  const handleMouseEnter = (key) => {
    if (dropdownTimerRef.current) clearTimeout(dropdownTimerRef.current)
    setActiveDropdown(key)
  }

  const handleMouseLeave = () => {
    dropdownTimerRef.current = setTimeout(() => {
      setActiveDropdown(null)
    }, 150)
  }

  // Structured Services Data for Mega-Menu
  const servicesCategorized = {
    digitalGrowth: [
      {
        name: 'SEO & Link Building',
        path: '/services/seo-link-building',
        desc: 'Build search visibility that compounds over time.',
        icon: <Search className="w-4 h-4" />
      },
      {
        name: 'Google & Meta Ads',
        path: '/services/google-meta-ads',
        desc: 'High-ROI paid media & CAPI server attribution.',
        icon: <Target className="w-4 h-4" />
      },
      {
        name: 'Content & Email Marketing',
        path: '/services/content-email-marketing',
        desc: 'Lifecycle email automation & content funnels.',
        icon: <MailOpen className="w-4 h-4" />
      },
      {
        name: 'Social Media Marketing',
        path: '/services/social-media-marketing',
        desc: 'Engaging social strategy & digital PR.',
        icon: <Users className="w-4 h-4" />
      }
    ],
    technology: [
      {
        name: 'Website Development',
        path: '/services/website-development',
        desc: 'Sub-second React & Next.js web platforms.',
        icon: <Code className="w-4 h-4" />
      },
      {
        name: 'App Development',
        path: '/services/app-development',
        desc: 'Cross-platform mobile apps for iOS & Android.',
        icon: <Smartphone className="w-4 h-4" />
      },
      {
        name: 'AI Automation',
        path: '/services/ai-automation',
        desc: 'Custom AI bots, CRM sync & API integrations.',
        icon: <Cpu className="w-4 h-4" />
      }
    ],
    brand: [
      {
        name: 'Brand Management',
        path: '/services/brand-management',
        desc: 'Cohesive visual manuals & market positioning.',
        icon: <Palette className="w-4 h-4" />
      }
    ]
  }

  // Flat list of services for mobile dropdown
  const servicesFlatList = [
    { name: 'SEO & Link Building', path: '/services/seo-link-building' },
    { name: 'Google & Meta Ads', path: '/services/google-meta-ads' },
    { name: 'Website Development', path: '/services/website-development' },
    { name: 'App Development', path: '/services/app-development' },
    { name: 'Content & Email Marketing', path: '/services/content-email-marketing' },
    { name: 'Brand Management', path: '/services/brand-management' },
    { name: 'AI Automation', path: '/services/ai-automation' },
    { name: 'Social Media Marketing', path: '/services/social-media-marketing' },
  ]

  // Icon Map Helper for Industries
  const getIndustryIcon = (slug) => {
    switch (slug) {
      case 'software': return <Code2 className="w-4 h-4" />
      case 'real-estate': return <Building2 className="w-4 h-4" />
      case 'travel': return <Plane className="w-4 h-4" />
      case 'entertainment': return <Clapperboard className="w-4 h-4" />
      case 'fintech': return <Landmark className="w-4 h-4" />
      case 'healthcare': return <HeartPulse className="w-4 h-4" />
      case 'ecommerce': return <ShoppingCart className="w-4 h-4" />
      case 'legal': return <Scale className="w-4 h-4" />
      case 'education': return <GraduationCap className="w-4 h-4" />
      case 'cannabis': return <Leaf className="w-4 h-4" />
      default: return <Code2 className="w-4 h-4" />
    }
  }

  const industriesCol1 = industriesList.slice(0, 5)
  const industriesCol2 = industriesList.slice(5, 10)

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services', hasDropdown: true, dropdownType: 'services' },
    { name: 'Industries', path: '/industries', hasDropdown: true, dropdownType: 'industries' },
    { name: 'Portfolio', path: '/portfolio' },
    { name: 'Blogs', path: '/blogs' },
    { name: 'Contact', path: '/contact' },
  ]

  const handleLinkClick = (e, path) => {
    if (dropdownTimerRef.current) clearTimeout(dropdownTimerRef.current)
    setIsMobileMenuOpen(false)
    setActiveDropdown(null)
    setMobileDropdown(null)

    if (path.includes('#')) {
      const [route, hash] = path.split('#')
      if (location.pathname === route) {
        e.preventDefault()
        const el = document.getElementById(hash)
        if (el) {
          el.scrollIntoView({ behavior: 'smooth' })
        }
      } else {
        navigate(path)
      }
    } else {
      navigate(path)
    }
  }

  const isHomePage = location.pathname === '/'
  const isServicesActive = location.pathname.startsWith('/services')
  const isIndustriesActive = location.pathname.startsWith('/industries')

  return (
    <header
      className={`fixed z-[1000] left-1/2 -translate-x-1/2 transition-all duration-500 ease-in-out ${
        isScrolled
          ? 'top-3.5 w-[94%] max-w-[1400px] rounded-full border border-slate-200/90 bg-white/95 backdrop-blur-md py-2 px-4 shadow-[0_8px_30px_rgba(51,56,122,0.08)]'
          : isHomePage
          ? 'top-0 w-full bg-transparent border-b border-transparent py-3.5 shadow-none backdrop-blur-none'
          : 'top-0 w-full bg-white/90 backdrop-blur-md border-b border-slate-200/60 py-3.5'
      }`}
    >
      <div
        className={`mx-auto flex items-center justify-between transition-all duration-500 relative z-[1000] ${
          isScrolled ? 'w-full px-2 sm:px-4' : 'max-w-[1400px] px-5 md:px-12 w-full'
        }`}
      >
        {/* LEFT: Zenbyto Logo */}
        <Link to="/" onClick={() => setIsMobileMenuOpen(false)} className="flex items-center group shrink-0">
          <img
            src={logoDark}
            alt="Zenbyto Logo"
            className={`object-contain transition-all duration-300 group-hover:scale-[1.01] ${
              isScrolled
                ? 'h-8 md:h-10 w-auto'
                : 'w-[125px] sm:w-[140px] md:w-[155px] lg:w-[165px] h-auto'
            }`}
          />
        </Link>

        {/* CENTER: Floating Pill Navigation (Desktop xl:flex) */}
        <nav className="hidden xl:flex items-center space-x-1 bg-slate-100/70 hover:bg-slate-100 border border-slate-200/80 rounded-full px-5 py-1.5 transition-colors duration-300 relative shadow-2xs">
          {navLinks.map((link) => {
            const isDropdown = link.hasDropdown
            const dropdownKey = link.dropdownType
            const isOpen = activeDropdown === dropdownKey

            if (isDropdown) {
              const isActive = dropdownKey === 'services' ? isServicesActive : isIndustriesActive

              return (
                <div
                  key={link.name}
                  className="relative"
                  onMouseEnter={() => handleMouseEnter(dropdownKey)}
                  onMouseLeave={handleMouseLeave}
                >
                  <button
                    onClick={(e) => handleLinkClick(e, link.path)}
                    aria-expanded={isOpen}
                    aria-haspopup="true"
                    className={`text-[13px] font-medium px-3.5 py-1.5 rounded-full transition-all duration-200 flex items-center gap-1 cursor-pointer ${
                      isOpen || isActive
                        ? 'text-[#FE8233] bg-white/90 shadow-2xs font-semibold'
                        : 'text-brand-dark/90 hover:text-[#FE8233]'
                    }`}
                  >
                    {link.name}
                    <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-300 ${isOpen ? 'rotate-180 text-[#FE8233]' : 'text-slate-400'}`} />
                  </button>

                  {/* DESKTOP MEGA-MENU PANELS */}
                  <AnimatePresence>
                    {isOpen && dropdownKey === 'services' && (
                      <motion.div
                        initial={shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: -6, scale: 0.98 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: -6, scale: 0.98 }}
                        transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
                        className="absolute left-1/2 -translate-x-1/2 top-full pt-3 z-50 w-[820px] max-w-[calc(100vw-32px)] before:absolute before:-top-4 before:left-0 before:right-0 before:h-4"
                      >
                        <div className="bg-white border border-slate-200/90 rounded-2xl shadow-[0_20px_50px_rgba(51,56,122,0.12)] overflow-hidden text-left">
                          
                          {/* Top Editorial Header */}
                          <div className="px-6 pt-4 pb-3 border-b border-slate-100 flex items-center justify-between bg-slate-50/50">
                            <div className="flex items-center gap-2">
                              <span className="w-2 h-2 rounded-full bg-[#FE8233]" />
                              <span className="text-[11px] font-bold tracking-[0.16em] uppercase text-[#FE8233]">
                                SERVICES
                              </span>
                              <span className="text-slate-300 font-light">|</span>
                              <span className="text-xs text-slate-500 font-medium">
                                Digital systems designed to move your business forward.
                              </span>
                            </div>
                          </div>

                          {/* 3-Column Categorized Grid */}
                          <div className="p-5 grid grid-cols-3 gap-5 bg-white">
                            
                            {/* Col 1: Digital Growth */}
                            <div className="space-y-1.5">
                              <div className="px-2 py-1 text-[11px] font-bold tracking-wider text-[#33387A]/70 uppercase border-b border-slate-100/80 mb-2">
                                Digital Growth
                              </div>
                              {servicesCategorized.digitalGrowth.map((svc) => (
                                <Link
                                  key={svc.name}
                                  to={svc.path}
                                  onClick={(e) => handleLinkClick(e, svc.path)}
                                  className="group/item flex items-start gap-3 p-2.5 rounded-xl hover:bg-slate-50 transition-all duration-200 cursor-pointer"
                                >
                                  <div className="w-8 h-8 rounded-lg bg-slate-100/90 text-[#33387A] group-hover/item:bg-[#FE8233]/12 group-hover/item:text-[#FE8233] flex items-center justify-center shrink-0 transition-colors duration-200 mt-0.5">
                                    {svc.icon}
                                  </div>
                                  <div className="flex-1 min-w-0">
                                    <div className="flex items-center justify-between gap-1">
                                      <span className="text-[12.5px] font-bold text-[#33387A] group-hover/item:text-[#FE8233] transition-colors duration-200 truncate">
                                        {svc.name}
                                      </span>
                                      <ArrowRight className="w-3 h-3 text-slate-300 opacity-0 -translate-x-1.5 group-hover/item:opacity-100 group-hover/item:translate-x-0 group-hover/item:text-[#FE8233] transition-all duration-200 shrink-0" />
                                    </div>
                                    <p className="text-[11px] text-slate-500 font-normal leading-snug line-clamp-1 mt-0.5">
                                      {svc.desc}
                                    </p>
                                  </div>
                                </Link>
                              ))}
                            </div>

                            {/* Col 2: Technology & AI */}
                            <div className="space-y-1.5">
                              <div className="px-2 py-1 text-[11px] font-bold tracking-wider text-[#33387A]/70 uppercase border-b border-slate-100/80 mb-2">
                                Technology & AI
                              </div>
                              {servicesCategorized.technology.map((svc) => (
                                <Link
                                  key={svc.name}
                                  to={svc.path}
                                  onClick={(e) => handleLinkClick(e, svc.path)}
                                  className="group/item flex items-start gap-3 p-2.5 rounded-xl hover:bg-slate-50 transition-all duration-200 cursor-pointer"
                                >
                                  <div className="w-8 h-8 rounded-lg bg-slate-100/90 text-[#33387A] group-hover/item:bg-[#FE8233]/12 group-hover/item:text-[#FE8233] flex items-center justify-center shrink-0 transition-colors duration-200 mt-0.5">
                                    {svc.icon}
                                  </div>
                                  <div className="flex-1 min-w-0">
                                    <div className="flex items-center justify-between gap-1">
                                      <span className="text-[12.5px] font-bold text-[#33387A] group-hover/item:text-[#FE8233] transition-colors duration-200 truncate">
                                        {svc.name}
                                      </span>
                                      <ArrowRight className="w-3 h-3 text-slate-300 opacity-0 -translate-x-1.5 group-hover/item:opacity-100 group-hover/item:translate-x-0 group-hover/item:text-[#FE8233] transition-all duration-200 shrink-0" />
                                    </div>
                                    <p className="text-[11px] text-slate-500 font-normal leading-snug line-clamp-1 mt-0.5">
                                      {svc.desc}
                                    </p>
                                  </div>
                                </Link>
                              ))}
                            </div>

                            {/* Col 3: Brand & Strategy */}
                            <div className="space-y-1.5">
                              <div className="px-2 py-1 text-[11px] font-bold tracking-wider text-[#33387A]/70 uppercase border-b border-slate-100/80 mb-2">
                                Brand & Strategy
                              </div>
                              {servicesCategorized.brand.map((svc) => (
                                <Link
                                  key={svc.name}
                                  to={svc.path}
                                  onClick={(e) => handleLinkClick(e, svc.path)}
                                  className="group/item flex items-start gap-3 p-2.5 rounded-xl hover:bg-slate-50 transition-all duration-200 cursor-pointer"
                                >
                                  <div className="w-8 h-8 rounded-lg bg-slate-100/90 text-[#33387A] group-hover/item:bg-[#FE8233]/12 group-hover/item:text-[#FE8233] flex items-center justify-center shrink-0 transition-colors duration-200 mt-0.5">
                                    {svc.icon}
                                  </div>
                                  <div className="flex-1 min-w-0">
                                    <div className="flex items-center justify-between gap-1">
                                      <span className="text-[12.5px] font-bold text-[#33387A] group-hover/item:text-[#FE8233] transition-colors duration-200 truncate">
                                        {svc.name}
                                      </span>
                                      <ArrowRight className="w-3 h-3 text-slate-300 opacity-0 -translate-x-1.5 group-hover/item:opacity-100 group-hover/item:translate-x-0 group-hover/item:text-[#FE8233] transition-all duration-200 shrink-0" />
                                    </div>
                                    <p className="text-[11px] text-slate-500 font-normal leading-snug line-clamp-1 mt-0.5">
                                      {svc.desc}
                                    </p>
                                  </div>
                                </Link>
                              ))}

                              {/* Small Callout Box inside Col 3 */}
                              <div className="mt-3 p-3.5 rounded-xl bg-slate-50 border border-slate-100 text-left space-y-1">
                                <span className="text-[10px] font-bold uppercase tracking-wider text-[#FE8233] block">
                                  Zenbyto Advantage
                                </span>
                                <p className="text-[11px] text-slate-600 font-normal leading-tight">
                                  Zero-bloat React frontends built for sub-second loads and maximum conversion.
                                </p>
                              </div>
                            </div>

                          </div>

                          {/* Bottom Bar */}
                          <div className="px-6 py-3.5 bg-slate-50/90 border-t border-slate-100 flex items-center justify-between">
                            <span className="text-xs text-slate-500 font-medium">
                              Need a custom digital growth blueprint for your business?
                            </span>
                            <Link
                              to="/services"
                              onClick={(e) => handleLinkClick(e, '/services')}
                              className="inline-flex items-center gap-1.5 text-xs font-bold text-[#33387A] hover:text-[#FE8233] transition-colors group/all cursor-pointer"
                            >
                              <span>View All Services</span>
                              <ArrowRight className="w-3.5 h-3.5 text-[#FE8233] transition-transform duration-200 group-hover/all:translate-x-1" />
                            </Link>
                          </div>

                        </div>
                      </motion.div>
                    )}

                    {isOpen && dropdownKey === 'industries' && (
                      <motion.div
                        initial={shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: -6, scale: 0.98 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: -6, scale: 0.98 }}
                        transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
                        className="absolute left-1/2 -translate-x-1/2 top-full pt-3 z-50 w-[740px] max-w-[calc(100vw-32px)] before:absolute before:-top-4 before:left-0 before:right-0 before:h-4"
                      >
                        <div className="bg-white border border-slate-200/90 rounded-2xl shadow-[0_20px_50px_rgba(51,56,122,0.12)] overflow-hidden text-left">
                          
                          {/* Top Editorial Header */}
                          <div className="px-6 pt-4 pb-3 border-b border-slate-100 flex items-center justify-between bg-slate-50/50">
                            <div className="flex items-center gap-2">
                              <span className="w-2 h-2 rounded-full bg-[#FE8233]" />
                              <span className="text-[11px] font-bold tracking-[0.16em] uppercase text-[#FE8233]">
                                INDUSTRIES
                              </span>
                              <span className="text-slate-300 font-light">|</span>
                              <span className="text-xs text-slate-500 font-medium">
                                Tailored digital growth systems for ambitious businesses.
                              </span>
                            </div>
                          </div>

                          {/* 2-Column Industries Grid */}
                          <div className="p-5 grid grid-cols-2 gap-x-5 gap-y-1.5 bg-white">
                            {/* Column 1 (1 to 5) */}
                            <div className="space-y-1">
                              {industriesCol1.map((ind) => (
                                <Link
                                  key={ind.slug}
                                  to={ind.href}
                                  onClick={(e) => handleLinkClick(e, ind.href)}
                                  className="group/item flex items-center gap-3 p-2.5 rounded-xl hover:bg-slate-50 transition-all duration-200 cursor-pointer"
                                >
                                  <div className="w-8 h-8 rounded-lg bg-slate-100/90 text-[#33387A] group-hover/item:bg-[#FE8233]/12 group-hover/item:text-[#FE8233] flex items-center justify-center shrink-0 transition-colors duration-200">
                                    {getIndustryIcon(ind.slug)}
                                  </div>
                                  <div className="flex-1 min-w-0">
                                    <div className="flex items-center justify-between gap-1">
                                      <span className="text-[12.5px] font-bold text-[#33387A] group-hover/item:text-[#FE8233] transition-colors duration-200 truncate">
                                        {ind.name}
                                      </span>
                                      <ArrowRight className="w-3 h-3 text-slate-300 opacity-0 -translate-x-1.5 group-hover/item:opacity-100 group-hover/item:translate-x-0 group-hover/item:text-[#FE8233] transition-all duration-200 shrink-0" />
                                    </div>
                                    <p className="text-[11px] text-slate-500 font-normal leading-snug line-clamp-1 mt-0.5">
                                      {ind.desc}
                                    </p>
                                  </div>
                                </Link>
                              ))}
                            </div>

                            {/* Column 2 (6 to 10) */}
                            <div className="space-y-1">
                              {industriesCol2.map((ind) => (
                                <Link
                                  key={ind.slug}
                                  to={ind.href}
                                  onClick={(e) => handleLinkClick(e, ind.href)}
                                  className="group/item flex items-center gap-3 p-2.5 rounded-xl hover:bg-slate-50 transition-all duration-200 cursor-pointer"
                                >
                                  <div className="w-8 h-8 rounded-lg bg-slate-100/90 text-[#33387A] group-hover/item:bg-[#FE8233]/12 group-hover/item:text-[#FE8233] flex items-center justify-center shrink-0 transition-colors duration-200">
                                    {getIndustryIcon(ind.slug)}
                                  </div>
                                  <div className="flex-1 min-w-0">
                                    <div className="flex items-center justify-between gap-1">
                                      <span className="text-[12.5px] font-bold text-[#33387A] group-hover/item:text-[#FE8233] transition-colors duration-200 truncate">
                                        {ind.name}
                                      </span>
                                      <ArrowRight className="w-3 h-3 text-slate-300 opacity-0 -translate-x-1.5 group-hover/item:opacity-100 group-hover/item:translate-x-0 group-hover/item:text-[#FE8233] transition-all duration-200 shrink-0" />
                                    </div>
                                    <p className="text-[11px] text-slate-500 font-normal leading-snug line-clamp-1 mt-0.5">
                                      {ind.desc}
                                    </p>
                                  </div>
                                </Link>
                              ))}
                            </div>
                          </div>

                          {/* Bottom Bar */}
                          <div className="px-6 py-3.5 bg-slate-50/90 border-t border-slate-100 flex items-center justify-between">
                            <span className="text-xs text-slate-500 font-medium">
                              Serving 25+ specialized industry domains
                            </span>
                            <Link
                              to="/industries"
                              onClick={(e) => handleLinkClick(e, '/industries')}
                              className="inline-flex items-center gap-1.5 text-xs font-bold text-[#33387A] hover:text-[#FE8233] transition-colors group/all cursor-pointer"
                            >
                              <span>View All Industries</span>
                              <ArrowRight className="w-3.5 h-3.5 text-[#FE8233] transition-transform duration-200 group-hover/all:translate-x-1" />
                            </Link>
                          </div>

                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              )
            }

            const isRegularActive = location.pathname === link.path

            return (
              <Link
                key={link.name}
                to={link.path}
                onClick={(e) => handleLinkClick(e, link.path)}
                className={`text-[13px] font-medium px-3.5 py-1.5 rounded-full transition-colors duration-200 relative ${
                  isRegularActive
                    ? 'text-[#FE8233] bg-white/90 shadow-2xs font-semibold'
                    : 'text-brand-dark/90 hover:text-[#FE8233]'
                }`}
              >
                {link.name}
              </Link>
            )
          })}
        </nav>

        {/* RIGHT: Desktop CTA Button */}
        <div className="hidden xl:flex items-center shrink-0">
          <Link
            to="/free-consultation"
            className="px-5 py-2.5 text-xs font-bold rounded-full bg-[#33387A] text-white hover:bg-[#FE8233] transition-all duration-300 ease-out shadow-sm hover:shadow-md inline-flex items-center gap-1.5 cursor-pointer"
          >
            <span>Book Free Consultation</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        {/* Hamburger Toggle - Mobile/Tablet */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="xl:hidden w-11 h-11 flex items-center justify-center rounded-full bg-slate-100/90 hover:bg-[#FE8233]/10 text-brand-dark hover:text-[#FE8233] transition-colors focus:outline-none cursor-pointer shrink-0"
          aria-label={isMobileMenuOpen ? "Close navigation" : "Open navigation"}
        >
          {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* MOBILE NAVIGATION PANEL */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
            className="absolute top-full left-0 right-0 w-full bg-white border-b border-slate-200 shadow-xl rounded-b-2xl p-5 z-[999] xl:hidden max-h-[85vh] overflow-y-auto"
          >
            <div className="flex flex-col space-y-3 text-left">
              {navLinks.map((link) => {
                const isDropdown = link.hasDropdown
                const dropdownKey = link.dropdownType
                const isOpen = mobileDropdown === dropdownKey

                if (isDropdown) {
                  return (
                    <div key={link.name} className="flex flex-col space-y-1 py-1 border-b border-slate-100">
                      <button
                        onClick={() => setMobileDropdown(isOpen ? null : dropdownKey)}
                        className="w-full flex items-center justify-between text-sm font-bold text-brand-dark hover:text-[#FE8233] py-2 transition-colors cursor-pointer"
                      >
                        <span>{link.name}</span>
                        {isOpen ? (
                          <Minus className="w-4 h-4 text-[#FE8233]" />
                        ) : (
                          <Plus className="w-4 h-4 text-slate-400" />
                        )}
                      </button>

                      {/* Expandable Mobile Submenu */}
                      <AnimatePresence>
                        {isOpen && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.2 }}
                            className="overflow-hidden pl-3 space-y-1.5 py-1 border-l-2 border-[#FE8233]/30 text-left"
                          >
                            {dropdownKey === 'services' && (
                              <>
                                {servicesFlatList.map((subItem) => (
                                  <Link
                                    key={subItem.name}
                                    to={subItem.path}
                                    onClick={(e) => handleLinkClick(e, subItem.path)}
                                    className="text-xs font-semibold text-brand-gray hover:text-[#FE8233] py-1.5 block transition-colors"
                                  >
                                    {subItem.name}
                                  </Link>
                                ))}
                                <Link
                                  to="/services"
                                  onClick={(e) => handleLinkClick(e, '/services')}
                                  className="text-xs font-bold text-[#33387A] hover:text-[#FE8233] py-2 block transition-colors flex items-center justify-between pt-2 border-t border-slate-100"
                                >
                                  <span>View All Services →</span>
                                </Link>
                              </>
                            )}

                            {dropdownKey === 'industries' && (
                              <>
                                {industriesList.map((ind) => (
                                  <Link
                                    key={ind.slug}
                                    to={ind.href}
                                    onClick={(e) => handleLinkClick(e, ind.href)}
                                    className="text-xs font-semibold text-brand-gray hover:text-[#FE8233] py-1.5 block transition-colors"
                                  >
                                    {ind.name}
                                  </Link>
                                ))}
                                <Link
                                  to="/industries"
                                  onClick={(e) => handleLinkClick(e, '/industries')}
                                  className="text-xs font-bold text-[#33387A] hover:text-[#FE8233] py-2 block transition-colors flex items-center justify-between pt-2 border-t border-slate-100"
                                >
                                  <span>View All Industries →</span>
                                </Link>
                              </>
                            )}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  )
                }

                return (
                  <Link
                    key={link.name}
                    to={link.path}
                    onClick={(e) => handleLinkClick(e, link.path)}
                    className="text-sm font-bold text-brand-dark hover:text-[#FE8233] py-2 border-b border-slate-100 block transition-colors"
                  >
                    {link.name}
                  </Link>
                )
              })}

              <div className="pt-2">
                <Link
                  to="/free-consultation"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="w-full py-3 rounded-full bg-[#33387A] hover:bg-[#FE8233] text-white text-xs font-bold transition-all duration-300 ease-out shadow-md inline-flex items-center justify-center gap-1.5 cursor-pointer"
                >
                  <span>Book Free Consultation</span>
                  <ArrowUpRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
