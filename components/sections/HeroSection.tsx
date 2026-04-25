'use client'

import Image from 'next/image'
import { useState, useEffect, useCallback } from 'react'

const PLANITY_URL = 'https://www.planity.com' // ← Remplacer par votre URL Planity

const slides = [
  { src: '/images/hero/hero-ainoa.jpg', alt: 'Ainoa Coiffure' },
  { src: '/images/hero/image2.png',     alt: 'Intérieur du salon' },
  { src: '/images/hero/image3.png',     alt: "L'équipe Ainoa Coiffure" },
  { src: '/images/hero/image4.png',     alt: 'Salon Ainoa Coiffure' },
  { src: '/images/hero/image5.png',     alt: 'Notre équipe' },
  { src: '/images/hero/image7.png',     alt: "L'équipe Ainoa" },
]

export default function HeroSection() {
  const [current, setCurrent] = useState(0)

  const next = useCallback(() => setCurrent(c => (c + 1) % slides.length), [])
  const prev = useCallback(() => setCurrent(c => (c - 1 + slides.length) % slides.length), [])

  // Auto-avance toutes les 5 secondes
  useEffect(() => {
    const timer = setInterval(next, 5000)
    return () => clearInterval(timer)
  }, [next])

  return (
    <section id="accueil" className="relative mt-4 mx-4 h-[880px]">
      <div className="relative h-full w-full overflow-hidden rounded-[48px] flex items-end">

        {/* Slides en fade */}
        {slides.map((slide, i) => (
          <div
            key={slide.src}
            className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
              i === current ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <Image
              src={slide.src}
              alt={slide.alt}
              fill
              priority={i === 0}
              className="object-cover brightness-[0.72]"
            />
          </div>
        ))}

        {/* Gradient bas */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent z-10" />

        {/* Contenu texte */}
        <div className="relative z-20 w-full max-w-[1280px] mx-auto px-8 pb-28 text-white">
          <div className="max-w-2xl">
            <span className="text-[#F54927] font-inter font-bold text-xs tracking-[0.2em] uppercase mb-4 block">
              01 / CONCEPT
            </span>
            <h1 className="text-h1 font-space-grotesk font-bold text-white uppercase leading-tight mb-8">
              L'art de la coiffure, la passion du soin.
            </h1>
            <p className="font-inter text-body-lg mb-10 max-w-lg opacity-90">
              Bienvenue chez Aïnoa Coiffure, où votre beauté est notre inspiration.
            </p>
            <a
              href={PLANITY_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-[#F54927] text-white px-10 py-5 rounded-full font-inter text-sm tracking-widest uppercase hover:bg-white hover:text-zinc-900 transition-all"
            >
              Prendre Rendez-vous
            </a>
          </div>
        </div>

        {/* Flèche gauche */}
        <button
          onClick={prev}
          aria-label="Précédent"
          className="absolute left-5 top-1/2 -translate-y-1/2 z-20 bg-white/20 hover:bg-white/40 backdrop-blur-sm text-white w-12 h-12 rounded-full flex items-center justify-center transition-all duration-200 hover:scale-105"
        >
          <span className="material-symbols-outlined">chevron_left</span>
        </button>

        {/* Flèche droite */}
        <button
          onClick={next}
          aria-label="Suivant"
          className="absolute right-5 top-1/2 -translate-y-1/2 z-20 bg-white/20 hover:bg-white/40 backdrop-blur-sm text-white w-12 h-12 rounded-full flex items-center justify-center transition-all duration-200 hover:scale-105"
        >
          <span className="material-symbols-outlined">chevron_right</span>
        </button>

        {/* Dots de navigation */}
        <div className="absolute bottom-9 left-1/2 -translate-x-1/2 z-20 flex items-center gap-2">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              aria-label={`Slide ${i + 1}`}
              className={`rounded-full transition-all duration-300 ${
                i === current
                  ? 'bg-[#F54927] w-7 h-2'
                  : 'bg-white/50 hover:bg-white/80 w-2 h-2'
              }`}
            />
          ))}
        </div>

      </div>
    </section>
  )
}
