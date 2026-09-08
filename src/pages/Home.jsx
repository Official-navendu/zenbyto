import React from 'react'
import { Helmet } from 'react-helmet-async'
import PageWrapper from '../components/layout/PageWrapper'
import Header from '../components/layout/Header'
import Hero from '../components/sections/Hero'
import StatsCounterSection from '../components/sections/StatsCounterSection'
import AboutPreview from '../components/sections/AboutPreview'
import Services from '../components/sections/Services'
import WhyChooseUs from '../components/sections/WhyChooseUs'
import MovingTypographySection from '../components/sections/MovingTypographySection'
import PortfolioPreview from '../components/sections/PortfolioPreview'
import IndustriesWeServe from '../components/sections/IndustriesWeServe'
import Process from '../components/sections/Process'
import ClientStories from '../components/sections/ClientStories'
import FaqTestimonials from '../components/sections/FaqTestimonials'
import Footer from '../components/layout/Footer'

export default function Home() {
  const schemaOrg = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": "https://www.zenbyto.com/#organization",
        "name": "Zenbyto",
        "url": "https://www.zenbyto.com/",
        "logo": "https://www.zenbyto.com/logo-dark.png",
        "sameAs": [
          "https://www.linkedin.com/company/zenbyto/",
          "https://twitter.com/zenbyto"
        ]
      },
      {
        "@type": "WebSite",
        "@id": "https://www.zenbyto.com/#website",
        "url": "https://www.zenbyto.com/",
        "name": "Zenbyto | Performance Marketing & Software Engineering Agency",
        "publisher": {
          "@id": "https://www.zenbyto.com/#organization"
        }
      }
    ]
  }

  return (
    <PageWrapper>
      <Helmet>
        <title>Zenbyto | Digital Growth Partner & Software Engineering Agency</title>
        <meta
          name="description"
          content="Zenbyto engineers high-performance digital acquisition systems, custom React & Next.js web applications, and ROI-focused ad campaigns for enterprise brands."
        />
        <link rel="canonical" href="https://www.zenbyto.com/" />

        {/* Open Graph */}
        <meta property="og:title" content="Zenbyto | Performance Marketing & Software Engineering Agency" />
        <meta
          property="og:description"
          content="Data-driven customer acquisition systems built on math, engineering precision, and modern web software stacks."
        />
        <meta property="og:url" content="https://www.zenbyto.com/" />
        <meta property="og:type" content="website" />

        {/* Structured Data */}
        <script type="application/ld+json">{JSON.stringify(schemaOrg)}</script>
      </Helmet>

      {/* Structural layout components */}
      <Header />
      
      <main id="main-content">
        {/* Core sections order */}
        <Hero />
        <MovingTypographySection />
        <StatsCounterSection />
        <AboutPreview />
        <Services />
        <WhyChooseUs />
        <PortfolioPreview />
        <IndustriesWeServe />
        <Process />
        <ClientStories />
        <FaqTestimonials />
      </main>

      <Footer />
    </PageWrapper>
  )
}
