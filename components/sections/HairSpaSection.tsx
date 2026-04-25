'use client'

import Image from 'next/image'
import { useState, useEffect } from 'react'
import Link from 'next/link'

const PLANITY_URL = 'https://www.planity.com/ainoa-37540-saint-cyr-sur-loire'

const SPA_IMAGES = [
  { src: '/images/spa/image6.png',       alt: 'Soin du cuir chevelu' },
  { src: '/images/spa/head%20spa.png',   alt: 'Cabine Head Spa' },
]

export default function HairSpaSection() {
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent(c => (c + 1) % SPA_IMAGES.length)
    }, 4000)
    return () => clearInterval(timer)
  }, [])

  return (
    <section id="spa" className="py-[120px] bg-[#FFF7F2]">
      <div className="max-w-[1280px] mx-auto px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">

          {/* Texte */}
          <div className="col-span-12 md:col-span-6 flex flex-col justify-center">
            <div className="max-w-xl">
              <span className="text-[#F54927] font-inter font-bold text-xs tracking-[0.2em] uppercase mb-4 block">
                02 / DÉTENTE
              </span>
              <h2 className="text-h2 font-space-grotesk font-semibold uppercase text-zinc-900 leading-tight mb-8">
                L'Expérience<br />Head Spa
              </h2>
              <p className="font-inter text-body-lg text-zinc-600 mb-10 leading-relaxed">
                Découvrez un sanctuaire de sérénité dédié à la santé de votre cuir chevelu.
                Nos soins profonds marient l'expertise technique à un bien-être absolu, pour
                une chevelure revitalisée et un esprit apaisé.
              </p>
              <div className="space-y-6 mb-12">
                <div className="flex items-start gap-4">
                  <span className="material-symbols-outlined text-[#F54927]">spa</span>
                  <div>
                    <h4 className="font-bold text-zinc-900 uppercase text-sm tracking-wide mb-1 font-space-grotesk">
                      Soin du cuir chevelu
                    </h4>
                    <p className="text-zinc-500 text-sm font-inter">
                      Une approche pour restaurer l'équilibre naturel de votre cuir chevelu.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <span className="material-symbols-outlined text-[#F54927]">psychology</span>
                  <div>
                    <h4 className="font-bold text-zinc-900 uppercase text-sm tracking-wide mb-1 font-space-grotesk">
                      Relaxation Sensorielle
                    </h4>
                    <p className="text-zinc-500 text-sm font-inter">
                      Un moment de déconnexion totale au cœur de notre salon.
                    </p>
                  </div>
                </div>
              </div>
              <Link
                href="/head-spa"
                className="inline-block bg-[#F54927] text-white px-10 py-5 rounded-full font-inter text-sm tracking-widest uppercase hover:bg-zinc-900 transition-all"
              >
                DÉCOUVRIR LE SPA
              </Link>
            </div>
          </div>

          {/* Images avec crossfade + blur */}
          <div className="col-span-12 md:col-span-6 relative h-[260px] sm:h-[380px] md:h-[600px] overflow-hidden rounded-[48px]">
            {SPA_IMAGES.map((img, i) => (
              <div
                key={img.src}
                className={`absolute inset-0 transition-all duration-1000 ease-in-out ${
                  i === current
                    ? 'opacity-100 blur-none scale-100'
                    : 'opacity-0 blur-md scale-105'
                }`}
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) calc(100vw - 64px), 50vw"
                />
              </div>
            ))}

            {/* Dots indicateurs */}
            <div className="absolute bottom-5 left-1/2 -translate-x-1/2 z-10 flex gap-2">
              {SPA_IMAGES.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  aria-label={`Photo ${i + 1}`}
                  className={`rounded-full transition-all duration-300 ${
                    i === current
                      ? 'bg-white w-6 h-2'
                      : 'bg-white/40 hover:bg-white/70 w-2 h-2'
                  }`}
                />
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
