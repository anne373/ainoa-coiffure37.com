'use client'

import { useState, useEffect } from 'react'
import { usePathname } from 'next/navigation'
import Image from 'next/image'

const PLANITY_URL = 'https://www.planity.com/ainoa-37540-saint-cyr-sur-loire'

const navLinks = [
  { href: '/',           label: 'Accueil',   section: null },
  { href: '/#concept',   label: 'Salon',     section: 'concept' },
  { href: '/head-spa',   label: 'Head SPA',  section: null },
  { href: '/#creations', label: 'Créations', section: 'creations' },
  { href: '/#contact',   label: 'Contact',   section: 'contact' },
]

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [currentLabel, setCurrentLabel] = useState('Accueil')
  const pathname = usePathname()

  const isActive = (href: string) => {
    if (href === '/head-spa') return pathname === '/head-spa'
    return pathname === '/' && href === '/'
  }

  useEffect(() => {
    if (pathname === '/head-spa') {
      setCurrentLabel('Head SPA')
      return
    }

    setCurrentLabel('Accueil')

    const sections = navLinks
      .filter(l => l.section)
      .map(l => ({ id: l.section!, label: l.label }))

    const observers = sections.map(({ id, label }) => {
      const el = document.getElementById(id)
      if (!el) return null
      const obs = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setCurrentLabel(label)
        },
        { rootMargin: '-40% 0px -55% 0px' }
      )
      obs.observe(el)
      return obs
    })

    const heroObs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setCurrentLabel('Accueil') },
      { rootMargin: '0px 0px -80% 0px' }
    )
    const hero = document.getElementById('accueil')
    if (hero) heroObs.observe(hero)

    return () => {
      observers.forEach(obs => obs?.disconnect())
      heroObs.disconnect()
    }
  }, [pathname])

  return (
    <header className="fixed top-0 w-full border-b border-zinc-200/50 bg-[#FFF7F2]/90 backdrop-blur-md z-50">

      {/* Ligne principale */}
      <div className="flex justify-between items-center h-14 lg:h-20 px-6 lg:px-8 max-w-[1280px] mx-auto w-full">

        {/* Logo */}
        <a href="/">
          <Image
            src="/images/logo-ainoa.png"
            alt="Ainoa Coiffure"
            width={160}
            height={52}
            className="mix-blend-multiply w-[120px] lg:w-[160px]"
            priority
          />
        </a>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={
                isActive(link.href)
                  ? 'text-[#F54927] font-bold border-b-2 border-[#F54927] pb-1 font-space-grotesk tracking-tight uppercase text-sm'
                  : 'text-zinc-500 hover:text-zinc-900 transition-colors font-space-grotesk tracking-tight uppercase text-sm'
              }
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* CTA + hamburger */}
        <div className="flex items-center gap-3">
          <a
            href={PLANITY_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#F54927] text-white px-4 py-2 lg:px-6 lg:py-3 rounded-full font-inter text-[9px] lg:text-xs tracking-widest uppercase hover:bg-zinc-900 transition-all duration-200 active:scale-95"
          >
            Prendre RDV
          </a>
          <button
            className="lg:hidden p-1"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Menu"
          >
            <span className="material-symbols-outlined text-zinc-900">
              {menuOpen ? 'close' : 'menu'}
            </span>
          </button>
        </div>
      </div>

      {/* Titre de section — 2ème ligne mobile/tablette uniquement */}
      <div className="lg:hidden h-6 flex items-center justify-center border-t border-zinc-200/40">
        <span className="font-space-grotesk font-semibold uppercase text-[10px] tracking-[0.2em] text-zinc-500">
          {currentLabel}
        </span>
      </div>

      {/* Mobile/tablette menu */}
      {menuOpen && (
        <nav className="lg:hidden bg-[#FFF7F2] border-t border-zinc-200/50 px-8 py-6 flex flex-col gap-4">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className={
                isActive(link.href)
                  ? 'text-[#F54927] font-bold font-space-grotesk uppercase text-sm tracking-tight'
                  : 'text-zinc-700 hover:text-[#F54927] transition-colors font-space-grotesk uppercase text-sm tracking-tight'
              }
            >
              {link.label}
            </a>
          ))}
        </nav>
      )}
    </header>
  )
}
