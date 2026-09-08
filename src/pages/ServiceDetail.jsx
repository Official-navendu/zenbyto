import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import {
  CheckCircle,
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

import Header from '../components/layout/Header'
import InternalHero from '../components/layout/InternalHero'
import Footer from '../components/layout/Footer'
import PageWrapper from '../components/layout/PageWrapper'
import Process from '../components/sections/Process'
import WhyChooseUs from '../components/sections/WhyChooseUs'

import serviceSeoImg from '../assets/services/service_seo.jpg'
import serviceAdsImg from '../assets/services/service_ads.jpg'
import serviceWebdevImg from '../assets/services/service_webdev.jpg'
import serviceAppdevImg from '../assets/services/service_appdev.jpg'
import serviceContentImg from '../assets/services/service_content.jpg'
import serviceBrandImg from '../assets/services/service_brand.jpg'
import serviceAiImg from '../assets/illustrations/ai_automation.jpg'
import serviceSocialImg from '../assets/influencer_marketing.jpg'

const serviceDatabase = {
  'seo-link-building': {
    title: 'SEO & Link Building Agency | Drive Organic Traffic | ZenByto',
    desc: 'Increase search rankings and organic traffic with data-driven SEO and ethical link building services. Build authority and generate more qualified leads with ZenByto.',
    heading: 'SEO & Link Building Services',
    subtitle: 'Dominate search engine rankings with semantic search optimization and authority backlinks.',
    icon: <Search className="w-5 h-5 text-white" />,
    image: serviceSeoImg,
    overview: 'Our search optimization programs prioritize crawling math, indexation hygiene, semantic markup, and premium authoritative link profiling over empty density tricks.',
    offerings: [
      { name: 'Technical SEO Audits', details: 'Faceted crawling configuration, XML sitemaps corrections, redirects cleanup, and Core Web Vitals optimizations.' },
      { name: 'Authority Backlinks', details: 'High-quality editorial outreach, blogger reviews, and contextual anchors targeting ranking keywords.' },
      { name: 'On-page Content maps', details: 'Intent clustering, heading hierarchy grids, keyword variations mappings, and schema markups.' },
      { name: 'Local Maps Packs', details: 'Google Business profile setups, maps ranking telemetry, and citations syndication.' },
    ],
    features: ['Technical & Speed Audits', 'Faceted Crawling Control', 'Authority Backlinks Generation', 'Keyword Intent Mapping', 'Local Maps Optimization', 'Competitor Rank Telemetry'],
    benefits: ['Consistently acquire organic traffic', 'Minimize dependency on paid PPC spends', 'Elevate digital brand authority'],
    tech: ['Ahrefs', 'Screaming Frog', 'Google Search Console', 'Schema.org JSON-LD'],
    ctaTitle: 'Own Your Organic Search Traffic Equity',
    faqs: [
      { q: 'Why is link building critical for SEO?', a: 'High-quality editorial backlinks act as third-party trust votes for Google, allowing your website to climb search rankings.' },
      { q: 'How long does search optimization take?', a: 'Initial crawling errors are resolved within 2-3 weeks, with organic conversions starting around 3-6 months.' },
      { q: 'Do you guarantee rank #1 positions?', a: 'No ethical agency guarantees exact rankings. We guarantee standard ranking metric lifts, organic search queries growth, and qualified clickpaths.' },
    ]
  },
  'google-meta-ads': {
    title: 'Google Ads & Meta Ads Services | PPC Agency | ZenByto',
    desc: 'Grow your business with expert Google Ads and Meta Ads management. From campaign setup to optimization, ZenByto helps maximize traffic, leads, and conversions.',
    heading: 'Google & Meta Ads Management',
    subtitle: 'Highly attributed customer acquisition campaigns built on math, server-side data, and copy testing.',
    icon: <Target className="w-5 h-5 text-white" />,
    image: serviceAdsImg,
    overview: 'We structure server-side attribution models (CAPI) and cross-channel paid campaigns designed to eliminate cookie drop-off and maximize Return on Ad Spend (ROAS).',
    offerings: [
      { name: 'Google Search & PMax', details: 'High-intent search campaigns, Performance Max catalog arrays, and negative match configurations.' },
      { name: 'Meta Attribution Funnels', details: 'Facebook & Instagram conversions mapping, custom audience lookalikes, and dynamic retargeting.' },
      { name: 'Server-Side tracking API', details: 'Setup Conversions API (CAPI), GTM containers, and server data log overrides.' },
      { name: 'Ad Copy & Angle Tests', details: 'Multivariate headlines split testing, visual graphic variations, and conversion hooks.' },
    ],
    features: ['Google PMax & Search Ads', 'Meta Conversions API Setup', 'Attribution Deduplication', 'Creative Angle Testing', 'Audience Segment Analytics', 'Retargeting Funnels'],
    benefits: ['Accelerate lead generation velocity', 'Unlock granular ROI attribution maps', 'Scale active campaigns predictably'],
    tech: ['Meta Ads Manager', 'Google Ads', 'Segment API', 'GTM Server-side'],
    ctaTitle: 'Scale Your Paid Attribution ROI',
    faqs: [
      { q: 'Why do browser-based ad pixels fail?', a: 'Ad blockers and cookie privacy policies drop up to 30% of conversion data. Server-side tracking syncs conversion data directly.' },
      { q: 'What is your target advertising ROAS?', a: 'We optimize campaigns to acquire customers profitably, typical clients record ROAS between 3.5x and 5x.' },
      { q: 'How much minimum budget is needed?', a: 'We recommend a minimum starting ad spend of $3,000 per month to gather conversion data signals.' },
    ]
  },
  'website-development': {
    title: 'Website Development | Custom Web Design Services | ZenByto',
    desc: 'Build fast, responsive, SEO-friendly websites with ZenByto. We create business websites, landing pages, eCommerce stores, and custom web solutions.',
    heading: 'Website Development Services',
    subtitle: 'Custom React codebases built for sub-second page loads and mobile layouts.',
    icon: <Code className="w-5 h-5 text-white" />,
    image: serviceWebdevImg,
    overview: 'We engineer secure, lightning-fast static and dynamic web systems. No bloated page builders—only clean components optimized for mobile performance.',
    offerings: [
      { name: 'React & Next.js Systems', details: 'Custom front-end components, static site generations, and server-rendered dashboards.' },
      { name: 'Custom E-commerce', details: 'WooCommerce configurations, custom Shopify setups, and headless cart integrations.' },
      { name: 'Landing Pages Stacks', details: 'High-speed marketing target sheets designed specifically for PPC ad clickpaths.' },
      { name: 'Speed Optimization', details: 'Image next-gen conversions, script bundles minifications, and Core Web Vitals checks.' },
    ],
    features: ['React & Next.js Stacks', 'Headless CMS Configurations', 'WooCommerce Storefronts', 'Mobile Responsive Grids', 'Core Web Vitals Optimizations', 'Static Code Architectures'],
    benefits: ['Under 2-second page load benchmarks', 'Higher landing page sign-up ratios', 'Secure, zero-maintenance web platforms'],
    tech: ['React', 'Next.js', 'Tailwind CSS', 'Vite'],
    ctaTitle: 'Deploy a High-Performance Web Engine',
    faqs: [
      { q: 'Do you use standard website builders?', a: 'No. We write clean, custom react and static codebases to eliminate page bloat and security issues.' },
      { q: 'What speed benchmarks do you guarantee?', a: 'We build codebases targeting under 2-second page loads on standard mobile networks.' },
      { q: 'Can we edit content ourselves later?', a: 'Yes. We integrate markdown files, local JSON systems, or headless CMS platforms (sanity/strapi) for easy copy edits.' },
    ]
  },
  'app-development': {
    title: 'Mobile App Development Company | Android & iOS Apps | ZenByto',
    desc: 'Develop scalable Android, iOS, and cross-platform mobile apps with ZenByto. Custom app development for startups and growing businesses.',
    heading: 'Mobile App Development Services',
    subtitle: 'iOS and Android apps featuring smooth animations and secure transaction pipelines.',
    icon: <Smartphone className="w-5 h-5 text-white" />,
    image: serviceAppdevImg,
    overview: 'We design and code responsive mobile applications with fluid UI/UX layouts, robust backend APIs, and secure transaction workflows.',
    offerings: [
      { name: 'Cross-Platform Apps', details: 'Deploying unified React Native codebases that run pixel-perfect on both Apple and Android.' },
      { name: 'Custom Mobile UI/UX', details: 'Responsive wireframe panels, custom buttons, dark-mode styling, and touch grids.' },
      { name: 'REST & WebSocket APIs', details: 'Linking mobile layers to backend databases with low-latency sockets.' },
      { name: 'Offline Storage schemes', details: 'Local database caching and sync engines for remote app functionality.' },
    ],
    features: ['React Native Mobile Stacks', 'iOS & Android Native code', 'Secure API Mappings', 'Offline Sync Systems', 'Push Notification Engines', 'App Store Submissions'],
    benefits: ['Unified user experiences on mobile', 'Fast API payload loading speeds', 'Scalable client membership databases'],
    tech: ['React Native', 'Swift', 'Kotlin', 'REST & WebSockets'],
    ctaTitle: 'Engineer Your Custom Mobile Application',
    faqs: [
      { q: 'Can we deploy to App Store and Google Play?', a: 'Yes. We handle the entire compilation, provisioning, and submission processes for both stores.' },
      { q: 'How do offline sync features function?', a: 'Apps store local data via SQLite or secure local state, automatically syncing database records when connections restore.' },
      { q: 'What is the standard app build duration?', a: 'Depending on complexity, standard custom apps require 3 to 5 months from mockups to store deployment.' },
    ]
  },
  'content-email-marketing': {
    title: 'Content Marketing Agency | Content Writing Services | ZenByto',
    desc: 'Drive traffic and conversions with SEO content writing, blogs, website copy, email marketing, and content strategy from ZenByto.',
    heading: 'Content & Email Marketing Services',
    subtitle: 'Behavior-triggered automated nurture funnels and copy that drives clicks.',
    icon: <MailOpen className="w-5 h-5 text-white" />,
    image: serviceContentImg,
    overview: 'By building data-driven newsletter segments, behavior-triggered automations, and authoritative search guides, we convert cold list contacts into repeating users.',
    offerings: [
      { name: 'Automated Drip Maps', details: 'Cart abandonment sequences, customer welcome checkups, and post-purchase nurture steps.' },
      { name: 'Copywriting Conversions', details: 'Direct response copy, marketing emails, headlines, and call-to-actions.' },
      { name: 'List Hygiene Audits', details: 'Correcting domain registers (SPF/DKIM/DMARC) to keep mailings out of spamboxes.' },
      { name: 'Authoritative Articles', details: 'Search intent articles built on technical outlines that rank organically.' },
    ],
    features: ['Automated Klaviyo Flow Maps', 'Search Intent Blog Guides', 'Copywriting Conversions scripts', 'List Health & Deliverability Audits', 'Audience Segmentation Schemes', 'Lead Nurturing Blueprints'],
    benefits: ['Higher email open and click-through rates', 'Increased repeating customer lifetime value', 'Authoritative search positioning'],
    tech: ['Klaviyo', 'ActiveCampaign', 'Hubspot', 'Mailchimp'],
    ctaTitle: 'Nurture Your Leads Automatically',
    faqs: [
      { q: 'How do email drip flows increase revenue?', a: 'By automating check-ins, cart recoveries, and recommendations triggered by real user actions.' },
      { q: 'Do you write all search content ourselves?', a: 'Yes. Our senior editors compile, research, and format guides tailored to your exact industry.' },
      { q: 'How do you prevent spambox filtering?', a: 'We configure custom sending subdomains, clean inactive users, and monitor domain blacklists.' },
    ]
  },
  'brand-management': {
    title: 'Brand Management Services | Brand Identity & Logo Design | ZenByto',
    desc: 'Build a memorable brand with ZenByto\'s branding services including logo design, visual identity, brand strategy, and creative storytelling.',
    heading: 'Brand Management Services',
    subtitle: 'Elevate your market position with unified vector design guides, typography grids, and guidelines.',
    icon: <Palette className="w-5 h-5 text-white" />,
    image: serviceBrandImg,
    overview: 'We conceptualize elegant brand guidelines, vectors, and visuals that communicate reliability, modern layouts, and premium digital authority.',
    offerings: [
      { name: 'Visual Branding Books', details: 'Hex color codes, spacing definitions, secondary badges, and visual presentation styles.' },
      { name: 'Vector Logo Kits', details: 'Scalable SVG layouts, dark-mode variations, favicon files, and brand emblems.' },
      { name: 'Corporate Presentation Grid', details: 'Typography charts, header styling grids, and unified visual layouts.' },
      { name: 'Reputation Audits', details: 'Monitoring client reviews, maps ratings, and active customer feedback structures.' },
    ],
    features: ['Custom Logo Visual Identity', 'Unified Grids & Typography', 'Social Media Branding templates', 'Reputation Review Audits', 'Visual Branding Books', 'Interactive PDF Catalogs'],
    benefits: ['Command premium market pricing', 'Consistent brand presentation globally', 'Boost customer loyalty and trust'],
    tech: ['Figma', 'Illustrator', 'Adobe CC', 'Penpot'],
    ctaTitle: 'Establish Your Premium Brand Authority',
    faqs: [
      { q: 'What is included in a visual guidelines pack?', a: 'We provide unified logo layouts, color codes (RGB/Hex), brand fonts, and graphic assets for corporate presentations.' },
      { q: 'How does reputation auditing benefit us?', a: 'We establish active workflows that monitor reviews, helping maintain your digital brand status.' },
      { q: 'Do we own full vector rights?', a: 'Yes. Upon final delivery, all source vector files (SVG/AI/Figma) belong 100% to your business.' },
    ]
  },
  'ai-automation': {
    title: 'AI Automation & Workflow Integration Services | ZenByto',
    desc: 'Scale operations and reduce overhead with custom AI agent systems, LLM database connectors, and automated workflows from ZenByto.',
    heading: 'AI Automation & Integrations',
    subtitle: 'Automate manual back-office tasks and customer operations with custom AI agents and pipelines.',
    icon: <Cpu className="w-5 h-5 text-white" />,
    image: serviceAiImg,
    overview: 'We engineer secure, custom AI pipelines and integrations. No generic bots—only clean agents connected to your proprietary data to automate workflows.',
    offerings: [
      { name: 'Custom AI Agents', details: 'Context-aware chatbots, automatic ticket routing, and customer support automations.' },
      { name: 'LLM & DB Connectors', details: 'Linking secure database records to private Large Language Models for automated queries.' },
      { name: 'Workflow Automations', details: 'Automated document processing, invoice reading pipelines, and automated reporting.' },
      { name: 'API System Integrations', details: 'Building secure API bridges between legacy CRM databases and AI services.' },
    ],
    features: ['Custom AI Agents Design', 'Private LLM Database Bridges', 'Secure API Systems Integration', 'Workflow Automation Maps', 'Automatic Reporting Pipelines', 'Custom CRM Integrations'],
    benefits: ['Reduce customer support wait times', 'Eliminate manual back-office overhead', 'Scale customer operations instantly'],
    tech: ['Python', 'LangChain', 'OpenAI API', 'FastAPI'],
    ctaTitle: 'Deploy Your Custom AI Automation Engine',
    faqs: [
      { q: 'Is our corporate data safe with AI?', a: 'Yes. We build bridges using private, secure API configurations ensuring that your database is never shared with public training models.' },
      { q: 'How long does an AI integration take?', a: 'Standard database integrations and workflows are deployed and fully tested in 4 to 8 weeks.' },
      { q: 'Can we build custom operational agents?', a: 'Yes. We design agents that connect to your inventory, calendar, or ticketing databases to perform custom business operations.' },
    ]
  },
  'social-media-marketing': {
    title: 'Social Media Marketing | Grow Your Social Presence | ZenByto',
    desc: 'Boost engagement and sales with ZenByto\'s social media marketing services. We create content, manage campaigns, and build strong online communities.',
    heading: 'Social Media Marketing',
    subtitle: 'Grow engagement and build strong online communities with tailored social strategies.',
    icon: <Users className="w-5 h-5 text-white" />,
    image: serviceSocialImg,
    overview: 'Our social media marketing frameworks prioritize community architecture, content design calendars, platform-specific messaging, and conversion funnel maps.',
    offerings: [
      { name: 'Content Strategy & Creation', details: 'High-quality graphic design, copy drafting, short-form video storyboarding, and post schedule mapping.' },
      { name: 'Community Management', details: 'Daily inbox monitoring, comment engagement, customer question routing, and active audience interaction.' },
      { name: 'Social Campaign Management', details: 'Paid amplification arrays, influencer partnership integrations, and event launch promotions.' },
      { name: 'Performance Analytics', details: 'Engagement logs, traffic attribution audits, follower growth telemetry, and monthly conversions reporting.' },
    ],
    features: ['Custom Content Calendars', 'Active Community Engagement', 'Influencer Collaboration Networks', 'Paid Social Amplification', 'Multi-platform Optimization', 'Analytics & ROI Telemetry'],
    benefits: ['Grow organic brand awareness', 'Nurture high-converting communities', 'Elevate referral customer pipelines'],
    tech: ['Figma', 'Hootsuite', 'Meta Business Suite', 'Google Analytics'],
    ctaTitle: 'Command Your Social Platform Authority',
    faqs: [
      { q: 'Which social platforms do you manage?', a: 'We manage all major networks including Instagram, LinkedIn, Facebook, X (Twitter), TikTok, and YouTube.' },
      { q: 'How often do you post content?', a: 'We design custom post frequencies based on your specific audience, typically ranging from 3 to 5 high-value posts per week.' },
      { q: 'Is influencer outreach included in this service?', a: 'Yes. We compile curated influencer candidate lists, handle negotiation bridges, and monitor campaign deliverables.' },
    ]
  }
}

export default function ServiceDetail({ slug }) {
  const [activeFaq, setActiveFaq] = useState(null)
  const data = serviceDatabase[slug]

  if (!data) {
    return (
      <PageWrapper>
        <Header />
        <div className="py-32 text-center text-sm font-semibold">Service not found.</div>
        <Footer />
      </PageWrapper>
    )
  }

  return (
    <PageWrapper>
      <Helmet>
        <title>{data.title}</title>
        <meta name="description" content={data.desc} />
        <link rel="canonical" href={`https://www.zenbyto.com/services/${slug}`} />
        
        {/* OpenGraph */}
        <meta property="og:type" content="article" />
        <meta property="og:title" content={data.title} />
        <meta property="og:description" content={data.desc} />
        <meta property="og:url" content={`https://www.zenbyto.com/services/${slug}`} />
        <meta property="og:image" content={data.image} />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={data.title} />
        <meta name="twitter:description" content={data.desc} />
        <meta name="twitter:image" content={data.image} />

        {/* Schemas */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "name": data.heading,
            "description": data.desc,
            "provider": {
              "@type": "Organization",
              "name": "Zenbyto",
              "url": "https://www.zenbyto.com"
            },
            "serviceType": data.heading,
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

      <main className="overflow-hidden">
        {/* Section 1: Unified Hero */}
        <InternalHero
          badge="✨ Service Solution"
          heading={data.heading}
          description={data.subtitle}
          image={data.image}
          imageAlt={data.heading}
          imageAspect="aspect-[4/3]"
        >
          <Link to="/contact" className="glass-btn-primary px-8 py-3.5 text-xs font-bold rounded-full transition-all">
            Book Free Consultation
          </Link>
          <a href="#overview-section" className="glass-btn-secondary px-8 py-3.5 text-xs font-bold rounded-full transition-all">
            Explore Solution
          </a>
        </InternalHero>

        {/* Section 2: Service Overview & What We Offer */}
        <section id="overview-section" className="py-12 md:py-16 bg-white border-t border-brand-dark/5">
          <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 text-left">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
              {/* Overview */}
              <div className="lg:col-span-5 space-y-4">
                <span className="text-[10px] font-bold tracking-widest text-[#FE8233] uppercase">Overview</span>
                <h2 className="text-2xl md:text-3xl font-bold text-brand-dark leading-tight">Solving Attribution & Growth Bottlenecks</h2>
                <p className="text-xs md:text-sm text-brand-gray leading-relaxed font-normal">{data.overview}</p>
              </div>

              {/* What We Offer */}
              <div className="lg:col-span-7 space-y-6">
                <span className="text-[10px] font-bold tracking-widest text-primary uppercase block">What We Offer</span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {data.offerings.map((item, idx) => (
                    <div key={idx} className="p-5 bg-[#33387A]/[0.01] border border-[#33387A]/10 rounded-2xl space-y-2 hover:border-[#FE8233] transition-colors">
                      <div className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-[#FE8233]" />
                        <h4 className="text-xs md:text-sm font-bold text-brand-dark">{item.name}</h4>
                      </div>
                      <p className="text-[11.5px] text-brand-gray leading-relaxed font-normal">{item.details}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 3: Alternating Features & Benefits Section */}
        <section className="py-12 md:py-16 bg-[#33387A]/[0.01] border-t border-brand-dark/5">
          <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              
              {/* Features list */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: false }}
                className="lg:col-span-6 text-left space-y-5"
              >
                <span className="text-[10px] font-bold tracking-widest text-[#FE8233] uppercase">Key Features</span>
                <h3 className="text-xl md:text-2xl font-bold text-brand-dark">Built For Scale & High Performance</h3>
                <div className="space-y-3">
                  {data.features.map((feat) => (
                    <div key={feat} className="flex items-start gap-2.5 text-xs text-brand-dark font-semibold">
                      <span className="text-[#FE8233] mt-0.5">✔</span>
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Benefits list */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: false }}
                className="lg:col-span-6 text-left space-y-5 p-6 bg-white border border-brand-dark/5 rounded-2xl shadow-sm"
              >
                <span className="text-[10px] font-bold tracking-widest text-primary uppercase">Business Benefits</span>
                <h3 className="text-xl md:text-2xl font-bold text-brand-dark font-semibold">Expected Conversion Growth</h3>
                <div className="space-y-4">
                  {data.benefits.map((ben, i) => (
                    <div key={ben} className="flex gap-3">
                      <div className="w-8 h-8 rounded-full bg-[#FE8233]/15 flex items-center justify-center font-bold text-[#FE8233] text-xs flex-shrink-0">
                        {i + 1}
                      </div>
                      <p className="text-xs md:text-sm text-brand-gray leading-relaxed font-normal mt-0.5">{ben}</p>
                    </div>
                  ))}
                </div>
              </motion.div>

            </div>
          </div>
        </section>

        {/* Section 4: Technologies & Tools */}
        <section className="py-12 md:py-16 bg-white border-t border-brand-dark/5">
          <div className="max-w-4xl mx-auto px-6 md:px-12 relative z-10 text-center space-y-8">
            <div className="space-y-2">
              <span className="text-[10px] font-bold tracking-widest text-primary uppercase">Stack integration</span>
              <h3 className="text-xl md:text-2xl font-bold text-brand-dark">Technologies & Tools We Integrate</h3>
            </div>
            <div className="flex flex-wrap justify-center gap-3">
              {data.tech.map((t) => (
                <span key={t} className="px-4 py-2 bg-[#33387A]/5 text-xs font-bold text-[#33387A] rounded-xl border border-[#33387A]/10">
                  {t}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* Section 5: Why Choose Zenbyto */}
        <WhyChooseUs />

        {/* Section 6: Our Working Process */}
        <Process />

        {/* Section 7: FAQs Accordions */}
        <section className="py-12 md:py-16 bg-white border-t border-brand-dark/5">
          <div className="max-w-4xl mx-auto px-6 md:px-12 relative z-10 text-center space-y-12">
            <div className="space-y-2">
              <h2 className="text-2xl md:text-[36px] font-semibold text-brand-dark">Frequently Asked Questions</h2>
              <p className="text-sm md:text-base text-brand-gray">Understand how we execute, deliver, and benchmark milestones.</p>
            </div>

            <div className="space-y-4 text-left">
              {data.faqs.map((faq, idx) => {
                const isOpen = activeFaq === idx
                return (
                  <div key={idx} className="border border-[#33387A]/10 rounded-xl overflow-hidden bg-white/40 backdrop-blur-md">
                    <button
                      onClick={() => setActiveFaq(isOpen ? null : idx)}
                      className="w-full px-5 py-4 flex items-center justify-between font-bold text-sm text-brand-dark hover:text-[#FE8233] transition-colors focus:outline-none"
                    >
                      {faq.q}
                      {isOpen ? <Minus className="w-4 h-4 text-primary" /> : <Plus className="w-4 h-4 text-primary" />}
                    </button>
                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.2 }}
                        >
                          <div className="px-5 pb-5 pt-1 text-xs text-brand-gray font-normal leading-relaxed border-t border-brand-dark/5">
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
