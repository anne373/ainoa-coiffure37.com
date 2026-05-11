import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { business } from '@/lib/business'
import BreadcrumbSchema from '@/components/BreadcrumbSchema'

export const metadata: Metadata = {
  title: 'Head Spa Saint-Cyr-sur-Loire | Ainoa Coiffure',
  description:
    'Découvrez nos soins Head Spa à Saint-Cyr-sur-Loire : soin relaxant, soin profond et rituel signature. Réservez en ligne sur Planity.',
  alternates: { canonical: '/head-spa' },
  keywords: [
    'head spa Saint-Cyr-sur-Loire',
    'soin capillaire',
    'soin relaxant cheveux',
    'massage crânien',
    'head spa Tours',
    'Ainoa Coiffure head spa',
  ],
  openGraph: {
    url: `${business.url}/head-spa`,
    title: 'Head Spa Saint-Cyr-sur-Loire | Ainoa Coiffure',
    description:
      'Découvrez nos soins Head Spa à Saint-Cyr-sur-Loire : soin relaxant, soin profond et rituel signature. Réservez en ligne sur Planity.',
  },
}

const PLANITY_URL = 'https://www.planity.com/ainoa-37540-saint-cyr-sur-loire'

const services = [
  {
    tag: 'Essentiel',
    name: 'Soin Relaxant',
    note: null,
    description: 'Shampooing · soin · modelage crânien + épaules, bras et mains',
    aura: 'card-aura-soft',
    options: [
      { label: 'Avec Brushing', price: '75€', duration: '70 min' },
      { label: 'Sans Brushing', price: '60€', duration: '45 min' },
    ],
  },
  {
    tag: 'Profond',
    name: 'Soin Profond',
    note: 'Traitement personnalisé et relaxant suivant :',
    description: 'Gommage · shampooing · hydrolat · soin cheveux · modelage crânien · vapeur + modelage des bras et des mains · brushing',
    aura: 'card-aura-mid',
    options: [
      { label: 'Avec Brushing', price: '115€', duration: '90 min' },
      { label: 'Sans Brushing', price: '100€', duration: '60 min' },
    ],
  },
  {
    tag: 'Signature',
    name: 'Traitant & Relaxant',
    note: 'Immersion dans une relaxation profonde avec un rituel de 8 étapes :',
    description: 'Gommage + scrubber · shampooing · hydrolat · soin cheveux · peigne radio fréquence · modelage crânien · vapeur + modelage des bras et des mains · bain vapeur · modelage visage',
    aura: 'card-aura-strong',
    options: [
      { label: 'Avec Brushing', price: '175€', duration: '120 min' },
      { label: 'Sans Brushing', price: '160€', duration: '90 min' },
    ],
  },
]

