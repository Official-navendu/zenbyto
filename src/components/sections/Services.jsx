import React from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { 
  ArrowRight,
  CheckCircle2
} from 'lucide-react'

// Import 7 unique approved Homepage visual assets from assets/homepage
import imageSeo from '../../assets/seo.png'
import imageAds from '../../assets/ads.png'
import imageWebdev from '../../assets/web.png'
import imageAppdev from '../../assets/app.png'
import imageContent from '../../assets/content.png'
import imageBrand from '../../assets/brand.png'
import imageSocial from '../../assets/smm.png'

const services = [
  {
    num: '01',
    id: 'seo',
    title: 'SEO & Link Building',
    oneLiner: 'Improve search rankings, local map presence, technical Core Web Vitals, and drive high-intent organic conversion volume.',
    image: imageSeo,
    link: '/services/seo-link-building',
    cardBg: 'bg-[#FE8233]',
    textColor: 'text-white',
    subtextColor: 'text-white/90',
    tagBg: 'bg-white/15 text-white border-white/20',
    btnBg: 'bg-white text-[#FE8233] hover:bg-[#33387A] hover:text-white',
    cardBorder: 'border-white/20',
    highlights: [
      'Core Web Vitals & Technical Audits',
      'High-Authority Backlink Acquisition',
      'Google Maps & Local Pack Rankings'
    ]
  },
  {
    num: '02',
    id: 'ads',
    title: 'Google & Meta Ads',
    oneLiner: 'Maximize ad spend efficiency and acquire qualified customers across Google Search, Shopping, and Meta platforms with server-side CAPI tracking.',
    image: imageAds,
    link: '/services/google-meta-ads',
    cardBg: 'bg-white',
    textColor: 'text-brand-dark',
    subtextColor: 'text-brand-gray',
    tagBg: 'bg-slate-100 text-slate-800 border-slate-200/80',
    btnBg: 'bg-[#33387A] text-white hover:bg-[#FE8233]',
    cardBorder: 'border-slate-200/80',
    highlights: [
      'ROAS & Conversion API Setup',
      'Meta Creative Testing Matrices',
      'Custom Bidding & Retargeting'
    ]
  },
  {
    num: '03',
    id: 'webdev',
    title: 'Website Development',
    oneLiner: 'Build fast, custom-engineered React & Next.js business websites, e-commerce stores, and landing pages optimized for speed and conversion.',
    image: imageWebdev,
    link: '/services/website-development',
    cardBg: 'bg-[#33387A]',
    textColor: 'text-white',
    subtextColor: 'text-white/90',
    tagBg: 'bg-white/15 text-white border-white/20',
    btnBg: 'bg-[#FE8233] text-white hover:bg-white hover:text-[#33387A]',
    cardBorder: 'border-white/20',
    highlights: [
      'Lightweight React & Headless Stacks',
      'Core Web Vitals Speed Optimization',
      'Conversion-Focused UI/UX Design'
    ]
  },
  {
    num: '04',
    id: 'appdev',
    title: 'App Development',
    oneLiner: 'Design and develop scalable Android, iOS, and cross-platform mobile applications with intuitive user experiences and secure API backends.',
    image: imageAppdev,
    link: '/services/app-development',
    cardBg: 'bg-white',
    textColor: 'text-brand-dark',
    subtextColor: 'text-brand-gray',
    tagBg: 'bg-slate-100 text-slate-800 border-slate-200/80',
    btnBg: 'bg-[#33387A] text-white hover:bg-[#FE8233]',
    cardBorder: 'border-slate-200/80',
    highlights: [
      'React Native Cross-Platform Apps',
      'Secure Backend API Integration',
      'App Store & Play Store Publishing'
    ]
  },
  {
    num: '05',
    id: 'content',
    title: 'Content & Email Marketing',
    oneLiner: 'Nurture leads and maximize customer retention with automated checkout recovery flows, persona-led copy pipelines, and newsletter drips.',
    image: imageContent,
    link: '/services/content-email-marketing',
    cardBg: 'bg-[#FE8233]',
    textColor: 'text-white',
    subtextColor: 'text-white/90',
    tagBg: 'bg-white/15 text-white border-white/20',
    btnBg: 'bg-white text-[#FE8233] hover:bg-[#33387A] hover:text-white',
    cardBorder: 'border-white/20',
    highlights: [
      'Automated Checkout Recovery Flows',
      'Persona-Led Content Strategy',
      'Klaviyo & Drip Campaign Setup'
    ]
  },
  {
    num: '06',
    id: 'brand',
    title: 'Brand Management',
    oneLiner: 'Build a strong digital identity through comprehensive brand positioning, style guidelines, visual consistency, and online reputation management.',
    image: imageBrand,
    link: '/services/brand-management',
    cardBg: 'bg-white',
    textColor: 'text-brand-dark',
    subtextColor: 'text-brand-gray',
    tagBg: 'bg-slate-100 text-slate-800 border-slate-200/80',
    btnBg: 'bg-[#33387A] text-white hover:bg-[#FE8233]',
    cardBorder: 'border-slate-200/80',
    highlights: [
      'Brand Identity & Style Manuals',
      'Online Reputation Scaling',
      'Digital Positioning Strategy'
    ]
  },
  {
    num: '07',
    id: 'social',
    title: 'Social Media Marketing',
    oneLiner: 'Boost engagement and brand authority with content calendars, active community management, paid social amplification, and influencer partnerships.',
    image: imageSocial,
    link: '/services/social-media-marketing',
    cardBg: 'bg-[#33387A]',
    textColor: 'text-white',
    subtextColor: 'text-white/90',
    tagBg: 'bg-white/15 text-white border-white/20',
    btnBg: 'bg-[#FE8233] text-white hover:bg-white hover:text-[#33387A]',
    cardBorder: 'border-white/20',
    highlights: [
      'Custom Content Design Calendars',
      'Community & Audience Engagement',
      'Paid Amplification & Influencer Deals'
    ]
  }
]

