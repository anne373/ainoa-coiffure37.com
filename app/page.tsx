import type { Metadata } from 'next'
import { business } from '@/lib/business'
import BreadcrumbSchema from '@/components/BreadcrumbSchema'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import HeroSection from '@/components/sections/HeroSection'
import ConceptSection from '@/components/sections/ConceptSection'
import HairSpaSection from '@/components/sections/HairSpaSection'
import PortfolioSection from '@/components/sections/PortfolioSection'
import ContactSection from '@/components/sections/ContactSection'
import LocationSection from '@/components/sections/LocationSection'
import TestimonialsSection from '@/components/sections/TestimonialsSection'

export const metadata: Metadata = {
  title: 'Ainoa Coiffure | Salon de coiffure Saint-Cyr-sur-Loire',
  description: business.description,
  alternates: { canonical: '/' },
  openGraph: {
    url: business.url,
    title: 'Ainoa Coiffure | Salon de coiffure Saint-Cyr-sur-Loire',
    description: business.description,
  },
}

export default function Home() {
  return (
    <>
      <BreadcrumbSchema items={[{ name: 'Accueil', url: '/' }]} />
      <Header />
      <main className="pt-20">
        <HeroSection />
        <ConceptSection />
        <HairSpaSection />
        <PortfolioSection />
        <ContactSection />
        <LocationSection />
        <TestimonialsSection />
      </main>
      <Footer />
    </>
  )
}
