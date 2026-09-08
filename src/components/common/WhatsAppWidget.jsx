import React, { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FaWhatsapp } from 'react-icons/fa'
import { X, MessageCircle, ChevronRight } from 'lucide-react'

export default function WhatsAppWidget() {
  const [isOpen, setIsOpen] = useState(false)
  const [isHovered, setIsHovered] = useState(false)
  const widgetRef = useRef(null)
  const phoneNumber = '919220348332'

  // Click outside to close chat panel
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (widgetRef.current && !widgetRef.current.contains(event.target)) {
        setIsOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  const chatOptions = [
    {
      label: 'Website Development',
      message: "Hi Zenbyto, I found you through your website and I'm interested in Website Development. I'd like to discuss my requirements.",
    },
    {
      label: 'SEO & Digital Marketing',
      message: "Hi Zenbyto, I found you through your website and I'm interested in SEO & Digital Marketing. I'd like to discuss my requirements.",
    },
    {
      label: 'Google & Meta Ads',
      message: "Hi Zenbyto, I found you through your website and I'm interested in Google & Meta Ads. I'd like to discuss my requirements.",
    },
    {
      label: 'Brand Management',
      message: "Hi Zenbyto, I found you through your website and I'm interested in Brand Management. I'd like to discuss my requirements.",
    },
    {
      label: 'Social Media Marketing',
      message: "Hi Zenbyto, I found you through your website and I'm interested in Social Media Marketing. I'd like to discuss my requirements.",
    },
    {
      label: 'Just want to talk',
      message: "Hi Zenbyto, I found you through your website and would like to speak with your team about my digital growth requirements.",
    },
  ]

  const handleOptionClick = (messageText) => {
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(messageText)}`
    window.open(url, '_blank', 'noopener,noreferrer')
    setIsOpen(false)
  }

  return (
    <div
      ref={widgetRef}
      className="fixed bottom-[16px] right-[12px] sm:bottom-[18px] sm:right-[16px] md:bottom-[20px] md:right-[20px] lg:bottom-[24px] lg:right-[24px] z-[1100] flex flex-col items-end pointer-events-auto select-none"
      style={{ paddingBottom: 'env(safe-area-inset-bottom)' }}
    >
      {/* DESKTOP HOVER TOOLTIP (z-1102) */}
      <AnimatePresence>
        {isHovered && !isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 6, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 6, scale: 0.95 }}
            transition={{ duration: 0.2, ease: 'easeOut' }}
            className="hidden lg:block absolute right-0 bottom-full mb-3 z-[1102] pointer-events-none"
          >
            <div className="px-3.5 py-1.5 rounded-xl bg-slate-900/90 backdrop-blur-sm text-white text-xs font-semibold shadow-xl border border-white/10 whitespace-nowrap flex items-center gap-1.5">
              <span>We're here to help 👋</span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* MINI WHATSAPP CHAT PANEL (z-1101) */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 12, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 12, scale: 0.96 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
            className="mb-3 w-[calc(100vw-24px)] sm:w-[calc(100vw-32px)] sm:max-w-[370px] md:w-[340px] lg:w-[360px] max-h-[calc(100vh-96px)] sm:max-h-[calc(100vh-110px)] md:max-h-[min(500px,calc(100vh-120px))] lg:max-h-[500px] flex flex-col bg-white rounded-2xl shadow-[0_12px_40px_rgba(0,0,0,0.18)] border border-slate-200/80 overflow-hidden z-[1101] text-left"
          >
            {/* FIXED HEADER */}
            <div className="shrink-0 bg-[#075E54] text-white p-3.5 sm:p-4 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-[#25D366] flex items-center justify-center text-white shrink-0 shadow-xs">
                  <FaWhatsapp className="w-5 h-5 sm:w-6 sm:h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-xs sm:text-sm leading-tight text-white">Zenbyto</h4>
                  <p className="text-[10.5px] sm:text-[11px] text-emerald-100/90 font-medium">Typically replies quickly</p>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="w-10 h-10 sm:w-8 sm:h-8 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors cursor-pointer shrink-0"
                aria-label="Close WhatsApp chat"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* SCROLLABLE MIDDLE CONTENT (Internal Scroll Only) */}
            <div className="flex-1 overflow-y-auto p-3.5 sm:p-4 bg-[#ECE5DD]/40 space-y-3.5 min-h-0 custom-scrollbar">
              {/* Greeting Bubble */}
              <div className="bg-white p-3.5 rounded-2xl rounded-tl-none shadow-xs border border-slate-200/60 max-w-[92%] space-y-1">
                <p className="text-xs text-slate-800 font-semibold leading-relaxed">
                  Hi! 👋 Welcome to Zenbyto.
                </p>
                <p className="text-xs text-slate-700 leading-relaxed font-normal">
                  How can we help you today? Select an option below to start a direct WhatsApp conversation with our team:
                </p>
                <span className="text-[9px] text-slate-400 font-semibold block text-right">Just now</span>
              </div>

              {/* Quick Service Option Buttons */}
              <div className="space-y-2 pt-1">
                <p className="text-[9.5px] font-bold uppercase tracking-wider text-slate-400 px-1">Select a topic:</p>
                {chatOptions.map((option) => (
                  <button
                    key={option.label}
                    onClick={() => handleOptionClick(option.message)}
                    className="w-full text-left p-2.5 sm:p-3 rounded-xl bg-white hover:bg-[#FE8233] text-slate-800 hover:text-white border border-slate-200/80 hover:border-[#FE8233] transition-all duration-200 text-xs font-semibold flex items-center justify-between group shadow-2xs cursor-pointer min-h-[42px]"
                  >
                    <span>{option.label}</span>
                    <ChevronRight className="w-3.5 h-3.5 text-slate-400 group-hover:text-white transition-colors shrink-0" />
                  </button>
                ))}
              </div>
            </div>

            {/* FIXED FOOTER */}
            <div className="shrink-0 p-2.5 bg-slate-50 border-t border-slate-200/60 text-center">
              <p className="text-[10px] text-slate-400 font-medium flex items-center justify-center gap-1">
                <MessageCircle className="w-3 h-3 text-[#25D366]" />
                Powered by Zenbyto Live Acquisition Engine
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* FLOATING TOGGLE BUTTON (z-1100) */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        aria-label={isOpen ? "Close WhatsApp chat" : "Chat with Zenbyto on WhatsApp"}
        className="w-[50px] h-[50px] sm:w-[52px] sm:h-[52px] md:w-[54px] md:h-[54px] lg:w-[56px] lg:h-[56px] rounded-full bg-[#25D366] hover:bg-[#20ba5a] text-white flex items-center justify-center shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 cursor-pointer shrink-0 z-[1100]"
      >
        {isOpen ? (
          <X className="w-5 h-5 sm:w-6 sm:h-6" />
        ) : (
          <FaWhatsapp className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8" />
        )}
      </button>
    </div>
  )
}
