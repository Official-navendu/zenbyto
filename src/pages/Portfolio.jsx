import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import { ArrowRight, Filter, ExternalLink, Lock } from 'lucide-react'

// Layout Components
import Header from '../components/layout/Header'
import InternalHero from '../components/layout/InternalHero'
import Footer from '../components/layout/Footer'
import PageWrapper from '../components/layout/PageWrapper'
import CTA from '../components/sections/CTA'

// Portfolio Hero Asset
import portfolioHeroImg from '../assets/portfolio/portfolio_hero.webp'

// Project Visual Screenshots & Responsive WebP Assets
import nexzenWebp from '../assets/portfolio/nexzen_extracts.webp'
import nexzenDesktop from '../assets/portfolio/nexzen_extracts_desktop.webp'
import nexzenTablet from '../assets/portfolio/nexzen_extracts_tablet.webp'
import nexzenMobile from '../assets/portfolio/nexzen_extracts_mobile.webp'
import nexzenJpg from '../assets/portfolio/nexzen_extracts.jpg'

import lumenWebp from '../assets/portfolio/lumencloud_tech.webp'
import lumenDesktop from '../assets/portfolio/lumencloud_tech_desktop.webp'
import lumenTablet from '../assets/portfolio/lumencloud_tech_tablet.webp'
import lumenMobile from '../assets/portfolio/lumencloud_tech_mobile.webp'
import lumenJpg from '../assets/portfolio/lumencloud_tech.jpg'

import brightWebp from '../assets/portfolio/brightgrid_llc.webp'
import brightDesktop from '../assets/portfolio/brightgrid_llc_desktop.webp'
import brightTablet from '../assets/portfolio/brightgrid_llc_tablet.webp'
import brightMobile from '../assets/portfolio/brightgrid_llc_mobile.webp'
import brightJpg from '../assets/portfolio/brightgrid_llc.jpg'

import azuraWebp from '../assets/portfolio/azurafly_aviation.webp'
import azuraDesktop from '../assets/portfolio/azurafly_aviation_desktop.webp'
import azuraTablet from '../assets/portfolio/azurafly_aviation_tablet.webp'
import azuraMobile from '../assets/portfolio/azurafly_aviation_mobile.webp'
import azuraJpg from '../assets/portfolio/azurafly_aviation.jpg'

import skyWebp from '../assets/portfolio/skyseeker_agency.webp'
import skyDesktop from '../assets/portfolio/skyseeker_agency_desktop.webp'
import skyTablet from '../assets/portfolio/skyseeker_agency_tablet.webp'
import skyMobile from '../assets/portfolio/skyseeker_agency_mobile.webp'
import skyJpg from '../assets/portfolio/skyseeker_agency.jpg'

import navexmWebp from '../assets/portfolio/navexm_exchange.webp'
import navexmDesktop from '../assets/portfolio/navexm_exchange_desktop.webp'
import navexmTablet from '../assets/portfolio/navexm_exchange_tablet.webp'
import navexmMobile from '../assets/portfolio/navexm_exchange_mobile.webp'
import navexmJpg from '../assets/portfolio/navexm_exchange.jpg'

