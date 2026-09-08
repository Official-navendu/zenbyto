import React from 'react'
import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import { Settings, ShieldCheck, Mail } from 'lucide-react'
import Header from '../components/layout/Header'
import InternalHero from '../components/layout/InternalHero'
import Footer from '../components/layout/Footer'
import PageWrapper from '../components/layout/PageWrapper'

export default function CookiePolicy() {
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
        "name": "Cookie Policy",
        "item": "https://www.zenbyto.com/cookie-policy"
      }
    ]
  }

  const handleOpenCookieSettings = () => {
    window.dispatchEvent(new CustomEvent('openCookieSettings'))
  }

  return (
    <PageWrapper>
      <Helmet>
        <title>Cookie Policy | Zenbyto</title>
        <meta
          name="description"
          content="Zenbyto's Cookie Policy details how we use cookies, tracking technologies, analytics data, and user preference controls."
        />
        <link rel="canonical" href="https://www.zenbyto.com/cookie-policy" />
        <script type="application/ld+json">{JSON.stringify(breadcrumbSchema)}</script>
      </Helmet>

      <Header />

      <main className="bg-white font-sans overflow-hidden">
        {/* Hero Section */}
        <InternalHero
          badge="🍪 Privacy & Security"
          heading="Cookie Policy"
          description="Last Updated: July 2026 • Information about how Zenbyto uses cookies and how you can manage your preferences."
          center={true}
        />

        {/* Content Section */}
        <section className="py-16 bg-white">
          <div className="max-w-3xl mx-auto px-6 text-left">
            
            {/* Breadcrumb links */}
            <div className="flex items-center space-x-2 text-xs text-brand-gray/60 font-medium mb-8">
              <Link to="/" className="hover:text-primary transition-colors">Home</Link>
              <span>/</span>
              <span className="text-[#111111]">Cookie Policy</span>
            </div>

            <article className="prose max-w-none text-[#111111] leading-relaxed text-sm md:text-base space-y-6">
              
              {/* Introduction */}
              <h2 className="text-lg md:text-xl font-bold text-[#33387A] pt-2">1. Introduction</h2>
              <p>
                At <strong>Zenbyto</strong>, we are committed to maintaining the trust and confidence of our website visitors. This Cookie Policy explains how and why cookies and similar tracking technologies are stored on your device when you visit or interact with <a href="https://www.zenbyto.com" className="text-[#FE8233] underline">www.zenbyto.com</a>.
              </p>
              
              {/* What Are Cookies? */}
              <h2 className="text-lg md:text-xl font-bold text-[#33387A] pt-4">2. What Are Cookies?</h2>
              <p>
                Cookies are small text files placed on your computer, smartphone, or tablet when you browse a website. They allow the website to recognize your device, remember user preferences, maintain active sessions, and provide anonymized performance metrics.
              </p>

              {/* How We Use Cookies */}
              <h2 className="text-lg md:text-xl font-bold text-[#33387A] pt-4">3. How We Use Cookies</h2>
              <p>
                Zenbyto uses first-party and third-party cookies for security, performance optimization, and understanding user engagement across our service offerings.
              </p>

              {/* Types of Cookies We Use */}
              <h2 className="text-lg md:text-xl font-bold text-[#33387A] pt-4">4. Types of Cookies We Use</h2>
              
              <div className="space-y-4 pt-2">
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80">
                  <h3 className="font-bold text-[#33387A] text-base mb-1">A. Necessary Cookies (Always Active)</h3>
                  <p className="text-xs md:text-sm text-slate-600">
                    These cookies are essential for core website functionality, such as security authentication, page navigation, and saving user consent preferences. Necessary cookies cannot be disabled.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80">
                  <h3 className="font-bold text-[#33387A] text-base mb-1">B. Analytics Cookies (Optional)</h3>
                  <p className="text-xs md:text-sm text-slate-600">
                    Analytics cookies help us measure traffic volume, popular pages, and aggregated user behavior to improve site speed, navigation flow, and user experience.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80">
                  <h3 className="font-bold text-[#33387A] text-base mb-1">C. Marketing Cookies (Optional)</h3>
                  <p className="text-xs md:text-sm text-slate-600">
                    Marketing cookies assist in measuring conversion performance from advertising campaigns and providing tailored digital growth solutions.
                  </p>
                </div>
              </div>

              {/* Third-Party Cookies */}
              <h2 className="text-lg md:text-xl font-bold text-[#33387A] pt-4">5. Third-Party Cookies</h2>
              <p>
                In some cases, third-party analytics software (such as Google Analytics) may set cookies to compile anonymous statistical insights. These third parties operate under their respective privacy policies.
              </p>

              {/* Managing Your Cookie Preferences */}
              <h2 className="text-lg md:text-xl font-bold text-[#33387A] pt-4">6. Managing Your Cookie Preferences</h2>
              <p>
                You can change or update your cookie consent choices at any time. Click the button below to open your cookie settings panel:
              </p>
              
              <div className="py-2">
                <button
                  onClick={handleOpenCookieSettings}
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#33387A] hover:bg-[#FE8233] text-white text-xs md:text-sm font-bold transition-all duration-300 shadow-xs cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#FE8233]/50"
                >
                  <Settings className="w-4 h-4" />
                  <span>Customize Cookie Preferences</span>
                </button>
              </div>

              <p className="text-xs md:text-sm text-slate-500">
                You can also configure your web browser settings to block or delete cookies entirely. Please note that disabling necessary cookies may impact website functionality.
              </p>

              {/* Cookie Retention */}
              <h2 className="text-lg md:text-xl font-bold text-[#33387A] pt-4">7. Cookie Retention</h2>
              <p>
                Session cookies expire automatically when you close your browser. Persistent cookies remain stored on your device for a specified duration or until manually deleted or reset via browser settings.
              </p>

              {/* Changes to This Cookie Policy */}
              <h2 className="text-lg md:text-xl font-bold text-[#33387A] pt-4">8. Changes to This Cookie Policy</h2>
              <p>
                We may periodically update this Cookie Policy to reflect technical infrastructure updates or legal requirements. Updates will be posted on this page with an updated "Last Updated" date.
              </p>

              {/* Contact Us */}
              <h2 className="text-lg md:text-xl font-bold text-[#33387A] pt-4">9. Contact Us</h2>
              <p>
                If you have any questions or concerns regarding our Cookie Policy or data handling practices, please contact us:
              </p>

              <div className="p-5 rounded-2xl bg-[#33387A]/5 border border-[#33387A]/15 space-y-2 text-xs md:text-sm">
                <p className="font-bold text-[#33387A]">Zenbyto</p>
                <div className="flex items-center gap-2 text-slate-700">
                  <Mail className="w-4 h-4 text-[#FE8233]" />
                  <span>Email: <a href="mailto:info@zenbyto.com" className="text-[#FE8233] font-semibold hover:underline">info@zenbyto.com</a></span>
                </div>
              </div>

            </article>

          </div>
        </section>
      </main>

      <Footer />
    </PageWrapper>
  )
}
