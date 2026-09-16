import React from 'react'
import { Link } from 'react-router-dom'
import { motion, useReducedMotion } from 'framer-motion'
import { 
  Code2, 
  Building2, 
  Plane, 
  Clapperboard, 
  Landmark, 
  HeartPulse, 
  ShoppingCart, 
  Scale, 
  GraduationCap, 
  Leaf, 
  ArrowRight 
} from 'lucide-react'

// ShapeGrid Background Component
import ShapeGrid from '../ui/ShapeGrid'

// Authentic Homepage Image Assets for Card Hover Reveal
import indImg11 from '../../assets/industry/11.avif'
import indImg12 from '../../assets/industry/12.avif'
import indImg13 from '../../assets/industry/13.avif'
import indImg14 from '../../assets/industry/14.avif'
import indImg15 from '../../assets/industry/15.avif'
import indImg16 from '../../assets/industry/16.avif'
import indImg17 from '../../assets/industry/17.avif'
import indImg18 from '../../assets/industry/18.avif'
import indImg19 from '../../assets/industry/19.avif'
import indImg20 from '../../assets/industry/20.avif'

export default function IndustriesWeServe() {
  const shouldReduceMotion = useReducedMotion()

  const industries = [
    {
      id: 'software',
      title: 'Software & Technology',
      desc: 'Scalable digital products and technology solutions.',
      icon: <Code2 className="w-5 h-5" />,
      image: indImg11,
    },
    {
      id: 'real-estate',
      title: 'Real Estate',
      desc: 'Digital experiences built for modern property businesses.',
      icon: <Building2 className="w-5 h-5" />,
      image: indImg12,
    },
    {
      id: 'travel',
      title: 'Travel & Hospitality',
      desc: 'Connected experiences that elevate travel and hospitality brands.',
      icon: <Plane className="w-5 h-5" />,
      image: indImg13,
    },
    {
      id: 'entertainment',
      title: 'Entertainment',
      desc: 'Digital experiences designed to engage modern audiences.',
      icon: <Clapperboard className="w-5 h-5" />,
      image: indImg14,
    },
    {
      id: 'fintech',
      title: 'FinTech',
      desc: 'Secure, performance-focused digital solutions for financial brands.',
      icon: <Landmark className="w-5 h-5" />,
      image: indImg15,
    },
    {
      id: 'healthcare',
      title: 'Healthcare',
      desc: 'User-focused digital solutions for healthcare organizations.',
      icon: <HeartPulse className="w-5 h-5" />,
      image: indImg16,
    },
    {
      id: 'ecommerce',
      title: 'E-commerce & Logistics',
      desc: 'Conversion-driven commerce and connected logistics experiences.',
      icon: <ShoppingCart className="w-5 h-5" />,
      image: indImg17,
    },
    {
      id: 'legal',
      title: 'Attorneys & Law Firms',
      desc: 'Professional digital experiences built for legal practices.',
      icon: <Scale className="w-5 h-5" />,
      image: indImg18,
    },
    {
      id: 'education',
      title: 'Education',
      desc: 'Engaging digital platforms for modern learning organizations.',
      icon: <GraduationCap className="w-5 h-5" />,
      image: indImg19,
    },
    {
      id: 'cannabis',
      title: 'Cannabis',
      desc: 'Compliant, conversion-focused digital experiences for cannabis brands.',
      icon: <Leaf className="w-5 h-5" />,
      image: indImg20,
    }
  ]

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.06
      }
    }
  }

  const cardVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] }
    }
  }

  return (
    <section id="industries" className="py-10 sm:py-14 lg:py-16 bg-[#FBF8F1] bg-atmosphere-grain relative overflow-hidden select-none">
      
      {/* Background ShapeGrid Component */}
      {!shouldReduceMotion && (
        <ShapeGrid
          speed={0.5}
          squareSize={40}
          direction="diagonal"
          borderColor="#33387A"
          hoverFillColor="#FE8233"
          shape="square"
          hoverTrailAmount={5}
        />
      )}

      {/* Background Lights */}
      <div className="absolute top-[20%] left-[-10%] w-[30%] h-[30%] rounded-full bg-[#FE8233]/3 blur-[120px] pointer-events-none" />

      <div className="max-w-[1400px] mx-auto px-6 sm:px-8 md:px-10 lg:px-12 relative z-10 space-y-8 sm:space-y-10">
        
        {/* NORMALIZED SECTION HEADER MATCHING INTERNAL PAGES */}
        <div className="text-center max-w-[700px] mx-auto space-y-4">
          <motion.div
            initial={shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="flex items-center justify-center gap-2.5"
          >
            <span className="w-2.5 h-2.5 rounded-full bg-[#FE8233]" />
            <span className="text-xs sm:text-[13px] font-semibold tracking-[0.16em] uppercase text-[#FE8233]">
              INDUSTRIES WE SERVE
            </span>
            <div className="w-12 h-[1px] bg-[#FE8233]/35" />
          </motion.div>
          
          <motion.h2
            initial={shouldReduceMotion ? { opacity: 1, y: 0, filter: 'blur(0px)' } : { opacity: 0, y: 20, filter: 'blur(4px)' }}
            whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
            className="text-[28px] sm:text-[36px] md:text-[42px] lg:text-[46px] font-semibold text-[#33387A] tracking-tight leading-tight"
          >
            Tailored Solutions for Every Domain
          </motion.h2>

          <motion.p
            initial={shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.18, ease: [0.22, 1, 0.36, 1] }}
            className="text-base sm:text-lg text-[#475569] font-normal leading-[1.55] max-w-[600px] mx-auto"
          >
            We build domain-specific digital strategies tailored to your industry standards and growth goals.
          </motion.p>
        </div>

        {/* Industry Cards Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3.5 sm:gap-4 lg:gap-5"
        >
          {industries.map((ind) => (
            <motion.div key={ind.id} variants={cardVariants}>
              <Link
                to={`/industries/${ind.id}`}
                className="group relative bg-white border border-[#33387A]/15 rounded-2xl p-4 sm:p-5 flex flex-col justify-between h-full min-h-[155px] sm:min-h-[175px] shadow-xs hover:shadow-xl hover:border-[#FE8233] transition-all duration-500 ease-out hover:-translate-y-[3px] cursor-pointer overflow-hidden block text-left"
              >
                {/* 1. Background Industry Image Layer (Reveals on hover behind orange) */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none overflow-hidden">
                  <img
                    src={ind.image}
                    alt={ind.title}
                    className="w-full h-full object-cover transform scale-105 group-hover:scale-100 transition-transform duration-700 ease-out"
                  />
                </div>

                {/* 2. Orange Tinted Overlay Layer (85% opacity retains orange brand color while showing image) */}
                <div className="absolute inset-0 bg-[#FE8233]/85 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                {/* 3. Card Content Layer (z-10 relative) */}
                <div className="relative z-10 flex flex-col justify-between h-full">
                  {/* Card Top: Icon & Arrow Indicator */}
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <div className="w-9 h-9 rounded-xl bg-[#33387A]/8 text-[#33387A] group-hover:bg-white/20 group-hover:text-white flex items-center justify-center shrink-0 transition-colors duration-300">
                      {ind.icon}
                    </div>

                    <div className="w-6 h-6 rounded-full bg-slate-100 group-hover:bg-white/20 text-slate-400 group-hover:text-white flex items-center justify-center shrink-0 transition-colors duration-300">
                      <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-0.5" />
                    </div>
                  </div>

                  {/* Card Bottom: Title & Short Description */}
                  <div className="space-y-1 mt-auto">
                    <h3 className="text-sm sm:text-base font-bold text-brand-dark group-hover:text-white transition-colors duration-300 tracking-tight leading-snug">
                      {ind.title}
                    </h3>
                    <p className="text-[11px] sm:text-xs text-brand-gray group-hover:text-white/95 transition-colors duration-300 font-normal leading-normal line-clamp-2">
                      {ind.desc}
                    </p>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  )
}