export default function HeadSpaPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: 'Accueil', url: '/' },
          { name: 'Head Spa', url: '/head-spa' },
        ]}
      />
      <Header />
      <main className="pt-20 bg-[#FFF7F2]">

        {/* Hero */}
        <section className="relative mt-4 mx-4 h-[220px] sm:h-[320px] md:h-[420px] lg:h-[480px] overflow-hidden rounded-[48px]">
          <Image
            src="/images/spa/image6.png"
            alt="Head Spa Ainoa Coiffure"
            fill
            priority
            className="object-cover brightness-[0.65]"
            sizes="(max-width: 640px) calc(100vw - 32px), (max-width: 1024px) calc(100vw - 32px), 1280px"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
          <div className="absolute inset-0 flex items-end">
            <div className="max-w-[1280px] mx-auto px-8 pb-12 w-full text-white">
              <h1 className="text-[26px] sm:text-[34px] md:text-[44px] lg:text-h1 leading-tight font-space-grotesk font-bold uppercase mb-4">
                Head Spa
              </h1>
              <p className="font-inter text-body-lg opacity-90 max-w-xl">
                Un rituel de bien-être complet pour votre cuir chevelu et votre esprit.
              </p>
            </div>
          </div>
        </section>

        {/* Intro */}
        <section className="py-20 max-w-[1280px] mx-auto px-8">
          <div className="grid grid-cols-12 gap-6 items-start">
            <div className="col-span-12 md:col-span-5">
              <h2 className="text-[22px] sm:text-[28px] md:text-[36px] lg:text-h2 leading-tight font-space-grotesk font-semibold uppercase text-zinc-900">
                Nos Soins
              </h2>
            </div>
            <div className="col-span-12 md:col-span-6 md:col-start-7">
              <p className="font-inter text-body-lg text-zinc-600 leading-relaxed">
                Chaque soin Head Spa est conçu pour allier détente profonde et soin technique
                de votre chevelure. Nos rituels sont réalisés dans un espace dédié, dans le
                calme et la sérénité.
              </p>
            </div>
          </div>
        </section>

        {/* Cartes de soins */}
        <section className="pb-[120px] max-w-[1280px] mx-auto px-8">
          <div className="flex flex-col gap-6">
            {services.map((service, index) => {
              const isSignature = service.tag === 'Signature'

              const icons = [
                /* Essentiel — feuille */
                <svg key="leaf" viewBox="0 0 24 24" fill="currentColor" className="w-7 h-7" aria-hidden="true"><path d="M17 8C8 10 5.9 16.17 3.82 21.34L5.71 22l1-2.3A4.49 4.49 0 0 0 8 20C19 20 22 3 22 3c-1 2-8 2-8 2l3.09-3.09A1 1 0 0 0 16.38.3L12 5 9 2 6 5l3 3-6 1 2 3 5-1-2 4 3 2 1-5 5 3c-1-3 0-7 0-7z"/></svg>,
                /* Profond — goutte */
                <svg key="drop" viewBox="0 0 24 24" fill="currentColor" className="w-7 h-7" aria-hidden="true"><path d="M12 2c-5.33 4.55-8 8.48-8 11.8 0 4.98 3.8 8.2 8 8.2s8-3.22 8-8.2c0-3.32-2.67-7.25-8-11.8z"/></svg>,
                /* Signature — couronne */
                <svg key="crown" viewBox="0 0 24 24" fill="currentColor" className="w-7 h-7" aria-hidden="true"><path d="M5 16L3 5l5.5 5L12 4l3.5 6L21 5l-2 11H5zm14 3c0 .6-.4 1-1 1H6c-.6 0-1-.4-1-1v-1h14v1z"/></svg>,
              ]

              return (
                <div
                  key={service.name}
                  className={`relative rounded-[40px] transition-transform duration-300 hover:-translate-y-1 ${service.aura} ${
                    isSignature
                      ? 'bg-zinc-900 border-2 border-[#F54927]/50'
                      : 'bg-white border border-zinc-100'
                  }`}
                >
                  {/* Badge populaire */}
                  {isSignature && (
                    <div className="flex justify-center pt-5">
                      <span className="bg-[#F54927] text-white text-[10px] font-inter font-bold tracking-[0.2em] uppercase px-5 py-2 rounded-full">
                        LE PLUS COMPLET
                      </span>
                    </div>
                  )}

                  <div className="p-10 md:p-12">
                    <div className="flex flex-col md:flex-row md:items-center gap-10">

                      {/* Gauche — icône + tag + nom + étapes */}
                      <div className="flex-1">
                        <div className="flex items-center gap-4 mb-6">
                          <div className={`w-14 h-14 rounded-full flex items-center justify-center shrink-0 ${
                            isSignature ? 'bg-[#F54927] text-white' : 'bg-[#FFF7F2] text-[#F54927]'
                          }`}>
                            {icons[index]}
                          </div>
                          <div>
                            <span className={`inline-block text-[10px] font-inter font-bold tracking-[0.2em] uppercase px-3 py-1 rounded-full ${
                              isSignature ? 'bg-white/10 text-zinc-300' : 'bg-zinc-100 text-zinc-500'
                            }`}>
                              {service.tag}
                            </span>
                            <h3 className={`text-[20px] sm:text-[24px] font-space-grotesk font-semibold uppercase mt-1 ${
                              isSignature ? 'text-white' : 'text-zinc-900'
                            }`}>
                              {service.name}
                            </h3>
                          </div>
                        </div>

                        {service.note && (
                          <p className="font-inter text-sm text-[#F54927] italic mb-4">
                            {service.note}
                          </p>
                        )}

                        <ul className="space-y-2.5">
                          {service.description.split(' · ').map((feat) => (
                            <li key={feat} className="flex items-start gap-3">
                              <svg className="w-4 h-4 mt-0.5 shrink-0 text-[#F54927]" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                              </svg>
                              <span className={`font-inter text-sm capitalize ${isSignature ? 'text-zinc-300' : 'text-zinc-600'}`}>
                                {feat.trim()}
                              </span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Droite — prix + CTA */}
                      <div className="md:w-72 shrink-0 flex flex-col gap-3">
                        {service.options.map((opt) => (
                          <div
                            key={opt.label}
                            className={`rounded-[20px] px-6 py-5 ${
                              isSignature ? 'bg-white/10' : 'bg-[#FFF7F2]'
                            }`}
                          >
                            <p className={`font-inter text-[10px] uppercase tracking-widest mb-1 ${
                              isSignature ? 'text-zinc-400' : 'text-zinc-400'
                            }`}>
                              {opt.label}
                            </p>
                            <div className="flex items-baseline gap-3">
                              <p className={`font-space-grotesk text-4xl font-bold ${
                                isSignature ? 'text-white' : 'text-[#F54927]'
                              }`}>
                                {opt.price}
                              </p>
                              <p className={`font-inter text-xs ${isSignature ? 'text-zinc-400' : 'text-zinc-400'}`}>
                                {opt.duration}
                              </p>
                            </div>
                          </div>
                        ))}

                        <a
                          href={PLANITY_URL}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={`mt-1 text-center px-8 py-4 rounded-full font-inter text-[10px] tracking-widest uppercase transition-all ${
                            isSignature
                              ? 'bg-[#F54927] text-white hover:bg-white hover:text-zinc-900'
                              : 'bg-[#F54927] text-white hover:bg-zinc-900'
                          }`}
                        >
                          Réserver ce soin
                        </a>
                      </div>

                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </section>

        {/* CTA réservation */}
        <section className="bg-zinc-900 py-24">
          <div className="max-w-[1280px] mx-auto px-8 text-center">
            <span className="text-[#F54927] font-inter font-bold text-xs tracking-[0.2em] uppercase mb-4 block">
              RÉSERVATION
            </span>
            <h2 className="text-[22px] sm:text-[28px] md:text-[36px] lg:text-h2 leading-tight font-space-grotesk font-semibold uppercase text-white mb-6">
              Réserver votre Soin
            </h2>
            <p className="font-inter text-body-lg text-zinc-400 mb-10 max-w-lg mx-auto">
              Cliquez sur un tarif ou utilisez le bouton ci-dessous pour réserver directement sur Planity.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={PLANITY_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-[#F54927] text-white px-12 py-5 rounded-full font-inter text-sm tracking-widest uppercase hover:bg-white hover:text-zinc-900 transition-all"
              >
                Prendre Rendez-vous
              </a>
              <Link
                href="/"
                className="inline-block bg-transparent text-white border border-white/30 px-12 py-5 rounded-full font-inter text-sm tracking-widest uppercase hover:bg-white/10 transition-all"
              >
                Retour au site
              </Link>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  )
}
