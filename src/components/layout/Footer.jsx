import React, { useRef, useState } from 'react'
import { motion, AnimatePresence, useScroll, useTransform, useReducedMotion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowUpRight, Mail, ChevronDown } from 'lucide-react'
import { FaInstagram, FaLinkedinIn } from 'react-icons/fa'
import logoWhite from '../../assets/logos/logo-white.png'
import { industriesList } from '../../data/industriesData'

export default function Footer() {
  const containerRef = useRef(null)
  const shouldReduceMotion = useReducedMotion()

  const [openDropdown, setOpenDropdown] = useState(null)

  const industriesCol1 = industriesList.slice(0, 5)
  const industriesCol2 = industriesList.slice(5, 10)

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end end'],
  })

  const y = useTransform(scrollYProgress, [0, 1], [100, 0])
  const scale = useTransform(scrollYProgress, [0, 1], [0.98, 1])
  const opacity = useTransform(scrollYProgress, [0, 1], [0.85, 1])

  const animatedY = shouldReduceMotion ? 0 : y
  const animatedScale = shouldReduceMotion ? 1 : scale
  const animatedOpacity = shouldReduceMotion ? 1 : opacity

  const toggleDropdown = (section) => {
    setOpenDropdown((prev) => (prev === section ? null : section))
  }

  const companyLinks = [
    { name: 'Home', href: '/' },
    { name: 'About Us', href: '/about' },
    { name: 'Our Services', href: '/services' },
    { name: 'Portfolio', href: '/portfolio' },
    { name: 'Blogs', href: '/blogs' },
    { name: 'Contact', href: '/contact' },
  ]

  const servicesLinks = [
    { name: 'Website Development', href: '/services/website-development' },
    { name: 'App Development', href: '/services/app-development' },
    { name: 'SEO & Link Building', href: '/services/seo-link-building' },
    { name: 'Google & Meta Ads', href: '/services/google-meta-ads' },
    { name: 'Content Marketing', href: '/services/content-email-marketing' },
    { name: 'Brand Management', href: '/services/brand-management' },
    { name: 'AI Automation', href: '/services/ai-automation' },
    { name: 'Social Media Marketing', href: '/services/social-media-marketing' },
  ]

  const policiesLinks = [
    { name: 'Privacy Policy', href: '/privacy-policy' },
    { name: 'Terms & Conditions', href: '/terms-and-conditions' },
    { name: 'Refund Policy', href: '/refund-policy' },
    { name: 'Cancellation Policy', href: '/cancellation-policy' },
    { name: 'Cookie Policy', href: '/cookie-policy' },
    { name: 'Disclaimer', href: '/disclaimer' },
  ]

  return (
    <footer
      ref={containerRef}
      id="footer-section"
      className="bg-brand-dark text-white pt-12 pb-8 overflow-hidden relative border-t border-white/5 z-10"
    >
      {/* Background soft blob */}
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary/20 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-0 left-0 w-96 h-96 bg-accent/10 rounded-full blur-[120px] pointer-events-none" />

      <motion.div
        style={{
          y: animatedY,
          scale: animatedScale,
          opacity: animatedOpacity,
          transformOrigin: 'top center',
        }}
        className="max-w-[1400px] mx-auto px-6 md:px-12 relative z-10"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-6 xl:gap-8 pb-10 border-b border-white/10">
          
          {/* Column 1: Brand, Socials, Contacts, Trustpilot */}
          <div className="flex flex-col space-y-5 text-left">
            <Link to="/" className="flex items-center">
              <img
                src={logoWhite}
                alt="Zenbyto Logo"
                className="h-12 md:h-[48px] w-auto object-contain transition-transform hover:scale-[1.01]"
              />
            </Link>

            {/* Social Icons */}
            <div className="flex items-center space-x-3.5 pt-1">
              <a
                href="https://www.linkedin.com/company/zenbyto/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center text-white/70 hover:text-accent hover:bg-white/10 transition-all duration-300"
                aria-label="LinkedIn"
              >
                <FaLinkedinIn className="w-3.5 h-3.5" />
              </a>
              <a
                href="https://www.instagram.com/zenbyto/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center text-white/70 hover:text-accent hover:bg-white/10 transition-all duration-300"
                aria-label="Instagram"
              >
                <FaInstagram className="w-3.5 h-3.5" />
              </a>
            </div>

            {/* Email link below socials */}
            <div className="space-y-2 pt-2 border-t border-white/5">
              <a
                href="mailto:info@zenbyto.com"
                className="flex items-center gap-2 text-white/70 hover:text-accent text-[12.5px] transition-colors"
              >
                <Mail className="w-3.5 h-3.5 text-accent" />
                <span>info@zenbyto.com</span>
              </a>
            </div>

            {/* Trustpilot Badge */}
            <div className="pt-3 border-t border-white/5 flex flex-col space-y-1">
              <a
                href="https://www.trustpilot.com/review/zenbyto.com"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex flex-col space-y-1"
              >
                <div className="flex items-center gap-1.5">
                  <svg className="w-4 h-4 text-[#00b67a]" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/>
                  </svg>
                  <span className="text-[12.5px] font-bold text-white tracking-wide group-hover:text-accent transition-colors">Trustpilot</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <div className="flex gap-0.5">
                    {[...Array(5)].map((_, i) => (
                      <span key={i} className="w-3 h-3 bg-[#00b67a] flex items-center justify-center rounded-[1px]">
                        <svg className="w-2 h-2 text-white" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/>
                        </svg>
                      </span>
                    ))}
                  </div>
                  <span className="text-white/50 text-[10px] font-semibold tracking-wider uppercase leading-none">Trusted on Trustpilot</span>
                </div>
              </a>
            </div>
          </div>

          {/* Column 2: Company */}
          <div className="flex flex-col text-left border-b md:border-b-0 border-white/10 pb-4 md:pb-0">
            {/* Desktop Header */}
            <h3 className="hidden md:block font-bold text-xs uppercase tracking-widest text-white/40 mb-4">
              Company
            </h3>
            {/* Mobile Clickable Dropdown Trigger */}
            <button
              onClick={() => toggleDropdown('company')}
              className="md:hidden w-full flex items-center justify-between font-bold text-xs uppercase tracking-widest text-white/70 py-2 cursor-pointer"
            >
              <span>Company</span>
              <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${openDropdown === 'company' ? 'rotate-180 text-accent' : 'text-white/40'}`} />
            </button>

            {/* Desktop Links */}
            <ul className="hidden md:block space-y-2.5">
              {companyLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-white/60 hover:text-accent text-[13px] transition-colors duration-300 flex items-center gap-1 group"
                  >
                    {link.name}
                    <ArrowUpRight className="w-3 h-3 opacity-0 -translate-y-0.5 translate-x-0.5 group-hover:opacity-100 transition-all duration-300" />
                  </Link>
                </li>
              ))}
            </ul>

            {/* Mobile Collapsible Content */}
            <AnimatePresence>
              {openDropdown === 'company' && (
                <motion.ul
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.25 }}
                  className="md:hidden space-y-2.5 pt-2 pb-1 overflow-hidden"
                >
                  {companyLinks.map((link) => (
                    <li key={link.name}>
                      <Link
                        to={link.href}
                        className="text-white/70 hover:text-accent text-xs transition-colors duration-300 flex items-center gap-1"
                      >
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </motion.ul>
              )}
            </AnimatePresence>
          </div>

          {/* Column 3: Services */}
          <div className="flex flex-col text-left border-b md:border-b-0 border-white/10 pb-4 md:pb-0">
            <h3 className="hidden md:block font-bold text-xs uppercase tracking-widest text-white/40 mb-4">
              Services
            </h3>
            <button
              onClick={() => toggleDropdown('services')}
              className="md:hidden w-full flex items-center justify-between font-bold text-xs uppercase tracking-widest text-white/70 py-2 cursor-pointer"
            >
              <span>Services</span>
              <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${openDropdown === 'services' ? 'rotate-180 text-accent' : 'text-white/40'}`} />
            </button>

            <ul className="hidden md:block space-y-2.5">
              {servicesLinks.map((service) => (
                <li key={service.name}>
                  <Link
                    to={service.href}
                    className="text-white/60 hover:text-accent text-[13px] transition-colors duration-300 flex items-center gap-1 group"
                  >
                    {service.name}
                    <ArrowUpRight className="w-3 h-3 opacity-0 -translate-y-0.5 translate-x-0.5 group-hover:opacity-100 transition-all duration-300" />
                  </Link>
                </li>
              ))}
            </ul>

            <AnimatePresence>
              {openDropdown === 'services' && (
                <motion.ul
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.25 }}
                  className="md:hidden space-y-2.5 pt-2 pb-1 overflow-hidden"
                >
                  {servicesLinks.map((service) => (
                    <li key={service.name}>
                      <Link
                        to={service.href}
                        className="text-white/70 hover:text-accent text-xs transition-colors duration-300 flex items-center gap-1"
                      >
                        {service.name}
                      </Link>
                    </li>
                  ))}
                </motion.ul>
              )}
            </AnimatePresence>
          </div>

          {/* Column 4: Policies */}
          <div className="flex flex-col text-left border-b md:border-b-0 border-white/10 pb-4 md:pb-0">
            <h3 className="hidden md:block font-bold text-xs uppercase tracking-widest text-white/40 mb-4">
              Policies
            </h3>
            <button
              onClick={() => toggleDropdown('policies')}
              className="md:hidden w-full flex items-center justify-between font-bold text-xs uppercase tracking-widest text-white/70 py-2 cursor-pointer"
            >
              <span>Policies</span>
              <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${openDropdown === 'policies' ? 'rotate-180 text-accent' : 'text-white/40'}`} />
            </button>

            <ul className="hidden md:block space-y-2.5">
              {policiesLinks.map((policy) => (
                <li key={policy.name}>
                  <Link
                    to={policy.href}
                    className="text-white/60 hover:text-accent text-[13px] transition-colors duration-300 flex items-center gap-1 group"
                  >
                    {policy.name}
                    <ArrowUpRight className="w-3 h-3 opacity-0 -translate-y-0.5 translate-x-0.5 group-hover:opacity-100 transition-all duration-300" />
                  </Link>
                </li>
              ))}
            </ul>

            <AnimatePresence>
              {openDropdown === 'policies' && (
                <motion.ul
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.25 }}
                  className="md:hidden space-y-2.5 pt-2 pb-1 overflow-hidden"
                >
                  {policiesLinks.map((policy) => (
                    <li key={policy.name}>
                      <Link
                        to={policy.href}
                        className="text-white/70 hover:text-accent text-xs transition-colors duration-300 flex items-center gap-1"
                      >
                        {policy.name}
                      </Link>
                    </li>
                  ))}
                </motion.ul>
              )}
            </AnimatePresence>
          </div>

          {/* Column 5: Industries */}
          <div className="flex flex-col text-left border-b md:border-b-0 border-white/10 pb-4 md:pb-0">
            <h3 className="hidden md:block font-bold text-xs uppercase tracking-widest text-white/40 mb-4">
              Industries
            </h3>
            <button
              onClick={() => toggleDropdown('industries')}
              className="md:hidden w-full flex items-center justify-between font-bold text-xs uppercase tracking-widest text-white/70 py-2 cursor-pointer"
            >
              <span>Industries</span>
              <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${openDropdown === 'industries' ? 'rotate-180 text-accent' : 'text-white/40'}`} />
            </button>

            {/* Desktop 5 | 5 Layout */}
            <div className="hidden md:grid grid-cols-2 gap-x-3 gap-y-2.5">
              <ul className="space-y-2.5">
                {industriesCol1.map((ind) => (
                  <li key={ind.slug}>
                    <Link
                      to={ind.href}
                      className="text-white/60 hover:text-accent text-[12.5px] transition-colors duration-300 flex items-center gap-0.5 group"
                    >
                      <span className="truncate">{ind.name}</span>
                      <ArrowUpRight className="w-2.5 h-2.5 opacity-0 -translate-y-0.5 translate-x-0.5 group-hover:opacity-100 transition-all duration-300 shrink-0" />
                    </Link>
                  </li>
                ))}
              </ul>
              <ul className="space-y-2.5">
                {industriesCol2.map((ind) => (
                  <li key={ind.slug}>
                    <Link
                      to={ind.href}
                      className="text-white/60 hover:text-accent text-[12.5px] transition-colors duration-300 flex items-center gap-0.5 group"
                    >
                      <span className="truncate">{ind.name}</span>
                      <ArrowUpRight className="w-2.5 h-2.5 opacity-0 -translate-y-0.5 translate-x-0.5 group-hover:opacity-100 transition-all duration-300 shrink-0" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Mobile Collapsible Content */}
            <AnimatePresence>
              {openDropdown === 'industries' && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.25 }}
                  className="md:hidden grid grid-cols-2 gap-x-4 gap-y-2.5 pt-2 pb-1 overflow-hidden"
                >
                  <ul className="space-y-2.5">
                    {industriesCol1.map((ind) => (
                      <li key={ind.slug}>
                        <Link
                          to={ind.href}
                          className="text-white/70 hover:text-accent text-xs transition-colors duration-300 flex items-center gap-1"
                        >
                          <span className="truncate">{ind.name}</span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                  <ul className="space-y-2.5">
                    {industriesCol2.map((ind) => (
                      <li key={ind.slug}>
                        <Link
                          to={ind.href}
                          className="text-white/70 hover:text-accent text-xs transition-colors duration-300 flex items-center gap-1"
                        >
                          <span className="truncate">{ind.name}</span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

        </div>

        {/* Footer Bottom */}
        <div className="pt-6 flex flex-col md:flex-row items-center justify-between text-xs text-white/50 space-y-4 md:space-y-0">
          <p>© {new Date().getFullYear()} Zenbyto. All rights reserved.</p>
          <div className="flex items-center space-x-6">
            <a href="/sitemap.xml" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Sitemap</a>
          </div>
        </div>
      </motion.div>
    </footer>
  )
}
