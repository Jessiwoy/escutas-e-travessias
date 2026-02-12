'use client'

import { ReactNode } from 'react'
import { useCookieConsent } from '@/hooks/useCookieConsent'
import { CookieConsentModal } from './CookieConsentModal'
import { CookieBanner } from './CookieBanner'
import { FloatingButtons } from './FloatingButtons'
import { useState, useEffect } from 'react'

export function CookieProvider({ children }: { children: ReactNode }) {
  const cookieConsent = useCookieConsent()
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [showBanner, setShowBanner] = useState(false)
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  useEffect(() => {
    if (cookieConsent.isLoaded && cookieConsent.showConsent) {
      setShowBanner(true)
    }
  }, [cookieConsent.isLoaded, cookieConsent.showConsent])

  const handleBannerAccept = () => {
    cookieConsent.acceptAll()
    setShowBanner(false)
  }

  const handleBannerReject = () => {
    cookieConsent.rejectAll()
    setShowBanner(false)
  }

  const handleOpenPreferences = () => {
    setShowBanner(false)
    setIsModalOpen(true)
  }

  if (!isMounted) return children

  return (
    <>
      {children}

      {/* Floating Buttons */}
      <FloatingButtons onCookieClick={() => setIsModalOpen(true)} />

      {/* Cookie Banner */}
      {showBanner && (
        <CookieBanner
          onAccept={handleBannerAccept}
          onReject={handleBannerReject}
          onPreferences={handleOpenPreferences}
        />
      )}

      {/* Cookie Modal */}
      <CookieConsentModal
        isOpen={isModalOpen}
        preferences={cookieConsent.preferences}
        onSave={cookieConsent.savePreferences}
        onReject={cookieConsent.rejectAll}
        onAcceptAll={cookieConsent.acceptAll}
        onClose={() => setIsModalOpen(false)}
      />
    </>
  )
}
