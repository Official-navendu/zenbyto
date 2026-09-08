// Blog 1 Image Imports (Google Search Console Social Update)
import gscFeaturedWebp from '../assets/blog/gsc_social_featured.webp'
import gscFeaturedDesktop from '../assets/blog/gsc_social_featured_desktop.webp'
import gscFeaturedTablet from '../assets/blog/gsc_social_featured_tablet.webp'
import gscFeaturedMobile from '../assets/blog/gsc_social_featured_mobile.webp'
import gscFeaturedJpg from '../assets/blog/gsc_social_featured.jpg'

import gscPropertySelectionWebp from '../assets/blog/gsc_property_selection.webp'
import gscPropertySelectionJpg from '../assets/blog/gsc_property_selection.jpg'

// Blog 2 Image Imports (30-Day Local SEO Pack)
import localSeoPackWebp from '../assets/blog/local_seo_pack_featured.webp'
import localSeoPackDesktop from '../assets/blog/local_seo_pack_desktop.webp'
import localSeoPackTablet from '../assets/blog/local_seo_pack_tablet.webp'
import localSeoPackMobile from '../assets/blog/local_seo_pack_mobile.webp'
import localSeoPackJpg from '../assets/blog/local_seo_pack_featured.jpg'

// Blog 3 Image Imports (SEO vs Social Media)
import seoVsSocialMediaWebp from '../assets/blog/seo_vs_social_media_featured.webp'
import seoVsSocialMediaDesktop from '../assets/blog/seo_vs_social_media_desktop.webp'
import seoVsSocialMediaTablet from '../assets/blog/seo_vs_social_media_tablet.webp'
import seoVsSocialMediaMobile from '../assets/blog/seo_vs_social_media_mobile.webp'
import seoVsSocialMediaJpg from '../assets/blog/seo_vs_social_media_featured.jpg'

