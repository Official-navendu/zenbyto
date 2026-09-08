import React from 'react'
import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import {
  Eye,
  Target,
  BookOpen,
  Code2,
  Database,
  Wrench,
  Server,
} from 'lucide-react'

// Layout/Section Components
import Header from '../components/layout/Header'
import InternalHero from '../components/layout/InternalHero'
import IndustriesWeServe from '../components/sections/IndustriesWeServe'
import Process from '../components/sections/Process'
import WhyChooseUs from '../components/sections/WhyChooseUs'
import Footer from '../components/layout/Footer'
import PageWrapper from '../components/layout/PageWrapper'

// Import assets
import aboutHero from '../assets/about/about_hero.webp'

export default function About() {
  const stats = [
    { value: '100+', label: 'Projects Completed' },
    { value: '95%', label: 'Client Satisfaction' },
    { value: '10+', label: 'Industries Served' },
    { value: '5+', label: 'Core Services' },
  ]

  const visionMissionStory = [
    {
      title: 'Our Vision',
      desc: 'To help businesses build digital brands that are visible, trusted, and built for long-term growth—not just short-term attention.',
      icon: <Eye className="w-5 h-5 text-white" />,
      bg: 'bg-[#33387A]',
    },
    {
      title: 'Our Mission',
      desc: 'To turn digital marketing into a genuine growth channel by combining smart strategy, creative execution, and measurable performance.',
      icon: <Target className="w-5 h-5 text-white" />,
      bg: 'bg-[#FE8233]',
    },
    {
      title: 'Our Story',
      desc: "ZenByto was built around a simple idea: businesses shouldn't have to struggle with disconnected marketing efforts. We bring the right strategies, channels, and creative thinking together to help businesses move from being overlooked to being noticed, chosen, and remembered.",
      icon: <BookOpen className="w-5 h-5 text-white" />,
      bg: 'bg-[#33387A]',
    },
  ]

  const digitalCapabilities = [
    {
      category: 'Search & Organic Growth',
      icon: <Code2 className="w-5 h-5 text-[#33387A]" />,
      items: ['SEO', 'Local SEO', 'Technical SEO', 'Content Strategy', 'Google Business Profile'],
    },
    {
      category: 'Paid Advertising & Performance',
      icon: <Server className="w-5 h-5 text-[#FE8233]" />,
      items: ['Google Ads', 'Meta Ads', 'Performance Campaigns', 'Lead Generation', 'Conversion Optimization'],
    },
    {
      category: 'Social Media & Content',
      icon: <Wrench className="w-5 h-5 text-[#FE8233]" />,
      items: ['Social Media Marketing', 'Content Creation', 'Creative Strategy', 'Brand Communication', 'Community Growth'],
    },
    {
      category: 'Websites & Digital Experiences',
      icon: <Database className="w-5 h-5 text-[#33387A]" />,
      items: ['Website Development', 'UI/UX', 'Landing Pages', 'E-Commerce', 'Conversion-Focused Design'],
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
        "name": "About Us",
        "item": "https://www.zenbyto.com/about"
      }
    ]
  }

  return (
    <PageWrapper>
      <Helmet>
        <title>About Zenbyto | Digital Growth Agency & Tech Partner</title>
        <meta name="description" content="ZenByto is a digital growth agency built for businesses that want more than just an online presence. We combine strategy, creativity, technology, and performance marketing to help brands grow sustainably." />
        <meta name="keywords" content="About Zenbyto, Digital Growth Agency, Search Organic Growth, Paid Advertising, Social Media Content, Custom Web Development" />
        <link rel="canonical" href="https://zenbyto.com/about" />
        
        {/* OpenGraph */}
        <meta property="og:type" content="article" />
        <meta property="og:title" content="About Zenbyto | Digital Growth Agency & Tech Partner" />
        <meta property="og:description" content="We combine strategy, creativity, technology, and performance marketing to help brands get discovered, connect with the right audience, generate leads, and grow sustainably." />
        <meta property="og:url" content="https://zenbyto.com/about" />
        <meta property="og:image" content="https://zenbyto.com/og-image.jpg" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="About Zenbyto | Digital Growth Agency & Tech Partner" />
        <meta name="twitter:description" content="We combine strategy, creativity, technology, and performance marketing to help brands get discovered, connect with the right audience, generate leads, and grow sustainably." />
        <meta name="twitter:image" content="https://zenbyto.com/og-image.jpg" />

        <meta name="robots" content="index, follow" />
        <script type="application/ld+json">{JSON.stringify(breadcrumbSchema)}</script>
      </Helmet>
      <Header />

      <main className="overflow-hidden bg-white">
        
        {/* About Hero Section */}
        <InternalHero
          badge="About Zenbyto"
          heading="We Help Businesses Turn Digital Presence Into Real Growth"
          description="ZenByto is a digital growth agency built for businesses that want more than just an online presence. We combine strategy, creativity, technology, and performance marketing to help brands get discovered, connect with the right audience, generate leads, and grow sustainably."
          image={aboutHero}
          imageAlt="Zenbyto Digital Growth Agency"
          imageAspect="aspect-[4/3]"
        >
          <Link to="/contact" className="glass-btn-primary px-8 py-3.5 text-xs font-bold rounded-full transition-all">
            Book Free Consultation
          </Link>
          <Link to="/portfolio" className="glass-btn-secondary px-8 py-3.5 text-xs font-bold rounded-full transition-all">
            Explore Case Studies
          </Link>
        </InternalHero>

        {/* Section 2: Metrics Bar */}
        <section className="py-12 bg-slate-50 border-b border-slate-200/80">
          <div className="max-w-7xl mx-auto px-6 md:px-12">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              {stats.map((st, i) => (
                <div key={i} className="p-4 space-y-1">
                  <p className="text-3xl md:text-4xl font-black text-[#FE8233]">{st.value}</p>
                  <p className="text-xs font-bold text-brand-dark uppercase tracking-wider">{st.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Section 3: Vision, Mission & Story */}
        <section className="py-16 md:py-20 bg-white">
          <div className="max-w-7xl mx-auto px-6 md:px-12 space-y-12">
            <div className="text-center max-w-2xl mx-auto space-y-3">
              <span className="glass-badge-blue inline-flex items-center gap-1.5 px-3.5 py-1 text-[10px] font-bold tracking-widest uppercase">
                Our Core Pillars
              </span>
              <h2 className="text-2xl md:text-4xl font-bold text-brand-dark">Built Around Growth That Matters</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {visionMissionStory.map((item, idx) => (
                <div
                  key={idx}
                  className="p-8 rounded-2xl bg-white border border-[#33387A]/15 shadow-sm space-y-4 hover:border-[#FE8233] transition-colors"
                >
                  <div className={`w-12 h-12 rounded-xl ${item.bg} flex items-center justify-center`}>
                    {item.icon}
                  </div>
                  <h3 className="font-bold text-xl text-brand-dark">{item.title}</h3>
                  <p className="text-xs md:text-sm text-brand-gray leading-relaxed font-normal">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Section 4: Reused Homepage Industries We Serve Section */}
        <IndustriesWeServe />

        {/* Section 5: Our Digital Capabilities */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-6 md:px-12 space-y-12">
            <div className="text-center max-w-2xl mx-auto space-y-3">
              <span className="glass-badge-blue inline-flex items-center gap-1.5 px-3.5 py-1 text-[10px] font-bold tracking-widest uppercase">
                OUR DIGITAL CAPABILITIES
              </span>
              <h2 className="text-2xl md:text-4xl font-bold text-brand-dark">Everything You Need to Grow Online</h2>
              <p className="text-xs md:text-sm text-brand-gray max-w-2xl mx-auto leading-relaxed">
                We bring strategy, creativity, technology, and performance together so your digital growth doesn't depend on disconnected efforts.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {digitalCapabilities.map((cGroup, idx) => (
                <div key={idx} className="p-8 rounded-2xl bg-white border border-[#33387A]/15 shadow-sm space-y-4 hover:border-[#FE8233] transition-colors">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-slate-100 flex items-center justify-center">
                      {cGroup.icon}
                    </div>
                    <h3 className="font-bold text-lg text-brand-dark">{cGroup.category}</h3>
                  </div>
                  <div className="flex flex-wrap gap-2 pt-2">
                    {cGroup.items.map((item) => (
                      <span key={item} className="px-3 py-1.5 rounded-lg bg-[#33387A]/5 text-[#33387A] text-xs font-bold border border-[#33387A]/10">
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Section 6: Process */}
        <Process />

        {/* Section 7: The Zenbyto Edge / Why Choose Zenbyto */}
        <WhyChooseUs
          badge="OUR DIGITAL CAPABILITIES"
          heading="Everything You Need to Grow Online"
          description="We bring strategy, creativity, technology, and performance together so your digital growth doesn't depend on disconnected efforts."
          customPillars={[
            {
              title: 'Search & Organic Growth',
              desc: 'SEO · Local SEO · Technical SEO · Content Strategy · Google Business Profile',
            },
            {
              title: 'Paid Advertising & Performance',
              desc: 'Google Ads · Meta Ads · Performance Campaigns · Lead Generation · Conversion Optimization',
            },
            {
              title: 'Social Media & Content',
              desc: 'Social Media Marketing · Content Creation · Creative Strategy · Brand Communication · Community Growth',
            },
            {
              title: 'Websites & Digital Experiences',
              desc: 'Website Development · UI/UX · Landing Pages · E-Commerce · Conversion-Focused Design',
            },
          ]}
        />

      </main>

      <Footer />
    </PageWrapper>
  )
}
