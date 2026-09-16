import React, { useState, useRef } from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { 
  ArrowRight,
  CheckCircle2,
  Search,
  Target,
  Mail,
  Share2,
  Code,
  Smartphone,
  Bot,
  Palette,
  Sparkles
} from 'lucide-react'

// Import 8 Homepage visual assets from assets
import imageSeo from '../../assets/seo.png'
import imageAds from '../../assets/ads.png'
import imageWebdev from '../../assets/web.png'
import imageAppdev from '../../assets/app.png'
import imageContent from '../../assets/content.png'
import imageBrand from '../../assets/brand.png'
import imageSocial from '../../assets/smm.png'
import imageAi from '../../assets/illustrations/ai_automation.jpg'

// 8 Individual Services Dataset for Mobile & Tablet Swipe Layout (< 1024px)
const mobileIndividualServices = [
  {
    num: '01',
    id: 'seo',
    category: 'DIGITAL GROWTH',
    title: 'SEO & Link Building',
    oneLiner: 'Improve search rankings, local map presence, technical Core Web Vitals, and organic volume.',
    image: imageSeo,
    link: '/services/seo-link-building',
    icon: Search,
    highlights: [
      'Core Web Vitals Audits',
      'High-Authority Backlinks',
      'Google Maps & Local SEO'
    ],
    cardStyle: 'bg-white border-slate-200/90 text-brand-dark shadow-[0_15px_35px_-10px_rgba(20,24,70,0.08)]',
    iconStyle: 'bg-[#33387A]/10 text-[#33387A]',
    imageStageStyle: 'bg-slate-50 border-slate-200/80',
    btnStyle: 'bg-[#33387A] text-white hover:bg-[#FE8233]'
  },
  {
    num: '02',
    id: 'ads',
    category: 'DIGITAL GROWTH',
    title: 'Google & Meta Ads',
    oneLiner: 'Maximize ad spend efficiency and acquire qualified customers across Search, Shopping, and Meta.',
    image: imageAds,
    link: '/services/google-meta-ads',
    icon: Target,
    highlights: [
      'ROAS & Conversion CAPI',
      'Meta Creative Testing',
      'Custom Bidding & Retargeting'
    ],
    cardStyle: 'bg-white border-slate-200/90 text-brand-dark shadow-[0_15px_35px_-10px_rgba(20,24,70,0.08)]',
    iconStyle: 'bg-[#FE8233]/10 text-[#FE8233]',
    imageStageStyle: 'bg-slate-50 border-slate-200/80',
    btnStyle: 'bg-[#33387A] text-white hover:bg-[#FE8233]'
  },
  {
    num: '03',
    id: 'content',
    category: 'DIGITAL GROWTH',
    title: 'Content & Email Marketing',
    oneLiner: 'Nurture leads and maximize customer retention with automated checkout recovery and copy drips.',
    image: imageContent,
    link: '/services/content-email-marketing',
    icon: Mail,
    highlights: [
      'Automated Recovery Flows',
      'Persona Content Strategy',
      'Klaviyo & Drip Campaigns'
    ],
    cardStyle: 'bg-white border-slate-200/90 text-brand-dark shadow-[0_15px_35px_-10px_rgba(20,24,70,0.08)]',
    iconStyle: 'bg-[#33387A]/10 text-[#33387A]',
    imageStageStyle: 'bg-slate-50 border-slate-200/80',
    btnStyle: 'bg-[#33387A] text-white hover:bg-[#FE8233]'
  },
  {
    num: '04',
    id: 'social',
    category: 'DIGITAL GROWTH',
    title: 'Social Media Marketing',
    oneLiner: 'Boost engagement and brand authority with content calendars, active community management, and paid social.',
    image: imageSocial,
    link: '/services/social-media-marketing',
    icon: Share2,
    highlights: [
      'Custom Content Calendars',
      'Audience Engagement',
      'Paid Social Amplification'
    ],
    cardStyle: 'bg-white border-slate-200/90 text-brand-dark shadow-[0_15px_35px_-10px_rgba(20,24,70,0.08)]',
    iconStyle: 'bg-[#FE8233]/10 text-[#FE8233]',
    imageStageStyle: 'bg-slate-50 border-slate-200/80',
    btnStyle: 'bg-[#33387A] text-white hover:bg-[#FE8233]'
  },
  {
    num: '05',
    id: 'webdev',
    category: 'TECHNOLOGY & AI',
    title: 'Website Development',
    oneLiner: 'Build fast, custom-engineered React & Next.js business websites, e-commerce stores, and landing pages.',
    image: imageWebdev,
    link: '/services/website-development',
    icon: Code,
    highlights: [
      'React & Headless Stacks',
      'Core Web Vitals Speed',
      'Conversion-Focused UI/UX'
    ],
    cardStyle: 'bg-[#33387A] border-white/20 text-white shadow-[0_20px_40px_-10px_rgba(51,56,122,0.25)]',
    iconStyle: 'bg-white/15 text-white',
    imageStageStyle: 'bg-black/20 border-white/15',
    btnStyle: 'bg-[#FE8233] text-white hover:bg-white hover:text-[#33387A]'
  },
  {
    num: '06',
    id: 'appdev',
    category: 'TECHNOLOGY & AI',
    title: 'App Development',
    oneLiner: 'Design and develop scalable Android, iOS, and cross-platform mobile applications with secure API backends.',
    image: imageAppdev,
    link: '/services/app-development',
    icon: Smartphone,
    highlights: [
      'React Native Mobile Apps',
      'Secure API Backends',
      'App Store Publishing'
    ],
    cardStyle: 'bg-[#33387A] border-white/20 text-white shadow-[0_20px_40px_-10px_rgba(51,56,122,0.25)]',
    iconStyle: 'bg-white/15 text-white',
    imageStageStyle: 'bg-black/20 border-white/15',
    btnStyle: 'bg-[#FE8233] text-white hover:bg-white hover:text-[#33387A]'
  },
  {
    num: '07',
    id: 'ai-automation',
    category: 'TECHNOLOGY & AI',
    title: 'AI Automation',
    oneLiner: 'Streamline workflows and scale output using custom LLM agents, chatbots, workflow automation, and CRM sync.',
    image: imageAi,
    link: '/services/ai-automation',
    icon: Bot,
    highlights: [
      'Custom LLM & AI Agents',
      'Workflow Automation Bots',
      'Enterprise CRM Sync'
    ],
    cardStyle: 'bg-[#33387A] border-white/20 text-white shadow-[0_20px_40px_-10px_rgba(51,56,122,0.25)]',
    iconStyle: 'bg-white/15 text-white',
    imageStageStyle: 'bg-black/20 border-white/15',
    btnStyle: 'bg-[#FE8233] text-white hover:bg-white hover:text-[#33387A]'
  },
  {
    num: '08',
    id: 'brand',
    category: 'BRAND & STRATEGY',
    title: 'Brand Management',
    oneLiner: 'Build a powerful digital identity through comprehensive brand positioning, style guidelines, visual consistency, and online reputation management.',
    image: imageBrand,
    link: '/services/brand-management',
    icon: Palette,
    highlights: [
      'Brand Identity & Style Manuals',
      'Online Reputation Scaling',
      'Digital Positioning Strategy'
    ],
    cardStyle: 'bg-[#FE8233] border-white/20 text-white shadow-[0_20px_40px_-10px_rgba(254,130,51,0.25)]',
    iconStyle: 'bg-white/20 text-white',
    imageStageStyle: 'bg-white/15 border-white/20',
    btnStyle: 'bg-white text-[#FE8233] hover:bg-[#33387A] hover:text-white'
  }
]

