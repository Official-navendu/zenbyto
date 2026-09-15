import React, { useState, useRef, useEffect } from 'react'
import { motion, useScroll, useReducedMotion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowUpRight, ChevronDown, Rocket, CheckCircle2 } from 'lucide-react'
import { TechnologyCapsuleSlider } from './TrustedTechnologies'
import whyWeExistVisual from '../../assets/about1.png'
import serviceWebdev from '../../assets/about2.png'

// Absolute Story Scenes Dataset (2 States)
const SCENES = [
  {
    id: 'scene-0',
    num: '01',
    leftImg: whyWeExistVisual,
    showLeftPanel: true,
    leftPanelBg: 'bg-[#FE8233] text-white border-white/20',
    leftPanelBadge: 'THE CHALLENGE',
    leftPanelTitle: 'DISCONNECTED SYSTEMS',
    leftPanelDesc: 'Disconnected tools, isolated ad channels, and fragmented tracking waste budget without generating predictable ROI.',
    rightEyebrow: 'STATE 01 — THE PROBLEM',
    rightTitle: 'Disconnected Digital Tools Don’t Create Predictable Growth.',
    rightDesc: 'Websites, ads, and SEO built in isolation waste budget and slow down scaling. Disconnected tools create friction instead of predictable revenue.',
    showCta: false,
    icon: Rocket,
  },
  {
    id: 'scene-1',
    num: '02',
    leftImg: serviceWebdev,
    showLeftPanel: true,
    leftPanelBg: 'bg-gradient-to-br from-[#33387A] to-[#151735] text-white border-white/20',
    leftPanelBadge: 'THE ZENBYTO SYSTEM',
    leftPanelTitle: 'ENGINEERED FOR SCALE',
    leftPanelDesc: 'One unified engine uniting custom engineering, server-side tracking, and performance marketing to scale revenue predictably.',
    rightEyebrow: 'STATE 02 — THE ZENBYTO APPROACH',
    rightTitle: 'We Connect Strategy, Tech & Performance Into One Growth System.',
    rightDesc: 'Zenbyto replaces fragmented marketing with engineered acquisition infrastructure, high-converting digital experiences, and mathematical performance scale.',
    showCta: true,
    icon: CheckCircle2,
  },
]