export const blogsData = [
  {
    id: 1,
    slug: 'google-search-console-social-media-update',
    title: "Google Search Console Now Supports Social Media Profiles: Here's Why Every Marketer Should Care",
    metaTitle: 'Google Search Console Social Media Update (2026) Explained',
    metaDescription: "Learn how Google Search Console's new Platform Properties let you connect Instagram, YouTube, TikTok, and X. Discover what this update means for SEO, search visibility, and social media performance.",
    category: 'seo',
    categoryLabel: 'SEO & Digital Marketing',
    author: 'ZenByto Insights',
    date: 'August 2026',
    readTime: '5 Min Read',
    featured: true,
    excerpt: "Google has introduced Platform Properties in Search Console, allowing brands and creators to measure search performance for Instagram, YouTube, TikTok, and X.",
    
    images: {
      featuredWebp: gscFeaturedWebp,
      featuredDesktop: gscFeaturedDesktop,
      featuredTablet: gscFeaturedTablet,
      featuredMobile: gscFeaturedMobile,
      featuredJpg: gscFeaturedJpg,
      propertySelectionWebp: gscPropertySelectionWebp,
      propertySelectionJpg: gscPropertySelectionJpg,
    },

    toc: [
      { id: 'platform-properties', label: '1. What Are Platform Properties?' },
      { id: 'data-metrics', label: '2. What Data Can You See?' },
      { id: 'seo-impact', label: '3. Why This Update Matters for SEO' },
      { id: 'business-impact', label: '4. What This Means for Businesses' },
      { id: 'creators-impact', label: '5. What This Means for Content Creators' },
      { id: 'connect-guide', label: '6. How to Connect Your Social Profiles' },
      { id: 'zenbyto-take', label: "7. ZenByto's Take" },
      { id: 'final-thoughts', label: '8. Final Thoughts' },
    ],

    contentSections: [
      {
        type: 'intro',
        text: `For years, Google Search Console (GSC) was built around one thing—your website.\n\nIf you wanted to measure organic performance, you verified your domain, tracked clicks, impressions, rankings, and optimized accordingly.\n\nThat has officially changed.\n\nGoogle has introduced Platform Properties, allowing creators and businesses to add supported social media accounts—including Instagram, YouTube, TikTok, and X (formerly Twitter)—directly inside Google Search Console. The rollout began in July 2026 and is gradually becoming available to users.\n\nIt's more than just another feature. It reflects how Google increasingly treats websites and social platforms as parts of the same online presence.`
      },
      {
        id: 'platform-properties',
        title: 'What Are Platform Properties?',
        text: `Platform Properties are a new property type inside Google Search Console.\n\nInstead of verifying only a website, you can now verify supported social media accounts and monitor how people discover your content through Google Search.\n\nCurrently supported platforms include:\n• Instagram (https://www.instagram.com/)\n• YouTube (https://www.youtube.com/)\n• TikTok (https://www.tiktok.com/en/)\n• X (Twitter) (https://x.com/)\n\nGoogle plans to expand this experience over time as the feature continues rolling out.`,
        hasImage: true,
        imageCaption: 'Google Search Console Property Type Selection UI'
      },
      {
        id: 'data-metrics',
        title: 'What Data Can You See?',
        text: `Once connected, Search Console starts reporting how your social content performs in Google Search—not inside the social platforms themselves.\n\nYou'll be able to track:\n• Search clicks\n• Search impressions\n• Top-performing posts\n• Search queries\n• Discovery trends\n• Performance over time\n\nThis fills a long-standing gap for marketers who previously relied only on Instagram Insights or YouTube Analytics.`
      },
      {
        id: 'seo-impact',
        title: 'Why This Update Matters for SEO',
        text: `This update confirms something SEO professionals have been noticing for a while:\n\nGoogle is indexing and surfacing more social content than ever before.\n\nInstead of treating your website as your only searchable asset, Google now recognizes your broader digital presence.\n\nThat means your SEO strategy should no longer stop at blog posts.\n\nIt should include:\n• Instagram content\n• YouTube videos\n• Short-form videos\n• Creator content\n• Brand profiles\n\nYour social media is becoming another search asset.`
      },
      {
        id: 'business-impact',
        title: 'What This Means for Businesses',
        text: `If you're running a business, your website isn't the only place customers discover you anymore.\n\nSomeone might:\n• Find your Instagram through Google\n• Watch your YouTube video before visiting your site\n• Discover your TikTok from a search query\n• Click your X profile directly from search results\n\nUnderstanding which content attracts search traffic helps you create more of what people are already looking for.`
      },
      {
        id: 'creators-impact',
        title: 'What This Means for Content Creators',
        text: `Creators without a traditional website can finally measure how Google Search contributes to their growth.\n\nInstead of guessing whether Google sends visitors to your content, you'll now have actual search performance data to guide your strategy.`
      },
      {
        id: 'connect-guide',
        title: 'How to Connect Your Social Profiles',
        steps: [
          'Open Google Search Console.',
          'Click Add Property.',
          'Choose Platform Property (if available in your account).',
          'Select your platform.',
          'Verify ownership by signing into the platform.',
          'Wait for data to populate.'
        ],
        text: `If you don't see the option yet, don't worry. Google is rolling the feature out gradually across accounts.`
      },
      {
        id: 'zenbyto-take',
        title: "ZenByto's Take",
        text: `For years, SEO and social media were managed as separate channels.\n\nThat separation is fading.\n\nGoogle's latest update shows that search visibility is no longer limited to websites. Your social profiles, videos, and creator content are becoming measurable parts of your organic presence.\n\nBrands that create search-friendly content across multiple platforms—not just on their website—are likely to build stronger visibility over time.\n\nThe future of SEO isn't just about ranking pages.\n\nIt's about building a discoverable digital ecosystem.`
      },
      {
        id: 'final-thoughts',
        title: 'Final Thoughts',
        text: `Google Search Console's new Platform Properties are more than a reporting feature—they're a signal of where search is headed.\n\nAs search behavior evolves, businesses that optimize both their websites and social media content will be better positioned to capture organic visibility.\n\nIf you're still treating SEO and social media as separate strategies, now is the time to rethink that approach.`
      }
    ]
  },
  {
    id: 2,
    slug: '30-day-local-seo-pack-rank-higher-google-maps',
    title: '30-Day Local SEO Pack: How to Rank Higher on Google Maps',
    metaTitle: '30-Day Local SEO Pack: How to Rank Higher on Google Maps',
    metaDescription: 'A practical 30-day Local SEO roadmap to improve Google Maps rankings, optimize Google Business Profile, build authentic customer reviews, and convert local searches into real calls and visits.',
    category: 'local-seo',
    categoryLabel: 'Local SEO & Google Maps',
    author: 'ZenByto Growth Team',
    date: 'August 2026',
    readTime: '8 Min Read',
    featured: true,
    excerpt: 'A practical step-by-step 30-day plan to optimize your Google Business Profile, build local authority, gather authentic reviews, and rank higher on Google Maps.',

    images: {
      featuredWebp: localSeoPackWebp,
      featuredDesktop: localSeoPackDesktop,
      featuredTablet: localSeoPackTablet,
      featuredMobile: localSeoPackMobile,
      featuredJpg: localSeoPackJpg,
    },

    toc: [
      { id: 'who-is-this-for', label: '1. Who Is This 30-Day Local SEO Guide For?' },
      { id: 'why-google-maps-matters', label: '2. Why Does Ranking on Google Maps Matter?' },
      { id: 'what-is-local-seo', label: '3. What Is Local SEO?' },
      { id: 'how-google-maps-drives-leads', label: '4. How Google Maps Drives Calls & Leads' },
      { id: 'ranking-factors', label: '5. What Factors Influence Google Maps Rankings?' },
      { id: 'week-1-foundation', label: '6. Week 1: Build Your Local SEO Foundation' },
      { id: 'week-2-maps-presence', label: '7. Week 2: Strengthen Your Google Maps Presence' },
      { id: 'week-3-reviews-engagement', label: '8. Week 3: Build Reviews & Customer Engagement' },
      { id: 'week-4-local-authority', label: '9. Week 4: Build Local Authority' },
      { id: 'mistakes-to-avoid', label: '10. Common Local SEO Mistakes to Avoid' },
      { id: 'after-30-days', label: '11. What Happens After 30 Days?' },
      { id: 'local-seo-checklist', label: '12. Your 30-Day Local SEO Checklist' },
      { id: 'faqs', label: '13. Frequently Asked Questions' },
    ],

    faqs: [
      {
        q: 'How long does it take to rank higher on Google Maps?',
        a: 'There is no fixed timeline for Google Maps rankings. Results depend on competition, proximity, relevance, prominence, reviews, website quality, and the current strength of your Google Business Profile. A 30-day plan establishes important foundations, but meaningful local growth usually requires ongoing work.'
      },
      {
        q: 'What is the most important factor for Google Maps ranking?',
        a: 'Google local results are influenced by Relevance, Proximity, and Prominence. No single factor guarantees a higher ranking, which is why optimizing all three areas is essential.'
      },
      {
        q: 'Do Google reviews help Local SEO?',
        a: 'Reviews are an important part of your local presence and influence how customers perceive and choose your business. Review-related signals also form part of Google local search algorithms. Focus on earning genuine reviews from real customers.'
      },
      {
        q: 'Should I add keywords to my Google Business Profile?',
        a: 'Use relevant business terms naturally in your profile information, services, and business descriptions. Avoid keyword stuffing or artificial profile title modifications.'
      },
      {
        q: 'Can I rank for areas where I don’t have a physical location?',
        a: 'Service-area businesses can specify the cities and areas they genuinely serve. However, adding fake address listings solely to manipulate rankings violates guidelines.'
      },
      {
        q: 'Is Local SEO only useful for physical stores?',
        a: 'No. Local SEO benefits both storefront businesses and service-area businesses such as AC repair providers, agencies, clinics, consultants, and contractors.'
      }
    ],

    contentSections: [
      {
        type: 'intro',
        text: `If you run a local business, showing up when nearby customers search for your products or services can make a huge difference.\n\nThink about the last time you searched for something like "AC repair near me," "best salon nearby," "electronics store in Noida," or "dentist near me." Before visiting a business website, chances are you looked at the Google Maps results, checked reviews, compared locations, looked at photos, and then decided where to call or visit.\n\nThat's exactly why Local SEO matters.\n\nYour website may look great, your social media may be active, and your advertising may be bringing traffic — but if your business isn't visible in local search results and Google Maps, you can still miss customers who are actively looking for what you offer.\n\nThe good news? Local SEO doesn't have to feel complicated.\n\nThis 30-day Local SEO plan breaks the process into four practical stages: fixing your foundation, strengthening your Google Business Profile, building reviews and engagement, and developing local authority.`
      },
      {
        id: 'who-is-this-for',
        title: 'Who Is This 30-Day Local SEO Guide For?',
        text: `This guide is useful for:\n• Local store owners looking to increase footfall\n• Service businesses that depend on calls and inquiries\n• New businesses building their local online presence\n• Businesses trying to improve their Google Maps visibility\n• Marketing teams that need a practical Local SEO roadmap\n• Businesses struggling to appear for local or "near me" searches\n\nIf your customers are primarily located within a specific city, neighborhood, or service area, Local SEO should be part of your digital marketing strategy.`
      },
      {
        id: 'why-google-maps-matters',
        title: 'Why Does Ranking on Google Maps Matter?',
        text: `Local search has changed the way people choose businesses.\n\nWhen someone searches for a local product or service, Google displays local map results, business listings, reviews, photos, opening hours, directions, and contact options directly within the search experience.\n\nFor businesses competing in busy markets, a strong Google Maps presence helps potential customers:\n• Discover your business\n• Call you directly from search results\n• Request map directions\n• Visit your website\n• Check authentic reviews and customer photos\n• Compare your services with competitors`
      },
      {
        id: 'what-is-local-seo',
        title: 'What Is Local SEO?',
        text: `Local SEO is the process of improving your online presence so your business can appear for searches connected to your products, services, and geographical area.\n\nUnlike traditional SEO, which targets nationwide or global keywords, Local SEO focuses on reaching nearby customers in specific cities and service zones.\n\nThis includes visibility in Google Maps, local search packs, "near me" queries, and your Google Business Profile.`
      },
      {
        id: 'how-google-maps-drives-leads',
        title: 'How Google Maps Can Drive Calls, Visits, and Leads',
        text: `Imagine someone searches "AC repair near me" or "digital marketing agency in Noida." Google ranks businesses that provide clear, accurate, and trustworthy information.\n\nProminent local visibility delivers:\n• More Visibility: Standing out before ordinary organic listings.\n• Direct Actions: Customers call, visit your site, or request directions straight from the listing.\n• Stronger Trust: High review ratings and real photos inspire customer confidence.`
      },
      {
        id: 'ranking-factors',
        title: 'What Factors Influence Google Maps Rankings?',
        text: `Google considers three primary pillars when determining local rankings:\n\n1. Proximity: How close your business location is to the searcher.\n2. Relevance: How accurately your profile and category match the user query.\n3. Prominence & Trust: The strength of your online reputation, customer reviews, local backlinks, and business citations.`
      },
      {
        id: 'week-1-foundation',
        title: 'Week 1: Build Your Local SEO Foundation',
        steps: [
          'Check NAP Consistency (Name, Address, Phone Number across all directories).',
          'Choose the right primary business category on Google Business Profile.',
          'Write a clean, descriptive business summary without keyword stuffing.',
          'List all core services with accurate descriptions.',
          'Complete every profile attribute, opening hours, and contact details.'
        ],
        text: `Week 1 is about getting the basics right. Inconsistent phone numbers or incorrect business categories hurt trust before your campaign even begins.`
      },
      {
        id: 'week-2-maps-presence',
        title: 'Week 2: Strengthen Your Google Maps Presence',
        steps: [
          'Upload real business photos (storefront, interior, team, work in progress).',
          'Keep photos updated regularly with seasonal or project updates.',
          'Add relevant business attributes (parking, delivery, payment methods).',
          'Define your service area boundaries accurately.',
          'Embed an updated Google Map and consistent NAP details on your website contact page.'
        ],
        text: `Real photos of your team and storefront perform significantly better than generic stock images.`
      },
      {
        id: 'week-3-reviews-engagement',
        title: 'Week 3: Build Reviews and Customer Engagement',
        steps: [
          'Politely request genuine customer reviews after successful service completion.',
          'Focus on review quality and detailed customer experiences.',
          'Respond professionally to all positive and negative reviews.',
          'Maintain natural, steady review acquisition over time.'
        ],
        text: `Never buy fake reviews. Authentic customer experiences build long-term reputation and convert searchers into paying clients.`
      },
      {
        id: 'week-4-local-authority',
        title: 'Week 4: Build Local Authority',
        steps: [
          'Create dedicated location landing pages for main service cities.',
          'Earn relevant local backlinks from community sites, directories, and industry partners.',
          'Publish meaningful Google Business Profile updates and posts.',
          'Use the Google Q&A feature to address common customer inquiries.',
          'Maintain consistent location data across your entire web ecosystem.'
        ],
        text: `Local SEO is an ongoing process. Maintaining your profile ensures your business retains top visibility over competitors.`
      },
      {
        id: 'mistakes-to-avoid',
        title: 'Common Local SEO Mistakes to Avoid',
        text: `Avoid these frequent pitfalls:\n• Inaccurate primary business category\n• Adding locations you do not actually serve\n• Keyword stuffing profile titles or descriptions\n• Purchasing fake reviews\n• Ignoring negative reviews\n• Leaving outdated holiday business hours`
      },
      {
        id: 'after-30-days',
        title: 'What Happens After 30 Days?',
        text: `Completing your 30-day Local SEO plan builds a robust local search foundation. You can expect increased profile views, more phone calls, higher direction requests, and improved local map rankings over the following months.`
      },
      {
        id: 'local-seo-checklist',
        title: 'Your Local SEO Checklist After 30 Days',
        text: `By day 30, your business should have:\n• Fully verified Google Business Profile\n• 100% NAP consistency across local directories\n• Complete services, products, and attributes\n• High-resolution real business photos\n• Active review generation & response workflow\n• Geotargeted local landing pages`
      }
    ]
  },
  {
    id: 3,
    slug: 'seo-vs-social-media-which-strategy-is-right',
    title: 'SEO and Social Media: Which Strategy Is Right for Your Business?',
    metaTitle: 'SEO vs Social Media: Which Strategy Is Right for Your Business?',
    metaDescription: 'A comprehensive guide comparing Search Engine Optimization and social media marketing. Discover how search intent and social brand awareness complement each other for maximum growth.',
    category: 'digital-strategy',
    categoryLabel: 'Digital Strategy & Marketing',
    author: 'ZenByto Growth Team',
    date: 'August 2026',
    readTime: '7 Min Read',
    featured: false,
    excerpt: 'Compare Search Engine Optimization and social media marketing to discover which channel drives higher intent, faster growth, and better ROI for your business—and how to combine them.',

    images: {
      featuredWebp: seoVsSocialMediaWebp,
      featuredDesktop: seoVsSocialMediaDesktop,
      featuredTablet: seoVsSocialMediaTablet,
      featuredMobile: seoVsSocialMediaMobile,
      featuredJpg: seoVsSocialMediaJpg,
    },

    toc: [
      { id: 'what-is-seo', label: '1. What Is SEO and How Does It Work?' },
      { id: 'what-is-social-media', label: '2. What Is Social Media Marketing?' },
      { id: 'social-media-seo', label: '3. What Is Social Media SEO?' },
      { id: 'seo-vs-social-comparison', label: '4. SEO vs Social Media: Key Differences' },
      { id: 'growth-timeline', label: '5. Long-Term vs Short-Term Results' },
      { id: 'lead-generation', label: '6. Which Generates Better Leads?' },
      { id: 'when-to-prioritize-seo', label: '7. When Should You Prioritize SEO?' },
      { id: 'when-to-prioritize-social', label: '8. When Should You Prioritize Social Media?' },
      { id: 'combining-strategies', label: '9. Why the Best Strategy Combines Both' },
      { id: 'eeat-and-modern-search', label: '10. SEO, Social Media & E-E-A-T' },
      { id: 'marketing-mix-by-stage', label: '11. Choosing the Right Marketing Mix' },
      { id: 'decision-guide', label: '12. What Should Your Business Choose?' },
      { id: 'faqs', label: '13. Frequently Asked Questions' },
    ],

    faqs: [
      {
        q: 'Is SEO more important than social media?',
        a: 'Not necessarily. SEO is generally stronger for long-term organic visibility and capturing search intent, while social media is particularly useful for awareness, engagement, community, and brand building.'
      },
      {
        q: 'Can social media replace SEO?',
        a: 'For most businesses, no. Social media posts often have a short lifespan, while SEO builds durable search assets on your website that continue attracting visitors for months and years.'
      },
      {
        q: 'How long does SEO take to show results?',
        a: 'While initial technical fixes take weeks, meaningful organic growth often requires 3 to 6 months of consistent content and authority building.'
      },
      {
        q: 'Does social media directly improve Google rankings?',
        a: 'Social media activity itself is not a direct Google ranking factor. However, social distribution increases brand awareness, referral traffic, content exposure, and backlink opportunities.'
      },
      {
        q: 'Should a small business invest in both SEO and social media?',
        a: 'In many cases, yes. SEO captures active search intent while social media builds brand trust and community engagement.'
      }
    ],

    contentSections: [
      {
        type: 'intro',
        text: `If you're running a business today, you've probably wondered where your marketing budget should go: SEO or social media?\n\nIt's a fair question. Both can increase your visibility, bring people to your brand, and ultimately help you generate more customers. But they work in very different ways.\n\nSEO and social media aren't really competitors. SEO helps you get discovered when someone is actively searching for something you offer, while social media helps you get in front of people, build familiarity, and create relationships before they're necessarily ready to buy.\n\nThe right choice depends on your business model, audience, goals, budget, and how quickly you need results.`
      },
      {
        id: 'what-is-seo',
        title: 'What Is SEO and How Does It Work?',
        text: `Search Engine Optimization (SEO) is the process of improving your website and content so that it appears in relevant search engine results when potential customers look for your solutions.\n\nSEO encompasses four key branches:\n• On-Page SEO: Page titles, headers, meta descriptions, and content quality.\n• Technical SEO: Site speed, mobile usability, indexation, and architecture.\n• Off-Page SEO: Backlinks, digital PR, and authority building.\n• Local SEO: Geo-targeted search visibility and Google Business Profile optimization.\n\nThe biggest advantage of SEO is search intent. You reach people who are already actively seeking a solution.`
      },
      {
        id: 'what-is-social-media',
        title: 'What Is Social Media Marketing?',
        text: `Social media marketing uses platforms such as Instagram, LinkedIn, Facebook, and YouTube to build brand awareness, distribute content, and engage target audiences proactively.\n\nSocial media shines in brand building. Customers see your brand personality, visual identity, team, case studies, and customer stories directly in their feeds.`
      },
      {
        id: 'social-media-seo',
        title: 'What Is Social Media SEO?',
        text: `Social media SEO involves optimizing your social profiles and video captions so users can discover your brand through in-app search on Instagram, YouTube, TikTok, and LinkedIn as well as Google Search.`
      },
      {
        id: 'seo-vs-social-comparison',
        title: 'SEO vs Social Media: Key Differences',
        text: `• Typical Time to Results: SEO takes months; Social Media generates rapid engagement.\n• Traffic Type: SEO is search-driven & intent-based; Social Media is discovery & interest-driven.\n• Content Lifespan: SEO content lasts for years; Social content is shorter-lived.\n• Growth Pattern: SEO compounds over time; Social requires steady posting frequency.`
      },
      {
        id: 'growth-timeline',
        title: 'Long-Term vs Short-Term Results',
        text: `SEO builds a compounding asset over time. An article optimized today can bring qualified traffic for years.\n\nSocial media builds momentum through consistency. A viral video or reel can deliver thousands of impressions within hours.`
      },
      {
        id: 'lead-generation',
        title: 'Which Generates Better Leads?',
        text: `SEO leads often exhibit higher immediate purchase intent because users are actively searching for solutions.\n\nSocial media leads nurture audience relationships and build brand affinity over multiple touchpoints.`
      },
      {
        id: 'when-to-prioritize-seo',
        title: 'When Should You Prioritize SEO?',
        text: `Prioritize SEO when:\n• High search volume exists for your service or software\n• You want sustainable, compounding organic traffic\n• Your business targets location-based queries\n• You want to reduce long-term paid acquisition costs`
      },
      {
        id: 'when-to-prioritize-social',
        title: 'When Should You Prioritize Social Media?',
        text: `Prioritize Social Media when:\n• Your product is visual (fashion, beauty, food, lifestyle)\n• You are launching a new brand without existing search demand\n• Purchase decisions depend heavily on social proof and creator reviews\n• Direct customer DM/community communication is essential`
      },
      {
        id: 'combining-strategies',
        title: 'Why the Best Strategy Combines Both',
        text: `Combining SEO and social media turns one core piece of research into an entire marketing ecosystem.\n\nFor example, an SEO keyword guide can be repurposed into an Instagram carousel, a YouTube video, a LinkedIn post, and a newsletter snippet.`
      },
      {
        id: 'eeat-and-modern-search',
        title: 'SEO, Social Media & E-E-A-T',
        text: `Google's E-E-A-T framework (Experience, Expertise, Authoritativeness, Trustworthiness) values authentic brand signals.\n\nYour website establishes expertise through in-depth articles and case studies, while social media validates your real-world experience through team photos, video demos, and client interactions.`
      },
      {
        id: 'marketing-mix-by-stage',
        title: 'Choosing the Right Marketing Mix by Business Stage',
        text: `• New Business: Focus on initial social awareness and foundational website SEO.\n• Growing Business: Expand SEO content clusters while scaling social repurposing.\n• Established Business: Integrate omnichannel search visibility, social proof, and retargeting.`
      },
      {
        id: 'decision-guide',
        title: 'What Should Your Business Choose?',
        text: `Instead of choosing one channel exclusively, ask:\n"Where is my audience, what are they searching for, and how can I move them from discovery to trust to conversion?"\n\nBuilding both channels creates a resilient growth engine.`
      }
    ]
  }
]
