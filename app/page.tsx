import { Navbar } from "@/components/organisms/Navbar"
import { Footer } from "@/components/organisms/Footer"
import { HeroSection } from "@/components/sections/HeroSection"
import { IntroSection } from "@/components/sections/IntroSection"
import { EnseadaSection } from "@/components/sections/EnseadaSection"
import { EspelhoSection } from "@/components/sections/EspelhoSection"
import { CaisSection } from "@/components/sections/CaisSection"
import { PraiaSection } from "@/components/sections/PraiaSection"
import { CartasSection } from "@/components/sections/CartasSection"
import { NascenteEMarSection } from "@/components/sections/NascenteEMarSection"
import { CorrentezaSection } from "@/components/sections/CorrentezaSection"
import { TravessiaSection } from "@/components/sections/TravessiaSection"
import { ContatoSection } from "@/components/sections/ContatoSection"
import { WaveDivider } from "@/components/atoms/WaveDivider"

export default function Home() {
  return (
    <main className="min-h-screen pt-16 md:pt-20" role="main">
      <Navbar />
      <HeroSection />
      <IntroSection />
      <EnseadaSection />
      <WaveDivider color="#F2CCB6" />
      <EspelhoSection />
      <CorrentezaSection />
      <CaisSection />
      <PraiaSection />
      <CartasSection />
      <NascenteEMarSection />
      <TravessiaSection />
      <ContatoSection />
      <Footer />
    </main>
  )
}
