import React, { useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { Helmet } from 'react-helmet-async'
import {
  ArrowLeft,
  CheckCircle2,
  Cpu,
  Layers,
  Maximize2,
  X,
  Lock,
  ExternalLink,
  TrendingUp,
  Target,
  Zap,
  Award,
  Users,
  Search,
  Share2,
  Mail,
  PieChart,
  Globe,
  Radio,
} from 'lucide-react'

// Layout Components
import Header from '../components/layout/Header'
import Footer from '../components/layout/Footer'
import PageWrapper from '../components/layout/PageWrapper'

// Project Images & Responsive Assets
import nexzenMain from '../assets/portfolio/nexzen_extracts.webp'
import nexzenDesktop from '../assets/portfolio/nexzen_extracts_desktop.webp'
import nexzenTablet from '../assets/portfolio/nexzen_extracts_tablet.webp'
import nexzenMobile from '../assets/portfolio/nexzen_extracts_mobile.webp'
import nexzenJpg from '../assets/portfolio/nexzen_extracts.jpg'

import nexzenPerformanceWebp from '../assets/portfolio/nexzen_performance.webp'
import nexzenPerformanceJpg from '../assets/portfolio/nexzen_performance.jpg'

import lumenMain from '../assets/portfolio/lumencloud_tech.webp'
import lumenDesktop from '../assets/portfolio/lumencloud_tech_desktop.webp'
import lumenTablet from '../assets/portfolio/lumencloud_tech_tablet.webp'
import lumenMobile from '../assets/portfolio/lumencloud_tech_mobile.webp'
import lumenJpg from '../assets/portfolio/lumencloud_tech.jpg'

import brightMain from '../assets/portfolio/brightgrid_llc.webp'
import brightDesktop from '../assets/portfolio/brightgrid_llc_desktop.webp'
import brightTablet from '../assets/portfolio/brightgrid_llc_tablet.webp'
import brightMobile from '../assets/portfolio/brightgrid_llc_mobile.webp'
import brightJpg from '../assets/portfolio/brightgrid_llc.jpg'

import azuraMain from '../assets/portfolio/azurafly_aviation.webp'
import azuraDesktop from '../assets/portfolio/azurafly_aviation_desktop.webp'
import azuraTablet from '../assets/portfolio/azurafly_aviation_tablet.webp'
import azuraMobile from '../assets/portfolio/azurafly_aviation_mobile.webp'
import azuraJpg from '../assets/portfolio/azurafly_aviation.jpg'

import skyMain from '../assets/portfolio/skyseeker_agency.webp'
import skyDesktop from '../assets/portfolio/skyseeker_agency_desktop.webp'
import skyTablet from '../assets/portfolio/skyseeker_agency_tablet.webp'
import skyMobile from '../assets/portfolio/skyseeker_agency_mobile.webp'
import skyJpg from '../assets/portfolio/skyseeker_agency.jpg'

import navexmMain from '../assets/portfolio/navexm_exchange.webp'
import navexmDesktop from '../assets/portfolio/navexm_exchange_desktop.webp'
import navexmTablet from '../assets/portfolio/navexm_exchange_tablet.webp'
import navexmMobile from '../assets/portfolio/navexm_exchange_mobile.webp'
import navexmJpg from '../assets/portfolio/navexm_exchange.jpg'

import navexmPerformanceWebp from '../assets/portfolio/navexm_performance.webp'
import navexmPerformanceJpg from '../assets/portfolio/navexm_performance.jpg'

export const projectsData = {
  'nexzen-extracts': {
    id: 1,
    slug: 'nexzen-extracts',
    url: 'nexzenextracts.com',
    websiteUrl: 'https://nexzenextracts.com',
    title: 'NexZen Extracts',
    metaTitle: 'NexZen Extracts Case Study | CBD eCommerce Success Story | ZenByto',
    metaDescription: 'Explore how ZenByto developed and optimized the NexZen Extracts WooCommerce store using WordPress, AWS, Klaviyo, and Mailchimp for a seamless eCommerce experience.',
    industry: 'Hemp & Wellness E-commerce (USA)',
    projectType: 'WooCommerce E-commerce Store',
    category: 'ecommerce',
    categoryBadge: 'E-commerce',
    techStack: ['WordPress', 'WooCommerce', 'AWS', 'Klaviyo', 'Mailchimp'],
    shortDescription: 'Built and optimized a high-converting CBD e-commerce platform focused on performance, user experience, email automation, and conversion optimization.',
    
    client: {
      heading: 'The Client',
      content: 'NexZen Extracts is a premium U.S.-based hemp wellness brand offering federally compliant cannabinoid products, including THCa Flower, Delta-8, Delta-9, CBD, HHC, gummies, vapes, tinctures, and wellness products. With increasing competition and strict advertising regulations in the cannabis industry, the brand needed a comprehensive digital strategy that could build awareness, generate consistent sales, and establish long-term online authority.',
    },

    challenges: [
      'Increase organic visibility and search rankings in a heavily regulated hemp market',
      'Build brand authority within the wellness industry without relying solely on paid ads',
      'Generate consistent website traffic and improve customer acquisition & retention',
      'Expand social media presence and educate audiences on compliant cannabinoid products',
      'Grow an affiliate partner network to establish an additional performance revenue channel',
      'Increase repeat purchases through targeted lifecycle email marketing automation',
      'Strengthen brand credibility through digital PR and high-authority media coverage',
    ],

    strategy: [
      {
        icon: Search,
        title: 'Search Engine Optimization (SEO)',
        desc: 'Implemented a comprehensive SEO strategy focused on technical excellence, content quality, and long-term search visibility.',
        deliverables: [
          'Technical SEO Audit & Speed Optimization',
          'On-Page SEO & Schema Markup Integration',
          'Product & Category Page Optimization',
          'Keyword Research & Competitor Analysis',
          'Content Strategy & Educational Blog Development',
          'Internal Linking Structure & Authority Link Building',
          'Local & International SEO Campaigns',
        ],
      },
      {
        icon: Share2,
        title: 'Social Media Marketing',
        desc: 'Educated audiences, built trust, and created a consistent brand identity across social platforms.',
        deliverables: [
          'Social Media Strategy & Content Calendar Planning',
          'Graphic Design & Creative Production',
          'Product Launch & Promotional Campaigns',
          'Community Management & Trend-Based Content',
          'Brand Awareness Campaigns',
        ],
      },
      {
        icon: Users,
        title: 'Influencer Marketing',
        desc: 'Collaborated with niche creators aligned with the brand target audience to expand reach and build trust.',
        deliverables: [
          'Influencer Research & Outreach',
          'Creator Partnerships & Product Seeding',
          'User-Generated Content (UGC) Generation',
          'Campaign Management & Performance Tracking',
        ],
      },
      {
        icon: Mail,
        title: 'Email Marketing',
        desc: 'Implemented lifecycle-based email marketing campaigns to improve customer retention and maximize repeat purchases.',
        deliverables: [
          'Welcome Email Flows & Cart Recovery Automation',
          'Promotional & Product Launch Email Campaigns',
          'Holiday Sales Campaigns & Retention Flows',
          'Performance Reporting & LTV Optimization',
        ],
      },
      {
        icon: TrendingUp,
        title: 'Affiliate Marketing',
        desc: 'Developed and managed a scalable performance-based affiliate marketing program as an additional revenue channel.',
        deliverables: [
          'Affiliate Program Setup & Architecture',
          'Partner Recruitment & Marketplace Outreach',
          'Affiliate Resource Development',
          'Campaign Management & Performance Optimization',
        ],
      },
      {
        icon: Award,
        title: 'Digital PR & Brand Authority',
        desc: 'Increased brand credibility through strategic media outreach and high-authority placements.',
        deliverables: [
          'Press Release Distribution & Brand Mentions',
          'Paid Blog Placements & Guest Posting',
          'Media Outreach & Niche Publication Features',
          'Authority Link Building',
        ],
      },
      {
        icon: PieChart,
        title: 'Analytics & Performance',
        desc: 'Every campaign was backed by continuous data-driven monitoring and decision-making.',
        deliverables: [
          'Google Analytics 4 Monitoring & Search Console Analysis',
          'Conversion Funnel Tracking & SEO Reporting',
          'Continuous Performance Optimization',
        ],
      },
    ],

    process: [
      { step: '01', title: 'Discovery', desc: 'In-depth market research, compliance analysis, and audience profiling.' },
      { step: '02', title: 'Planning', desc: 'Structuring 360° growth roadmap, tech stack, and content calendar.' },
      { step: '03', title: 'Design', desc: 'Crafting high-converting UX/UI mockups and brand creative assets.' },
      { step: '04', title: 'Development', desc: 'WooCommerce store setup on AWS, Klaviyo flows, and technical SEO.' },
      { step: '05', title: 'Optimization', desc: 'Speed tuning, checkout conversion optimization, and cart recovery flows.' },
      { step: '06', title: 'Launch & Scale', desc: 'Rolling out multi-channel campaigns, PR, and affiliate outreach.' },
    ],

    metrics: [
      { value: '$1M+', label: 'Revenue Generated', desc: 'Total Revenue in First Year' },
      { value: '6,500+', label: 'Orders Fulfilled', desc: 'Total Orders Successfully Delivered' },
      { value: '2K+', label: 'Organic Traffic', desc: 'Monthly Organic Traffic (Ahrefs)' },
      { value: '1,000+', label: 'Ranking Keywords', desc: 'Top 50 Keywords on Google' },
      { value: '2,000+', label: 'Email Subscribers', desc: 'Acquired via Automated Funnels' },
      { value: '50+', label: 'Affiliate Partners', desc: 'Active Onboarded Partners' },
      { value: '50+', label: 'Influencer Campaigns', desc: 'Executed Campaigns & UGC' },
      { value: '100+', label: 'PR Placements', desc: 'PR Placements & Paid Blog Features' },
    ],

    assets: {
      main: nexzenMain,
      fallback: nexzenJpg,
      desktop: nexzenDesktop,
      tablet: nexzenTablet,
      mobile: nexzenMobile,
      performanceGraphic: nexzenPerformanceWebp,
      performanceGraphicFallback: nexzenPerformanceJpg,
    },

    gallery: [
      { id: 1, title: 'Performance at a Glance Breakdown', webp: nexzenPerformanceWebp, jpg: nexzenPerformanceJpg },
      { id: 2, title: 'WooCommerce Storefront & Header', webp: nexzenMain, jpg: nexzenJpg },
      { id: 3, title: 'Desktop High Resolution View', webp: nexzenDesktop, jpg: nexzenJpg },
    ],
  },
  'navexm-exchange': {
    id: 6,
    slug: 'navexm-exchange',
    url: 'navexm.com',
    websiteUrl: 'https://navexm.com/',
    title: 'NavExM Exchange',
    metaTitle: 'NavExM Exchange Case Study | Crypto Exchange Development | Zenbyto',
    metaDescription: 'Explore how Zenbyto designed and developed the NavExM Exchange platform using React.js, Node.js, and AWS to create a scalable cryptocurrency exchange experience.',
    industry: 'FinTech • Cryptocurrency • Blockchain',
    projectType: 'Cryptocurrency Exchange Platform',
    category: 'crypto',
    categoryBadge: 'Crypto / FinTech',
    techStack: ['React.js', 'Node.js', 'AWS'],
    shortDescription: 'Launching a Next-Generation Cryptocurrency Exchange & Scaling It to 10,000+ Users.',
    
    client: {
      heading: 'Client Overview',
      content: 'NavExM Exchange is a next-generation cryptocurrency trading platform designed to provide secure, fast, and user-friendly digital asset trading for global investors. The vision was to create a trusted exchange capable of competing in a rapidly evolving blockchain ecosystem while establishing credibility among traders, investors, and crypto communities. ZenByto partnered with NavExM from the very beginning, helping transform an idea into a launch-ready digital brand.',
    },

    challenges: [
      'Build a premium fintech brand identity capable of competing with established global crypto exchanges',
      'Design a modern, conversion-focused trading website and optimize complex user registration journeys',
      'Establish trust among crypto investors in a highly competitive and security-sensitive market',
      'Increase organic search visibility for high-intent blockchain and trading keywords',
      'Build an engaged social media community across Telegram, X (Twitter), LinkedIn, and Instagram',
      'Generate platform sign-ups and position NavExM as an emerging next-gen exchange',
    ],

    strategy: [
      {
        icon: Globe,
        title: 'Brand & Website Development',
        desc: 'Established NavExM digital identity and optimized the user acquisition funnel.',
        deliverables: [
          'Brand Positioning & Visual Identity',
          'UI/UX Design & High-Converting Wireframes',
          'React.js Website & Trading Dashboard Development',
          'Landing Pages & User Journey Optimization',
          'Mobile Optimization across viewports',
        ],
      },
      {
        icon: Search,
        title: 'Search Engine Optimization (SEO)',
        desc: 'Driven organic search authority across blockchain and cryptocurrency keywords.',
        deliverables: [
          'Technical SEO Audit & Infrastructure Hardening',
          'On-Page Optimization & Schema Implementation',
          'Blockchain & Crypto Keyword Research',
          'Content Strategy & Educational Blog Development',
        ],
      },
      {
        icon: Share2,
        title: 'Social Media Marketing & Community',
        desc: 'Built an active ecosystem across social and messaging channels.',
        deliverables: [
          'Brand Awareness Campaigns & Daily Content Strategy',
          'Educational Crypto Content & Product Announcements',
          'Active Community Engagement across Telegram & Socials',
        ],
      },
      {
        icon: Target,
        title: 'Performance Marketing',
        desc: 'Targeted user acquisition funnels for early adopter registration.',
        deliverables: [
          'Meta Advertising & Google Ads Strategy',
          'Retargeting Campaigns & Landing Page Optimization',
        ],
      },
      {
        icon: Radio,
        title: 'Digital PR & Authority Building',
        desc: 'Positioned NavExM as a trusted exchange across crypto media publications.',
        deliverables: [
          'Crypto News Publications & Press Releases',
          'Brand Mentions & Guest Posts for Authority Building',
        ],
      },
    ],

    process: [
      { step: '01', title: 'Discovery & Positioning', desc: 'Brand positioning, market analysis, and UI/UX journey architecture.' },
      { step: '02', title: 'Platform Development', desc: 'React.js frontend, Node.js backend matching engine, and AWS cloud security.' },
      { step: '03', title: 'Launch & Acquisition', desc: 'Integrated SEO, content marketing, and performance advertising.' },
      { step: '04', title: 'Community Growth', desc: 'Telegram, LinkedIn, X, and Instagram community cultivation.' },
      { step: '05', title: 'Authority Building', desc: '150+ educational blogs, 200+ press releases, and 20+ PR placements.' },
      { step: '06', title: 'Business Scaling', desc: 'Accelerating trading activity, user retention, and platform volume.' },
    ],

    metrics: [
      { value: '10,000+', label: 'Registered Users', desc: 'In 6 Months' },
      { value: '$1M+', label: 'Trading Volume', desc: 'In a Year' },
      { value: '$200K+', label: 'Revenue', desc: 'In the First Year' },
      { value: '6,500+', label: 'Community Members', desc: 'Total Active Members' },
      { value: '2K+', label: 'Organic Traffic', desc: 'Monthly Visitors in a Year' },
      { value: '100+', label: 'Ranking Keywords', desc: 'Top 50 Rankings' },
      { value: '150+', label: 'Blogs Published', desc: 'Educational Articles' },
      { value: '200+', label: 'Press Releases', desc: 'Published Worldwide' },
      { value: '20+', label: 'PR Placements', desc: 'Total Media Placements' },
      { value: '3,000+', label: 'Telegram Members', desc: 'Active Community' },
      { value: '2,500+', label: 'LinkedIn Followers', desc: 'Professional Network' },
      { value: '2,000+', label: 'X Followers', desc: 'Twitter Community' },
    ],

    clientOutcome: 'ZenByto didn\'t just market NavExM Exchange—we helped launch, position, and scale it into a credible fintech platform. Through strategic branding, website development, SEO, content marketing, social media, community building, and digital PR, we created a complete digital ecosystem that accelerated user acquisition and business growth. Within the first year, NavExM achieved 10,000+ registered users, generated over $1 million in trading volume, produced $200,000+ in revenue, and built a thriving community of 6,500+ members, establishing a strong foundation for long-term success in the cryptocurrency industry.',

    assets: {
      main: navexmMain,
      fallback: navexmJpg,
      desktop: navexmDesktop,
      tablet: navexmTablet,
      mobile: navexmMobile,
      performanceGraphic: navexmPerformanceWebp,
      performanceGraphicFallback: navexmPerformanceJpg,
    },

    gallery: [
      { id: 1, title: 'NavExM Performance at a Glance Infographic', webp: navexmPerformanceWebp, jpg: navexmPerformanceJpg },
      { id: 2, title: 'World\'s Most Rewarding Crypto Exchange Hero', webp: navexmMain, jpg: navexmJpg },
      { id: 3, title: 'Desktop High Speed Trading Layout', webp: navexmDesktop, jpg: navexmJpg },
    ],
  },
  'lumencloud-technologies': {
    id: 2,
    slug: 'lumencloud-technologies',
    url: 'lumencloudtech.com',
    websiteUrl: 'https://lumencloudtech.com',
    title: 'LumenCloud Technologies',
    metaTitle: 'LumenCloud Technologies Case Study | ZenByto',
    metaDescription: 'Discover how ZenByto designed and developed a modern corporate IT services website for LumenCloud Technologies focused on lead generation.',
    industry: 'IT Services',
    projectType: 'Service-Based Company Website',
    category: 'corporate',
    categoryBadge: 'Corporate',
    techStack: ['HTML', 'CSS', 'JavaScript'],
    shortDescription: 'Designed and developed a modern corporate website focused on lead generation, brand credibility, and service presentation.',
    client: {
      heading: 'The Client',
      content: 'LumenCloud Technologies provides enterprise cloud infrastructure and SEO marketing services. We created a modern corporate website emphasizing speed, high-conversion lead generation forms, and clear service presentation.',
    },
    challenges: [
      'Create a fast-loading corporate web presence',
      'Improve lead generation funnel and form accessibility',
      'Structure clean SEO hierarchy for IT service offerings',
    ],
    strategy: [
      {
        icon: Cpu,
        title: 'Modern Frontend & Speed Optimization',
        desc: 'Engineered lightweight HTML/CSS/JS code to ensure sub-second page loads and high responsiveness.',
        deliverables: ['Custom Code Architecture', 'Responsive Layout', 'Lead Generation Integration'],
      },
    ],
    process: [
      { step: '01', title: 'Discovery', desc: 'Analyzing brand positioning and IT service requirements.' },
      { step: '02', title: 'Design', desc: 'Crafting modern UI components and corporate color palettes.' },
      { step: '03', title: 'Development', desc: 'Building responsive frontend code.' },
      { step: '04', title: 'Launch', desc: 'Tuning speed and deploying live.' },
    ],
    metrics: [
      { value: '100%', label: 'Custom Architecture', desc: 'Built from scratch' },
      { value: '< 1.2s', label: 'Page Load Speed', desc: 'Optimized performance' },
      { value: '100%', label: 'Responsive Viewports', desc: 'Mobile & Tablet Ready' },
    ],
    assets: {
      main: lumenMain,
      fallback: lumenJpg,
      desktop: lumenDesktop,
      tablet: lumenTablet,
      mobile: lumenMobile,
    },
    gallery: [
      { id: 1, title: 'Hero & Agency Overview', webp: lumenMain, jpg: lumenJpg },
      { id: 2, title: 'Desktop Optimization View', webp: lumenDesktop, jpg: lumenJpg },
      { id: 3, title: 'Mobile Responsive Showcase', webp: lumenMobile, jpg: lumenJpg },
    ],
  },
  'brightgrid-llc': {
    id: 3,
    slug: 'brightgrid-llc',
    url: 'brightgridllc.co',
    websiteUrl: 'https://brightgridllc.co',
    title: 'BrightGrid LLC',
    metaTitle: 'BrightGrid LLC Case Study | ZenByto',
    metaDescription: 'Explore the corporate venture business platform developed by ZenByto for BrightGrid LLC.',
    industry: 'Business Venture',
    projectType: 'Corporate Venture Website',
    category: 'corporate',
    categoryBadge: 'Corporate',
    techStack: ['HTML', 'CSS', 'JavaScript', 'PHP'],
    shortDescription: 'Developed a scalable venture-focused business website with dynamic content management and strong brand positioning.',
    client: {
      heading: 'The Client',
      content: 'BrightGrid LLC is a digital venture company. We constructed a custom web presence with PHP back-end content management, responsive layouts, contact integration, and speed optimizations.',
    },
    challenges: [
      'Scale corporate venture presentation',
      'Implement dynamic PHP content management',
      'Ensure cross-device responsiveness',
    ],
    strategy: [
      {
        icon: Layers,
        title: 'Venture Portal Architecture',
        desc: 'Developed a scalable business portal featuring PHP dynamic contact workflows and brand positioning.',
        deliverables: ['PHP Back-end Workflows', 'Responsive Layout', 'Contact System'],
      },
    ],
    process: [
      { step: '01', title: 'Discovery', desc: 'Scope definition and venture goals.' },
      { step: '02', title: 'Design & Code', desc: 'UI prototyping and PHP backend coding.' },
      { step: '03', title: 'Launch', desc: 'QA testing and production deployment.' },
    ],
    metrics: [
      { value: '100%', label: 'Dynamic Workflows', desc: 'PHP Back-end' },
      { value: '100%', label: 'Mobile Optimized', desc: 'Responsive Design' },
    ],
    assets: {
      main: brightMain,
      fallback: brightJpg,
      desktop: brightDesktop,
      tablet: brightTablet,
      mobile: brightMobile,
    },
    gallery: [
      { id: 1, title: 'Corporate Hero & Header', webp: brightMain, jpg: brightJpg },
      { id: 2, title: 'Desktop Interface', webp: brightDesktop, jpg: brightJpg },
      { id: 3, title: 'Tablet Responsive View', webp: brightTablet, jpg: brightJpg },
    ],
  },
  'azurafly': {
    id: 4,
    slug: 'azurafly',
    url: 'azurafly.com',
    websiteUrl: 'https://azurafly.com',
    title: 'AzuraFly',
    metaTitle: 'AzuraFly Case Study | Premium Aviation Website | ZenByto',
    metaDescription: 'See how ZenByto built a visually engaging aviation platform with React, Framer Motion, and GSAP for AzuraFly.',
    industry: 'Aviation',
    projectType: 'Premium Aviation Website',
    category: 'aviation',
    categoryBadge: 'Aviation',
    techStack: ['React.js', 'Framer Motion', 'GSAP', 'Node.js'],
    shortDescription: 'Created a visually engaging aviation platform with premium animations, smooth interactions, and modern UI experiences.',
    client: {
      heading: 'The Client',
      content: 'AzuraFly delivers luxury charter and private jet aviation services. We crafted a high-end web experience featuring Framer Motion and GSAP micro-animations, interactive fleet viewing, and responsive layout architecture.',
    },
    challenges: [
      'Deliver luxury aesthetic with 60fps smooth animations',
      'Optimize high-resolution aerospace photography',
      'Engineer interactive fleet booking components',
    ],
    strategy: [
      {
        icon: Zap,
        title: 'Interactive Animation & Modern React',
        desc: 'Integrated GSAP scroll triggers and Framer Motion transitions for luxury brand positioning.',
        deliverables: ['Framer Motion & GSAP Integration', 'React Frontend', 'Responsive Layout'],
      },
    ],
    process: [
      { step: '01', title: 'Concept', desc: 'Luxury luxury UI design drafting.' },
      { step: '02', title: 'Animation', desc: 'GSAP timeline and Framer Motion physics tuning.' },
      { step: '03', title: 'Deploy', desc: 'Node.js environment setup and launch.' },
    ],
    metrics: [
      { value: '60 FPS', label: 'Animation Smoothness', desc: 'GSAP + Framer Motion' },
      { value: '100%', label: 'Custom Luxury UI', desc: 'Tailored Aerospace Design' },
    ],
    assets: {
      main: azuraMain,
      fallback: azuraJpg,
      desktop: azuraDesktop,
      tablet: azuraTablet,
      mobile: azuraMobile,
    },
    gallery: [
      { id: 1, title: 'Fleet Hero Showcase', webp: azuraMain, jpg: azuraJpg },
      { id: 2, title: 'Desktop UI Layout', webp: azuraDesktop, jpg: azuraJpg },
      { id: 3, title: 'Mobile Viewport View', webp: azuraMobile, jpg: azuraJpg },
    ],
  },
  'skyseeker-it-solutions': {
    id: 5,
    slug: 'skyseeker-it-solutions',
    url: 'skyseekeritsolutions.com',
    websiteUrl: 'https://skyseekeritsolutions.com',
    title: 'SkySeeker IT Solutions',
    metaTitle: 'SkySeeker IT Solutions Case Study | Next.js Agency Platform | ZenByto',
    metaDescription: 'Explore the Next.js agency platform built by ZenByto for SkySeeker IT Solutions featuring AWS deployment and Cloudflare edge optimization.',
    industry: 'Digital Agency',
    projectType: 'Agency Website',
    category: 'agency',
    categoryBadge: 'Agency',
    techStack: ['Next.js', 'AWS', 'Cloudflare', 'Klaviyo'],
    shortDescription: 'Developed a modern digital agency platform focused on performance, lead generation, scalability, and marketing integration.',
    client: {
      heading: 'The Client',
      content: 'SkySeeker IT Solutions is a digital growth partner building web and mobile applications. We deployed a Next.js framework backed by Cloudflare edge caching, AWS cloud integration, and Klaviyo lead scoring.',
    },
    challenges: [
      'Scale agency lead pipeline',
      'Optimize edge caching via Cloudflare',
      'Deploy serverless Next.js architecture on AWS',
    ],
    strategy: [
      {
        icon: Globe,
        title: 'Serverless Next.js & Edge Infrastructure',
        desc: 'Deployed Next.js static site generation paired with AWS S3/CloudFront and Cloudflare edge CDN.',
        deliverables: ['Next.js App Router Architecture', 'Cloudflare Edge Caching', 'Klaviyo Integration'],
      },
    ],
    process: [
      { step: '01', title: 'Architecture', desc: 'Defining Next.js SSG + Edge pipeline.' },
      { step: '02', title: 'Build', desc: 'Creating UI components and form flows.' },
      { step: '03', title: 'Cloud Deploy', desc: 'AWS deployment and Cloudflare routing.' },
    ],
    metrics: [
      { value: '100', label: 'Lighthouse Score', desc: 'Next.js + Cloudflare' },
      { value: '100%', label: 'Serverless Reliability', desc: 'AWS Infrastructure' },
    ],
    assets: {
      main: skyMain,
      fallback: skyJpg,
      desktop: skyDesktop,
      tablet: skyTablet,
      mobile: skyMobile,
    },
    gallery: [
      { id: 1, title: 'Main Agency Landing Page', webp: skyMain, jpg: skyJpg },
      { id: 2, title: 'Desktop High Resolution View', webp: skyDesktop, jpg: skyJpg },
      { id: 3, title: 'Tablet Responsive View', webp: skyTablet, jpg: skyJpg },
    ],
  },
}

export default function ProjectDetail() {
  const { slug } = useParams()
  const project = projectsData[slug] || projectsData['nexzen-extracts']
  
  const [lightboxOpen, setLightboxOpen] = useState(false)
  const [activeImageIndex, setActiveImageIndex] = useState(0)

  const openLightbox = (index) => {
    setActiveImageIndex(index)
    setLightboxOpen(true)
  }

  // Schema Org Data
  const caseStudySchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": project.metaTitle || `${project.title} Case Study | Zenbyto`,
    "description": project.metaDescription || project.shortDescription,
    "image": `https://zenbyto.com/assets/portfolio/${project.slug}.jpg`,
    "author": {
      "@type": "Organization",
      "name": "Zenbyto Digital Agency"
    },
    "publisher": {
      "@type": "Organization",
      "name": "Zenbyto",
      "logo": {
        "@type": "ImageObject",
        "url": "https://zenbyto.com/logo-dark.png"
      }
    },
    "mainEntityOfPage": `https://zenbyto.com/portfolio/${project.slug}`
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
        "name": "Portfolio",
        "item": "https://www.zenbyto.com/portfolio"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": project.title,
        "item": `https://www.zenbyto.com/portfolio/${project.slug}`
      }
    ]
  }

  return (
    <PageWrapper>
      <Helmet>
        <title>{project.metaTitle || `${project.title} Case Study | Zenbyto`}</title>
        <meta name="description" content={project.metaDescription || project.shortDescription} />
        <link rel="canonical" href={`https://zenbyto.com/portfolio/${project.slug}`} />
        
        {/* OpenGraph */}
        <meta property="og:type" content="article" />
        <meta property="og:title" content={project.metaTitle || `${project.title} Case Study | Zenbyto`} />
        <meta property="og:description" content={project.metaDescription || project.shortDescription} />
        <meta property="og:url" content={`https://zenbyto.com/portfolio/${project.slug}`} />
        <meta property="og:image" content={`https://zenbyto.com/assets/portfolio/${project.slug}.jpg`} />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={project.metaTitle || `${project.title} Case Study | Zenbyto`} />
        <meta name="twitter:description" content={project.metaDescription || project.shortDescription} />
        <meta name="twitter:image" content={`https://zenbyto.com/assets/portfolio/${project.slug}.jpg`} />

        <meta name="robots" content="index, follow" />
        <script type="application/ld+json">{JSON.stringify(caseStudySchema)}</script>
        <script type="application/ld+json">{JSON.stringify(breadcrumbSchema)}</script>
      </Helmet>

      <Header />

      <main className="pt-[110px] md:pt-[120px] lg:pt-[140px] pb-16 bg-transparent overflow-visible">
        {/* Back Link */}
        <div className="max-w-[1280px] mx-auto px-6 md:px-12 pb-6">
          <Link
            to="/portfolio"
            className="inline-flex items-center gap-2 text-xs font-bold text-brand-gray hover:text-[#FE8233] transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Portfolio Showcase
          </Link>
        </div>

        {/* 1. Hero Section */}
        <section className="max-w-[1280px] mx-auto px-6 md:px-12 pb-10">
          <div className="mt-6 sm:mt-8 lg:mt-10 p-6 sm:p-8 md:p-12 rounded-[32px] border border-[#FE8233]/20 bg-transparent relative overflow-visible shadow-[0_4px_20px_rgba(0,0,0,0.02)]">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              
              {/* Left Header info */}
              <div className="lg:col-span-6 space-y-6 text-left">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="glass-badge-orange inline-flex items-center gap-1.5 px-3.5 py-1 text-[10px] font-extrabold tracking-wider uppercase bg-[#FE8233]/10 text-[#FE8233] border border-[#FE8233]/20 rounded-full">
                    {project.categoryBadge} Case Study
                  </span>
                  <span className="px-3.5 py-1 text-[10px] font-bold text-[#33387A] bg-[#33387A]/10 rounded-full">
                    {project.industry}
                  </span>
                </div>

                <h1 className="text-[32px] sm:text-[36px] md:text-[44px] lg:text-[54px] font-black text-brand-dark tracking-tight leading-[1.15]">
                  {project.title}
                </h1>

                <p className="text-xs md:text-sm font-semibold text-brand-gray/80 uppercase tracking-widest">
                  {project.projectType}
                </p>

                <p className="text-[16px] md:text-[18px] text-brand-gray leading-[1.6] font-normal">
                  {project.shortDescription}
                </p>

                {/* Tech Stack Badges */}
                <div className="space-y-3 pt-2">
                  <div className="flex items-center gap-2 text-xs font-bold text-brand-dark">
                    <Cpu className="w-4 h-4 text-[#FE8233]" />
                    <span>Tech Stack Badges</span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {project.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="px-3.5 py-1.5 rounded-lg bg-[#33387A]/5 border border-[#33387A]/10 text-[#33387A] text-xs font-bold shadow-xs flex items-center gap-1.5"
                      >
                        <Cpu className="w-3.5 h-3.5 text-[#FE8233]" />
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* CTAs */}
                <div className="pt-4 flex flex-wrap gap-4">
                  {project.websiteUrl && (
                    <a
                      href={project.websiteUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="glass-btn-primary px-8 py-3.5 text-xs font-bold rounded-full transition-all inline-flex items-center gap-2 shadow-lg shadow-[#33387A]/20"
                    >
                      Visit Live Website
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  )}
                  <Link
                    to="/free-consultation"
                    className="glass-btn-secondary px-8 py-3.5 text-xs font-bold rounded-full transition-all"
                  >
                    Book Free Consultation
                  </Link>
                </div>
              </div>

              {/* Right: Featured Hero Image Showcase in Transparent Frame */}
              <div className="lg:col-span-6 relative">
                <div
                  onClick={() => openLightbox(0)}
                  className="group relative rounded-2xl overflow-hidden border border-[#33387A]/15 shadow-xl bg-transparent cursor-pointer"
                >
                  {/* Browser Top Bar */}
                  <div className="px-4 py-2.5 bg-slate-900 border-b border-white/10 flex items-center justify-between gap-3">
                    <div className="flex items-center gap-1.5 shrink-0">
                      <span className="w-2.5 h-2.5 rounded-full bg-[#FF5F56] inline-block shadow-sm" />
                      <span className="w-2.5 h-2.5 rounded-full bg-[#FFBD2E] inline-block shadow-sm" />
                      <span className="w-2.5 h-2.5 rounded-full bg-[#27C93F] inline-block shadow-sm" />
                    </div>
                    <div className="flex-1 max-w-[240px] sm:max-w-[300px] mx-auto px-3 py-1 bg-black/60 rounded-full border border-white/10 text-[10px] text-slate-300 font-mono truncate text-center flex items-center justify-center gap-1.5">
                      <Lock className="w-3 h-3 text-emerald-400" />
                      <span className="opacity-90">https://www.{project.url}</span>
                    </div>
                    <div className="shrink-0">
                      <span className="text-[10px] text-[#FE8233] font-black uppercase tracking-wider">{project.categoryBadge}</span>
                    </div>
                  </div>

                  {/* Hero Featured Screenshot Container (Uncropped, Natural transparent bg) */}
                  <div className="relative aspect-[16/10] sm:aspect-[4/3] w-full p-2 flex items-center justify-center bg-transparent">
                    <picture className="w-full h-full flex items-center justify-center">
                      <source media="(min-width: 1024px)" srcSet={project.assets.desktop} type="image/webp" />
                      <source media="(min-width: 640px)" srcSet={project.assets.tablet} type="image/webp" />
                      <source srcSet={project.assets.mobile} type="image/webp" />
                      <img
                        src={project.assets.main}
                        alt={`${project.title} featured case study screenshot`}
                        className="w-full h-full object-contain object-center rounded transition-transform duration-500 group-hover:scale-[1.02]"
                        loading="lazy"
                      />
                    </picture>

                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <span className="px-5 py-2.5 bg-white/95 text-brand-dark text-xs font-bold rounded-full shadow-lg flex items-center gap-2">
                        <Maximize2 className="w-4 h-4 text-[#FE8233]" />
                        Click to View Full Lightbox Screen
                      </span>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* Verified Results & Performance Metrics Section */}
        {project.metrics && project.metrics.length > 0 && (
          <section className="py-12 bg-gradient-to-r from-[#33387A]/5 via-white to-[#FE8233]/5 border-y border-[#33387A]/10 mt-10">
            <div className="max-w-7xl mx-auto px-6 md:px-12 space-y-8">
              <div className="text-center max-w-2xl mx-auto space-y-2">
                <span className="text-[10px] font-extrabold text-[#FE8233] uppercase tracking-widest block">Performance at a Glance</span>
                <h2 className="text-2xl md:text-3xl font-extrabold text-brand-dark">Real Numbers. Real Growth. Real Impact.</h2>
                <p className="text-xs md:text-sm text-brand-gray">A complete digital growth engine that delivered verified results.</p>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
                {project.metrics.map((m, idx) => (
                  <motion.div
                    key={idx}
                    whileHover={{ y: -3 }}
                    className="p-5 md:p-6 bg-white rounded-2xl border border-[#33387A]/10 shadow-sm text-center space-y-1.5 hover:border-[#FE8233] transition-colors"
                  >
                    <p className="text-2xl md:text-4xl font-black text-[#FE8233] leading-none">{m.value}</p>
                    <p className="text-xs font-bold text-brand-dark uppercase tracking-wider">{m.label}</p>
                    <p className="text-[10px] text-brand-gray leading-snug">{m.desc}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* 2. Project Overview */}
        {project.client && (
          <section className="max-w-7xl mx-auto px-6 md:px-12 py-12">
            <div className="bg-slate-50 border border-slate-200/80 rounded-3xl p-8 md:p-12 space-y-4">
              <span className="glass-badge-blue inline-flex items-center gap-1.5 px-3.5 py-1 text-[10px] font-bold tracking-widest uppercase">
                Project Overview
              </span>
              <h2 className="text-2xl md:text-3xl font-extrabold text-brand-dark">{project.client.heading}</h2>
              <p className="text-sm md:text-base text-brand-gray leading-relaxed font-normal">
                {project.client.content}
              </p>
            </div>
          </section>
        )}

        {/* 3. The Challenge */}
        {project.challenges && project.challenges.length > 0 && (
          <section className="max-w-7xl mx-auto px-6 md:px-12 py-8">
            <div className="space-y-6">
              <div className="space-y-2">
                <span className="text-[10px] font-extrabold text-[#FE8233] uppercase tracking-widest">Market Context</span>
                <h2 className="text-2xl md:text-3xl font-extrabold text-brand-dark">The Challenge</h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {project.challenges.map((challenge, idx) => (
                  <div
                    key={idx}
                    className="p-5 rounded-2xl bg-white border border-[#33387A]/10 shadow-xs flex items-start gap-3.5"
                  >
                    <div className="w-7 h-7 rounded-full bg-[#FE8233]/15 text-[#FE8233] font-black text-xs flex items-center justify-center shrink-0 mt-0.5">
                      !
                    </div>
                    <p className="text-xs md:text-sm text-brand-dark font-medium leading-relaxed">
                      {challenge}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* 4. The Solution (Full-Funnel Strategy) */}
        {project.strategy && project.strategy.length > 0 && (
          <section className="max-w-7xl mx-auto px-6 md:px-12 py-12">
            <div className="space-y-8">
              <div className="space-y-2">
                <span className="glass-badge-orange inline-flex items-center gap-1.5 px-3.5 py-1 text-[10px] font-bold tracking-widest uppercase bg-[#FE8233]/10 text-[#FE8233]">
                  Full-Funnel Strategy
                </span>
                <h2 className="text-2xl md:text-3xl font-extrabold text-brand-dark">The Solution & Implementation</h2>
                <p className="text-xs md:text-sm text-brand-gray">An integrated digital marketing ecosystem designed to scale user acquisition and trust.</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {project.strategy.map((item, idx) => {
                  const IconComp = item.icon || CheckCircle2
                  return (
                    <div
                      key={idx}
                      className="p-6 rounded-2xl bg-white border border-[#33387A]/10 shadow-sm space-y-4 hover:border-[#FE8233] transition-colors flex flex-col justify-between"
                    >
                      <div className="space-y-3">
                        <div className="w-10 h-10 rounded-xl bg-[#33387A]/10 text-[#33387A] flex items-center justify-center">
                          <IconComp className="w-5 h-5" />
                        </div>
                        <h3 className="font-bold text-base text-brand-dark">{item.title}</h3>
                        <p className="text-xs text-brand-gray leading-relaxed">{item.desc}</p>
                      </div>

                      {item.deliverables && item.deliverables.length > 0 && (
                        <div className="border-t border-slate-100 pt-3 space-y-1.5">
                          <span className="text-[10px] font-bold text-brand-dark uppercase tracking-wider block">Deliverables:</span>
                          <ul className="space-y-1 text-[11px] text-brand-gray">
                            {item.deliverables.map((d, dIdx) => (
                              <li key={dIdx} className="flex items-start gap-1.5">
                                <CheckCircle2 className="w-3.5 h-3.5 text-[#FE8233] shrink-0 mt-0.5" />
                                <span>{d}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </div>
                  )
                })}
              </div>
            </div>
          </section>
        )}

        {/* 5. Tech Stack */}
        <section className="max-w-7xl mx-auto px-6 md:px-12 py-8">
          <div className="bg-slate-900 text-white rounded-3xl p-8 md:p-12 space-y-6">
            <div className="space-y-2">
              <span className="text-[10px] font-extrabold text-[#FE8233] uppercase tracking-widest">Technologies Used</span>
              <h2 className="text-2xl md:text-3xl font-extrabold text-white">Tech Stack & Infrastructure</h2>
            </div>
            <div className="flex flex-wrap gap-3">
              {project.techStack.map((tech) => (
                <div
                  key={tech}
                  className="px-5 py-2.5 rounded-xl bg-white/10 border border-white/15 text-white font-bold text-xs flex items-center gap-2"
                >
                  <Cpu className="w-4 h-4 text-[#FE8233]" />
                  <span>{tech}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 6. Growth Journey & Timeline Process */}
        {project.process && project.process.length > 0 && (
          <section className="max-w-7xl mx-auto px-6 md:px-12 py-12">
            <div className="space-y-8 text-center max-w-3xl mx-auto">
              <div className="space-y-2">
                <span className="glass-badge-blue inline-flex items-center gap-1.5 px-3.5 py-1 text-[10px] font-bold tracking-widest uppercase">
                  Growth Journey
                </span>
                <h2 className="text-2xl md:text-3xl font-extrabold text-brand-dark">Design & Development Timeline</h2>
              </div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 pt-8">
              {project.process.map((stepItem, idx) => (
                <div
                  key={idx}
                  className="p-5 bg-white border border-[#33387A]/10 rounded-2xl text-center space-y-2 hover:border-[#FE8233] transition-colors"
                >
                  <span className="text-xs font-black text-[#FE8233] block">{stepItem.step}</span>
                  <h4 className="font-bold text-xs md:text-sm text-brand-dark">{stepItem.title}</h4>
                  <p className="text-[10.5px] text-brand-gray leading-snug">{stepItem.desc}</p>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Client Outcome Summary */}
        {project.clientOutcome && (
          <section className="max-w-7xl mx-auto px-6 md:px-12 py-8">
            <div className="p-8 md:p-10 rounded-3xl bg-gradient-to-br from-[#33387A] to-[#1E2248] text-white space-y-4 shadow-xl">
              <span className="text-[10px] font-extrabold text-[#FE8233] uppercase tracking-widest block">Client Outcome</span>
              <h2 className="text-2xl md:text-3xl font-extrabold text-white">Business Impact & Long-Term Value</h2>
              <p className="text-xs md:text-sm text-slate-200 leading-relaxed font-normal">
                {project.clientOutcome}
              </p>
            </div>
          </section>
        )}

        {/* 9. Project Gallery Section */}
        <section className="max-w-7xl mx-auto px-6 md:px-12 py-12">
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-2xl font-bold text-brand-dark">Project Gallery & Media Proof</h2>
                <p className="text-xs text-brand-gray">Click any view to open high-resolution uncropped lightbox preview.</p>
              </div>
            </div>

            {/* Gallery Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {project.gallery.map((imgItem, idx) => (
                <motion.div
                  key={imgItem.id}
                  whileHover={{ y: -4 }}
                  onClick={() => openLightbox(idx)}
                  className="group relative rounded-xl overflow-hidden border border-[#33387A]/15 shadow-sm cursor-pointer bg-slate-950"
                >
                  <div className="p-3 bg-gradient-to-br from-[#0F1123] via-[#1A1D3B] to-[#12142E] aspect-[16/10] flex items-center justify-center">
                    <img
                      src={imgItem.webp}
                      alt={imgItem.title}
                      className="w-full h-full object-contain object-center transition-transform duration-500 group-hover:scale-105"
                      loading="lazy"
                    />
                  </div>
                  <div className="p-3 bg-white border-t border-slate-100 flex items-center justify-between">
                    <span className="text-xs font-bold text-brand-dark">{imgItem.title}</span>
                    <Maximize2 className="w-3.5 h-3.5 text-[#FE8233]" />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Lightbox Modal */}
        <AnimatePresence>
          {lightboxOpen && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex items-center justify-center p-4"
            >
              <button
                onClick={() => setLightboxOpen(false)}
                className="absolute top-6 right-6 p-2.5 text-white/80 hover:text-white bg-white/10 rounded-full cursor-pointer z-50 transition-colors"
              >
                <X className="w-6 h-6" />
              </button>

              <div className="relative max-w-6xl w-full h-[90vh] flex flex-col items-center justify-center p-2">
                <img
                  src={project.gallery[activeImageIndex]?.webp || project.assets.main}
                  alt={project.title}
                  className="max-h-[82vh] max-w-full w-auto object-contain object-center rounded-lg shadow-2xl border border-white/20"
                />

                <p className="mt-4 text-xs md:text-sm text-white/90 font-bold bg-black/60 px-4 py-1.5 rounded-full border border-white/10">
                  {project.gallery[activeImageIndex]?.title || project.title} (100% Full View)
                </p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

      </main>

      <Footer />
    </PageWrapper>
  )
}
