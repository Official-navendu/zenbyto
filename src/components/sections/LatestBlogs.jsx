import React from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight, Calendar, Clock } from 'lucide-react'

import { blogsData } from '../../data/blogData'

export default function LatestBlogs() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  }

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  }

  return (
    <section id="blogs" className="py-12 md:py-16 bg-[#33387A]/[0.01] relative overflow-hidden">
      {/* Background Soft Blob */}
      <div className="absolute top-[40%] left-[-10%] w-[35%] h-[35%] rounded-full bg-gradient-radial from-[#33387A]/3 to-transparent blur-[120px] pointer-events-none" />

      <div className="max-w-[1340px] mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14 space-y-3">
          <div className="inline-flex">
            <span className="glass-badge-blue inline-flex items-center gap-1.5 px-3.5 py-1 text-[10px] font-bold tracking-widest uppercase">
              Latest Insights & Articles
            </span>
          </div>
          <h2 className="text-2xl md:text-[36px] lg:text-[42px] font-semibold tracking-tight text-brand-dark">
            Verified SEO & Growth Articles
          </h2>
          <p className="text-base text-brand-gray font-normal leading-relaxed">
            Stay updated with the latest search engine algorithm updates, platform features, and marketing trends.
          </p>
        </div>

        {/* Blog Cards Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, margin: '-80px' }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-5xl mx-auto"
        >
          {blogsData.map((blog) => (
            <motion.div
              key={blog.id}
              variants={cardVariants}
              className="blog-card flex flex-col rounded-2xl bg-white border border-[#33387A]/10 shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 group justify-between overflow-hidden text-left"
            >
              <div>
                {/* Image Wrap (Uncropped object-contain) */}
                <Link to={`/blog/${blog.slug}`} className="block aspect-[16/10] w-full overflow-hidden relative bg-slate-950 p-3 border-b border-slate-100">
                  <picture className="w-full h-full flex items-center justify-center">
                    <source media="(min-width: 1024px)" srcSet={blog.images.featuredDesktop} type="image/webp" />
                    <source media="(min-width: 640px)" srcSet={blog.images.featuredTablet} type="image/webp" />
                    <img
                      src={blog.images.featuredWebp}
                      alt={blog.title}
                      className="w-full h-full object-contain object-center transition-transform duration-500 group-hover:scale-[1.02]"
                      loading="lazy"
                    />
                  </picture>
                  <div className="absolute top-4 left-4">
                    <span className="glass-badge-orange inline-flex items-center gap-1.5 px-3 py-1 text-[9px] font-bold tracking-wider uppercase bg-white/95 border-0">
                      {blog.categoryLabel}
                    </span>
                  </div>
                </Link>

                {/* Content */}
                <div className="p-6 space-y-4">
                  {/* Meta row */}
                  <div className="flex items-center justify-between text-xs text-brand-gray font-medium">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5 text-[#33387A]" />
                      {blog.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5 text-[#FE8233]" />
                      {blog.readTime}
                    </span>
                  </div>

                  <div className="space-y-2">
                    <Link to={`/blog/${blog.slug}`}>
                      <h3 className="font-bold text-base md:text-lg text-brand-dark group-hover:text-primary transition-colors line-clamp-2 leading-snug">
                        {blog.title}
                      </h3>
                    </Link>
                    <p className="text-[13px] text-brand-gray leading-relaxed font-normal line-clamp-3">
                      {blog.excerpt}
                    </p>
                  </div>
                </div>
              </div>

              {/* Read More Trigger */}
              <div className="px-6 pb-6 pt-2">
                <Link
                  to={`/blog/${blog.slug}`}
                  className="glass-btn-secondary w-full text-center py-2.5 text-xs font-bold flex items-center justify-center gap-1.5 group-hover:bg-[#33387A] group-hover:text-white transition-all"
                >
                  Read Full Article
                  <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-0.5" />
                </Link>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* View All Articles Button */}
        <div className="text-center mt-12">
          <Link
            to="/blog"
            className="glass-btn-primary inline-flex items-center gap-2 px-8 py-3.5 text-xs font-bold rounded-full transition-all"
          >
            Explore All Insights
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

      </div>
    </section>
  )
}
