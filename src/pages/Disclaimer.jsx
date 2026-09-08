import React from 'react'
import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import Header from '../components/layout/Header'
import InternalHero from '../components/layout/InternalHero'
import Footer from '../components/layout/Footer'
import PageWrapper from '../components/layout/PageWrapper'

export default function Disclaimer() {
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
        "name": "Disclaimer",
        "item": "https://www.zenbyto.com/disclaimer"
      }
    ]
  }

  return (
    <PageWrapper>
      <Helmet>
        <title>Disclaimer | Zenbyto</title>
        <meta name="description" content="Zenbyto's Legal Disclaimer clarifies terms, warranties, external link policies, and performance representations." />
        <link rel="canonical" href="https://www.zenbyto.com/disclaimer" />
        <script type="application/ld+json">{JSON.stringify(breadcrumbSchema)}</script>
      </Helmet>

      <Header />

      <main className="bg-white font-sans overflow-hidden">
        {/* Hero Section */}
        <InternalHero
          badge="⚖️ Legal Limits"
          heading="Disclaimer"
          description="Last Updated: July 2026 • Legal notice regarding website information, links, and liability limitations."
          center={true}
        />

        {/* Content Section */}
        <section className="py-16 bg-white">
          <div className="max-w-3xl mx-auto px-6 text-left">
            
            {/* Breadcrumb links */}
            <div className="flex items-center space-x-2 text-xs text-brand-gray/60 font-medium mb-8">
              <Link to="/" className="hover:text-primary transition-colors">Home</Link>
              <span>/</span>
              <span className="text-[#111111]">Disclaimer</span>
            </div>

            <article className="prose max-w-none text-[#111111] leading-relaxed text-sm md:text-base space-y-6">
              <p>
                If you require any more information or have any questions about our site's disclaimer, please feel free to contact us by email at <a href="mailto:info@zenbyto.com" className="text-primary hover:underline">info@zenbyto.com</a>.
              </p>
              
              <h2 className="text-lg md:text-xl font-bold text-[#33387A] pt-4">1. Disclaimers for Zenbyto</h2>
              <p>
                All the information on this website - www.zenbyto.com - is published in good faith and for general information purpose only. Zenbyto does not make any warranties about the completeness, reliability and accuracy of this information. Any action you take upon the information you find on this website (Zenbyto), is strictly at your own risk. Zenbyto will not be liable for any losses and/or damages in connection with the use of our website.
              </p>

              <h2 className="text-lg md:text-xl font-bold text-[#33387A] pt-4">2. External Links</h2>
              <p>
                From our website, you can visit other websites by following hyperlinks to such external sites. While we strive to provide only quality links to useful and ethical websites, we have no control over the content and nature of these sites. These links to other websites do not imply a recommendation for all the content found on these sites. Site owners and content may change without notice and may occur before we have the opportunity to remove a link which may have gone 'bad'.
              </p>

              <h2 className="text-lg md:text-xl font-bold text-[#33387A] pt-4">3. Performance and Earnings</h2>
              <p>
                Any case studies, figures, or client metrics presented on our website are historical examples of work done for clients. They do not represent a guarantee of future earnings or organic ranking performance, as marketing parameters are highly dependent on individual project attributes.
              </p>
            </article>

          </div>
        </section>
      </main>

      <Footer />
    </PageWrapper>
  )
}
