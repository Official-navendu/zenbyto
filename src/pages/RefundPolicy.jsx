import React from 'react'
import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import Header from '../components/layout/Header'
import InternalHero from '../components/layout/InternalHero'
import Footer from '../components/layout/Footer'
import PageWrapper from '../components/layout/PageWrapper'

export default function RefundPolicy() {
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
        "name": "Refund Policy",
        "item": "https://www.zenbyto.com/refund-policy"
      }
    ]
  }

  return (
    <PageWrapper>
      <Helmet>
        <title>Refund Policy | Zenbyto</title>
        <meta name="description" content="Zenbyto's Refund Policy explains parameters, frameworks, milestones, and cancellation guidelines for consulting, SEO, and development projects." />
        <link rel="canonical" href="https://www.zenbyto.com/refund-policy" />
        <script type="application/ld+json">{JSON.stringify(breadcrumbSchema)}</script>
      </Helmet>

      <Header />

      <main className="bg-white font-sans overflow-hidden">
        {/* Hero Section */}
        <InternalHero
          badge="💳 Refund Policy"
          heading="Refund Policy"
          description="Last Updated: July 2026 • Details on payment terms, service milestone cancellations, and refund eligibility."
          center={true}
        />

        {/* Content Section */}
        <section className="py-16 bg-white">
          <div className="max-w-3xl mx-auto px-6 text-left">
            
            {/* Breadcrumb links */}
            <div className="flex items-center space-x-2 text-xs text-brand-gray/60 font-medium mb-8">
              <Link to="/" className="hover:text-primary transition-colors">Home</Link>
              <span>/</span>
              <span className="text-[#111111]">Refund Policy</span>
            </div>

            <article className="prose max-w-none text-[#111111] leading-relaxed text-sm md:text-base space-y-6">
              <p>
                At Zenbyto, we design custom-engineered, data-driven systems. Because our services are highly customized and labor-intensive, we maintain a clear policy regarding refunds.
              </p>
              
              <h2 className="text-lg md:text-xl font-bold text-[#33387A] pt-4">1. Custom Projects & Retainers</h2>
              <p>
                Due to the customized nature of technical search optimization (SEO), link building campaigns, conversion tracking configurations, and custom React web/mobile coding solutions, we do not offer refunds on active projects, completed milestones, or monthly retainer plans.
              </p>
              <p>
                If you choose to cancel a service in the middle of a billing period, you will continue to have access to the service deliverables until the end of that period, and no partial refunds will be issued.
              </p>

              <h2 className="text-lg md:text-xl font-bold text-[#33387A] pt-4">2. Milestone Approvals</h2>
              <p>
                For project-based contracts (such as website development or custom app deployment), clients approve milestones sequentially. Once a milestone is reviewed and signed off by the client, the corresponding payment is non-refundable as it covers development work and resource allocation.
              </p>

              <h2 className="text-lg md:text-xl font-bold text-[#33387A] pt-4">3. Exceptional Cases</h2>
              <p>
                In exceptional circumstances where Zenbyto is unable to initiate the agreed-upon project due to resource constraints or unexpected events, a full refund of any advanced deposit will be processed within 14 business days.
              </p>

              <h2 className="text-lg md:text-xl font-bold text-[#33387A] pt-4">4. Reach Out</h2>
              <p>
                If you have any questions or concerns regarding our Refund Policy, please email us directly at <a href="mailto:info@zenbyto.com" className="text-primary hover:underline">info@zenbyto.com</a>.
              </p>
            </article>

          </div>
        </section>
      </main>

      <Footer />
    </PageWrapper>
  )
}
