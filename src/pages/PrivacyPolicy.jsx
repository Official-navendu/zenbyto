import React from 'react'
import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import Header from '../components/layout/Header'
import InternalHero from '../components/layout/InternalHero'
import Footer from '../components/layout/Footer'
import PageWrapper from '../components/layout/PageWrapper'

export default function PrivacyPolicy() {
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
        "name": "Privacy Policy",
        "item": "https://www.zenbyto.com/privacy-policy"
      }
    ]
  }

  return (
    <PageWrapper>
      <Helmet>
        <title>Privacy Policy | Zenbyto</title>
        <meta name="description" content="Zenbyto's Privacy Policy details our practices regarding information collection, usage, sharing, security protocols, and cookies." />
        <link rel="canonical" href="https://www.zenbyto.com/privacy-policy" />
        <script type="application/ld+json">{JSON.stringify(breadcrumbSchema)}</script>
      </Helmet>

      <Header />

      <main className="bg-white font-sans overflow-hidden">
        {/* Hero Section */}
        <InternalHero
          badge="🛡️ Data Protection"
          heading="Privacy Policy"
          description="Last Updated: July 2026 • Details our practices regarding information collection, usage, security protocols, and cookie data."
          center={true}
        />

        {/* Content Section */}
        <section className="py-16 bg-white">
          <div className="max-w-3xl mx-auto px-6 text-left">
            
            {/* Breadcrumb links */}
            <div className="flex items-center space-x-2 text-xs text-brand-gray/60 font-medium mb-8">
              <Link to="/" className="hover:text-primary transition-colors">Home</Link>
              <span>/</span>
              <span className="text-[#111111]">Privacy Policy</span>
            </div>

            <article className="prose max-w-none text-[#111111] leading-relaxed text-sm md:text-base space-y-6">
              <p>
                At Zenbyto, accessible from www.zenbyto.com, one of our main priorities is the privacy of our visitors. This Privacy Policy document contains types of information that is collected and recorded by Zenbyto and how we use it.
              </p>
              
              <h2 className="text-lg md:text-xl font-bold text-[#33387A] pt-4">1. Consent</h2>
              <p>
                By using our website, you hereby consent to our Privacy Policy and agree to its terms.
              </p>

              <h2 className="text-lg md:text-xl font-bold text-[#33387A] pt-4">2. Information We Collect</h2>
              <p>
                The personal information that you are asked to provide, and the reasons why you are asked to provide it, will be made clear to you at the point we ask you to provide your personal information.
              </p>
              <p>
                If you contact us directly, we may receive additional information about you such as your name, email address, phone number, the contents of the message and/or attachments you may send us, and any other information you may choose to provide.
              </p>

              <h2 className="text-lg md:text-xl font-bold text-[#33387A] pt-4">3. How We Use Your Information</h2>
              <p>We use the information we collect in various ways, including to:</p>
              <ul className="list-disc pl-5 space-y-2">
                <li>Provide, operate, and maintain our website and solutions.</li>
                <li>Improve, personalize, and expand our website.</li>
                <li>Understand and analyze how you use our website.</li>
                <li>Develop new products, services, features, and functionality.</li>
                <li>Communicate with you, either directly or through one of our partners, to provide you with updates and other information relating to the website, and for marketing and promotional purposes.</li>
                <li>Send you emails or newsletters.</li>
                <li>Find and prevent fraud.</li>
              </ul>

              <h2 className="text-lg md:text-xl font-bold text-[#33387A] pt-4">4. Log Files</h2>
              <p>
                Zenbyto follows a standard procedure of using log files. These files log visitors when they visit websites. All hosting companies do this and a part of hosting services' analytics. The information collected by log files include internet protocol (IP) addresses, browser type, Internet Service Provider (ISP), date and time stamp, referring/exit pages, and possibly the number of clicks. These are not linked to any information that is personally identifiable.
              </p>

              <h2 className="text-lg md:text-xl font-bold text-[#33387A] pt-4">5. Cookies and Web Beacons</h2>
              <p>
                Like any other website, Zenbyto uses 'cookies'. These cookies are used to store information including visitors' preferences, and the pages on the website that the visitor accessed or visited. The information is used to optimize the users' experience by customizing our web page content based on visitors' browser type and/or other information.
              </p>

              <h2 className="text-lg md:text-xl font-bold text-[#33387A] pt-4">6. Third Party Privacy Policies</h2>
              <p>
                Zenbyto's Privacy Policy does not apply to other advertisers or websites. Thus, we are advising you to consult the respective Privacy Policies of these third-party ad servers for more detailed information. It may include their practices and instructions about how to opt-out of certain options.
              </p>
            </article>

          </div>
        </section>
      </main>

      <Footer />
    </PageWrapper>
  )
}
