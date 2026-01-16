'use client'

import { ReactNode } from 'react'
import { useCookieConsent } from '@/hooks/useCookieConsent'
import { CookieConsentModal } from './CookieConsentModal'
import { FloatingButtons } from './FloatingButtons'
import { useState, useEffect } from 'react'

export function CookieProvider({ children }: { children: ReactNode }) {
  const cookieConsent = useCookieConsent()
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  useEffect(() => {
    if (cookieConsent.isLoaded && cookieConsent.showConsent) {
      setIsModalOpen(true)
    }
  }, [cookieConsent.isLoaded, cookieConsent.showConsent])

  if (!isMounted) return children

  return (
    <>
      {children}

      {/* Floating Buttons */}
      <FloatingButtons onCookieClick={() => setIsModalOpen(true)} />

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