export default function Portfolio() {
  const [filter, setFilter] = useState('all')

  const categories = [
    { id: 'all', label: 'All Projects' },
    { id: 'ecommerce', label: 'E-commerce' },
    { id: 'agency', label: 'Agency' },
    { id: 'corporate', label: 'Corporate' },
    { id: 'aviation', label: 'Aviation' },
    { id: 'crypto', label: 'Crypto' },
  ]

  const projects = [
    {
      id: 1,
      slug: 'nexzen-extracts',
      url: 'nexzenextracts.com',
      websiteUrl: 'https://nexzenextracts.com',
      title: 'NexZen Extracts',
      industry: 'CBD / Wellness E-commerce',
      projectType: 'E-commerce Store',
      category: 'ecommerce',
      categoryBadge: 'E-commerce',
      techStack: ['WordPress', 'WooCommerce', 'AWS', 'Klaviyo', 'Mailchimp'],
      shortDescription: 'High-converting CBD e-commerce platform focused on speed, UX, and email automation.',
      image: {
        webp: nexzenWebp,
        desktop: nexzenDesktop,
        tablet: nexzenTablet,
        mobile: nexzenMobile,
        jpg: nexzenJpg,
      },
    },
    {
      id: 2,
      slug: 'lumencloud-technologies',
      url: 'lumencloudtech.com',
      websiteUrl: 'https://lumencloudtech.com',
      title: 'LumenCloud Technologies',
      industry: 'IT Services',
      projectType: 'Service-Based Company Website',
      category: 'corporate',
      categoryBadge: 'Corporate',
      techStack: ['HTML', 'CSS', 'JavaScript'],
      shortDescription: 'Modern corporate IT website designed for high lead generation and brand credibility.',
      image: {
        webp: lumenWebp,
        desktop: lumenDesktop,
        tablet: lumenTablet,
        mobile: lumenMobile,
        jpg: lumenJpg,
      },
    },
    {
      id: 3,
      slug: 'brightgrid-llc',
      url: 'brightgridllc.co',
      websiteUrl: 'https://brightgridllc.co',
      title: 'BrightGrid LLC',
      industry: 'Business Venture',
      projectType: 'Corporate Venture Website',
      category: 'corporate',
      categoryBadge: 'Corporate',
      techStack: ['HTML', 'CSS', 'JavaScript', 'PHP'],
      shortDescription: 'Venture business platform with dynamic PHP content management and brand positioning.',
      image: {
        webp: brightWebp,
        desktop: brightDesktop,
        tablet: brightTablet,
        mobile: brightMobile,
        jpg: brightJpg,
      },
    },
    {
      id: 4,
      slug: 'azurafly',
      url: 'azurafly.com',
      websiteUrl: 'https://azurafly.com',
      title: 'AzuraFly',
      industry: 'Aviation',
      projectType: 'Premium Aviation Website',
      category: 'aviation',
      categoryBadge: 'Aviation',
      techStack: ['React.js', 'Framer Motion', 'GSAP', 'Node.js'],
      shortDescription: 'Luxury aviation website featuring Framer Motion micro-animations and interactive UI.',
      image: {
        webp: azuraWebp,
        desktop: azuraDesktop,
        tablet: azuraTablet,
        mobile: azuraMobile,
        jpg: azuraJpg,
      },
    },
    {
      id: 5,
      slug: 'skyseeker-it-solutions',
      url: 'skyseekeritsolutions.com',
      websiteUrl: 'https://skyseekeritsolutions.com',
      title: 'SkySeeker IT Solutions',
      industry: 'Digital Agency',
      projectType: 'Agency Website',
      category: 'agency',
      categoryBadge: 'Agency',
      techStack: ['Next.js', 'AWS', 'Cloudflare', 'Klaviyo'],
      shortDescription: 'Digital agency platform built with Next.js, Cloudflare edge caching, and AWS.',
      image: {
        webp: skyWebp,
        desktop: skyDesktop,
        tablet: skyTablet,
        mobile: skyMobile,
        jpg: skyJpg,
      },
    },
    {
      id: 6,
      slug: 'navexm-exchange',
      url: 'navexm.com',
      websiteUrl: 'https://navexm.com/',
      title: 'NavExM Exchange',
      industry: 'Crypto & Blockchain',
      projectType: 'Cryptocurrency Exchange Platform',
      category: 'crypto',
      categoryBadge: 'Crypto',
      techStack: ['React.js', 'Node.js', 'AWS'],
      shortDescription: 'Scalable crypto exchange platform with React frontend and secure AWS backend.',
      image: {
        webp: navexmWebp,
        desktop: navexmDesktop,
        tablet: navexmTablet,
        mobile: navexmMobile,
        jpg: navexmJpg,
      },
    },
  ]

  const stats = [
    { value: '6+', label: 'Enterprise Work Highlights' },
    { value: '100%', label: 'Real Uncropped Case Studies' },
    { value: '99.9%', label: 'Cloud Architecture Uptime' },
    { value: '100%', label: 'Client Satisfaction Rating' },
  ]

  const filteredProjects = filter === 'all' ? projects : projects.filter((p) => p.category === filter)

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://www.zenbyto.com/"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Portfolio",
        "item": "https://www.zenbyto.com/portfolio"
      }
    ]
  }

  return (
    <PageWrapper>
      <Helmet>
        <title>Portfolio | Real Case Studies & Showcase | ZenByto</title>
        <meta name="description" content="Explore ZenByto's official portfolio showcase featuring complete, uncropped website screenshots and engineering case studies." />
        <meta name="keywords" content="Zenbyto Portfolio, NexZen Extracts, AzuraFly, NavExM Exchange, SkySeeker IT Solutions, LumenCloud Technologies, BrightGrid LLC" />
        <link rel="canonical" href="https://zenbyto.com/portfolio" />
        
        {/* OpenGraph */}
        <meta property="og:type" content="article" />
        <meta property="og:title" content="Portfolio | Real Case Studies & Showcase | ZenByto" />
        <meta property="og:description" content="Explore ZenByto's official portfolio showcase featuring complete, uncropped website screenshots and engineering case studies." />
        <meta property="og:url" content="https://zenbyto.com/portfolio" />
        <meta property="og:image" content="https://zenbyto.com/og-image.jpg" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Portfolio | Real Case Studies & Showcase | ZenByto" />
        <meta name="twitter:description" content="Explore ZenByto's official portfolio showcase featuring complete, uncropped website screenshots and engineering case studies." />
        <meta name="twitter:image" content="https://zenbyto.com/og-image.jpg" />

        <meta name="robots" content="index, follow" />
        <script type="application/ld+json">{JSON.stringify(breadcrumbSchema)}</script>
      </Helmet>
      <Header />

      <main className="overflow-hidden">
        
        {/* Section 1: Unified Hero */}
        <InternalHero
          badge="🚀 Proof of Work Showcase"
          heading="Real Projects Built for High Growth & Speed"
          description="Browse complete website screenshots inside modern browser mockups with zero cropping or logo cutoff."
          image={portfolioHeroImg}
          imageAlt="Zenbyto Case Study Showcase"
          imageAspect="aspect-[4/3]"
        >
          <Link to="/contact" className="glass-btn-primary px-8 py-3.5 text-xs font-bold rounded-full transition-all">
            Start Your Project
          </Link>
          <a href="#portfolio-grid-section" className="glass-btn-secondary px-8 py-3.5 text-xs font-bold rounded-full transition-all">
            Explore Case Studies
          </a>
        </InternalHero>

        {/* Section 2: Portfolio Filters & Projects Grid */}
        <section id="portfolio-grid-section" className="py-12 md:py-16 bg-white relative">
          <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 space-y-12">
            
            {/* Header & Filter Buttons */}
            <div className="text-center space-y-6 max-w-3xl mx-auto">
              <span className="glass-badge-blue inline-flex items-center gap-1.5 px-3.5 py-1 text-[10px] font-bold tracking-widest uppercase">
                Featured Case Studies
              </span>
              <h2 className="text-2xl md:text-[38px] font-bold text-brand-dark tracking-tight leading-tight">
                Our Work Across Key Industries
              </h2>
              <p className="text-sm md:text-base text-brand-gray">
                Select a filter category to view specific project details, tech stacks, and full UI screenshots.
              </p>

              {/* Filter Tabs */}
              <div className="flex flex-wrap justify-center gap-2 pt-2">
                {categories.map((cat) => (
                  <button
                    key={cat.id}
                    onClick={() => setFilter(cat.id)}
                    className={`px-5 py-2.5 text-xs font-bold rounded-full border transition-all duration-300 flex items-center gap-2 focus:outline-none cursor-pointer ${
                      filter === cat.id
                        ? 'bg-[#33387A] border-[#33387A] text-white shadow-lg shadow-[#33387A]/20 scale-[1.02]'
                        : 'bg-white border-[#33387A]/15 text-brand-dark hover:border-[#FE8233] hover:text-[#FE8233]'
                    }`}
                  >
                    <Filter className="w-3.5 h-3.5" />
                    {cat.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Projects Grid — Simplified & Compact Cards */}
            <motion.div
              layout
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              <AnimatePresence mode="popLayout">
                {filteredProjects.map((proj) => (
                  <motion.div
                    layout
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.4 }}
                    key={proj.id}
                    className="group flex flex-col rounded-2xl bg-white border border-[#33387A]/15 shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 overflow-hidden text-left justify-between"
                  >
                    <div>
                      {/* Premium Modern Browser Frame Mockup */}
                      <Link to={`/portfolio/${proj.slug}`} className="block w-full overflow-hidden relative border-b border-[#33387A]/10 bg-slate-950 group-hover:bg-[#151733] transition-colors">
                        {/* Browser Bar */}
                        <div className="px-3.5 py-2 bg-slate-950/90 border-b border-white/10 flex items-center justify-between gap-2">
                          <div className="flex items-center gap-1.5 shrink-0">
                            <span className="w-2.5 h-2.5 rounded-full bg-[#FF5F56] inline-block shadow-sm" />
                            <span className="w-2.5 h-2.5 rounded-full bg-[#FFBD2E] inline-block shadow-sm" />
                            <span className="w-2.5 h-2.5 rounded-full bg-[#27C93F] inline-block shadow-sm" />
                          </div>
                          <div className="flex-1 max-w-[190px] sm:max-w-[230px] mx-auto px-2.5 py-0.5 bg-black/60 rounded-full border border-white/10 text-[9.5px] text-slate-300 font-mono truncate text-center flex items-center justify-center gap-1">
                            <Lock className="w-2.5 h-2.5 text-emerald-400" />
                            <span className="opacity-80">https://www.{proj.url}</span>
                          </div>
                          <div className="shrink-0 text-right">
                            <span className="text-[9px] text-[#FE8233] uppercase font-black tracking-wider">{proj.categoryBadge}</span>
                          </div>
                        </div>

                        {/* Screenshot Container with object-contain */}
                        <div className="relative aspect-[16/10] w-full p-2.5 sm:p-3 flex items-center justify-center bg-gradient-to-br from-[#0B0D1B] via-[#161936] to-[#0F1125]">
                          <picture className="w-full h-full flex items-center justify-center">
                            <source media="(min-width: 1024px)" srcSet={proj.image.desktop} type="image/webp" />
                            <source media="(min-width: 640px)" srcSet={proj.image.tablet} type="image/webp" />
                            <source srcSet={proj.image.mobile} type="image/webp" />
                            <img
                              src={proj.image.webp}
                              alt={`${proj.title} full website screenshot`}
                              className="w-full h-full object-contain object-center drop-shadow-xl rounded transition-transform duration-500 group-hover:scale-[1.02]"
                              loading="lazy"
                            />
                          </picture>
                        </div>
                      </Link>

                      {/* Simplified Card Content */}
                      <div className="p-5 space-y-3.5">
                        <div className="space-y-1.5">
                          <div className="flex items-center justify-between gap-2">
                            <span className="text-[10px] font-extrabold text-[#FE8233] uppercase tracking-wider bg-[#FE8233]/10 px-2.5 py-0.5 rounded-full inline-block">
                              {proj.industry}
                            </span>
                          </div>
                          <Link to={`/portfolio/${proj.slug}`}>
                            <h3 className="font-bold text-lg md:text-xl text-brand-dark group-hover:text-primary transition-colors leading-tight line-clamp-1">
                              {proj.title}
                            </h3>
                          </Link>
                          {/* Short 1-line description */}
                          <p className="text-xs text-brand-gray leading-relaxed font-normal line-clamp-1 pt-0.5">
                            {proj.shortDescription}
                          </p>
                        </div>

                        {/* Tech Stack (Max 3-4 visible tags) */}
                        <div className="flex flex-wrap gap-1.5 pt-1 border-t border-brand-dark/5">
                          {proj.techStack.slice(0, 4).map((tech) => (
                            <span
                              key={tech}
                              className="px-2.5 py-1 rounded-md bg-[#33387A]/5 text-[#33387A] text-[10px] font-semibold"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Action Footer: Two Action Buttons */}
                    <div className="px-5 pb-5 pt-1 border-t border-brand-dark/5 flex flex-col sm:flex-row gap-2.5 w-full">
                      <a
                        href={proj.websiteUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 px-3.5 py-2.5 text-xs font-bold rounded-xl border border-[#33387A]/25 bg-[#33387A]/10 text-[#33387A] hover:bg-[#33387A] hover:text-white transition-all duration-300 flex items-center justify-center gap-1.5 shadow-xs text-center cursor-pointer"
                      >
                        Live Website
                        <ExternalLink className="w-3.5 h-3.5" />
                      </a>
                      <Link
                        to={`/portfolio/${proj.slug}`}
                        className="flex-1 px-3.5 py-2.5 text-xs font-bold rounded-xl border border-[#FE8233]/30 bg-[#FE8233]/10 text-[#FE8233] hover:bg-[#FE8233] hover:text-white transition-all duration-300 flex items-center justify-center gap-1.5 shadow-xs text-center cursor-pointer"
                      >
                        View Case Study
                        <ArrowRight className="w-3.5 h-3.5" />
                      </Link>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </motion.div>

          </div>
        </section>

        {/* Section 3: Performance Highlights (No project images, only Clean Metrics Cards) */}
        <section className="py-12 md:py-16 bg-[#33387A]/[0.01] relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 text-center space-y-12">
            <div className="max-w-2xl mx-auto space-y-3">
              <h2 className="text-2xl md:text-[36px] font-semibold text-brand-dark">Engineered For Performance</h2>
              <p className="text-sm md:text-base text-brand-gray">Quality standard maintained across all client platforms and custom builds.</p>
            </div>

            {/* Clean Metrics Cards ONLY */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
              {stats.map((item) => (
                <div
                  key={item.label}
                  className="p-6 bg-white border border-[#33387A]/10 rounded-2xl shadow-sm text-center space-y-2 hover:border-[#FE8233] transition-colors"
                >
                  <p className="text-3xl md:text-4xl font-black text-[#FE8233]">{item.value}</p>
                  <p className="text-xs font-bold text-brand-gray uppercase tracking-widest leading-snug">{item.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Section 4: Reusable CTA */}
        <CTA
          heading="Ready to Build Your Project With Zenbyto?"
          description="Contact our engineering and growth team to discuss your website or web application requirement."
        />

      </main>

      <Footer />
    </PageWrapper>
  )
}
