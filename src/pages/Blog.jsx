import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import {
  ArrowRight,
  Search,
  User,
  Clock,
} from 'lucide-react'

// Layout Components
import Header from '../components/layout/Header'
import InternalHero from '../components/layout/InternalHero'
import Footer from '../components/layout/Footer'
import PageWrapper from '../components/layout/PageWrapper'
import CTA from '../components/sections/CTA'

import { blogsData } from '../data/blogData'

export default function Blog() {
  const [searchTerm, setSearchTerm] = useState('')
  const [newsletterEmail, setNewsletterEmail] = useState('')
  const [newsletterSubscribed, setNewsletterSubscribed] = useState(false)

  const featuredBlog = blogsData[0]

  const filteredBlogs = blogsData.filter((b) => {
    return b.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
           b.excerpt.toLowerCase().includes(searchTerm.toLowerCase())
  })

  const handleNewsletterSubmit = (e) => {
    e.preventDefault()
    if (newsletterEmail) {
      setNewsletterSubscribed(true)
      setNewsletterEmail('')
    }
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
        "name": "Blog",
        "item": "https://www.zenbyto.com/blog"
      }
    ]
  }

  return (
    <PageWrapper>
      <Helmet>
        <title>ZenByto Insights | Digital Growth, SEO & Marketing Blog</title>
        <meta name="description" content="Explore ZenByto's official blog for actionable insights on SEO, Google Search Console updates, digital strategy, and performance growth." />
        <link rel="canonical" href="https://zenbyto.com/blog" />
        
        {/* OpenGraph */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="ZenByto Insights | Digital Growth, SEO & Marketing Blog" />
        <meta property="og:description" content="Explore ZenByto's official blog for actionable insights on SEO, Google Search Console updates, digital strategy, and performance growth." />
        <meta property="og:url" content="https://zenbyto.com/blog" />
        <meta property="og:image" content="https://zenbyto.com/og-image.jpg" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="ZenByto Insights | Digital Growth, SEO & Marketing Blog" />
        <meta name="twitter:description" content="Explore ZenByto's official blog for actionable insights on SEO, Google Search Console updates, digital strategy, and performance growth." />
        <meta name="twitter:image" content="https://zenbyto.com/og-image.jpg" />

        <meta name="robots" content="index, follow" />
        <script type="application/ld+json">{JSON.stringify(breadcrumbSchema)}</script>
      </Helmet>

      <Header />

      <main className="overflow-hidden bg-white">
        
        {/* Section 1: Unified Hero */}
        <InternalHero
          badge="💡 Official ZenByto Insights"
          heading="Digital Marketing, SEO & Engineering Articles"
          description="Stay ahead of search algorithm updates, platform features, and growth strategies with verified insights."
          center={true}
        >
          <div className="w-full max-w-xl mx-auto pt-2">
            <div className="relative">
              <Search className="w-5 h-5 text-brand-gray/50 absolute left-4 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search articles (e.g. Google Search Console, SEO...)"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-3.5 rounded-full border border-[#33387A]/15 bg-white text-xs md:text-sm font-semibold text-brand-dark focus:outline-none focus:border-[#FE8233] shadow-sm"
              />
            </div>
          </div>
        </InternalHero>

        {/* Featured Article Spotlight */}
        {featuredBlog && !searchTerm && (
          <section className="max-w-7xl mx-auto px-6 md:px-12 py-8">
            <div className="bg-gradient-to-br from-slate-900 via-[#161936] to-slate-950 rounded-3xl p-6 md:p-10 text-white shadow-2xl border border-white/10">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                
                {/* Left Content */}
                <div className="lg:col-span-6 space-y-5">
                  <div className="flex items-center gap-2">
                    <span className="px-3 py-1 text-[9.5px] font-extrabold text-[#FE8233] bg-[#FE8233]/20 rounded-full uppercase tracking-wider">
                      Featured Spotlight
                    </span>
                    <span className="text-xs text-slate-400 font-semibold">• {featuredBlog.date}</span>
                  </div>

                  <Link to={`/blog/${featuredBlog.slug}`}>
                    <h2 className="text-2xl md:text-3xl font-black text-white hover:text-[#FE8233] transition-colors leading-tight">
                      {featuredBlog.title}
                    </h2>
                  </Link>

                  <p className="text-xs md:text-sm text-slate-300 leading-relaxed font-normal">
                    {featuredBlog.excerpt}
                  </p>

                  <div className="flex items-center gap-4 text-xs font-semibold text-slate-400 pt-2">
                    <span className="flex items-center gap-1.5 text-white">
                      <User className="w-3.5 h-3.5 text-[#FE8233]" />
                      {featuredBlog.author}
                    </span>
                    <span>•</span>
                    <span className="flex items-center gap-1.5">
                      <Clock className="w-3.5 h-3.5 text-emerald-400" />
                      {featuredBlog.readTime}
                    </span>
                  </div>

                  <div className="pt-2">
                    <Link
                      to={`/blog/${featuredBlog.slug}`}
                      className="glass-btn-primary px-7 py-3 text-xs font-bold rounded-full transition-all inline-flex items-center gap-2"
                    >
                      Read Full Case Article
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>

                {/* Right Image Container (Uncropped, Responsive object-contain) */}
                <div className="lg:col-span-6">
                  <Link to={`/blog/${featuredBlog.slug}`} className="block rounded-2xl overflow-hidden border border-white/15 bg-black/60 p-3 shadow-xl">
                    <picture className="w-full h-auto flex items-center justify-center">
                      <source media="(min-width: 1024px)" srcSet={featuredBlog.images.featuredDesktop} type="image/webp" />
                      <source media="(min-width: 640px)" srcSet={featuredBlog.images.featuredTablet} type="image/webp" />
                      <img
                        src={featuredBlog.images.featuredWebp}
                        alt={featuredBlog.title}
                        className="w-full h-auto object-contain object-center rounded-xl transition-transform duration-500 hover:scale-[1.02]"
                        loading="lazy"
                      />
                    </picture>
                  </Link>
                </div>

              </div>
            </div>
          </section>
        )}

        {/* Article Grid Section */}
        <section className="max-w-7xl mx-auto px-6 md:px-12 py-12">
          <div className="space-y-8">
            
            <div className="flex flex-wrap items-center justify-between gap-4">
              <h3 className="text-xl md:text-2xl font-bold text-brand-dark">Latest Published Articles</h3>
            </div>

            {/* Articles Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredBlogs.map((b) => (
                <div
                  key={b.id}
                  className="group flex flex-col rounded-2xl bg-white border border-[#33387A]/15 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 overflow-hidden justify-between"
                >
                  <div>
                    {/* Uncropped Image Container (Transparent bg, NO BLACK BOX) */}
                    <Link to={`/blog/${b.slug}`} className="block w-full bg-transparent p-3 border-b border-slate-100 flex items-center justify-center">
                      <img
                        src={b.images.featuredWebp}
                        alt={b.title}
                        className="w-full aspect-[16/10] object-contain object-center rounded-xl transition-transform duration-500 group-hover:scale-[1.02]"
                        loading="lazy"
                      />
                    </Link>

                    {/* Content Block */}
                    <div className="p-6 space-y-3">
                      <div className="flex items-center justify-between gap-2">
                        <span className="text-[10px] font-extrabold text-[#FE8233] bg-[#FE8233]/10 px-2.5 py-0.5 rounded-full uppercase tracking-wider">
                          {b.categoryLabel}
                        </span>
                        <span className="text-[11px] text-brand-gray font-semibold">{b.date} • {b.readTime}</span>
                      </div>

                      <Link to={`/blog/${b.slug}`}>
                        <h4 className="font-bold text-base md:text-lg text-brand-dark group-hover:text-primary transition-colors leading-tight line-clamp-2">
                          {b.title}
                        </h4>
                      </Link>

                      <p className="text-xs text-brand-gray leading-relaxed line-clamp-3">
                        {b.excerpt}
                      </p>
                    </div>
                  </div>

                  {/* Read Article Action */}
                  <div className="px-6 pb-6 pt-2">
                    <Link
                      to={`/blog/${b.slug}`}
                      className="glass-btn-secondary w-full text-center py-2.5 text-xs font-bold flex items-center justify-center gap-1.5 group-hover:bg-[#33387A] group-hover:text-white transition-all"
                    >
                      Read Article
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </section>

        {/* Newsletter Section */}
        <section className="py-12 bg-slate-900 text-white border-t border-slate-800">
          <div className="max-w-4xl mx-auto px-6 md:px-12 text-center space-y-6">
            <span className="text-[10px] font-extrabold text-[#FE8233] uppercase tracking-widest block">Stay Updated</span>
            <h3 className="text-2xl md:text-3xl font-extrabold text-white">Subscribe to ZenByto Search & Growth Brief</h3>
            <p className="text-xs md:text-sm text-slate-300 max-w-xl mx-auto">
              Receive verified insights on Google Search Console updates, SEO strategies, and digital platform optimizations.
            </p>

            <form onSubmit={handleNewsletterSubmit} className="max-w-md mx-auto flex gap-2">
              <input
                type="email"
                required
                placeholder="Enter your work email address..."
                value={newsletterEmail}
                onChange={(e) => setNewsletterEmail(e.target.value)}
                className="flex-1 px-4 py-3 text-xs font-semibold rounded-full bg-white/10 border border-white/20 text-white placeholder-slate-400 focus:outline-none focus:border-[#FE8233]"
              />
              <button
                type="submit"
                className="px-6 py-3 bg-[#FE8233] hover:bg-[#e06d20] text-white font-bold text-xs rounded-full transition-colors shrink-0"
              >
                Subscribe
              </button>
            </form>

            {newsletterSubscribed && (
              <p className="text-xs font-bold text-emerald-400">✔ Thank you for subscribing to ZenByto Insights!</p>
            )}
          </div>
        </section>

        {/* Global CTA */}
        <CTA
          heading="Ready to Engineer a Higher Growth Digital Strategy?"
          description="Book a free consultation with our team to discuss your website performance, SEO strategy, or digital marketing roadmap."
        />

      </main>

      <Footer />
    </PageWrapper>
  )
}
