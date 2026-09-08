import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import {
  ArrowRight,
  CheckCircle,
  HelpCircle,
  Plus,
  Minus,
  Search,
  Target,
  Code,
  Smartphone,
  MailOpen,
  Palette,
  Cpu,
  Users
} from 'lucide-react'

// Layout Components
import Header from '../components/layout/Header'
import InternalHero from '../components/layout/InternalHero'
import Footer from '../components/layout/Footer'
import PageWrapper from '../components/layout/PageWrapper'

// Import assets
import servicesHeroImg from '../assets/services/services_hero.webp'
import webDevImg from '../assets/homepage/webite-development.webp'
import appDevImg from '../assets/homepage/app-development.webp'
import brandImg from '../assets/homepage/brand-managment.webp'
import seoImg from '../assets/homepage/seo-link-building.webp'
import contentImg from '../assets/homepage/content-email-marketing.webp'
import adsImg from '../assets/homepage/googleads-metaads.webp'
import socialImg from '../assets/homepage/social-media-marketing.webp'
import serviceAiImg from '../assets/illustrations/ai_automation.jpg'

export default function Services() {
  const [activeFaq, setActiveFaq] = useState(null)

  const serviceData = [
    {
      id: 1,
      slug: 'seo-link-building',
      title: 'SEO & Link Building',
      icon: <Search className="w-5 h-5 text-white" />,
      desc: 'Dominating organic search results through technical SEO, Schema markup, high-intent keyword mapping, and authority backlinks.',
      deliverables: ['Technical SEO Audits', 'Keyword Mapping & Intent', 'Schema Markup Integration', 'Authority Backlink Strategy'],
      image: seoImg,
    },
    {
      id: 2,
      slug: 'google-meta-ads',
      title: 'Google & Meta Ads Management',
      icon: <Target className="w-5 h-5 text-white" />,
      desc: 'Scaling high-ROI paid media campaigns on Meta and Google Search/Shopping with server-side CAPI tracking.',
      deliverables: ['Conversions API (CAPI)', 'Custom Audience Funnels', 'Google Shopping & Search', 'Ad Creative Strategy'],
      image: adsImg,
    },
    {
      id: 3,
      slug: 'website-development',
      title: 'Website Design & Development',
      icon: <Code className="w-5 h-5 text-white" />,
      desc: 'Engineering high-speed, modern React/WooCommerce platforms optimized for sub-second loads and maximum conversion.',
      deliverables: ['React & Next.js Builds', 'WooCommerce Stores', 'Custom UI/UX Prototypes', 'Page Speed Optimization'],
      image: webDevImg,
    },
    {
      id: 4,
      slug: 'app-development',
      title: 'Mobile App Development',
      icon: <Smartphone className="w-5 h-5 text-white" />,
      desc: 'Cross-platform mobile apps built with React Native and Node.js backend infrastructure.',
      deliverables: ['iOS & Android Apps', 'React Native Core', 'REST API Integration', 'App Store Deployment'],
      image: appDevImg,
    },
    {
      id: 5,
      slug: 'content-email-marketing',
      title: 'Content & Email Marketing',
      icon: <MailOpen className="w-5 h-5 text-white" />,
      desc: 'Lifecycle email automation and educational content funnels designed to increase repeat purchases and LTV.',
      deliverables: ['Klaviyo Email Automations', 'Welcome & Cart Recovery', 'Educational Content Funnels', 'Customer LTV Optimization'],
      image: contentImg,
    },
    {
      id: 6,
      slug: 'brand-management',
      title: 'Brand Management & Identity',
      icon: <Palette className="w-5 h-5 text-white" />,
      desc: 'Establishing cohesive visual brand guidelines, vector systems, typography rules, and strategic market positioning.',
      deliverables: ['Visual Brand Manuals', 'Vector Icon Systems', 'Logo Architecture', 'Packaging & Digital Assets'],
      image: brandImg,
    },
    {
      id: 7,
      slug: 'ai-automation',
      title: 'AI & Business Automation',
      icon: <Cpu className="w-5 h-5 text-white" />,
      desc: 'Streamlining customer support and lead workflows with custom AI bots, API connectors, and automated CRM pipelines.',
      deliverables: ['Custom AI Assistants', 'CRM Pipeline Automations', 'API Connectors & Webhooks', 'Lead Scoring Systems'],
      image: serviceAiImg,
    },
    {
      id: 8,
      slug: 'social-media-marketing',
      title: 'Social Media & Community',
      icon: <Users className="w-5 h-5 text-white" />,
      desc: 'Building active digital communities and content calendars across Telegram, LinkedIn, X, and Instagram.',
      deliverables: ['Community Management', 'Daily Content Strategy', 'Influencer Outreach', 'Digital PR Placements'],
      image: socialImg,
    },
  ]

  const faqs = [
    {
      q: 'What digital marketing services does ZenByto offer?',
      a: 'ZenByto offers a complete range of digital growth services, including SEO, social media marketing, paid advertising, content marketing, website development, branding, and local SEO. We can work on individual services or build a complete digital strategy around your business goals.',
    },
    {
      q: 'How do I know which services my business needs?',
      a: 'Every business has different challenges. We first understand your business, target audience, competition, and current digital presence, then recommend the services and strategies that can make the biggest difference.',
    },
    {
      q: 'How long does it take to see results from digital marketing?',
      a: 'It depends on the service, your industry, competition, and starting point. Paid campaigns can generate results quickly, while SEO, content, and organic social media typically require consistent effort over time to build sustainable growth.',
    },
    {
      q: 'Can ZenByto work with a small or newly launched business?',
      a: 'Absolutely. You don\'t need to be an established brand to start building your digital presence. We create strategies based on your current stage, budget, and goals—whether you\'re launching a new business or trying to grow an existing one.',
    },
    {
      q: 'Why should I choose ZenByto for my digital marketing?',
      a: 'Because we don\'t believe in marketing for the sake of marketing. We focus on understanding what your business actually needs, building a practical strategy, and using the right digital channels to improve visibility, generate opportunities, and support long-term growth.',
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
        "name": "Services",
        "item": "https://www.zenbyto.com/services"
      }
    ]
  }

  return (
    <PageWrapper>
      <Helmet>
        <title>Digital Marketing Services, SEO & Website Development | ZenByto</title>
        <meta name="description" content="Explore ZenByto's digital marketing services including SEO, website development, social media marketing, branding, app development, PPC, and content marketing." />
        <meta name="keywords" content="Digital Marketing Services, SEO, PPC, Website Development, App Development, Brand Management" />
        <link rel="canonical" href="https://zenbyto.com/services" />
        
        {/* OpenGraph */}
        <meta property="og:type" content="article" />
        <meta property="og:title" content="Digital Marketing Services, SEO & Website Development | ZenByto" />
        <meta property="og:description" content="Explore ZenByto's digital marketing services including SEO, website development, social media marketing, branding, app development, PPC, and content marketing." />
        <meta property="og:url" content="https://zenbyto.com/services" />
        <meta property="og:image" content="https://zenbyto.com/og-image.jpg" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Digital Marketing Services, SEO & Website Development | ZenByto" />
        <meta name="twitter:description" content="Explore ZenByto's digital marketing services including SEO, website development, social media marketing, branding, app development, PPC, and content marketing." />
        <meta name="twitter:image" content="https://zenbyto.com/og-image.jpg" />

        <meta name="robots" content="index, follow" />
        <script type="application/ld+json">{JSON.stringify(breadcrumbSchema)}</script>
      </Helmet>
      <Header />

      <main className="overflow-hidden bg-white">
        
        {/* Section 1: Unified Hero */}
        <InternalHero
          badge="BUILT FOR VISIBILITY. DESIGNED FOR GROWTH."
          heading="Your Business Deserves More Than Just “Being Online.”"
          description="You need to be seen by the right people, at the right time, with the right message. From SEO and social media to paid advertising and web solutions, ZenByto helps turn your digital presence into a growth engine."
          image={servicesHeroImg}
          imageAlt="Zenbyto Digital Marketing & Technical Engineering Services"
          imageAspect="aspect-[4/3]"
        >
          <Link to="/contact" className="glass-btn-primary px-8 py-3.5 text-xs font-bold rounded-full transition-all">
            Book Free Consultation
          </Link>
          <a href="#services-grid" className="glass-btn-secondary px-8 py-3.5 text-xs font-bold rounded-full transition-all">
            View All Services
          </a>
        </InternalHero>

        {/* Section 2: Services Grid */}
        <section id="services-grid" className="py-16 md:py-20 bg-white">
          <div className="max-w-7xl mx-auto px-6 md:px-12 space-y-12">
            <div className="text-center max-w-2xl mx-auto space-y-3">
              <span className="glass-badge-orange inline-flex items-center gap-1.5 px-3.5 py-1 text-[10px] font-bold tracking-widest uppercase bg-[#FE8233]/10 text-[#FE8233]">
                Our Expertise
              </span>
              <h2 className="text-2xl md:text-4xl font-bold text-brand-dark">Specialized Services Overview</h2>
              <p className="text-xs md:text-sm text-brand-gray">Select any service to view detailed technical capabilities and execution blueprints.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {serviceData.map((svc) => (
                <div
                  key={svc.id}
                  className="group flex flex-col rounded-2xl bg-white border border-[#33387A]/15 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 overflow-hidden justify-between text-left"
                >
                  <div>
                    <div className="relative aspect-[16/10] w-full overflow-hidden bg-slate-950 p-2">
                      <img
                        src={svc.image}
                        alt={svc.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 rounded-xl"
                        loading="lazy"
                      />
                    </div>

                    <div className="p-5 space-y-3">
                      <h3 className="font-bold text-lg text-brand-dark group-hover:text-primary transition-colors leading-tight">
                        {svc.title}
                      </h3>
                      <p className="text-xs text-brand-gray leading-relaxed font-normal line-clamp-3">
                        {svc.desc}
                      </p>

                      <div className="border-t border-slate-100 pt-3 space-y-1">
                        <span className="text-[10px] font-bold text-brand-dark uppercase tracking-wider block">Deliverables:</span>
                        <ul className="space-y-1 text-[11px] text-brand-gray">
                          {svc.deliverables.map((d, dIdx) => (
                            <li key={dIdx} className="flex items-center gap-1.5">
                              <CheckCircle className="w-3 h-3 text-[#FE8233] shrink-0" />
                              <span>{d}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div className="px-5 pb-5 pt-2">
                    <Link
                      to={`/services/${svc.slug}`}
                      className="glass-btn-secondary w-full text-center py-2.5 text-xs font-bold flex items-center justify-center gap-1.5 group-hover:bg-[#33387A] group-hover:text-white transition-all"
                    >
                      Explore Service Page
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
              <h2 className="text-2xl md:text-3xl font-bold text-brand-dark">Service Delivery FAQs</h2>
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
