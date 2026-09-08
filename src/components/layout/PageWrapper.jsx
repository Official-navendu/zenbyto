import React, { useEffect } from 'react'
import { Helmet, HelmetProvider } from 'react-helmet-async'
import Lenis from 'lenis'
import WhatsAppWidget from '../common/WhatsAppWidget'

export default function PageWrapper({ children }) {
  useEffect(() => {
    // Lenis Smooth Scroll
    const lenis = new Lenis({
      duration: 1.4,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 2,
    })

    function raf(time) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)

    return () => {
      lenis.destroy()
    }
  }, [])

  // JSON-LD Schema Data
  const schemaOrg = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Zenbyto",
    "url": "https://www.zenbyto.com",
    "logo": "https://www.zenbyto.com/logo.webp",
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "",
      "contactType": "customer service",
      "email": "hello@zenbyto.com",
      "areaServed": "US",
      "availableLanguage": "English"
    },
    "sameAs": [
      "https://www.facebook.com/zenbyto",
      "https://www.linkedin.com/company/zenbyto",
      "https://twitter.com/zenbyto"
    ]
  }

  const schemaLocalBusiness = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Zenbyto Digital Agency",
    "image": "https://www.zenbyto.com/logo.webp",
    "@id": "https://www.zenbyto.com",
    "url": "https://www.zenbyto.com",
    "telephone": "",
    "priceRange": "$$",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "123 Innovation Way",
      "addressLocality": "San Francisco",
      "addressRegion": "CA",
      "postalCode": "94105",
      "addressCountry": "US"
    }
  }

  const schemaService = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Digital Marketing & Custom Web Development",
    "provider": {
      "@type": "Organization",
      "name": "Zenbyto"
    },
    "areaServed": "Worldwide",
    "description": "Enterprise SEO, Google Ads, Meta PPC, custom React website development, and mobile application engineering."
  }

  return (
    <HelmetProvider>
      <Helmet>
        {/* Basic SEO Meta */}
        <html lang="en" />
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        <meta name="author" content="Zenbyto" />
        <meta name="theme-color" content="#33387A" />
        
        {/* Default Open Graph */}
        <meta property="og:site_name" content="Zenbyto" />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:title" content="Zenbyto | Premium Digital Marketing Agency & Custom Web Engineering" />
        <meta property="og:description" content="Scale your enterprise revenue with Zenbyto's conversion-driven SEO, Google & Meta PPC ads, custom React web development, and mobile app solutions." />
        <meta property="og:image" content="https://zenbyto.com/og-image.jpg" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Zenbyto | Premium Digital Marketing Agency" />
        <meta name="twitter:description" content="Drive explosive growth with Zenbyto's premium search engine marketing and web development services." />
        <meta name="twitter:image" content="https://zenbyto.com/og-image.jpg" />

        {/* Fonts Preload */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />

        {/* Structured Schema Markup */}
        <script type="application/ld+json">
          {JSON.stringify(schemaOrg)}
        </script>
        <script type="application/ld+json">
          {JSON.stringify(schemaLocalBusiness)}
        </script>
        <script type="application/ld+json">
          {JSON.stringify(schemaService)}
        </script>
      </Helmet>

      {/* Layout Content */}
      <div className="relative min-h-screen bg-white">
        {children}
        <WhatsAppWidget />
      </div>
    </HelmetProvider>
  )
}
