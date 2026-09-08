import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import {
  ArrowRight,
  CheckCircle,
  HelpCircle,
  Plus,
  Minus
} from 'lucide-react'

// Layout Components
import Header from '../components/layout/Header'
import InternalHero from '../components/layout/InternalHero'
import Footer from '../components/layout/Footer'
import PageWrapper from '../components/layout/PageWrapper'

// Import assets & data
import servicesHeroImg from '../assets/services/services_hero.webp'
import { industriesList } from '../data/industriesData'

export default function Industries() {
  const [activeFaq, setActiveFaq] = useState(null)

  const faqs = [
    {
      q: 'Why should my business choose an industry-tailored digital partner?',
      a: 'Generic marketing strategies ignore industry-specific buyer intent, regulatory compliance, and technical buyer requirements. Zenbyto builds custom web architectures and acquisition funnels engineered specifically for your domain standards.',
    },
    {
      q: 'Do you work with specialized or regulated industries like Healthcare or Cannabis?',
      a: 'Yes. We engineer compliant web platforms, HIPAA-compliant patient intake workflows, age-verification gates, and organic SEO retention funnels built to operate safely within strict regulatory guidelines.',
    },
    {
      q: 'How long does it take to deploy an industry-specific digital growth platform?',
      a: 'Initial web infrastructure updates and targeted acquisition funnels can be deployed within 3 to 4 weeks, with organic search authority compounding over 3 to 6 months.',
    },
    {
      q: 'Can Zenbyto integrate our existing industry software (CRM, PMS, POS, EHR)?',
      a: 'Absolutely. We build custom API bridges and webhooks to seamlessly connect web forms, booking engines, and store menus to your existing software stack (HubSpot, Opera, Dutchie, Follow Up Boss, etc.).',
    },
    {
      q: 'What if my business spans multiple industries or niche sectors?',
      a: 'We customize our digital strategy to your exact operational model. During initial consultation, we map out multi-stakeholder buyer journeys and cross-domain keyword structures tailored to your market.',
    },
  ]

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
        "item": "https://www.zenbyto.com/industries"
      }
    ]
  }

  return (
    <PageWrapper>
      <Helmet>
        <title>Industries We Serve | Domain-Specific Digital Solutions | Zenbyto</title>
        <meta name="description" content="Explore Zenbyto's industry-tailored digital growth systems, custom web engineering, SEO, and paid media funnels for Tech, Real Estate, FinTech, Healthcare, Travel, E-commerce, and more." />
        <meta name="keywords" content="Industries We Serve, Industry Digital Marketing, SaaS Marketing, Real Estate Web Development, FinTech SEO, Healthcare Digital Marketing, Travel Booking Engines" />
        <link rel="canonical" href="https://www.zenbyto.com/industries" />
        
        {/* OpenGraph */}
        <meta property="og:type" content="article" />
        <meta property="og:title" content="Industries We Serve | Domain-Specific Digital Solutions | Zenbyto" />
        <meta property="og:description" content="Explore Zenbyto's industry-tailored digital growth systems, custom web engineering, SEO, and paid media funnels." />
        <meta property="og:url" content="https://www.zenbyto.com/industries" />
        <meta property="og:image" content="https://www.zenbyto.com/og-image.jpg" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Industries We Serve | Domain-Specific Digital Solutions | Zenbyto" />
        <meta name="twitter:description" content="Explore Zenbyto's industry-tailored digital growth systems, custom web engineering, SEO, and paid media funnels." />
        <meta name="twitter:image" content="https://www.zenbyto.com/og-image.jpg" />

        <meta name="robots" content="index, follow" />
        <script type="application/ld+json">{JSON.stringify(breadcrumbSchema)}</script>
      </Helmet>
      <Header />

      <main className="overflow-hidden bg-white">
        
        {/* Section 1: Unified Hero */}
        <InternalHero
          badge="BUILT FOR VISIBILITY. TAILORED FOR GROWTH."
          heading="Tailored Growth Systems Built for Your Exact Industry."
          description="Every industry operates under distinct regulatory standards, buyer behaviors, and search landscapes. ZenByto builds specialized acquisition platforms, custom web architectures, and growth engines designed to dominate your market."
          image={servicesHeroImg}
          imageAlt="Zenbyto Industry Digital Solutions & Growth Systems"
          imageAspect="aspect-[4/3]"
        >
          <Link to="/contact" className="glass-btn-primary px-8 py-3.5 text-xs font-bold rounded-full transition-all">
            Book Free Consultation
          </Link>
          <a href="#industries-grid" className="glass-btn-secondary px-8 py-3.5 text-xs font-bold rounded-full transition-all">
            View All Industries
          </a>
        </InternalHero>

        {/* Section 2: Industries Grid */}
        <section id="industries-grid" className="py-16 md:py-20 bg-white">
          <div className="max-w-7xl mx-auto px-6 md:px-12 space-y-12">
            <div className="text-center max-w-2xl mx-auto space-y-3">
              <span className="glass-badge-orange inline-flex items-center gap-1.5 px-3.5 py-1 text-[10px] font-bold tracking-widest uppercase bg-[#FE8233]/10 text-[#FE8233]">
                Industries We Serve
              </span>
              <h2 className="text-2xl md:text-4xl font-bold text-brand-dark">Domain-Specific Digital Engineering</h2>
              <p className="text-xs md:text-sm text-brand-gray">Select an industry to explore dedicated web architectures, acquisition blueprints, and tailored digital services.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {industriesList.map((ind) => (
                <div
                  key={ind.id}
                  className="group flex flex-col rounded-2xl bg-white border border-[#33387A]/15 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 overflow-hidden justify-between text-left"
                >
                  <div>
                    <div className="relative aspect-[16/10] w-full overflow-hidden bg-slate-950 p-2">
                      <img
                        src={ind.image}
                        alt={ind.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 rounded-xl opacity-90"
                        loading="lazy"
                      />
                    </div>

                    <div className="p-5 space-y-3">
                      <h3 className="font-bold text-lg text-brand-dark group-hover:text-primary transition-colors leading-tight">
                        {ind.title}
                      </h3>
                      <p className="text-xs text-brand-gray leading-relaxed font-normal line-clamp-3">
                        {ind.desc}
                      </p>

                      <div className="border-t border-slate-100 pt-3 space-y-1">
                        <span className="text-[10px] font-bold text-brand-dark uppercase tracking-wider block">Key Solutions:</span>
                        <ul className="space-y-1 text-[11px] text-brand-gray">
                          {ind.deliverables.map((d, dIdx) => (
                            <li key={dIdx} className="flex items-center gap-1.5">
                              <CheckCircle className="w-3 h-3 text-[#FE8233] shrink-0" />
                              <span className="truncate">{d}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div className="px-5 pb-5 pt-2">
                    <Link
                      to={ind.href}
                      className="glass-btn-secondary w-full text-center py-2.5 text-xs font-bold flex items-center justify-center gap-1.5 group-hover:bg-[#33387A] group-hover:text-white transition-all"
                    >
                      Explore Industry Page
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Section 3: FAQ Section */}
        <section className="py-16 bg-slate-50 border-t border-slate-200/80">
          <div className="max-w-4xl mx-auto px-6 md:px-12 space-y-10">
            <div className="text-center space-y-3">
              <span className="glass-badge-blue inline-flex items-center gap-1.5 px-3.5 py-1 text-[10px] font-bold tracking-widest uppercase">
                Frequently Asked Questions
              </span>
              <h2 className="text-2xl md:text-3xl font-bold text-brand-dark">Industry Solutions FAQs</h2>
            </div>

            <div className="space-y-4">
              {faqs.map((faq, idx) => {
                const isOpen = activeFaq === idx
                return (
                  <div
                    key={idx}
                    className="rounded-2xl bg-white border border-slate-200/80 overflow-hidden shadow-xs"
                  >
                    <button
                      onClick={() => setActiveFaq(isOpen ? null : idx)}
                      className="w-full p-5 text-left font-bold text-sm md:text-base text-brand-dark flex items-center justify-between gap-4 cursor-pointer focus:outline-none"
                    >
                      <span className="flex items-center gap-3">
                        <HelpCircle className="w-4 h-4 text-[#FE8233] shrink-0" />
                        {faq.q}
                      </span>
                      {isOpen ? (
                        <Minus className="w-4 h-4 text-[#33387A] shrink-0" />
                      ) : (
                        <Plus className="w-4 h-4 text-slate-400 shrink-0" />
                      )}
                    </button>

                    <AnimatePresence>
                      {isOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3 }}
                        >
                          <div className="px-5 pb-5 pt-1 text-xs md:text-sm text-brand-gray font-normal leading-relaxed border-t border-slate-100">
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

