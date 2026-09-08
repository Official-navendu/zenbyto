import React, { useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import { 
  Calendar, 
  User, 
  Clock, 
  ChevronRight, 
  ArrowLeft, 
  ArrowRight,
  Link2,
  Share2,
  CheckCircle2,
  Plus,
  Minus,
  MessageCircle,
} from 'lucide-react'

// Inline SVG icons for Social Sharing
const LinkedinIcon = ({ className }) => (
  <svg viewBox="0 0 24 24" className={className} fill="currentColor">
    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/>
  </svg>
)

const FacebookIcon = ({ className }) => (
  <svg viewBox="0 0 24 24" className={className} fill="currentColor">
    <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H7.5v-3H10V9.5C10 7.01 11.49 5.65 13.75 5.65c1.08 0 2.22.19 2.22.19v2.44h-1.25c-1.23 0-1.62.77-1.62 1.56V12h2.77l-.44 3h-2.33v6.8c4.56-.93 8-4.96 8-9.8z"/>
  </svg>
)

const TwitterXIcon = ({ className }) => (
  <svg viewBox="0 0 24 24" className={className} fill="currentColor">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
  </svg>
)

import Header from '../components/layout/Header'
import Footer from '../components/layout/Footer'
import PageWrapper from '../components/layout/PageWrapper'
import CTA from '../components/sections/CTA'

import { blogsData } from '../data/blogData'

export default function BlogDetail() {
  const { slug } = useParams()
  const [copied, setCopied] = useState(false)
  const [activeFaq, setActiveFaq] = useState(null)

  // Find target blog by slug or fallback to first blog
  const blogIndex = blogsData.findIndex((b) => b.slug === slug)
  const blog = blogIndex !== -1 ? blogsData[blogIndex] : blogsData[0]

  // Previous and Next blogs for bottom navigation
  const prevBlog = blogIndex > 0 ? blogsData[blogIndex - 1] : null
  const nextBlog = blogIndex < blogsData.length - 1 ? blogsData[blogIndex + 1] : null

  const shareUrl = window.location.href

  const handleCopyLink = () => {
    navigator.clipboard.writeText(shareUrl)
    setCopied(true)
    setTimeout(() => setCopied(false), 2500)
  }

  // Article Schema
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": blog.title,
    "name": blog.metaTitle || blog.title,
    "description": blog.metaDescription || blog.excerpt,
    "image": `https://zenbyto.com${blog.images.featuredJpg || blog.images.featuredWebp}`,
    "author": {
      "@type": "Organization",
      "name": blog.author || "ZenByto Insights",
      "url": "https://zenbyto.com"
    },
    "publisher": {
      "@type": "Organization",
      "name": "Zenbyto",
      "logo": {
        "@type": "ImageObject",
        "url": "https://zenbyto.com/logo-dark.png"
      }
    },
    "datePublished": "2026-08-01",
    "dateModified": "2026-08-17",
    "mainEntityOfPage": `https://zenbyto.com/blog/${blog.slug}`
  }

  // Breadcrumb Schema
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
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": blog.title,
        "item": `https://www.zenbyto.com/blog/${blog.slug}`
      }
    ]
  }

  // FAQ Schema (Only generated when real FAQs exist in the article)
  const faqSchema = blog.faqs && blog.faqs.length > 0 ? {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": blog.faqs.map((f) => ({
      "@type": "Question",
      "name": f.q,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": f.a
      }
    }))
  } : null

  return (
    <PageWrapper>
      <Helmet>
        <title>{blog.metaTitle || `${blog.title} | ZenByto Blog`}</title>
        <meta name="description" content={blog.metaDescription || blog.excerpt} />
        <link rel="canonical" href={`https://zenbyto.com/blog/${blog.slug}`} />

        {/* OpenGraph */}
        <meta property="og:type" content="article" />
        <meta property="og:title" content={blog.metaTitle || blog.title} />
        <meta property="og:description" content={blog.metaDescription || blog.excerpt} />
        <meta property="og:url" content={`https://zenbyto.com/blog/${blog.slug}`} />
        <meta property="og:image" content={`https://zenbyto.com${blog.images.featuredJpg || blog.images.featuredWebp}`} />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={blog.metaTitle || blog.title} />
        <meta name="twitter:description" content={blog.metaDescription || blog.excerpt} />
        <meta name="twitter:image" content={`https://zenbyto.com${blog.images.featuredJpg || blog.images.featuredWebp}`} />

        <meta name="robots" content="index, follow" />
        <script type="application/ld+json">{JSON.stringify(articleSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(breadcrumbSchema)}</script>
        {faqSchema && <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>}
      </Helmet>

      <Header />

      <main className="pt-[110px] md:pt-[120px] lg:pt-[140px] pb-16 bg-transparent overflow-visible">
        
        {/* Back Link */}
        <div className="max-w-[1280px] mx-auto px-6 md:px-12 pb-6">
          <Link
            to="/blog"
            className="inline-flex items-center gap-2 text-xs font-bold text-brand-gray hover:text-[#FE8233] transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to All Articles
          </Link>
        </div>

        {/* Hero Section */}
        <section className="max-w-[1280px] mx-auto px-6 md:px-12 pb-8">
          <div className="mt-6 sm:mt-8 lg:mt-10 p-6 sm:p-8 md:p-12 rounded-[32px] border border-[#FE8233]/20 bg-transparent relative overflow-visible shadow-[0_4px_20px_rgba(0,0,0,0.02)] space-y-6">
            <div className="space-y-4 max-w-4xl mx-auto text-center">
              <div className="flex flex-wrap items-center justify-center gap-3">
                <span className="glass-badge-orange inline-flex items-center gap-1.5 px-3.5 py-1 text-[11px] font-extrabold tracking-wider uppercase bg-[#FE8233]/10 text-[#FE8233] border border-[#FE8233]/20 rounded-full">
                  {blog.categoryLabel}
                </span>
              </div>

              <h1 className="text-[28px] sm:text-[34px] md:text-[42px] lg:text-[50px] font-black text-brand-dark tracking-tight leading-[1.15]">
                {blog.title}
              </h1>

              {/* Author & Meta row */}
              <div className="flex flex-wrap items-center justify-center gap-4 text-xs font-semibold text-brand-gray border-y border-slate-100 py-3">
                <span className="flex items-center gap-1.5 text-brand-dark">
                  <User className="w-4 h-4 text-[#FE8233]" />
                  {blog.author}
                </span>
                <span className="text-slate-300">•</span>
                <span className="flex items-center gap-1.5">
                  <Calendar className="w-4 h-4 text-[#33387A]" />
                  {blog.date}
                </span>
                <span className="text-slate-300">•</span>
                <span className="flex items-center gap-1.5">
                  <Clock className="w-4 h-4 text-[#FE8233]" />
                  {blog.readTime}
                </span>
              </div>
            </div>

            {/* Featured Image Container (Transparent bg, NO BLACK BOX, object-contain) */}
            <div className="w-full max-w-4xl mx-auto rounded-2xl overflow-hidden bg-transparent p-2 my-6 flex items-center justify-center">
              <picture className="w-full h-auto flex items-center justify-center">
                <source media="(min-width: 1024px)" srcSet={blog.images.featuredDesktop} type="image/webp" />
                <source media="(min-width: 640px)" srcSet={blog.images.featuredTablet} type="image/webp" />
                <source srcSet={blog.images.featuredMobile} type="image/webp" />
                <img
                  src={blog.images.featuredWebp}
                  alt={blog.title}
                  className="w-full h-auto object-contain object-center rounded-xl drop-shadow-md"
                  loading="eager"
                />
              </picture>
            </div>
          </div>
        </section>

        {/* Content Layout */}
        <section className="max-w-4xl mx-auto px-6 md:px-12 py-4">
          <div className="grid grid-cols-1 gap-10">
            
            {/* Table of Contents */}
            {blog.toc && blog.toc.length > 0 && (
              <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-3">
                <span className="text-xs font-black uppercase tracking-wider text-[#FE8233] block">
                  Table of Contents
                </span>
                <ul className="space-y-2 text-xs md:text-sm font-bold text-brand-dark">
                  {blog.toc.map((item) => (
                    <li key={item.id}>
                      <a
                        href={`#${item.id}`}
                        className="hover:text-[#FE8233] transition-colors flex items-center gap-2"
                      >
                        <ChevronRight className="w-3.5 h-3.5 text-[#33387A]" />
                        <span>{item.label}</span>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Article Content Sections */}
            <article className="prose prose-slate max-w-none space-y-8 text-brand-dark text-sm md:text-base leading-relaxed">
              {blog.contentSections.map((section, idx) => {
                if (section.type === 'intro') {
                  return (
                    <div key={idx} className="space-y-4 text-base md:text-lg font-normal text-brand-dark leading-relaxed">
                      {section.text.split('\n\n').map((paragraph, pIdx) => (
                        <p key={pIdx} className={pIdx === 0 ? "font-medium text-brand-dark" : ""}>
                          {paragraph}
                        </p>
                      ))}
                    </div>
                  )
                }

                return (
                  <div key={section.id || idx} id={section.id} className="space-y-4 pt-4 border-t border-slate-100 scroll-mt-28">
                    <h2 className="text-xl md:text-2xl font-extrabold text-brand-dark tracking-tight">
                      {section.title}
                    </h2>

                    {section.text && (
                      <div className="space-y-3">
                        {section.text.split('\n\n').map((paragraph, pIdx) => (
                          <div key={pIdx}>
                            {paragraph.includes('•') ? (
                              <ul className="space-y-1.5 my-2 pl-2">
                                {paragraph.split('\n').map((line, lIdx) => {
                                  if (line.startsWith('•')) {
                                    const cleanLine = line.replace('•', '').trim()
                                    return (
                                      <li key={lIdx} className="flex items-start gap-2 text-xs md:text-sm text-brand-dark font-medium">
                                        <CheckCircle2 className="w-4 h-4 text-[#FE8233] shrink-0 mt-0.5" />
                                        <span>{cleanLine}</span>
                                      </li>
                                    )
                                  }
                                  return <p key={lIdx}>{line}</p>
                                })}
                              </ul>
                            ) : (
                              <p className="text-brand-gray leading-relaxed">{paragraph}</p>
                            )}
                          </div>
                        ))}
                      </div>
                    )}

                    {/* Step list if applicable */}
                    {section.steps && (
                      <ol className="space-y-2 pl-2 my-4">
                        {section.steps.map((step, sIdx) => (
                          <li key={sIdx} className="flex items-start gap-3 bg-slate-50 p-3 rounded-xl border border-slate-200/60 text-xs md:text-sm font-semibold text-brand-dark">
                            <span className="w-6 h-6 rounded-full bg-[#33387A] text-white text-xs font-black flex items-center justify-center shrink-0">
                              {sIdx + 1}
                            </span>
                            <span className="pt-0.5">{step}</span>
                          </li>
                        ))}
                      </ol>
                    )}

                    {/* Section Image graphic (Uncropped with object-contain) */}
                    {section.hasImage && (
                      <div className="my-6 p-3 bg-transparent rounded-2xl border border-slate-200 shadow-sm text-center space-y-2">
                        <img
                          src={blog.images.propertySelectionWebp}
                          alt={section.imageCaption || section.title}
                          className="w-full h-auto max-h-[400px] object-contain mx-auto rounded-xl"
                          loading="lazy"
                        />
                        <p className="text-[11px] font-bold text-slate-500 tracking-wide uppercase">
                          {section.imageCaption}
                        </p>
                      </div>
                    )}
                  </div>
                )
              })}
            </article>

            {/* FAQ Accordion Section (If present in blog data) */}
            {blog.faqs && blog.faqs.length > 0 && (
              <div id="faqs" className="pt-8 border-t border-slate-200 space-y-6 scroll-mt-28">
                <div className="space-y-1">
                  <span className="text-xs font-black uppercase tracking-wider text-[#FE8233]">Frequently Asked Questions</span>
                  <h3 className="text-2xl font-bold text-brand-dark">Article FAQs</h3>
                </div>

                <div className="space-y-3">
                  {blog.faqs.map((faq, fIdx) => {
                    const isOpen = activeFaq === fIdx
                    return (
                      <div
                        key={fIdx}
                        className="rounded-2xl border border-slate-200 bg-white overflow-hidden shadow-xs transition-colors hover:border-[#FE8233]/40"
                      >
                        <button
                          onClick={() => setActiveFaq(isOpen ? null : fIdx)}
                          className="w-full p-4 md:p-5 text-left font-bold text-sm md:text-base text-brand-dark flex items-center justify-between gap-4 cursor-pointer focus:outline-none"
                        >
                          <span className="leading-snug">{faq.q}</span>
                          <div className="w-7 h-7 rounded-full bg-slate-100 flex items-center justify-center shrink-0">
                            {isOpen ? (
                              <Minus className="w-4 h-4 text-[#FE8233]" />
                            ) : (
                              <Plus className="w-4 h-4 text-[#33387A]" />
                            )}
                          </div>
                        </button>

                        {isOpen && (
                          <div className="px-4 md:px-5 pb-5 pt-1 text-xs md:text-sm text-brand-gray font-normal leading-relaxed border-t border-slate-100">
                            {faq.a}
                          </div>
                        )}
                      </div>
                    )
                  })}
                </div>
              </div>
            )}

            {/* Social Share Buttons */}
            <div className="border-y border-slate-200 py-6 flex flex-wrap items-center justify-between gap-4">
              <div className="flex items-center gap-2">
                <Share2 className="w-4 h-4 text-[#FE8233]" />
                <span className="text-xs font-bold text-brand-dark uppercase tracking-wider">Share Article:</span>
              </div>
              <div className="flex flex-wrap items-center gap-2">
                <a
                  href={`https://api.whatsapp.com/send?text=${encodeURIComponent(blog.title + ' ' + shareUrl)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3.5 py-2 text-xs font-bold rounded-lg border border-slate-200 bg-emerald-50 text-emerald-700 hover:bg-emerald-100 transition-colors flex items-center gap-1.5"
                >
                  <MessageCircle className="w-3.5 h-3.5" />
                  WhatsApp
                </a>
                <a
                  href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3.5 py-2 text-xs font-bold rounded-lg border border-slate-200 bg-blue-50 text-blue-700 hover:bg-blue-100 transition-colors flex items-center gap-1.5"
                >
                  <LinkedinIcon className="w-3.5 h-3.5" />
                  LinkedIn
                </a>
                <a
                  href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3.5 py-2 text-xs font-bold rounded-lg border border-slate-200 bg-indigo-50 text-indigo-700 hover:bg-indigo-100 transition-colors flex items-center gap-1.5"
                >
                  <FacebookIcon className="w-3.5 h-3.5" />
                  Facebook
                </a>
                <a
                  href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(shareUrl)}&text=${encodeURIComponent(blog.title)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3.5 py-2 text-xs font-bold rounded-lg border border-slate-200 bg-slate-100 text-slate-800 hover:bg-slate-200 transition-colors flex items-center gap-1.5"
                >
                  <TwitterXIcon className="w-3.5 h-3.5" />
                  X / Twitter
                </a>
                <button
                  onClick={handleCopyLink}
                  className="px-3.5 py-2 text-xs font-bold rounded-lg border border-slate-200 bg-slate-50 text-brand-dark hover:bg-slate-100 transition-colors flex items-center gap-1.5 cursor-pointer"
                >
                  <Link2 className="w-3.5 h-3.5 text-[#33387A]" />
                  {copied ? 'Copied!' : 'Copy Link'}
                </button>
              </div>
            </div>

            {/* Previous / Next Article Navigation */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4">
              {prevBlog ? (
                <Link
                  to={`/blog/${prevBlog.slug}`}
                  className="p-5 rounded-2xl border border-slate-200 bg-white hover:border-[#FE8233]/50 transition-colors space-y-1 block group"
                >
                  <span className="text-[10px] font-extrabold uppercase tracking-wider text-brand-gray flex items-center gap-1">
                    <ArrowLeft className="w-3 h-3 text-[#FE8233]" />
                    Previous Article
                  </span>
                  <h4 className="font-bold text-sm text-brand-dark group-hover:text-[#FE8233] transition-colors line-clamp-1">
                    {prevBlog.title}
                  </h4>
                </Link>
              ) : <div />}

              {nextBlog && (
                <Link
                  to={`/blog/${nextBlog.slug}`}
                  className="p-5 rounded-2xl border border-slate-200 bg-white hover:border-[#FE8233]/50 transition-colors space-y-1 block text-right group md:col-start-2"
                >
                  <span className="text-[10px] font-extrabold uppercase tracking-wider text-brand-gray flex items-center justify-end gap-1">
                    Next Article
                    <ArrowRight className="w-3 h-3 text-[#FE8233]" />
                  </span>
                  <h4 className="font-bold text-sm text-brand-dark group-hover:text-[#FE8233] transition-colors line-clamp-1">
                    {nextBlog.title}
                  </h4>
                </Link>
              )}
            </div>

          </div>
        </section>

        {/* Global CTA */}
        <CTA
          heading="Ready to Scale Your Search & Platform Performance?"
          description="Book a free 30-minute consultation with our growth engineers to discuss your SEO, Google Maps visibility, or digital marketing goals."
        />

      </main>

      <Footer />
    </PageWrapper>
  )
}
