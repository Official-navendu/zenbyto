import React from 'react'
import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import Header from '../components/layout/Header'
import InternalHero from '../components/layout/InternalHero'
import Footer from '../components/layout/Footer'
import PageWrapper from '../components/layout/PageWrapper'

export default function TermsConditions() {
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
        "name": "Terms & Conditions",
        "item": "https://www.zenbyto.com/terms-and-conditions"
      }
    ]
  }

  return (
    <PageWrapper>
      <Helmet>
        <title>Terms & Conditions | Zenbyto</title>
        <meta name="description" content="Read Zenbyto's Terms & Conditions to understand user agreements, service boundaries, intellectual properties, and liability limits." />
        <link rel="canonical" href="https://www.zenbyto.com/terms-and-conditions" />
        <script type="application/ld+json">{JSON.stringify(breadcrumbSchema)}</script>
      </Helmet>

      <Header />

      <main className="bg-white font-sans overflow-hidden">
        {/* Hero Section */}
        <InternalHero
          badge="📜 Legal Agreement"
          heading="Terms & Conditions"
          description="Last Updated: July 2026 • Governing rules and service guidelines for working with Zenbyto."
          center={true}
        />

        {/* Content Section */}
        <section className="py-16 bg-white">
          <div className="max-w-3xl mx-auto px-6 text-left">
            
            {/* Breadcrumb links */}
            <div className="flex items-center space-x-2 text-xs text-brand-gray/60 font-medium mb-8">
              <Link to="/" className="hover:text-primary transition-colors">Home</Link>
              <span>/</span>
              <span className="text-[#111111]">Terms & Conditions</span>
            </div>

            <article className="prose max-w-none text-[#111111] leading-relaxed text-sm md:text-base space-y-6">
              <p>
                Welcome to Zenbyto! These terms and conditions outline the rules and regulations for the use of Zenbyto's Website, located at www.zenbyto.com.
              </p>
              <p>
                By accessing this website we assume you accept these terms and conditions. Do not continue to use Zenbyto if you do not agree to take all of the terms and conditions stated on this page.
              </p>
              
              <h2 className="text-lg md:text-xl font-bold text-[#33387A] pt-4">1. Cookies</h2>
              <p>
                We employ the use of cookies. By accessing Zenbyto, you agreed to use cookies in agreement with the Zenbyto's Privacy Policy.
              </p>
              <p>
                Most interactive websites use cookies to let us retrieve the user's details for each visit. Cookies are used by our website to enable the functionality of certain areas to make it easier for people visiting our website. Some of our affiliate/advertising partners may also use cookies.
              </p>

              <h2 className="text-lg md:text-xl font-bold text-[#33387A] pt-4">2. License</h2>
              <p>
                Unless otherwise stated, Zenbyto and/or its licensors own the intellectual property rights for all material on Zenbyto. All intellectual property rights are reserved. You may access this from Zenbyto for your own personal use subjected to restrictions set in these terms and conditions.
              </p>
              <p>You must not:</p>
              <ul className="list-disc pl-5 space-y-2">
                <li>Republish material from Zenbyto</li>
                <li>Sell, rent or sub-license material from Zenbyto</li>
                <li>Reproduce, duplicate or copy material from Zenbyto</li>
                <li>Redistribute content from Zenbyto</li>
              </ul>

              <h2 className="text-lg md:text-xl font-bold text-[#33387A] pt-4">3. Hyperlinking to our Content</h2>
              <p>
                The following organizations may link to our Website without prior written approval: Government agencies, Search engines, News organizations, and Online directory distributors.
              </p>

              <h2 className="text-lg md:text-xl font-bold text-[#33387A] pt-4">4. Liability Disclaimer</h2>
              <p>
                To the maximum extent permitted by applicable law, we exclude all representations, warranties and conditions relating to our website and the use of this website. Nothing in this disclaimer will:
              </p>
              <ul className="list-disc pl-5 space-y-2">
                <li>limit or exclude our or your liability for death or personal injury;</li>
                <li>limit or exclude our or your liability for fraud or fraudulent misrepresentation;</li>
                <li>limit any of our or your liabilities in any way that is not permitted under applicable law.</li>
              </ul>
            </article>

          </div>
        </section>
      </main>

      <Footer />
    </PageWrapper>
  )
}
