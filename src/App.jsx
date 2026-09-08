import React, { useEffect, lazy, Suspense } from 'react'
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom'
import CookieConsent from './components/common/CookieConsent'

const Home = lazy(() => import('./pages/Home'))
const About = lazy(() => import('./pages/About'))
const Contact = lazy(() => import('./pages/Contact'))
const Services = lazy(() => import('./pages/Services'))
const Portfolio = lazy(() => import('./pages/Portfolio'))
const Blog = lazy(() => import('./pages/Blog'))
const ServiceDetail = lazy(() => import('./pages/ServiceDetail'))
const FreeConsultation = lazy(() => import('./pages/FreeConsultation'))
const PrivacyPolicy = lazy(() => import('./pages/PrivacyPolicy'))
const TermsConditions = lazy(() => import('./pages/TermsConditions'))
const RefundPolicy = lazy(() => import('./pages/RefundPolicy'))
const CancellationPolicy = lazy(() => import('./pages/CancellationPolicy'))
const CookiePolicy = lazy(() => import('./pages/CookiePolicy'))
const Disclaimer = lazy(() => import('./pages/Disclaimer'))
const BlogDetail = lazy(() => import('./pages/BlogDetail'))
const ProjectDetail = lazy(() => import('./pages/ProjectDetail'))

const PageLoader = () => (
  <div className="fixed inset-0 bg-white z-50 flex items-center justify-center">
    <div className="w-8 h-8 border-4 border-[#33387A]/10 border-t-[#FE8233] rounded-full animate-spin" />
  </div>
)

// Global helper to handle smooth scrolling to anchors on route changes
function ScrollToHashElement() {
  const { pathname, hash } = useLocation()

  useEffect(() => {
    if (hash) {
      const id = hash.substring(1)
      const el = document.getElementById(id)
      if (el) {
        setTimeout(() => {
          el.scrollIntoView({ behavior: 'smooth' })
        }, 150)
      }
    } else {
      window.scrollTo(0, 0)
    }
  }, [pathname, hash])

  return null
}

const IndustryDetail = lazy(() => import('./pages/IndustryDetail'))
const Industries = lazy(() => import('./pages/Industries'))

function App() {
  return (
    <Router>
      <ScrollToHashElement />
      <Suspense fallback={<PageLoader />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/services" element={<Services />} />
          <Route path="/services/seo-link-building" element={<ServiceDetail slug="seo-link-building" />} />
          <Route path="/services/google-meta-ads" element={<ServiceDetail slug="google-meta-ads" />} />
          <Route path="/services/website-development" element={<ServiceDetail slug="website-development" />} />
          <Route path="/services/app-development" element={<ServiceDetail slug="app-development" />} />
          <Route path="/services/content-email-marketing" element={<ServiceDetail slug="content-email-marketing" />} />
          <Route path="/services/brand-management" element={<ServiceDetail slug="brand-management" />} />
          <Route path="/services/ai-automation" element={<ServiceDetail slug="ai-automation" />} />
          <Route path="/services/social-media-marketing" element={<ServiceDetail slug="social-media-marketing" />} />
          <Route path="/industries" element={<Industries />} />
          <Route path="/industries/:slug" element={<IndustryDetail />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/portfolio/:slug" element={<ProjectDetail />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blogs" element={<Blog />} />
          <Route path="/blog/:slug" element={<BlogDetail />} />
          <Route path="/free-consultation" element={<FreeConsultation />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-and-conditions" element={<TermsConditions />} />
          <Route path="/refund-policy" element={<RefundPolicy />} />
          <Route path="/cancellation-policy" element={<CancellationPolicy />} />
          <Route path="/cookie-policy" element={<CookiePolicy />} />
          <Route path="/disclaimer" element={<Disclaimer />} />
        </Routes>
      </Suspense>
      <CookieConsent />
    </Router>
  )
}

export default App