// Grouped 3 Cards Dataset for Desktop Layout (>= 1024px) - UNCHANGED
const cardsData = [
  {
    id: 'digital-growth',
    cardNum: '01',
    categoryTitle: 'DIGITAL GROWTH',
    categoryBadge: 'Performance & Traffic Acquisition',
    cardBg: 'bg-white',
    textColor: 'text-brand-dark',
    subtextColor: 'text-slate-600',
    tagBg: 'bg-slate-100/80 text-slate-800 border-slate-200/80',
    cardBorder: 'border-slate-200/90 shadow-[0_20px_60px_-15px_rgba(20,24,70,0.08)]',
    btnBg: 'bg-[#33387A] text-white hover:bg-[#FE8233]',
    gridCols: 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-4',
    services: [
      {
        num: '01',
        id: 'seo',
        title: 'SEO & Link Building',
        oneLiner: 'Improve search rankings, local map presence, technical Core Web Vitals, and organic volume.',
        image: imageSeo,
        link: '/services/seo-link-building',
        icon: Search,
        highlights: [
          'Core Web Vitals Audits',
          'High-Authority Backlinks',
          'Google Maps & Local SEO'
        ]
      },
      {
        num: '02',
        id: 'ads',
        title: 'Google & Meta Ads',
        oneLiner: 'Maximize ad spend efficiency and acquire qualified customers across Search, Shopping, and Meta.',
        image: imageAds,
        link: '/services/google-meta-ads',
        icon: Target,
        highlights: [
          'ROAS & Conversion CAPI',
          'Meta Creative Testing',
          'Custom Bidding & Retargeting'
        ]
      },
      {
        num: '03',
        id: 'content',
        title: 'Content & Email Marketing',
        oneLiner: 'Nurture leads and maximize customer retention with automated checkout recovery and copy drips.',
        image: imageContent,
        link: '/services/content-email-marketing',
        icon: Mail,
        highlights: [
          'Automated Recovery Flows',
          'Persona Content Strategy',
          'Klaviyo & Drip Campaigns'
        ]
      },
      {
        num: '04',
        id: 'social',
        title: 'Social Media Marketing',
        oneLiner: 'Boost engagement and brand authority with content calendars, active community management, and paid social.',
        image: imageSocial,
        link: '/services/social-media-marketing',
        icon: Share2,
        highlights: [
          'Custom Content Calendars',
          'Audience Engagement',
          'Paid Social Amplification'
        ]
      }
    ]
  },
  {
    id: 'technology-ai',
    cardNum: '02',
    categoryTitle: 'TECHNOLOGY & AI',
    categoryBadge: 'Engineering & Process Automation',
    cardBg: 'bg-[#33387A]',
    textColor: 'text-white',
    subtextColor: 'text-white/80',
    tagBg: 'bg-white/15 text-white border-white/20',
    cardBorder: 'border-white/20 shadow-[0_25px_70px_-15px_rgba(51,56,122,0.25)]',
    btnBg: 'bg-[#FE8233] text-white hover:bg-white hover:text-[#33387A]',
    gridCols: 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3',
    services: [
      {
        num: '01',
        id: 'webdev',
        title: 'Website Development',
        oneLiner: 'Build fast, custom-engineered React & Next.js business websites, e-commerce stores, and landing pages.',
        image: imageWebdev,
        link: '/services/website-development',
        icon: Code,
        highlights: [
          'React & Headless Stacks',
          'Core Web Vitals Speed',
          'Conversion-Focused UI/UX'
        ]
      },
      {
        num: '02',
        id: 'appdev',
        title: 'App Development',
        oneLiner: 'Design and develop scalable Android, iOS, and cross-platform mobile applications with secure API backends.',
        image: imageAppdev,
        link: '/services/app-development',
        icon: Smartphone,
        highlights: [
          'React Native Mobile Apps',
          'Secure API Backends',
          'App Store Publishing'
        ]
      },
      {
        num: '03',
        id: 'ai-automation',
        title: 'AI Automation',
        oneLiner: 'Streamline workflows and scale output using custom LLM agents, chatbots, workflow automation, and CRM sync.',
        image: imageAi,
        link: '/services/ai-automation',
        icon: Bot,
        highlights: [
          'Custom LLM & AI Agents',
          'Workflow Automation Bots',
          'Enterprise CRM Sync'
        ]
      }
    ]
  },
  {
    id: 'brand-strategy',
    cardNum: '03',
    categoryTitle: 'BRAND & STRATEGY',
    categoryBadge: 'Identity & Market Positioning',
    cardBg: 'bg-[#FE8233]',
    textColor: 'text-white',
    subtextColor: 'text-white/90',
    tagBg: 'bg-white/15 text-white border-white/20',
    cardBorder: 'border-white/20 shadow-[0_25px_70px_-15px_rgba(254,130,51,0.25)]',
    btnBg: 'bg-white text-[#FE8233] hover:bg-[#33387A] hover:text-white',
    isSingle: true,
    service: {
      num: '01',
      id: 'brand',
      title: 'Brand Management',
      oneLiner: 'Build a powerful digital identity through comprehensive brand positioning, style guidelines, visual consistency, and online reputation management.',
      image: imageBrand,
      link: '/services/brand-management',
      icon: Palette,
      highlights: [
        'Brand Identity & Style Manuals',
        'Online Reputation Scaling',
        'Digital Positioning Strategy',
        'Visual Consistency Guidelines'
      ]
    }
  }
]

