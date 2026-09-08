import React, { useState } from 'react'
import { Helmet } from 'react-helmet-async'
import { Calendar, HelpCircle, ArrowDown, ChevronDown } from 'lucide-react'
import Header from '../components/layout/Header'
import InternalHero from '../components/layout/InternalHero'
import Footer from '../components/layout/Footer'
import PageWrapper from '../components/layout/PageWrapper'

// Import assets
import consultationHeroImg from '../assets/consultation/consultation_hero.webp'

export default function FreeConsultation() {
  const [openFaqIndex, setOpenFaqIndex] = useState(null)

  const toggleFaq = (idx) => {
    setOpenFaqIndex(openFaqIndex === idx ? null : idx)
  }

  const faqItems = [
    {
      question: 'Is the consultation free?',
      answer: 'Yes, absolutely. The consultation is 100% free with no obligation. Our goal is to understand your business goals and discuss how we can help you accelerate growth.'
    },
    {
      question: 'How long is the meeting?',
      answer: 'The initial consultation is scheduled for 30 minutes. This is generally enough time to cover your main objectives, current challenges, and outline a potential strategy.'
    },
    {
      question: 'Will I receive a strategy proposal?',
      answer: 'Yes! During the call, we will provide actionable insights and strategic recommendations based on your goals. After the meeting, we will compile a detailed project proposal.'
    },
    {
      question: 'Can I reschedule?',
      answer: 'Of course. Once you book, you will receive a confirmation email containing a rescheduling link. You can change the time or cancel up to 2 hours before the meeting starts.'
    }
  ]

  const handleScrollToBooking = () => {
    const bookingSection = document.getElementById('booking-section')
    if (bookingSection) {
      bookingSection.scrollIntoView({ behavior: 'smooth' })
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
        "name": "Free Consultation",
        "item": "https://www.zenbyto.com/free-consultation"
      }
    ]
  }

  return (
    <PageWrapper>
      <Helmet>
        <title>Book a Free Consultation | Digital Growth Audit | ZenByto</title>
        <meta name="description" content="Schedule a free 30-minute consultation with ZenByto's growth engineers to discuss your SEO, website development, paid marketing, or mobile app goals." />
        <link rel="canonical" href="https://zenbyto.com/free-consultation" />
        
        {/* OpenGraph */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Book a Free Consultation | Digital Growth Audit | ZenByto" />
        <meta property="og:description" content="Schedule a free 30-minute consultation with ZenByto's growth engineers to discuss your SEO, website development, paid marketing, or mobile app goals." />
        <meta property="og:url" content="https://zenbyto.com/free-consultation" />
        <meta property="og:image" content="https://zenbyto.com/og-image.jpg" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Book a Free Consultation | Digital Growth Audit | ZenByto" />
        <meta name="twitter:description" content="Schedule a free 30-minute consultation with ZenByto's growth engineers to discuss your SEO, website development, paid marketing, or mobile app goals." />
        <meta name="twitter:image" content="https://zenbyto.com/og-image.jpg" />

        <meta name="robots" content="index, follow" />
        <script type="application/ld+json">{JSON.stringify(breadcrumbSchema)}</script>
      </Helmet>

      <Header />

      <main className="overflow-hidden bg-white">
        
        {/* Section 1: Unified Hero */}
        <InternalHero
          badge="📅 Schedule Strategy Session"
          heading="Book Your Free Growth Consultation"
          description="Schedule a 30-minute session with our technical leads to discuss your business objectives, website performance, paid ad campaigns, or digital marketing roadmap."
          image={consultationHeroImg}
          imageAlt="Growth Strategy Consultation Illustration"
          imageAspect="aspect-[4/3]"
        >
          <button
            onClick={handleScrollToBooking}
            className="glass-btn-primary inline-flex items-center gap-2 px-8 py-3.5 text-xs font-bold rounded-full transition-all cursor-pointer"
          >
            Scroll To Calendar Booking
            <ArrowDown className="w-3.5 h-3.5" />
          </button>
        </InternalHero>

        {/* Section 2: Booking Calendar Section */}
        <section id="booking-section" className="py-12 md:py-16 bg-white relative border-b border-slate-100">
          <div className="max-w-4xl mx-auto px-6 md:px-12 text-center space-y-6">
            <div className="space-y-2">
              <span className="glass-badge-blue inline-flex items-center gap-1.5 px-3.5 py-1 text-[10px] font-bold tracking-widest uppercase">
                Interactive Calendar
              </span>
              <h2 className="text-2xl md:text-3xl font-extrabold text-brand-dark">Select Your Meeting Time</h2>
              <p className="text-xs md:text-sm text-brand-gray">Choose a 30-minute slot that fits your schedule.</p>
            </div>

            {/* Embedded Calendar Card */}
            <div className="p-6 md:p-8 bg-slate-50 border border-slate-200/80 rounded-3xl shadow-sm text-left space-y-4">
              <div className="p-6 bg-white border border-slate-200 rounded-2xl text-center space-y-4">
                <Calendar className="w-10 h-10 text-[#FE8233] mx-auto" />
                <h3 className="text-lg font-bold text-brand-dark">30-Minute Growth Strategy Session</h3>
                <p className="text-xs md:text-sm text-brand-gray max-w-md mx-auto">
                  Click below to open our live calendar booking portal or send a direct inquiry to info@zenbyto.com.
                </p>
                <a
                  href="mailto:info@zenbyto.com?subject=Consultation%20Request"
                  className="glass-btn-primary px-8 py-3.5 text-xs font-bold rounded-full inline-block"
                >
                  Request Appointment Slot
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Section 3: FAQ Section */}
        <section className="py-12 md:py-16 bg-slate-50">
          <div className="max-w-4xl mx-auto px-6 md:px-12 space-y-8">
            <div className="text-center space-y-2">
              <h2 className="text-2xl md:text-3xl font-extrabold text-brand-dark">Consultation FAQs</h2>
            </div>

            <div className="space-y-4">
              {faqItems.map((item, idx) => {
                const isOpen = openFaqIndex === idx
                return (
                  <div key={idx} className="bg-white border border-slate-200/80 rounded-2xl overflow-hidden shadow-xs">
                    <button
                      onClick={() => toggleFaq(idx)}
                      className="w-full p-5 text-left font-bold text-sm md:text-base text-brand-dark flex items-center justify-between gap-4 cursor-pointer focus:outline-none"
                    >
                      <span className="flex items-center gap-3">
                        <HelpCircle className="w-4 h-4 text-[#FE8233] shrink-0" />
                        {item.question}
                      </span>
                      <ChevronDown className={`w-4 h-4 text-slate-400 shrink-0 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
                    </button>
                    {isOpen && (
                      <div className="px-5 pb-5 pt-1 text-xs md:text-sm text-brand-gray leading-relaxed border-t border-slate-100">
                        {item.answer}
                      </div>
                    )}
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
