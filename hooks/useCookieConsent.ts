'use client'

import { useState, useEffect } from 'react'

export type CookieCategory = 'necessary' | 'functional' | 'analytics' | 'performance' | 'ads'

export interface CookiePreferences {
  necessary: boolean
  functional: boolean
  analytics: boolean
  performance: boolean
  ads: boolean
  timestamp: number
}

const defaultPreferences: CookiePreferences = {
  necessary: true,
  functional: false,
  analytics: false,
  performance: false,
  ads: false,
  timestamp: Date.now(),
}

export function useCookieConsent() {
  const [preferences, setPreferences] = useState<CookiePreferences>(defaultPreferences)
  const [isLoaded, setIsLoaded] = useState(false)
  const [showConsent, setShowConsent] = useState(false)

  // Load preferences from localStorage
  useEffect(() => {
    const stored = localStorage.getItem('cookiePreferences')
    if (stored) {
      try {
        const parsed = JSON.parse(stored)
        setPreferences(parsed)
        setShowConsent(false)
      } catch (error) {
        console.error('[v0] Failed to parse cookie preferences:', error)
        setShowConsent(true)
      }
    } else {
      setShowConsent(true)
    }
    setIsLoaded(true)
  }, [])

  useEffect(() => {
    if (!isLoaded) return

    // Only execute consent-dependent scripts if user has approved
    if (preferences.analytics) {
      // Example: Load Google Analytics when analytics cookies are accepted
      // loadGoogleAnalytics()
    }
    if (preferences.ads) {
      // Example: Load ad scripts when ads cookies are accepted
      // loadAdPixels()
    }
    if (preferences.performance) {
      // Example: Load performance monitoring when enabled
      // loadPerformanceMonitoring()
    }
    if (preferences.functional) {
      // Example: Load functional third-party scripts
      // loadFunctionalScripts()
    }
  }, [preferences, isLoaded])

  const savePreferences = (newPreferences: Partial<CookiePreferences>) => {
    const updated = {
      ...preferences,
      ...newPreferences,
      timestamp: Date.now(),
    }
    setPreferences(updated)
    localStorage.setItem('cookiePreferences', JSON.stringify(updated))
    setShowConsent(false)
  }

  const rejectAll = () => {
    savePreferences({
      necessary: true,
      functional: false,
      analytics: false,
      performance: false,
      ads: false,
    })
  }

  const acceptAll = () => {
    savePreferences({
      necessary: true,
      functional: true,
      analytics: true,
      performance: true,
      ads: true,
    })
  }

  const resetConsent = () => {
    setShowConsent(true)
  }

  return {
    preferences,
    isLoaded,
    showConsent,
    savePreferences,
    rejectAll,
    acceptAll,
    resetConsent,
  }
}