export default function AboutPreview() {
  const shouldReduceMotion = useReducedMotion()
  const sectionRef = useRef(null)
  const [sceneIndex, setSceneIndex] = useState(0)

  // Master Scroll Progress Engine for Deterministic Pinned Scenes
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end end'],
  })

  // Map scroll progress (0 -> 1) to Deterministic Scene Index (0 -> 1)
  useEffect(() => {
    if (shouldReduceMotion) return

    const unsubscribe = scrollYProgress.on('change', (v) => {
      if (v < 0.5) setSceneIndex(0)
      else setSceneIndex(1)
    })

    return () => unsubscribe()
  }, [scrollYProgress, shouldReduceMotion])

  return (
    <section
      ref={sectionRef}
      id="about"
      className="relative bg-white w-full select-none min-h-[100vh] lg:min-h-[200vh]"
    >
      {/* Background Atmosphere Glow */}
      <div className="absolute top-[10%] left-[-5%] w-[45%] h-[45%] rounded-full bg-gradient-radial from-[#FE8233]/[0.06] to-transparent blur-[140px] pointer-events-none" />
      <div className="absolute bottom-[10%] right-[-5%] w-[40%] h-[40%] rounded-full bg-gradient-radial from-[#33387A]/[0.04] to-transparent blur-[140px] pointer-events-none" />

      {/* DESKTOP PINNED STORY CANVAS (100vh Sticky Viewport with ZERO Layout Shift) */}
      <div className="hidden lg:block sticky top-0 h-screen w-full overflow-hidden">
        <div className="max-w-[1400px] mx-auto px-8 xl:px-12 h-full flex items-center relative z-10">
          
          {/* Rigid Fixed 2-Column Frame (52% Left / 48% Right) */}
          <div className="grid grid-cols-12 gap-12 xl:gap-16 items-center w-full my-auto">
            
            {/* LEFT COLUMN: Fixed Visual Stage Viewport (52% Width - Rigid Container Height) */}
            <div className="col-span-6 w-full relative h-[min(74vh,650px)]">
              <div className="w-full h-full rounded-[32px] overflow-hidden relative">
                
                {/* ABSOLUTE IMAGE SCENE LAYERS (Clean Image - No Border, No Overlays) */}
                {SCENES.map((scene, i) => (
                  <motion.div
                    key={`left-img-${scene.id}`}
                    initial={false}
                    animate={{
                      opacity: i === sceneIndex ? 1 : 0,
                      scale: i === sceneIndex ? 1 : 1.02,
                    }}
                    transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                    className="absolute inset-0 w-full h-full pointer-events-none"
                  >
                    <img
                      src={scene.leftImg}
                      alt={scene.rightTitle}
                      className="w-full h-full object-cover object-center rounded-[32px]"
                      loading="eager"
                    />
                  </motion.div>
                ))}

              </div>
            </div>

            {/* RIGHT COLUMN: Fixed Story Content Viewport (48% Width - Absolute Layers with ZERO Jump) */}
            <div className="col-span-6 w-full relative h-[min(74vh,650px)] flex flex-col justify-center text-left pl-4">
              
              {/* Progress Scene Indicator Dots */}
              <div className="absolute top-4 left-4 flex items-center gap-2.5 z-20">
                {SCENES.map((sc, idx) => (
                  <div
                    key={`dot-${sc.id}`}
                    className={`h-1.5 rounded-full transition-all duration-500 ${
                      idx === sceneIndex
                        ? 'w-8 bg-[#FE8233]'
                        : idx < sceneIndex
                        ? 'w-2.5 bg-[#33387A]'
                        : 'w-2.5 bg-slate-200'
                    }`}
                  />
                ))}
              </div>

              {/* ABSOLUTE RIGHT SCENE CONTENT LAYERS */}
              {SCENES.map((scene, i) => (
                <motion.div
                  key={`right-content-${scene.id}`}
                  initial={false}
                  animate={{
                    opacity: i === sceneIndex ? 1 : 0,
                    y: i === sceneIndex ? 0 : 16,
                    scale: i === sceneIndex ? 1 : 0.98,
                  }}
                  transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                  className={`absolute inset-x-0 top-1/2 -translate-y-1/2 pl-4 pr-6 space-y-4 ${
                    i === sceneIndex ? 'pointer-events-auto z-10' : 'pointer-events-none z-0'
                  }`}
                >
                  <div className="flex items-center gap-2.5">
                    <span className="w-2 h-2 rounded-full bg-[#FE8233]" />
                    <span className="text-xs xl:text-sm font-semibold tracking-[0.14em] uppercase text-[#FE8233]">
                      {scene.rightEyebrow}
                    </span>
                  </div>

                  <h2 className="text-4xl xl:text-[52px] font-semibold tracking-[-0.035em] text-[#151735] leading-[1.02] max-w-[560px]">
                    {scene.rightTitle}
                  </h2>

                  <p className="text-base xl:text-lg text-[#475569] font-normal leading-[1.55] max-w-[540px]">
                    {scene.rightDesc}
                  </p>

                  <div className="pt-2">
                    {scene.showCta ? (
                      <Link
                        to="/about"
                        className="px-7 py-3.5 rounded-full bg-[#FE8233] hover:bg-[#33387A] text-white text-sm font-bold transition-all duration-300 ease-out shadow-md hover:shadow-xl hover:-translate-y-0.5 inline-flex items-center gap-2 cursor-pointer border border-white/30"
                      >
                        <span>Explore About Us</span>
                        <ArrowUpRight className="w-4 h-4" />
                      </Link>
                    ) : (
                      <div className="flex items-center gap-2 text-xs font-semibold tracking-widest text-slate-400 uppercase">
                        <span>SCROLL TO EXPLORE STORY</span>
                        <ChevronDown className="w-4 h-4 text-[#FE8233] animate-bounce" />
                      </div>
                    )}
                  </div>

                  {/* TECHNOLOGY LOGO CAPSULE SLIDER */}
                  <div className="pt-2">
                    <TechnologyCapsuleSlider />
                  </div>
                </motion.div>
              ))}

            </div>

          </div>

        </div>
      </div>

      {/* MOBILE & TABLET STABLE VERTICAL STORYTELLING (< 1024px) */}
      <div className="lg:hidden py-16 px-6 sm:px-8 space-y-16 max-w-2xl mx-auto relative z-10">
        
        <div className="text-left space-y-3">
          <div className="flex items-center gap-2 text-xs font-semibold tracking-wider uppercase text-[#FE8233]">
            <span className="w-2 h-2 rounded-full bg-[#FE8233]" />
            <span>WHY WE EXIST</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-[#151735] leading-tight">
            A Digital Growth Partner Built Differently.
          </h2>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
            Most agencies focus on vanity metrics. Zenbyto engineers conversion-first acquisition systems built on math and clean, customized code.
          </p>
        </div>

        <div className="space-y-12">
          {SCENES.map((scene) => {
            const IconComponent = scene.icon

            return (
              <div key={scene.id} className="space-y-4 pt-4 border-t border-slate-100">
                <div className="w-full h-[240px] sm:h-[320px] rounded-[24px] overflow-hidden relative">
                  <img src={scene.leftImg} alt={scene.rightTitle} className="w-full h-full object-cover rounded-[24px]" />
                </div>

                <div className={`p-5 rounded-[20px] border ${scene.leftPanelBg}`}>
                  <div className="flex items-center gap-2 mb-1.5">
                    <IconComponent className="w-4 h-4 text-[#FE8233]" />
                    <span className="text-xs font-extrabold uppercase tracking-wider">{scene.leftPanelTitle}</span>
                  </div>
                  <p className="text-xs sm:text-sm font-normal opacity-90 leading-relaxed">{scene.rightDesc}</p>
                </div>
              </div>
            )
          })}
        </div>

        <div className="pt-4 text-center space-y-6">
          <Link
            to="/about"
            className="w-full py-4 rounded-full bg-[#FE8233] hover:bg-[#33387A] text-white text-sm font-bold transition-colors inline-flex items-center justify-center gap-2"
          >
            <span>Explore About Us</span>
            <ArrowUpRight className="w-4 h-4" />
          </Link>

          <div className="flex justify-center pt-2">
            <TechnologyCapsuleSlider />
          </div>
        </div>

      </div>
    </section>
  )
}
