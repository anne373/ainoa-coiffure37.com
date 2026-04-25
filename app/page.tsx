import Header from '@/components/Header'
import Footer from '@/components/Footer'
import HeroSection from '@/components/sections/HeroSection'
import ConceptSection from '@/components/sections/ConceptSection'
import HairSpaSection from '@/components/sections/HairSpaSection'
import PortfolioSection from '@/components/sections/PortfolioSection'
import ContactSection from '@/components/sections/ContactSection'
import LocationSection from '@/components/sections/LocationSection'

export default function Home() {
  return (
    <>
      <Header />
      <main className="pt-20">
        <HeroSection />
        <ConceptSection />
        <HairSpaSection />
        <PortfolioSection />
        <ContactSection />
        <LocationSection />
      </main>
      <Footer />
    </>
  )
}
