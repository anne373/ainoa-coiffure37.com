import Image from 'next/image'

const images = {
  grande:   '/images/portfolio/coupe-1.jpg', // Cheveux longs ondulés — grande case gauche
  bob:      '/images/portfolio/coupe-2.jpg', // Bob bouclé — haut droite
  courte:   '/images/portfolio/coupe-3.jpg', // Coupe courte blonde — centre droite
  homme:    '/images/portfolio/coupe-4.jpg', // Dégradé homme — bas droite large
}

export default function PortfolioSection() {
  return (
    <section id="creations" className="py-[120px] bg-[#FFF7F2]">
      <div className="bg-zinc-200/30 rounded-[48px] py-20 px-8 max-w-[1280px] mx-auto">
        {/* En-tête */}
        <div className="mb-16">
          <span className="text-[#F54927] font-inter font-bold text-xs tracking-[0.2em] uppercase mb-4 block">
            03 / PORTFOLIO
          </span>
          <div className="flex justify-between items-end">
            <h2 className="text-[22px] sm:text-[28px] md:text-[36px] lg:text-h2 leading-tight font-space-grotesk font-semibold uppercase text-zinc-900">
              Nos Créations
            </h2>
            <a
              href="#creations"
              className="text-[#F54927] font-inter font-bold text-xs tracking-widest uppercase border-b border-[#F54927] pb-1 hidden md:block"
            >
              VOIR TOUT
            </a>
          </div>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 md:h-[800px]">

          {/* Grande case gauche — coupe-1 */}
          <div className="md:col-span-2 md:row-span-2 relative group overflow-hidden rounded-[40px] h-[260px] sm:h-[360px] md:h-full">
            <Image
              src={images.grande}
              alt="Balayage cheveux longs"
              fill
              sizes="(max-width: 768px) calc(100vw - 64px), 50vw"
              className="object-cover object-top transition-transform duration-1000 group-hover:scale-105"
            />
            <div className="absolute bottom-0 left-0 p-10 text-white bg-gradient-to-t from-black/80 to-transparent w-full">
              <span className="font-inter text-xs font-bold tracking-widest uppercase opacity-70">CRÉATION 01</span>
              <p className="text-[18px] sm:text-[22px] md:text-h3 font-space-grotesk font-semibold mt-2">BALAYAGE &amp; ONDULATION</p>
            </div>
          </div>

          {/* Haut droite — coupe-2 bob bouclé */}
          <div className="md:col-span-1 relative group overflow-hidden rounded-[40px] h-[220px] sm:h-[280px] md:h-full">
            <Image
              src={images.bob}
              alt="Bob bouclé"
              fill
              sizes="(max-width: 768px) calc(100vw - 64px), 25vw"
              className="object-cover transition-transform duration-1000 group-hover:scale-105"
            />
            <div className="absolute bottom-0 left-0 p-6 text-white bg-gradient-to-t from-black/70 to-transparent w-full opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <p className="font-space-grotesk font-semibold uppercase text-sm">BOB BOUCLÉ</p>
            </div>
          </div>

          {/* Haut droite — coupe-3 coupe courte */}
          <div className="md:col-span-1 relative group overflow-hidden rounded-[40px] h-[220px] sm:h-[280px] md:h-full">
            <Image
              src={images.courte}
              alt="Coupe courte blonde"
              fill
              sizes="(max-width: 768px) calc(100vw - 64px), 25vw"
              className="object-cover transition-transform duration-1000 group-hover:scale-105"
            />
            <div className="absolute bottom-0 left-0 p-6 text-white bg-gradient-to-t from-black/70 to-transparent w-full opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <p className="font-space-grotesk font-semibold uppercase text-sm">COUPE COURTE</p>
            </div>
          </div>

          {/* Bas droite — coupe-4 homme (large) */}
          <div className="md:col-span-2 relative group overflow-hidden rounded-[40px] h-[220px] sm:h-[280px] md:h-full">
            <Image
              src={images.homme}
              alt="Dégradé homme"
              fill
              sizes="(max-width: 768px) calc(100vw - 64px), 50vw"
              className="object-cover object-top transition-transform duration-1000 group-hover:scale-105"
            />
            <div className="absolute top-6 right-6">
              <span className="bg-white/90 backdrop-blur text-zinc-900 px-5 py-2 rounded-full font-inter font-bold text-[10px] tracking-widest uppercase shadow-sm">
                COUPE HOMME
              </span>
            </div>
            <div className="absolute bottom-0 left-0 p-6 text-white bg-gradient-to-t from-black/70 to-transparent w-full opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <p className="font-space-grotesk font-semibold uppercase text-sm">DÉGRADÉ PRÉCISION</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
