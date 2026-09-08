import React from 'react'
import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import { Shield } from 'lucide-react'
import Header from '../components/layout/Header'
import Footer from '../components/layout/Footer'
import PageWrapper from '../components/layout/PageWrapper'

export default function CancellationPolicy() {
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
        "name": "Cancellation Policy",
        "item": "https://www.zenbyto.com/cancellation-policy"
      }
    ]
  }

  return (
    <PageWrapper>
      <Helmet>
        <title>Cancellation Policy | Zenbyto</title>
        <meta name="description" content="Review Zenbyto's Cancellation Policy regarding service retainers, consulting schedules, and custom software project termination terms." />
        <link rel="canonical" href="https://www.zenbyto.com/cancellation-policy" />
        <script type="application/ld+json">{JSON.stringify(breadcrumbSchema)}</script>
      </Helmet>

      <Header />

      <main className="bg-white font-sans overflow-hidden">
        {/* Hero Section */}
        <section
          className="relative pt-32 pb-16 md:pt-40 md:pb-20 bg-white border-b border-brand-dark/5"
          style={{
            background: 'linear-gradient(180deg, #ffffff 0%, rgba(51, 56, 122, 0.04) 50%, #ffffff 100%)',
          }}
        >
          <div className="absolute inset-0 opacity-[0.01] bg-[linear-gradient(to_right,#33387A_1px,transparent_1px),linear-gradient(to_bottom,#33387A_1px,transparent_1px)] bg-[size:3rem_3rem] pointer-events-none" />
          
          <div className="max-w-4xl mx-auto px-6 relative z-10 text-center flex flex-col items-center">
            <span className="glass-badge-orange inline-flex items-center gap-1.5 px-3 py-1 text-[10px] sm:text-xs font-semibold tracking-wide uppercase">
              <Shield className="w-3.5 h-3.5 text-[#FE8233]" />
              Cancellation terms
            </span>
            <h1 
              className="font-bold text-[#111111] tracking-normal mt-4"
              style={{ fontSize: 'clamp(2rem, 3.8vw, 3rem)', lineHeight: 1.1 }}
            >
              Cancellation Policy
            </h1>
            <p className="text-xs text-brand-gray/60 font-semibold mt-3">Last Updated: July 2026</p>
          </div>
        </section>

        {/* Content Section */}
        <section className="py-16 bg-white">
          <div className="max-w-3xl mx-auto px-6 text-left">
            
            {/* Breadcrumb links */}
            <div className="flex items-center space-x-2 text-xs text-brand-gray/60 font-medium mb-8">
              <Link to="/" className="hover:text-primary transition-colors">Home</Link>
              <span>/</span>
              <span className="text-[#111111]">Cancellation Policy</span>
            </div>

            <article className="prose max-w-none text-[#111111] leading-relaxed text-sm md:text-base space-y-6">
              <p>
                Zenbyto provides premium retainer services and custom projects. This Cancellation Policy describes the terms under which you may cancel your services or scheduled calls.
              </p>
              
              <h2 className="text-lg md:text-xl font-bold text-[#33387A] pt-4">1. Monthly Services & Retainers</h2>
              <p>
                Monthly subscription services or recurring marketing retainers (e.g., SEO management, Paid Advertising search support, content marketing campaigns) can be cancelled by providing written notice at least 30 days prior to the next billing cycle.
              </p>
              <p>
                Cancellations can be submitted via email to <a href="mailto:info@zenbyto.com" className="text-primary hover:underline">info@zenbyto.com</a>. Upon receipt, we will verify the request and schedule termination at the end of the current billing cycle.
              </p>

              <h2 className="text-lg md:text-xl font-bold text-[#33387A] pt-4">2. Custom Development Projects</h2>
              <p>
                For project-based contracts (such as website creation, mobile app development, or systems integration), clients may terminate the contract at any stage by providing written notice.
              </p>
              <p>
                Upon cancellation, the client is responsible for paying for all work completed up to the date of cancellation. Any completed and approved milestones are non-refundable.
              </p>

              <h2 className="text-lg md:text-xl font-bold text-[#33387A] pt-4">3. Consultation Bookings</h2>
              <p>
                Scheduled consultations or strategy calls can be rescheduled or cancelled up to 2 hours before the meeting time. You can do this by using the rescheduling link in your email confirmation, or by contacting your account manager.
              </p>
            </article>

          </div>
        </section>
      </main>

      <Footer />
    </PageWrapper>
  )
}
