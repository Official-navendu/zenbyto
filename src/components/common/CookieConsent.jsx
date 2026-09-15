import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion'
import { Cookie, Settings, Check, X, ShieldCheck } from 'lucide-react'

const STORAGE_KEY = 'zenbyto_cookie_consent'

export default function CookieConsent() {
  const shouldReduceMotion = useReducedMotion()
  const [isVisible, setIsVisible] = useState(false)
  const [isSettingsOpen, setIsSettingsOpen] = useState(false)

  const [preferences, setPreferences] = useState({
    necessary: true,
    analytics: false,
    marketing: false,
  })

  useEffect(() => {
    // Safely read consent preference from localStorage on client side
    try {
      const savedConsent = localStorage.getItem(STORAGE_KEY)
      if (savedConsent) {
        const parsed = JSON.parse(savedConsent)
        if (parsed && typeof parsed === 'object') {
          setPreferences({
            necessary: true,
            analytics: !!parsed.analytics,
            marketing: !!parsed.marketing,
          })
          setIsVisible(false)
          return
        }
      }
      // First visit: show consent banner
      setIsVisible(true)
    } catch {
      setIsVisible(true)
    }
  }, [])

  useEffect(() => {
    // Listen for custom event to open Cookie Settings from any link/button (e.g. Footer, Cookie Policy page)
    const handleOpenSettings = () => {
      setIsSettingsOpen(true)
    }
    window.addEventListener('openCookieSettings', handleOpenSettings)
    return () => window.removeEventListener('openCookieSettings', handleOpenSettings)
  }, [])

  const saveConsent = (analyticsValue, marketingValue, statusType) => {
    const consentData = {
      necessary: true,
      analytics: analyticsValue,
      marketing: marketingValue,
      status: statusType,
      timestamp: new Date().toISOString(),
    }
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(consentData))
    } catch (e) {
      console.error('Failed to save cookie consent', e)
    }
    setPreferences({
      necessary: true,
      analytics: analyticsValue,
      marketing: marketingValue,
    })
    setIsVisible(false)
    setIsSettingsOpen(false)
  }

  const handleAcceptAll = () => {
    saveConsent(true, true, 'accepted_all')
  }

  const handleRejectAll = () => {
    saveConsent(false, false, 'rejected_all')
  }

  const handleSavePreferences = () => {
    saveConsent(preferences.analytics, preferences.marketing, 'custom_preferences')
  }

  // If consent is already saved and settings modal is closed, render nothing
  if (!isVisible && !isSettingsOpen) return null

  return (
    <>
      {/* 1. COMPACT PREMIUM BOTTOM COOKIE CONSENT BANNER */}
      <AnimatePresence>
        {isVisible && !isSettingsOpen && (
          <motion.div
            initial={shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            exit={shouldReduceMotion ? { opacity: 0, y: 0 } : { opacity: 0, y: 24 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="fixed bottom-4 left-4 right-4 sm:left-6 sm:right-auto sm:max-w-[560px] z-50 pointer-events-auto"
            role="region"
            aria-label="Cookie Consent Banner"
          >
            <div className="bg-white rounded-[20px] border border-slate-200/90 shadow-[0_16px_40px_-8px_rgba(20,24,70,0.18)] p-5 sm:p-6 text-left relative overflow-hidden backdrop-blur-md">
              {/* Subtle top accent highlight bar */}
              <div className="absolute top-0 inset-x-6 h-[2px] bg-gradient-to-r from-[#33387A]/20 via-[#FE8233] to-[#33387A]/20 pointer-events-none" />

              <div className="flex flex-col space-y-4">
                {/* Header Row */}
                <div className="flex items-start justify-between gap-3">
                  <div className="flex items-center gap-2.5">
                    <span className="w-8 h-8 rounded-full bg-[#FE8233]/12 flex items-center justify-center text-[#FE8233] shrink-0">
                      <Cookie className="w-4 h-4" />
                    </span>
                    <h3 className="text-sm sm:text-base font-bold text-[#33387A] tracking-tight">
                      We value your privacy
                    </h3>
                  </div>

                  <Link
                    to="/cookie-policy"
                    className="text-xs font-semibold text-[#FE8233] hover:underline shrink-0"
                  >
                    Cookie Policy
                  </Link>
                </div>

                {/* Banner Copy */}
                <p className="text-xs sm:text-[13px] text-[#475569] font-normal leading-relaxed">
                  We use cookies to improve your experience, understand website usage, and help us deliver better services.
                </p>

                {/* Buttons Row */}
                <div className="flex flex-wrap items-center gap-2.5 pt-1">
                  <button
                    onClick={handleAcceptAll}
                    className="px-4 py-2 rounded-full bg-[#FE8233] hover:bg-[#e06d20] text-white text-xs font-bold transition-all duration-200 shadow-xs cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#FE8233]/50"
                  >
                    Accept All
                  </button>

                  <button
                    onClick={handleRejectAll}
                    className="px-4 py-2 rounded-full bg-slate-100 hover:bg-slate-200 text-[#33387A] text-xs font-semibold transition-all duration-200 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#33387A]/30"
                  >
                    Reject All
                  </button>

                  <button
                    onClick={() => setIsSettingsOpen(true)}
                    className="px-3.5 py-2 rounded-full bg-transparent hover:bg-slate-100 text-[#475569] hover:text-[#33387A] text-xs font-semibold transition-all duration-200 flex items-center gap-1.5 cursor-pointer sm:ml-auto"
                  >
                    <Settings className="w-3.5 h-3.5 text-slate-500" />
                    <span>Cookie Settings</span>
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* 2. COOKIE SETTINGS MODAL / PANEL */}
      <AnimatePresence>
        {isSettingsOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
            {/* Backdrop */}
            <motion.div
              initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={shouldReduceMotion ? { opacity: 0 } : { opacity: 0 }}
              transition={{ duration: 0.25 }}
              onClick={() => setIsSettingsOpen(false)}
              className="fixed inset-0 bg-[#151735]/60 backdrop-blur-xs cursor-pointer"
              aria-hidden="true"
            />

            {/* Modal Container */}
            <motion.div
              initial={shouldReduceMotion ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.96, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={shouldReduceMotion ? { opacity: 0, scale: 1 } : { opacity: 0, scale: 0.96, y: 10 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="relative w-full max-w-[540px] bg-white rounded-[24px] border border-slate-200 shadow-2xl p-6 sm:p-8 text-left z-10 overflow-hidden"
              role="dialog"
              aria-modal="true"
              aria-labelledby="cookie-settings-title"
            >
              {/* Close Button */}
              <button
                onClick={() => setIsSettingsOpen(false)}
                className="absolute top-5 right-5 w-8 h-8 rounded-full bg-slate-100 hover:bg-slate-200 flex items-center justify-center text-slate-500 hover:text-[#33387A] transition-colors cursor-pointer"
                aria-label="Close Cookie Settings"
              >
                <X className="w-4 h-4" />
              </button>

              {/* Title & Info */}
              <div className="flex items-center gap-2.5 mb-2">
                <span className="w-8 h-8 rounded-full bg-[#33387A]/10 flex items-center justify-center text-[#33387A]">
                  <ShieldCheck className="w-4.5 h-4.5" />
                </span>
                <h2 id="cookie-settings-title" className="text-lg sm:text-xl font-bold text-[#33387A]">
                  Cookie Settings
                </h2>
              </div>

              <p className="text-xs sm:text-sm text-[#475569] font-normal leading-relaxed mb-6 border-b border-slate-100 pb-4">
                Customize your cookie preferences. Essential cookies are required for website security and basic operation.
              </p>

              {/* Categories Toggles */}
              <div className="space-y-4 mb-6">
                {/* Category 1: Necessary */}
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80 flex items-start justify-between gap-4">
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <span className="text-xs sm:text-sm font-bold text-[#33387A]">Necessary Cookies</span>
                      <span className="px-2 py-0.5 rounded-full bg-slate-200 text-[#33387A] text-[10px] font-bold uppercase tracking-wider">
                        Always Active
                      </span>
                    </div>
                    <p className="text-xs text-[#64748B] leading-relaxed">
                      Essential cookies required for site security, navigation, and core functionality. Cannot be disabled.
                    </p>
                  </div>

                  <div className="w-10 h-6 rounded-full bg-[#33387A] flex items-center justify-end px-1 shrink-0 opacity-80 cursor-not-allowed">
                    <span className="w-4 h-4 rounded-full bg-white flex items-center justify-center">
                      <Check className="w-2.5 h-2.5 text-[#33387A]" />
                    </span>
                  </div>
                </div>

                {/* Category 2: Analytics */}
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80 flex items-start justify-between gap-4">
                  <div className="space-y-1">
                    <span className="text-xs sm:text-sm font-bold text-[#33387A]">Analytics Cookies</span>
                    <p className="text-xs text-[#64748B] leading-relaxed">
                      Collect anonymized statistical data to help us measure site performance and improve user experience.
                    </p>
                  </div>

                  <button
                    type="button"
                    role="switch"
                    aria-checked={preferences.analytics}
                    onClick={() => setPreferences(prev => ({ ...prev, analytics: !prev.analytics }))}
                    className={`w-11 h-6 rounded-full transition-colors duration-200 flex items-center px-0.5 shrink-0 cursor-pointer ${
                      preferences.analytics ? 'bg-[#FE8233]' : 'bg-slate-300'
                    }`}
                  >
                    <span
                      className={`w-5 h-5 rounded-full bg-white shadow-xs transition-transform duration-200 flex items-center justify-center ${
                        preferences.analytics ? 'translate-x-5' : 'translate-x-0'
                      }`}
                    >
                      {preferences.analytics && <Check className="w-3 h-3 text-[#FE8233]" />}
                    </span>
                  </button>
                </div>

                {/* Category 3: Marketing */}
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80 flex items-start justify-between gap-4">
                  <div className="space-y-1">
                    <span className="text-xs sm:text-sm font-bold text-[#33387A]">Marketing Cookies</span>
                    <p className="text-xs text-[#64748B] leading-relaxed">
                      Used to deliver relevant content and track campaign performance across marketing channels.
                    </p>
                  </div>

                  <button
                    type="button"
                    role="switch"
                    aria-checked={preferences.marketing}
                    onClick={() => setPreferences(prev => ({ ...prev, marketing: !prev.marketing }))}
                    className={`w-11 h-6 rounded-full transition-colors duration-200 flex items-center px-0.5 shrink-0 cursor-pointer ${
                      preferences.marketing ? 'bg-[#FE8233]' : 'bg-slate-300'
                    }`}
                  >
                    <span
                      className={`w-5 h-5 rounded-full bg-white shadow-xs transition-transform duration-200 flex items-center justify-center ${
                        preferences.marketing ? 'translate-x-5' : 'translate-x-0'
                      }`}
                    >
                      {preferences.marketing && <Check className="w-3 h-3 text-[#FE8233]" />}
                    </span>
                  </button>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center justify-end gap-3 pt-2 border-t border-slate-100">
                <button
                  onClick={handleSavePreferences}
                  className="px-4 py-2.5 rounded-full bg-slate-100 hover:bg-slate-200 text-[#33387A] text-xs font-bold transition-all duration-200 cursor-pointer"
                >
                  Save Preferences
                </button>

                <button
                  onClick={handleAcceptAll}
                  className="px-5 py-2.5 rounded-full bg-[#FE8233] hover:bg-[#e06d20] text-white text-xs font-bold transition-all duration-200 shadow-xs cursor-pointer"
                >
                  Accept All
                </button>
              </div>

            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  )
}
