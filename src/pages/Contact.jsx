import React, { useState } from 'react'
import { Helmet } from 'react-helmet-async'
import { Mail, Clock, Calendar, ArrowRight, CheckCircle2 } from 'lucide-react'

// Layout Components
import Header from '../components/layout/Header'
import InternalHero from '../components/layout/InternalHero'
import Footer from '../components/layout/Footer'
import PageWrapper from '../components/layout/PageWrapper'

// Import assets
import contactHeroImg from '../assets/contact/contact_hero.webp'

export default function Contact() {
  const [formData, setFormData] = useState({
    fullName: '',
    companyName: '',
    email: '',
    phone: '',
    service: '',
    budget: '',
    message: ''
  })
  
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [errors, setErrors] = useState({})

  const contactDetails = [
    {
      title: 'Email Address',
      value: 'info@zenbyto.com',
      icon: <Mail className="w-5 h-5 text-[#33387A]" />,
    },
    {
      title: 'Business Hours',
      value: 'Mon - Fri: 9:00 AM - 6:00 PM EST',
      icon: <Clock className="w-5 h-5 text-[#FE8233]" />,
    },
    {
      title: 'Response Time',
      value: 'Guaranteed within 24 business hours',
      icon: <Calendar className="w-5 h-5 text-[#33387A]" />,
    },
  ]

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }))
    }
  }

  const validate = () => {
    const newErrors = {}
    if (!formData.fullName.trim()) newErrors.fullName = 'Full name is required'
    if (!formData.email.trim()) {
      newErrors.email = 'Email address is required'
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address'
    }
    if (!formData.service) newErrors.service = 'Please select a service'
    if (!formData.message.trim()) newErrors.message = 'Message is required'
    return newErrors
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const validationErrors = validate()
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors)
      return
    }

    setIsSubmitted(true)
    setFormData({
      fullName: '',
      companyName: '',
      email: '',
      phone: '',
      service: '',
      budget: '',
      message: ''
    })
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
        "name": "Contact Us",
        "item": "https://www.zenbyto.com/contact"
      }
    ]
  }

  return (
    <PageWrapper>
      <Helmet>
        <title>Contact ZenByto | Book Free Consultation & Growth Audit</title>
        <meta name="description" content="Get in touch with ZenByto's digital engineering team. Book a free consultation for SEO, web development, paid advertising, and branding solutions." />
        <meta name="keywords" content="Contact Zenbyto, Book Free Consultation, Growth Audit, Web Engineering Inquiry" />
        <link rel="canonical" href="https://zenbyto.com/contact" />
        
        {/* OpenGraph */}
        <meta property="og:type" content="article" />
        <meta property="og:title" content="Contact ZenByto | Book Free Consultation & Growth Audit" />
        <meta property="og:description" content="Get in touch with ZenByto's digital engineering team. Book a free consultation for SEO, web development, paid advertising, and branding solutions." />
        <meta property="og:url" content="https://zenbyto.com/contact" />
        <meta property="og:image" content="https://zenbyto.com/og-image.jpg" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Contact ZenByto | Book Free Consultation & Growth Audit" />
        <meta name="twitter:description" content="Get in touch with ZenByto's digital engineering team. Book a free consultation for SEO, web development, paid advertising, and branding solutions." />
        <meta name="twitter:image" content="https://zenbyto.com/og-image.jpg" />

        <meta name="robots" content="index, follow" />
        <script type="application/ld+json">{JSON.stringify(breadcrumbSchema)}</script>
      </Helmet>
      <Header />

      <main className="overflow-hidden bg-white">
        
        {/* Section 1: Unified Hero */}
        <InternalHero
          badge="📩 Get In Touch"
          heading="Let's Discuss Your Project Requirements"
          description="Ready to engineer a high-speed web platform, optimize search engine rankings, or scale paid advertising ROI? Book a consultation or send us a message."
          image={contactHeroImg}
          imageAlt="Customer discussing project with digital agency leads"
          imageAspect="aspect-[4/3]"
        >
          <a
            href="#contact-form-section"
            onClick={(e) => {
              e.preventDefault()
              document.getElementById('contact-form-section')?.scrollIntoView({ behavior: 'smooth' })
            }}
            className="glass-btn-primary px-8 py-3.5 text-xs font-bold rounded-full transition-all"
          >
            Send Direct Inquiry
          </a>
          <a href="mailto:info@zenbyto.com" className="glass-btn-secondary px-8 py-3.5 text-xs font-bold rounded-full transition-all">
            Email info@zenbyto.com
          </a>
        </InternalHero>

        {/* Section 2: Contact Information Grid */}
        <section className="py-12 bg-white relative">
          <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {contactDetails.map((item, idx) => (
                <div
                  key={idx}
                  className="group flex flex-col p-6 bg-slate-50 border border-slate-200/80 rounded-2xl shadow-xs text-left items-start space-y-3 hover:border-[#33387A] transition-colors"
                >
                  <div className="w-10 h-10 rounded-xl bg-white border border-slate-200 flex items-center justify-center">
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="font-bold text-sm text-brand-dark">{item.title}</h3>
                    <p className="text-xs text-brand-gray font-medium mt-1">{item.value}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Section 3: Contact Form & Visual Section */}
        <section id="contact-form-section" className="py-12 md:py-16 bg-white relative border-t border-slate-100">
          <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
              
              {/* Form Block */}
              <div className="lg:col-span-7 bg-white border border-slate-200/80 rounded-3xl p-8 md:p-10 shadow-lg space-y-6">
                <div>
                  <span className="glass-badge-blue inline-flex items-center gap-1.5 px-3 py-1 text-[10px] font-bold tracking-widest uppercase">
                    Inquiry Form
                  </span>
                  <h2 className="text-2xl md:text-3xl font-extrabold text-brand-dark mt-2">Book Your Strategy Audit</h2>
                  <p className="text-xs md:text-sm text-brand-gray mt-1">Fill out the parameters below and our growth engineers will review your project.</p>
                </div>

                {isSubmitted ? (
                  <div className="p-8 bg-emerald-50 border border-emerald-200 rounded-2xl text-center space-y-3">
                    <CheckCircle2 className="w-12 h-12 text-emerald-600 mx-auto" />
                    <h3 className="text-xl font-bold text-emerald-900">Inquiry Received Successfully!</h3>
                    <p className="text-xs md:text-sm text-emerald-700 max-w-md mx-auto">
                      Thank you for contacting ZenByto. Our engineering and growth team will reach out within 24 business hours.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4 text-left">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-bold text-brand-dark mb-1.5">Full Name *</label>
                        <input
                          type="text"
                          name="fullName"
                          placeholder="e.g. Sarah Jenkins"
                          value={formData.fullName}
                          onChange={handleChange}
                          className="w-full px-4 py-3 rounded-xl border border-slate-200 text-xs font-semibold text-brand-dark focus:outline-none focus:border-[#FE8233]"
                        />
                        {errors.fullName && <p className="text-[11px] font-bold text-red-500 mt-1">{errors.fullName}</p>}
                      </div>

                      <div>
                        <label className="block text-xs font-bold text-brand-dark mb-1.5">Company Name</label>
                        <input
                          type="text"
                          name="companyName"
                          placeholder="e.g. Apex Tech Ltd"
                          value={formData.companyName}
                          onChange={handleChange}
                          className="w-full px-4 py-3 rounded-xl border border-slate-200 text-xs font-semibold text-brand-dark focus:outline-none focus:border-[#FE8233]"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-bold text-brand-dark mb-1.5">Email Address *</label>
                        <input
                          type="email"
                          name="email"
                          placeholder="sarah@company.com"
                          value={formData.email}
                          onChange={handleChange}
                          className="w-full px-4 py-3 rounded-xl border border-slate-200 text-xs font-semibold text-brand-dark focus:outline-none focus:border-[#FE8233]"
                        />
                        {errors.email && <p className="text-[11px] font-bold text-red-500 mt-1">{errors.email}</p>}
                      </div>

                      <div>
                        <label className="block text-xs font-bold text-brand-dark mb-1.5">Phone Number</label>
                        <input
                          type="tel"
                          name="phone"
                          placeholder="+1 (555) 000-0000"
                          value={formData.phone}
                          onChange={handleChange}
                          className="w-full px-4 py-3 rounded-xl border border-slate-200 text-xs font-semibold text-brand-dark focus:outline-none focus:border-[#FE8233]"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-bold text-brand-dark mb-1.5">Primary Service Needed *</label>
                        <select
                          name="service"
                          value={formData.service}
                          onChange={handleChange}
                          className="w-full px-4 py-3 rounded-xl border border-slate-200 text-xs font-semibold text-brand-dark focus:outline-none focus:border-[#FE8233]"
                        >
                          <option value="">Select Service...</option>
                          <option value="seo">SEO & Link Building</option>
                          <option value="webdev">Website Design & Development</option>
                          <option value="ads">Google & Meta Ads Management</option>
                          <option value="appdev">Mobile App Development</option>
                          <option value="branding">Brand Identity & Strategy</option>
                          <option value="automation">AI & Business Automation</option>
                        </select>
                        {errors.service && <p className="text-[11px] font-bold text-red-500 mt-1">{errors.service}</p>}
                      </div>

                      <div>
                        <label className="block text-xs font-bold text-brand-dark mb-1.5">Estimated Budget</label>
                        <select
                          name="budget"
                          value={formData.budget}
                          onChange={handleChange}
                          className="w-full px-4 py-3 rounded-xl border border-slate-200 text-xs font-semibold text-brand-dark focus:outline-none focus:border-[#FE8233]"
                        >
                          <option value="">Select Budget Range...</option>
                          <option value="2k-5k">$2,000 - $5,000</option>
                          <option value="5k-10k">$5,000 - $10,000</option>
                          <option value="10k-25k">$10,000 - $25,000</option>
                          <option value="25k+">$25,000+</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-brand-dark mb-1.5">Project Scope / Details *</label>
                      <textarea
                        rows={4}
                        name="message"
                        placeholder="Tell us about your project goals, timelines, or existing bottlenecks..."
                        value={formData.message}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 text-xs font-semibold text-brand-dark focus:outline-none focus:border-[#FE8233]"
                      />
                      {errors.message && <p className="text-[11px] font-bold text-red-500 mt-1">{errors.message}</p>}
                    </div>

                    <button
                      type="submit"
                      className="w-full glass-btn-primary py-4 text-xs font-bold rounded-xl transition-all shadow-lg flex items-center justify-center gap-2 cursor-pointer"
                    >
                      Submit Consultation Request
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </form>
                )}
              </div>

              {/* Side Info */}
              <div className="lg:col-span-5 space-y-6">
                <div className="p-8 rounded-3xl bg-[#33387A] text-white space-y-4 shadow-xl">
                  <span className="text-[10px] font-extrabold text-[#FE8233] uppercase tracking-widest block">Direct Connection</span>
                  <h3 className="text-xl font-bold text-white">Why Work With ZenByto?</h3>
                  <ul className="space-y-3 text-xs md:text-sm text-slate-200">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#FE8233] shrink-0 mt-0.5" />
                      <span>Dedicated technical leads assigned to every project.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#FE8233] shrink-0 mt-0.5" />
                      <span>Clean custom code architecture with sub-second page loading speed.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#FE8233] shrink-0 mt-0.5" />
                      <span>100% transparent reporting on keywords, server metrics, and revenue attribution.</span>
                    </li>
                  </ul>
                </div>
              </div>

            </div>
          </div>
        </section>

      </main>

      <Footer />
    </PageWrapper>
  )
}
