import type React from "react"
import type { Metadata } from "next"
import { Geist } from "next/font/google"
import { Noto_Serif_SC } from "next/font/google"
import "./globals.css"
import { CookieProvider } from "@/components/cookies/CookieProvider"
import { Toaster } from "@/components/ui/toaster" // Importado Toaster

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
})

const notoSerifSC = Noto_Serif_SC({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-serif",
  display: "swap",
})

export const metadata: Metadata = {
  title: "Escutas e Travessias | Neurodiversidade, Psicologia e Maternidade Atípica",
  description:
    "Um lugar para respirar, pertencer e existir com beleza. Acolhimento para mães atípicas, mulheres neurodivergentes e infâncias neurodiversas.",
  generator: "v0.app",
  creator: "Jessica Woytuski",
  authors: [
    {
      name: "Jessica Woytuski",
      url: "https://github.com/Jessiwoy",
    },
  ],
  icons: {
    icon: "/logo-semfundo.png",
    apple: "/logo-semfundo.png",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR" className={`${geist.variable} ${notoSerifSC.variable}`}>
      <body className={`font-sans antialiased`}>
        <CookieProvider>{children}</CookieProvider>
        <Toaster /> {/* Adicionado Toaster para exibir toasts */}
      </body>
    </html>
  )
}
