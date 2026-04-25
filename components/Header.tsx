'use client'

import { useState } from 'react'
import Image from 'next/image'

// ← Remplacer par votre URL Planity
const PLANITY_URL = 'https://www.planity.com/ainoa-37540-saint-cyr-sur-loire'

const navLinks = [
  { href: '/',           label: 'Accueil' },
  { href: '/#concept',   label: 'Salon' },
  { href: '/head-spa',   label: 'Head SPA' },
  { href: '/#creations', label: 'Créations' },
  { href: '/#contact',   label: 'Contact' },
]

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 w-full border-b border-zinc-200/50 bg-[#FFF7F2]/90 backdrop-blur-md z-50">
      <div className="flex justify-between items-center h-20 px-8 max-w-[1280px] mx-auto w-full">
        {/* Logo */}
        <a href="/">
          <Image
            src="/images/logo-ainoa.png"
            alt="Ainoa Coiffure"
            width={160}
            height={52}
            className="mix-blend-multiply"
            priority
          />
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-10">
          {navLinks.map((link, i) => (
            <a
              key={link.href}
              href={link.href}
              className={
                i === 0
                  ? 'text-[#F54927] font-bold border-b-2 border-[#F54927] pb-1 font-space-grotesk tracking-tight uppercase text-sm'
                  : 'text-zinc-500 hover:text-zinc-900 transition-colors font-space-grotesk tracking-tight uppercase text-sm'
              }
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* CTA + hamburger */}
        <div className="flex items-center gap-4">
          <a
            href={PLANITY_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#F54927] text-white px-6 py-3 rounded-full font-inter text-xs tracking-widest uppercase hover:bg-zinc-900 transition-all duration-200 active:scale-95"
          >
            Prendre RDV
          </a>
          <button
            className="md:hidden p-2"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Menu"
          >
            <span className="material-symbols-outlined text-zinc-900">
              {menuOpen ? 'close' : 'menu'}
            </span>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <nav className="md:hidden bg-[#FFF7F2] border-t border-zinc-200/50 px-8 py-6 flex flex-col gap-4">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="text-zinc-700 hover:text-[#F54927] transition-colors font-space-grotesk uppercase text-sm tracking-tight"
            >
              {link.label}
            </a>
          ))}
        </nav>
      )}
    </header>
  )
}