export default function Services() {
  const shouldReduceMotion = useReducedMotion()
  const headingText = "Bespoke Solutions"
  const headingWords = headingText.split(" ")

  // Mobile / Tablet Horizontal Swipe Scroll Indicator State
  const scrollRef = useRef(null)
  const [activeMobileIndex, setActiveMobileIndex] = useState(0)

  const handleMobileScroll = () => {
    if (!scrollRef.current) return
    const { scrollLeft, clientWidth } = scrollRef.current
    const itemWidth = clientWidth * 0.85
    if (itemWidth > 0) {
      const idx = Math.round(scrollLeft / itemWidth)
      setActiveMobileIndex(Math.min(Math.max(idx, 0), 7))
    }
  }

  return (
    <section
      id="services"
      className="relative bg-white bg-atmosphere-grain py-12 sm:py-14 lg:py-16 w-full select-none"
    >
      {/* Subtle Background Radial Glow Transitions */}
      <div className="absolute top-[5%] left-[-5%] w-[40%] h-[40%] rounded-full bg-gradient-radial from-[#FE8233]/4 to-transparent blur-[130px] pointer-events-none" />
      <div className="absolute bottom-[5%] right-[-5%] w-[40%] h-[40%] rounded-full bg-gradient-radial from-[#33387A]/4 to-transparent blur-[130px] pointer-events-none" />

      <div className="max-w-[1440px] mx-auto px-6 md:px-10 lg:px-12 relative z-10 w-full">
        
        {/* SECTION INTRO */}
        <div className="mb-6 sm:mb-8 text-left space-y-2">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="inline-flex"
          >
            <span className="inline-flex items-center gap-2 px-3.5 py-1 text-[11px] sm:text-xs font-semibold tracking-widest uppercase rounded-full bg-[#FE8233]/10 text-[#FE8233] border border-[#FE8233]/20 shadow-2xs">
              <span className="w-2 h-2 rounded-full bg-[#FE8233] animate-pulse" />
              OUR SERVICES
            </span>
          </motion.div>

          <h2 className="text-[26px] sm:text-[32px] md:text-[38px] lg:text-[42px] font-semibold text-brand-dark tracking-tight leading-tight flex flex-wrap gap-x-3">
            {headingWords.map((word, idx) => (
              <motion.span
                key={idx}
                initial={shouldReduceMotion ? { opacity: 1, y: 0, filter: 'blur(0px)' } : { opacity: 0, y: 16, filter: 'blur(4px)' }}
                whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.08, ease: [0.22, 1, 0.36, 1] }}
                className="inline-block"
              >
                {word}
              </motion.span>
            ))}
          </h2>
        </div>

        {/* DESKTOP LAYOUT (>= 1024px): UNCHANGED 3 SEQUENTIAL STACKED GROUPED SERVICE CARDS */}
        <div className="hidden lg:block relative space-y-8 sm:space-y-10 lg:space-y-12 pb-6">
          {cardsData.map((card, cardIdx) => {
            const zIndexValue = (cardIdx + 1) * 10

            return (
              <div
                key={card.id}
                className="sticky top-[80px] sm:top-[95px] md:top-[105px] w-full"
                style={{ zIndex: zIndexValue }}
              >
                <motion.div
                  initial={shouldReduceMotion ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 30, scale: 0.985 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: false, amount: 0.2 }}
                  transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
                  className={`w-full rounded-[28px] ${card.cardBg} ${card.textColor} border ${card.cardBorder} p-6 sm:p-8 lg:p-10 min-h-[380px] sm:min-h-[400px] lg:min-h-[430px] flex flex-col justify-between overflow-hidden relative transition-all duration-300`}
                >
                  {/* CARD TOP HEADER */}
                  <div className="flex flex-wrap items-center justify-between gap-4 pb-4 mb-6 border-b border-current/15">
                    <div className="flex items-center gap-3.5">
                      <span className="font-mono text-xs sm:text-sm font-bold tracking-wider px-2.5 py-1 rounded-md bg-current/10 opacity-90">
                        {card.cardNum} / 03
                      </span>
                      <div>
                        <span className="text-[10px] sm:text-xs font-semibold uppercase tracking-widest opacity-70 block">
                          Category
                        </span>
                        <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold tracking-tight">
                          {card.categoryTitle}
                        </h3>
                      </div>
                    </div>

                    <div className="flex items-center gap-2">
                      <span className={`inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-semibold border ${card.tagBg}`}>
                        <Sparkles className="w-3.5 h-3.5" />
                        {card.categoryBadge}
                      </span>
                    </div>
                  </div>

                  {/* CARD BODY CONTENT */}
                  {card.isSingle ? (
                    /* CARD 03 — BRAND & STRATEGY (1 SERVICE ITEM FULL WIDTH) */
                    <div className="bg-white/10 rounded-2xl border border-white/20 p-6 sm:p-8 lg:p-10 my-auto transition-all duration-300 hover:bg-white/[0.14] group">
                      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center w-full">
                        <div className="lg:col-span-7 flex flex-col justify-between space-y-5 text-left">
                          <div className="space-y-3">
                            <div className="flex items-center gap-3">
                              <span className="font-mono text-xs font-bold px-2.5 py-0.5 rounded bg-white/20 text-white">
                                {card.service.num}
                              </span>
                              <div className="w-9 h-9 rounded-xl bg-white/20 flex items-center justify-center shrink-0 text-white group-hover:scale-105 transition-transform duration-300">
                                <Palette className="w-5 h-5" />
                              </div>
                            </div>
                            <h4 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight">
                              {card.service.title}
                            </h4>
                            <p className="text-sm sm:text-base font-normal leading-relaxed text-white/95 max-w-2xl">
                              {card.service.oneLiner}
                            </p>
                          </div>

                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-2">
                            {card.service.highlights.map((h, hIdx) => (
                              <div
                                key={hIdx}
                                className="flex items-center gap-2.5 px-4 py-2 rounded-xl text-xs sm:text-sm font-medium bg-white/15 border border-white/20 text-white"
                              >
                                <CheckCircle2 className="w-4 h-4 shrink-0 text-white" />
                                <span className="truncate">{h}</span>
                              </div>
                            ))}
                          </div>

                          <div className="pt-3">
                            <Link
                              to={card.service.link}
                              className={`inline-flex items-center gap-2 px-7 py-3.5 rounded-full text-xs sm:text-sm font-bold transition-all duration-300 shadow-sm hover:shadow-md group/btn cursor-pointer ${card.btnBg}`}
                            >
                              <span>Explore Brand Management</span>
                              <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover/btn:translate-x-1.5" />
                            </Link>
                          </div>
                        </div>

                        <div className="lg:col-span-5 h-[220px] sm:h-[260px] lg:h-[300px] w-full relative rounded-xl overflow-hidden bg-white/10 border border-white/20 p-4 flex items-center justify-center">
                          <img
                            src={card.service.image}
                            alt={card.service.title}
                            className="w-full h-full object-contain object-center transition-transform duration-500 group-hover:scale-105"
                            loading="eager"
                          />
                        </div>
                      </div>
                    </div>
                  ) : (
                    /* CARD 01 (4 SERVICES IN 1 HORIZONTAL ROW) & CARD 02 (3 SERVICES IN 1 HORIZONTAL ROW) */
                    <div className={`grid ${card.gridCols} gap-4 lg:gap-6 w-full my-auto`}>
                      {card.services.map((srv) => {
                        const SrvIcon = srv.icon

                        return (
                          <div
                            key={srv.id}
                            className={`p-5 sm:p-6 rounded-2xl flex flex-col justify-between space-y-4 text-left transition-all duration-300 border group ${
                              card.id === 'technology-ai'
                                ? 'bg-white/[0.07] hover:bg-white/[0.13] border-white/15 hover:border-white/30 hover:shadow-lg'
                                : 'bg-slate-50/80 hover:bg-white border-slate-200/80 hover:border-[#FE8233]/40 hover:shadow-xl'
                            }`}
                          >
                            <div className="space-y-3">
                              <div className="flex items-center justify-between gap-2 pb-1 border-b border-current/10">
                                <span className="font-mono text-xs font-bold opacity-75">
                                  {srv.num}
                                </span>
                                <div className={`w-8 h-8 rounded-xl flex items-center justify-center shrink-0 transition-transform duration-300 group-hover:scale-105 ${
                                  card.id === 'technology-ai'
                                    ? 'bg-white/15 text-white border border-white/20'
                                    : 'bg-white border border-slate-200/90 text-[#33387A] shadow-2xs'
                                }`}>
                                  <SrvIcon className="w-4 h-4" />
                                </div>
                              </div>

                              <h4 className={`text-base sm:text-lg font-bold tracking-tight leading-snug transition-colors duration-300 ${
                                card.id === 'technology-ai'
                                  ? 'group-hover:text-[#FE8233]'
                                  : 'group-hover:text-[#FE8233]'
                              }`}>
                                {srv.title}
                              </h4>

                              <p className={`text-xs sm:text-xs leading-relaxed font-normal ${
                                card.id === 'technology-ai' ? 'text-white/80' : 'text-slate-600'
                              }`}>
                                {srv.oneLiner}
                              </p>

                              {/* Service Image Stage */}
                              <div className={`w-full h-28 sm:h-32 rounded-xl overflow-hidden p-2 flex items-center justify-center transition-all duration-300 ${
                                card.id === 'technology-ai'
                                  ? 'bg-black/25 border border-white/10 group-hover:border-white/25'
                                  : 'bg-white border border-slate-200/70 group-hover:border-slate-300'
                              }`}>
                                <img
                                  src={srv.image}
                                  alt={srv.title}
                                  className="w-full h-full object-contain object-center transition-transform duration-500 group-hover:scale-105"
                                  loading="lazy"
                                />
                              </div>

                              {/* Highlights List */}
                              <div className="space-y-1.5 pt-1">
                                {srv.highlights.map((h, hIdx) => (
                                  <div key={hIdx} className="flex items-center gap-1.5 text-[11px] opacity-90">
                                    <CheckCircle2 className="w-3.5 h-3.5 shrink-0 text-[#FE8233]" />
                                    <span className="truncate font-medium">{h}</span>
                                  </div>
                                ))}
                              </div>
                            </div>

                            <div className="pt-3 border-t border-current/10">
                              <Link
                                to={srv.link}
                                className={`inline-flex items-center gap-1.5 text-xs font-bold transition-all duration-300 group/link ${
                                  card.id === 'technology-ai'
                                    ? 'text-[#FE8233] hover:text-white'
                                    : 'text-[#33387A] hover:text-[#FE8233]'
                                }`}
                              >
                                <span>Explore Service</span>
                                <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover/link:translate-x-1.5" />
                              </Link>
                            </div>
                          </div>
                        )
                      })}
                    </div>
                  )}

                </motion.div>
              </div>
            )
          })}
        </div>

        {/* TABLET & MOBILE LAYOUT (< 1024px): 8 INDIVIDUAL SERVICE CARDS WITH HORIZONTAL SNAP SWIPE */}
        <div className="lg:hidden w-full space-y-3 pb-4">
          
          {/* Progress Indicator Header */}
          <div className="flex items-center justify-between px-1">
            <span className="font-mono text-xs font-bold px-3 py-1 rounded-full bg-[#FE8233]/10 text-[#FE8233] border border-[#FE8233]/20">
              0{activeMobileIndex + 1} / 08
            </span>
            <div className="flex items-center gap-1.5 text-[11px] font-semibold text-slate-500 uppercase tracking-wider">
              <span>SWIPE TO EXPLORE</span>
              <span className="text-[#FE8233]">({activeMobileIndex + 1} of 8)</span>
            </div>
          </div>

          {/* Horizontal Touch Snap Scroller */}
          <div
            ref={scrollRef}
            onScroll={handleMobileScroll}
            className="flex overflow-x-auto snap-x snap-mandatory gap-4 sm:gap-5 py-2 px-1 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden w-full"
          >
            {mobileIndividualServices.map((srv) => {
              const SrvIcon = srv.icon

              return (
                <div
                  key={srv.id}
                  className={`snap-center shrink-0 w-[86vw] sm:w-[420px] max-w-[460px] p-5 sm:p-6 rounded-[24px] border ${srv.cardStyle} flex flex-col justify-between space-y-4 text-left transition-all duration-300 group relative`}
                >
                  <div className="space-y-3.5">
                    {/* Top Meta Bar */}
                    <div className="flex items-center justify-between gap-2 pb-2.5 border-b border-current/15">
                      <div className="flex items-center gap-2">
                        <span className="font-mono text-xs font-bold opacity-80 px-2.5 py-0.5 rounded bg-current/10">
                          {srv.num} / 08
                        </span>
                        <span className="text-[10px] sm:text-xs font-bold tracking-wider uppercase opacity-75">
                          {srv.category}
                        </span>
                      </div>

                      <div className={`w-8 h-8 rounded-xl flex items-center justify-center shrink-0 ${srv.iconStyle}`}>
                        <SrvIcon className="w-4 h-4" />
                      </div>
                    </div>

                    {/* Title & Description */}
                    <div className="space-y-1.5">
                      <h4 className="text-lg sm:text-xl font-bold tracking-tight leading-snug">
                        {srv.title}
                      </h4>
                      <p className="text-xs sm:text-sm leading-relaxed font-normal opacity-90">
                        {srv.oneLiner}
                      </p>
                    </div>

                    {/* Service Image Stage */}
                    <div className={`w-full h-36 sm:h-44 rounded-xl overflow-hidden p-3 flex items-center justify-center border ${srv.imageStageStyle}`}>
                      <img
                        src={srv.image}
                        alt={srv.title}
                        className="w-full h-full object-contain object-center transition-transform duration-500 group-hover:scale-105"
                        loading="lazy"
                      />
                    </div>

                    {/* Highlights List */}
                    <div className="space-y-1.5 pt-1">
                      {srv.highlights.map((h, hIdx) => (
                        <div key={hIdx} className="flex items-center gap-2 text-xs opacity-90">
                          <CheckCircle2 className="w-3.5 h-3.5 shrink-0 text-[#FE8233]" />
                          <span className="truncate font-medium">{h}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Footer Link Button */}
                  <div className="pt-3 border-t border-current/15">
                    <Link
                      to={srv.link}
                      className={`w-full py-3 px-5 rounded-full inline-flex items-center justify-center gap-2 text-xs sm:text-sm font-bold transition-all duration-300 shadow-sm cursor-pointer ${srv.btnStyle}`}
                    >
                      <span>Explore Service</span>
                      <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1.5" />
                    </Link>
                  </div>
                </div>
              )
            })}
          </div>

        </div>

      </div>
    </section>
  )
}