export default function Services() {
  const shouldReduceMotion = useReducedMotion()
  const headingText = "Bespoke Solutions"
  const headingWords = headingText.split(" ")

  return (
    <section
      id="services"
      className="relative bg-white bg-atmosphere-grain py-16 sm:py-20 lg:py-24 w-full select-none"
    >
      {/* Subtle Background Radial Glow Transitions */}
      <div className="absolute top-[5%] left-[-5%] w-[40%] h-[40%] rounded-full bg-gradient-radial from-[#FE8233]/4 to-transparent blur-[130px] pointer-events-none" />
      <div className="absolute bottom-[5%] right-[-5%] w-[40%] h-[40%] rounded-full bg-gradient-radial from-[#33387A]/4 to-transparent blur-[130px] pointer-events-none" />

      <div className="max-w-[1400px] mx-auto px-6 md:px-10 lg:px-12 relative z-10 w-full">
        
        {/* SECTION INTRO MATCHING INTERNAL PAGE SCALE */}
        <div className="mb-10 sm:mb-14 text-left space-y-2.5">
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

          <h2 className="text-[28px] sm:text-[36px] md:text-[42px] lg:text-[46px] font-semibold text-brand-dark tracking-tight leading-tight flex flex-wrap gap-x-3">
            {headingWords.map((word, idx) => (
              <motion.span
                key={idx}
                initial={shouldReduceMotion ? { opacity: 1, y: 0, filter: 'blur(0px)' } : { opacity: 0, y: 20, filter: 'blur(4px)' }}
                whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.08, ease: [0.22, 1, 0.36, 1] }}
                className="inline-block"
              >
                {word}
              </motion.span>
            ))}
          </h2>
        </div>

        {/* STICKY STACKED SERVICE CARDS CONTAINER */}
        <div className="relative space-y-10 sm:space-y-14 lg:space-y-16 pb-12">
          {services.map((service, index) => {
            const zIndexValue = (index + 1) * 10

            return (
              <div
                key={service.id}
                className="sticky top-[80px] sm:top-[105px] md:top-[120px] w-full"
                style={{ zIndex: zIndexValue }}
              >
                <motion.div
                  initial={shouldReduceMotion ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 35, scale: 0.985 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: false, amount: 0.2 }}
                  transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
                  className={`w-full min-h-[440px] sm:min-h-[480px] lg:min-h-[520px] lg:h-[70vh] lg:max-h-[620px] rounded-[24px] ${service.cardBg} ${service.textColor} shadow-[0_20px_60px_-15px_rgba(20,24,70,0.08)] border ${service.cardBorder} p-5 sm:p-10 lg:p-12 flex flex-col justify-between overflow-hidden relative transition-all duration-500`}
                >
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-stretch h-full w-full">
                    
                    {/* LEFT COLUMN (50%): Service Info, Title, Highlights, CTA Button */}
                    <div className="lg:col-span-6 flex flex-col justify-between h-full text-left space-y-5">
                      
                      {/* Top Header Block */}
                      <div className="space-y-2.5">
                        <span className="font-mono text-xl sm:text-2xl font-bold opacity-80 block tracking-tight">
                          {service.num}
                        </span>

                        <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight leading-tight">
                          {service.title}
                        </h3>

                        <p className={`text-sm sm:text-base lg:text-[17px] font-normal leading-relaxed max-w-xl ${service.subtextColor}`}>
                          {service.oneLiner}
                        </p>
                      </div>

                      {/* Feature Highlights Pills (Vertical Stack) */}
                      <div className="flex flex-col items-start gap-2.5 pt-1">
                        {service.highlights.map((item, hIdx) => (
                          <div
                            key={hIdx}
                            className={`flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold border ${service.tagBg}`}
                          >
                            <CheckCircle2 className="w-3.5 h-3.5 shrink-0" />
                            <span>{item}</span>
                          </div>
                        ))}
                      </div>

                      {/* CTA Button */}
                      <div className="pt-3">
                        <Link
                          to={service.link}
                          className={`inline-flex items-center gap-2 px-6 py-3.5 rounded-full text-xs sm:text-sm font-bold transition-all duration-300 shadow-md hover:shadow-xl group cursor-pointer ${service.btnBg}`}
                        >
                          <span>Explore Service</span>
                          <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                        </Link>
                      </div>

                    </div>

                    {/* RIGHT COLUMN (50%): Full Image Stage */}
                    <div className="lg:col-span-6 h-[260px] sm:h-[320px] lg:h-full w-full relative">
                      <div className="w-full h-full relative overflow-hidden">
                        <motion.img
                          initial={shouldReduceMotion ? { opacity: 1, x: 0 } : { opacity: 0, x: 35 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: false, amount: 0.3 }}
                          transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
                          src={service.image}
                          alt={service.title}
                          className="w-full h-full object-contain object-center rounded-none border-none shadow-none outline-none block"
                          loading="eager"
                        />
                      </div>
                    </div>

                  </div>
                </motion.div>
              </div>
            )
          })}
        </div>

      </div>
    </section>
  )
}
