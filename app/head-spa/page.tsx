import Image from 'next/image'
import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

const PLANITY_URL = 'https://www.planity.com/ainoa-37540-saint-cyr-sur-loire'

const services = [
  {
    number: '01',
    name: 'Soin Relaxant',
    note: null,
    description: 'Shampooing • soin • modelage crânien + épaules, bras et mains',
    options: [
      { label: 'Avec Brushing', price: '75€', duration: '70 min' },
      { label: 'Sans Brushing', price: '60€', duration: '45 min' },
    ],
  },
  {
    number: '02',
    name: 'Soin Profond',
    note: 'Traitement personnalisé et relaxant suivant :',
    description: 'Gommage • shampooing • hydrolat • soin cheveux • modelage crânien • vapeur + modelage des bras et des mains • brushing',
    options: [
      { label: 'Avec Brushing', price: '115€', duration: '90 min' },
      { label: 'Sans Brushing', price: '100€', duration: '60 min' },
    ],
  },
  {
    number: '03',
    name: 'Traitant & Relaxant',
    note: 'Immersion dans une relaxation profonde avec un rituel de 8 étapes :',
    description: 'Gommage + scrubber • shampooing • hydrolat • soin cheveux • peigne radio fréquence • modelage crânien • vapeur + modelage des bras et des mains • bain vapeur • modelage visage',
    options: [
      { label: 'Avec Brushing', price: '175€', duration: '120 min' },
      { label: 'Sans Brushing', price: '160€', duration: '90 min' },
    ],
  },
]

export default function HeadSpaPage() {
  return (
    <>
      <Header />
      <main className="pt-20 bg-[#FFF7F2]">

        {/* Hero */}
        <section className="relative mt-4 mx-4 h-[480px] overflow-hidden rounded-[48px]">
          <Image
            src="/images/spa/image6.png"
            alt="Head Spa Ainoa Coiffure"
            fill
            priority
            className="object-cover brightness-[0.65]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
          <div className="absolute inset-0 flex items-end">
            <div className="max-w-[1280px] mx-auto px-8 pb-12 w-full text-white">
              <span className="text-[#F54927] font-inter font-bold text-xs tracking-[0.2em] uppercase mb-3 block">
                02 / DÉTENTE
              </span>
              <h1 className="text-h1 font-space-grotesk font-bold uppercase leading-tight mb-4">
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
              <h2 className="text-h2 font-space-grotesk font-semibold uppercase text-zinc-900">
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
          <div className="flex flex-col gap-8">
            {services.map((service) => (
              <div
                key={service.number}
                className="bg-[#FFF7F2] rounded-[40px] overflow-hidden shadow-sm border border-zinc-100 hover:-translate-y-1 transition-transform duration-300"
              >
                {/* Barre orange en haut */}
                <div className="h-1 bg-[#F54927]" />

                <div className="p-10 md:p-12">
                  <div className="flex flex-col md:flex-row md:items-start gap-8">

                    {/* Numéro + titre + description */}
                    <div className="flex-1">
                      <div className="flex items-center gap-4 mb-4">
                        <span className="text-[#F54927] font-inter font-bold text-xs tracking-[0.2em] uppercase">
                          {service.number} / SOIN
                        </span>
                      </div>
                      <h3 className="text-h3 font-space-grotesk font-semibold uppercase text-zinc-900 mb-4">
                        {service.name}
                      </h3>
                      {service.note && (
                        <p className="font-inter text-sm text-[#F54927] italic mb-2">
                          {service.note}
                        </p>
                      )}
                      <p className="font-inter text-body-md text-zinc-500 leading-relaxed">
                        {service.description}
                      </p>
                    </div>

                    {/* Grille de prix */}
                    <div className="md:w-80 shrink-0">
                      <div className="grid grid-cols-2 gap-4">
                        {service.options.map((opt) => (
                          <a
                            key={opt.label}
                            href={PLANITY_URL}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group bg-white rounded-[24px] p-5 text-center hover:bg-[#F54927] transition-all duration-300 cursor-pointer"
                          >
                            <p className="font-inter text-xs text-zinc-400 uppercase tracking-widest mb-2 group-hover:text-white/80 transition-colors">
                              {opt.label}
                            </p>
                            <p className="font-space-grotesk text-3xl font-bold text-[#F54927] group-hover:text-white transition-colors">
                              {opt.price}
                            </p>
                            <p className="font-inter text-xs text-zinc-400 mt-1 group-hover:text-white/70 transition-colors">
                              {opt.duration}
                            </p>
                          </a>
                        ))}
                      </div>
                    </div>

                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* CTA réservation */}
        <section className="bg-zinc-900 py-24">
          <div className="max-w-[1280px] mx-auto px-8 text-center">
            <span className="text-[#F54927] font-inter font-bold text-xs tracking-[0.2em] uppercase mb-4 block">
              RÉSERVATION
            </span>
            <h2 className="text-h2 font-space-grotesk font-semibold uppercase text-white mb-6">
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
