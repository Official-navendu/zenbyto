import React, { useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion'
import { Helmet } from 'react-helmet-async'
import {
  CheckCircle,
  Plus,
  Minus,
  ArrowRight,
  ShieldCheck,
  Zap,
  Layers,
  ChevronRight
} from 'lucide-react'

import Header from '../components/layout/Header'
import InternalHero from '../components/layout/InternalHero'
import Footer from '../components/layout/Footer'
import PageWrapper from '../components/layout/PageWrapper'
import Process from '../components/sections/Process'

import { industriesData } from '../data/industriesData'

export default function IndustryDetail() {
  const { slug } = useParams()
  const shouldReduceMotion = useReducedMotion()
  const [activeFaq, setActiveFaq] = useState(null)

  const data = industriesData[slug]

  if (!data) {
    return (
      <PageWrapper>
        <Header />
        <main className="py-36 text-center bg-white">
          <div className="max-w-md mx-auto px-6 space-y-4">
            <h1 className="text-2xl font-bold text-[#33387A]">Industry Page Not Found</h1>
            <p className="text-sm text-slate-600">The industry solution you are looking for does not exist or has moved.</p>
            <Link
              to="/"
              className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-[#FE8233] text-white text-xs font-bold transition-all hover:bg-[#e06d20]"
            >
              Return to Homepage
            </Link>
          </div>
        </main>
        <Footer />
      </PageWrapper>
    )
  }

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
        "name": "Industries",
        "item": "https://www.zenbyto.com/#industries"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": data.heading,
        "item": `https://www.zenbyto.com/industries/${slug}`
      }
    ]
  }

  return (
    <PageWrapper>
      <Helmet>
        <title>{data.title}</title>
        <meta name="description" content={data.metaDesc} />
        <link rel="canonical" href={`https://www.zenbyto.com/industries/${slug}`} />

        {/* OpenGraph */}
        <meta property="og:type" content="article" />
        <meta property="og:title" content={data.title} />
        <meta property="og:description" content={data.metaDesc} />
        <meta property="og:url" content={`https://www.zenbyto.com/industries/${slug}`} />
        <meta property="og:image" content={data.image} />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={data.title} />
        <meta name="twitter:description" content={data.metaDesc} />
        <meta name="twitter:image" content={data.image} />

        {/* Schemas */}
        <script type="application/ld+json">{JSON.stringify(breadcrumbSchema)}</script>
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "name": `${data.heading} Digital Growth & Technology Solutions`,
            "description": data.metaDesc,
            "provider": {
              "@type": "Organization",
              "name": "Zenbyto",
              "url": "https://www.zenbyto.com"
            },
            "serviceType": `${data.heading} Digital Growth`,
            "areaServed": "Worldwide"
          })}
        </script>
        {data.faqs && (
          <script type="application/ld+json">
            {JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              "mainEntity": data.faqs.map(faq => ({
                "@type": "Question",
                "name": faq.q,
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": faq.a
                }
              }))
            })}
          </script>
        )}
      </Helmet>

      <Header />

      <main className="overflow-hidden bg-white select-none">
        
        {/* Section 1: Hero Section */}
        <InternalHero
          badge={data.badge}
          heading={`${data.heading} Digital Growth Solutions`}
          description={data.subtitle}
          image={data.image}
          imageAlt={`${data.heading} Solutions`}
          imageAspect="aspect-[4/3]"
        >
          <Link
            to="/contact"
            className="glass-btn-primary px-8 py-3.5 text-xs font-bold rounded-full transition-all"
          >
            Book Free Consultation
          </Link>
          <a
            href="#overview-section"
            className="glass-btn-secondary px-8 py-3.5 text-xs font-bold rounded-full transition-all"
          >
            Explore Solutions
          </a>
        </InternalHero>

        {/* Section 2: Industry Overview & Market Pressures */}
        <section id="overview-section" className="py-16 sm:py-20 bg-white border-t border-slate-100">
          <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10 text-left">
            
            {/* Breadcrumbs */}
            <div className="flex items-center space-x-2 text-xs text-slate-500 font-medium mb-10">
              <Link to="/" className="hover:text-[#FE8233] transition-colors">Home</Link>
              <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
              <span className="text-slate-400">Industries</span>
              <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
              <span className="text-[#33387A] font-semibold">{data.heading}</span>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
              
              {/* Left Column: Overview Copy */}
              <div className="lg:col-span-7 space-y-6">
                <div className="flex items-center gap-2.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#FE8233]" />
                  <span className="text-xs sm:text-[13px] font-semibold tracking-[0.16em] uppercase text-[#FE8233]">
                    INDUSTRY OVERVIEW
                  </span>
                </div>

                <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-[#33387A] tracking-tight leading-tight">
                  Navigating Digital Transformation in {data.heading}
                </h2>

                <div className="prose max-w-none text-slate-600 font-normal text-base leading-relaxed space-y-4">
                  {data.overview.split('\n\n').map((paragraph, i) => (
                    <p key={i}>{paragraph}</p>
                  ))}
                </div>
              </div>

              {/* Right Column: Key Takeaways Card */}
              <div className="lg:col-span-5 p-6 sm:p-8 rounded-[24px] bg-[#33387A]/[0.03] border border-[#33387A]/12 space-y-6">
                <div className="flex items-center gap-3 border-b border-[#33387A]/10 pb-4">
                  <span className="w-9 h-9 rounded-xl bg-[#FE8233]/15 text-[#FE8233] flex items-center justify-center font-bold shrink-0">
                    <Zap className="w-5 h-5" />
                  </span>
                  <div>
                    <h3 className="text-base font-bold text-[#33387A]">Growth Impact Highlights</h3>
                    <p className="text-xs text-slate-500">Domain-specific execution targets</p>
                  </div>
                </div>

                <ul className="space-y-3.5 text-xs sm:text-sm text-slate-700 font-normal">
                  <li className="flex items-start gap-2.5">
                    <CheckCircle className="w-4 h-4 text-[#FE8233] mt-0.5 shrink-0" />
                    <span>Sub-second page speeds engineered for mobile conversion optimization.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle className="w-4 h-4 text-[#FE8233] mt-0.5 shrink-0" />
                    <span>Semantic search structures designed for competitive keyword dominance.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle className="w-4 h-4 text-[#FE8233] mt-0.5 shrink-0" />
                    <span>Server-side ad attribution (CAPI) eliminating privacy-related data loss.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle className="w-4 h-4 text-[#FE8233] mt-0.5 shrink-0" />
                    <span>Automated lead scoring, CRM sync, and API workflows.</span>
                  </li>
                </ul>

                <div className="pt-2">
                  <Link
                    to="/contact"
                    className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-[#33387A] hover:bg-[#FE8233] text-white text-xs font-bold transition-all shadow-xs"
                  >
                    <span>Request Custom Industry Blueprint</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>

            </div>

          </div>
        </section>

        {/* Section 3: Industry Specific Challenges */}
        <section className="py-16 sm:py-20 bg-slate-50/70 border-t border-slate-100">
          <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10 text-left space-y-12">
            
            <div className="text-center max-w-[700px] mx-auto space-y-3">
              <div className="flex items-center justify-center gap-2.5">
                <span className="w-2.5 h-2.5 rounded-full bg-[#FE8233]" />
                <span className="text-xs sm:text-[13px] font-semibold tracking-widest uppercase text-[#FE8233]">
                  CHALLENGES & BOTTLENECKS
                </span>
                <div className="w-12 h-[1px] bg-[#FE8233]/35" />
              </div>

              <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-[#33387A] tracking-tight leading-tight">
                Key Digital Challenges in {data.heading}
              </h2>

              <p className="text-base sm:text-lg text-slate-600 font-normal max-w-[600px] mx-auto">
                We identify and overcome the specific growth obstacles holding back businesses in your sector.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
              {data.challenges.map((ch, idx) => (
                <div
                  key={idx}
                  className="p-6 sm:p-8 bg-white border border-slate-200/90 rounded-[22px] shadow-xs space-y-3 hover:border-[#FE8233]/60 transition-all duration-300"
                >
                  <div className="flex items-center gap-3">
                    <span className="w-7 h-7 rounded-lg bg-[#FE8233]/15 text-[#FE8233] font-mono text-xs font-bold flex items-center justify-center shrink-0">
                      0{idx + 1}
                    </span>
                    <h3 className="text-lg font-bold text-[#33387A]">{ch.title}</h3>
                  </div>

                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal pt-1">
                    {ch.desc}
                  </p>
                </div>
              ))}
            </div>

          </div>
        </section>

        {/* Section 4: Zenbyto Relevant Services Integration */}
        <section className="py-16 sm:py-20 bg-white border-t border-slate-100">
          <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10 text-left space-y-12">
            
            <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
              <div className="space-y-3 max-w-[680px]">
                <div className="flex items-center gap-2.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#FE8233]" />
                  <span className="text-xs sm:text-[13px] font-semibold tracking-widest uppercase text-[#FE8233]">
                    ZENBYTO SERVICES
                  </span>
                </div>

                <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-[#33387A] tracking-tight leading-tight">
                  Services Tailored for {data.heading}
                </h2>

                <p className="text-base text-slate-600 font-normal">
                  Our core services engineered and customized specifically to solve {data.heading} requirements.
                </p>
              </div>

              <Link
                to="/services"
                className="inline-flex items-center gap-2 text-xs font-bold text-[#FE8233] hover:underline shrink-0"
              >
                <span>View All Services</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {data.services.map((srv, idx) => (
                <div
                  key={idx}
                  className="p-6 rounded-[22px] bg-slate-50/60 border border-slate-200/90 flex flex-col justify-between space-y-4 hover:border-[#FE8233] transition-colors group"
                >
                  <div className="space-y-2.5">
                    <span className="text-[10.5px] font-bold uppercase tracking-widest text-[#FE8233]">
                      {srv.role}
                    </span>
                    <h3 className="text-lg font-bold text-[#33387A] group-hover:text-[#FE8233] transition-colors">
                      {srv.name}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                      {srv.details}
                    </p>
                  </div>

                  <div className="pt-2 border-t border-slate-200/60">
                    <Link
                      to={srv.href}
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-[#33387A] group-hover:text-[#FE8233] transition-colors"
                    >
                      <span>Explore {srv.name}</span>
                      <ArrowRight className="w-3.5 h-3.5 transform group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </section>

        {/* Section 5: Industry-Specific Custom Digital Solutions */}
        <section className="py-16 sm:py-20 bg-slate-50/70 border-t border-slate-100">
          <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10 text-left space-y-12">
            
            <div className="text-center max-w-[700px] mx-auto space-y-3">
              <div className="flex items-center justify-center gap-2.5">
                <span className="w-2.5 h-2.5 rounded-full bg-[#FE8233]" />
                <span className="text-xs sm:text-[13px] font-semibold tracking-widest uppercase text-[#FE8233]">
                  CUSTOM SOLUTIONS
                </span>
                <div className="w-12 h-[1px] bg-[#FE8233]/35" />
              </div>

              <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-[#33387A] tracking-tight leading-tight">
                Digital Systems We Build for {data.heading}
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
              {data.solutions.map((sol, idx) => (
                <div
                  key={idx}
                  className="p-6 sm:p-8 bg-white border border-slate-200 rounded-[22px] shadow-xs space-y-3"
                >
                  <div className="flex items-center gap-3">
                    <span className="w-8 h-8 rounded-full bg-[#33387A]/10 text-[#33387A] flex items-center justify-center shrink-0">
                      <Layers className="w-4 h-4" />
                    </span>
                    <h3 className="text-base sm:text-lg font-bold text-[#33387A]">{sol.title}</h3>
                  </div>

                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal pt-1">
                    {sol.desc}
                  </p>
                </div>
              ))}
            </div>

          </div>
        </section>

        {/* Section 6: Technology Integration Stack */}
        <section className="py-14 sm:py-16 bg-white border-t border-slate-100">
          <div className="max-w-4xl mx-auto px-6 sm:px-8 relative z-10 text-center space-y-6">
            <div className="space-y-2">
              <span className="text-xs font-semibold tracking-widest text-[#FE8233] uppercase">INTEGRATED STACK</span>
              <h3 className="text-xl sm:text-2xl font-bold text-[#33387A]">Technologies & Architecture We Deploy</h3>
            </div>

            <div className="flex flex-wrap justify-center gap-2.5 pt-2">
              {data.tech.map((t) => (
                <span
                  key={t}
                  className="px-4 py-2 bg-[#33387A]/5 text-xs font-bold text-[#33387A] rounded-xl border border-[#33387A]/10"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* Section 7: Growth Strategy & Why Zenbyto */}
        <section className="py-16 sm:py-20 bg-slate-50/70 border-t border-slate-100">
          <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10 text-left space-y-12">
            
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
              
              {/* Growth Strategy */}
              <div className="lg:col-span-6 space-y-4">
                <div className="flex items-center gap-2.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#FE8233]" />
                  <span className="text-xs font-semibold tracking-widest uppercase text-[#FE8233]">
                    GROWTH BLUEPRINT
                  </span>
                </div>
                <h3 className="text-2xl font-bold text-[#33387A]">Unified Growth Framework</h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                  {data.growthStrategy}
                </p>
              </div>

              {/* Why Zenbyto */}
              <div className="lg:col-span-6 space-y-4 p-6 sm:p-8 bg-white rounded-[24px] border border-slate-200 shadow-xs">
                <div className="flex items-center gap-2.5">
                  <ShieldCheck className="w-5 h-5 text-[#FE8233]" />
                  <span className="text-xs font-semibold tracking-widest uppercase text-[#33387A]">
                    WHY ZENBYTO
                  </span>
                </div>
                <h3 className="text-xl font-bold text-[#33387A]">Engineering & Performance Marketing Synergy</h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                  {data.whyZenbyto}
                </p>
              </div>

            </div>

          </div>
        </section>

        {/* Section 8: Working Process */}
        <Process />

        {/* Section 9: Industry FAQs */}
        <section className="py-16 sm:py-20 bg-white border-t border-slate-100">
          <div className="max-w-4xl mx-auto px-6 sm:px-8 relative z-10 text-center space-y-12">
            
            <div className="space-y-3">
              <div className="flex items-center justify-center gap-2.5">
                <span className="w-2.5 h-2.5 rounded-full bg-[#FE8233]" />
                <span className="text-xs font-semibold tracking-widest uppercase text-[#FE8233]">
                  FREQUENTLY ASKED QUESTIONS
                </span>
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-[#33387A]">
                {data.heading} FAQs
              </h2>
              <p className="text-sm sm:text-base text-slate-600">
                Common questions about our digital growth strategies for {data.heading} businesses.
              </p>
            </div>

            <div className="space-y-4 text-left">
              {data.faqs.map((faq, idx) => {
                const isOpen = activeFaq === idx
                return (
                  <div
                    key={idx}
                    className="border border-slate-200/90 rounded-2xl overflow-hidden bg-white shadow-xs"
                  >
                    <button
                      onClick={() => setActiveFaq(isOpen ? null : idx)}
                      className="w-full px-5 py-4 sm:py-5 flex items-center justify-between font-bold text-sm sm:text-base text-[#151735] hover:text-[#FE8233] transition-colors cursor-pointer focus:outline-none"
                    >
                      <span>{faq.q}</span>
                      <div className={`w-7 h-7 rounded-full flex items-center justify-center shrink-0 transition-colors ${
                        isOpen ? 'bg-[#FE8233] text-white' : 'bg-slate-100 text-[#33387A]'
                      }`}>
                        {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                      </div>
                    </button>
                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          initial={shouldReduceMotion ? { height: 'auto', opacity: 1 } : { height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={shouldReduceMotion ? { height: 0, opacity: 0 } : { height: 0, opacity: 0 }}
                          transition={{ duration: 0.3, ease: 'easeInOut' }}
                          className="overflow-hidden"
                        >
                          <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-slate-600 font-normal leading-relaxed border-t border-slate-100">
                            {faq.a}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                )
              })}
            </div>

          </div>
        </section>

      </main>

      <Footer />
    </PageWrapper>
  )
}
