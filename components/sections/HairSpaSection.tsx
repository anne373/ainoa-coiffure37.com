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
    <section id="spa" className="py-12 md:py-[80px] bg-[#FFF7F2]">
      <div className="max-w-[1280px] mx-auto px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">

          {/* Texte partie 1 + partie 2 (desktop) */}
          <div className="order-1 col-span-12 md:col-span-6 flex flex-col justify-center">
            <div className="max-w-xl">
              <span className="text-[#F54927] font-inter font-bold text-xs tracking-[0.2em] uppercase mb-4 block">
                02 / DÉTENTE
              </span>
              <h2 className="text-[22px] sm:text-[28px] md:text-[36px] lg:text-h2 leading-tight font-space-grotesk font-semibold uppercase text-zinc-900 mb-8">
                L'Expérience<br />Head Spa
              </h2>
              <p className="font-inter text-body-lg text-zinc-600 mb-8 leading-relaxed">
                Une évasion sensorielle unique pour le cuir chevelu et l'esprit. Laissez-vous transporter par nos rituels de soin inspirés du Japon.
              </p>
              {/* Partie 2 visible uniquement desktop */}
              <div className="hidden md:block">
                <h3 className="font-space-grotesk font-semibold text-zinc-900 text-[18px] uppercase tracking-wide mb-4">
                  Un Voyage de Bien-Être Absolu
                </h3>
                <p className="font-inter text-body-lg text-zinc-600 mb-10 leading-relaxed">
                  Le Head SPA est bien plus qu'un simple soin. C'est un rituel complet qui purifie le cuir chevelu, nourrit les cheveux en profondeur et procure une relaxation intense grâce à des techniques de modelage exclusives. Offrez-vous une parenthèse de détente et de lâcher-prise.
                </p>
                <Link
                  href="/head-spa"
                  className="inline-block bg-[#F54927] text-white px-10 py-5 rounded-full font-inter text-sm tracking-widest uppercase hover:bg-zinc-900 transition-all"
                >
                  DÉCOUVRIR LE SPA
                </Link>
              </div>
            </div>
          </div>

          {/* Images avec crossfade + blur */}
          <div className="order-2 col-span-12 md:col-span-6 relative h-[260px] sm:h-[380px] md:h-[600px] overflow-hidden rounded-[48px]">
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

          {/* Texte partie 2 visible uniquement mobile */}
          <div className="order-3 md:hidden col-span-12">
            <h3 className="font-space-grotesk font-semibold text-zinc-900 text-[18px] uppercase tracking-wide mb-4">
              Un Voyage de Bien-Être Absolu
            </h3>
            <p className="font-inter text-body-lg text-zinc-600 mb-8 leading-relaxed">
              Le Head SPA est bien plus qu'un simple soin. C'est un rituel complet qui purifie le cuir chevelu, nourrit les cheveux en profondeur et procure une relaxation intense grâce à des techniques de modelage exclusives. Offrez-vous une parenthèse de détente et de lâcher-prise.
            </p>
            <Link
              href="/head-spa"
              className="inline-block bg-[#F54927] text-white px-8 py-4 rounded-full font-inter text-sm tracking-widest uppercase hover:bg-zinc-900 transition-all"
            >
              DÉCOUVRIR LE SPA
            </Link>
          </div>

        </div>
      </div>
    </section>
  )
}
