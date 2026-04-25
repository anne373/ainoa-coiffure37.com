import Image from 'next/image'

// Remplacer par '/images/portfolio/1.jpg', '2.jpg', '3.jpg' quand vous avez vos photos
const IMG_BOB =
  'https://lh3.googleusercontent.com/aida-public/AB6AXuBA9ifPywwmf72vxVClhNkt0qoPRoR3AOdg4jYfxKnojhssGCyIvgPJZ1peNULXOvnvkBwHW503Fge5LZdlB3vm0NB2Yj1hEzQNFE2q7d5sz8Ah3kxLYCk5wzMGENCNpUrYc0VK7hO0m8S0RpKy8eXuURExb9seG84CaIi-yx_1-2X5hwVuHO091Xlz-O1NwQ1RHDwjokbtlwvdcHj04Oe5VFZRss-5o02HCJqH1dg5X_dm2CThYPubdbSTpViw-N5_u7zGRQBzDeaE'
const IMG_COLORING =
  'https://lh3.googleusercontent.com/aida-public/AB6AXuBrLZYxR6cqe-7-Dq2QzTT92Ulmd-LSY3wn17fMkZ-jLTUBIIuGRGh0z4m3tl3CLEmcOhwaqMilJv9wshD3yT_CiF2JSKn06BEldioW5MQDqCerBS0bxM-wm48wwtuogs0nZCVN_gOa4nhk_ujckUIO_YhQrlZftibGCMM9GZOv1-e_oS3H6FSMNolB8GnFEm9whcsy3KyqeeyJwk6ICNE3i3QWUgN69CnW5UxeCNgJXS60wBkJtLWgT2mHRGLJNFHM0P_xOPfy-A9X'
const IMG_TOOLS =
  'https://lh3.googleusercontent.com/aida-public/AB6AXuBkPialWwnztPi0709iNfwNV8izvawl_hqNrK3_oo6GQgytbfffXB6Rpao7HIShQf8hqnB1BtHiNHjMlF7_yRr1WFaU03mPeF1yvObmJmOYWUgN69CnW5UxeCNgJXS60wBkJtLWgT2mHRGLJNFHM0P_xOPfy-A9X'

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
            <h2 className="text-h2 font-space-grotesk font-semibold uppercase text-zinc-900">
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
          {/* Grand carré gauche — coupe */}
          <div className="md:col-span-2 md:row-span-2 relative group overflow-hidden rounded-[40px] h-[400px] md:h-full">
            <Image
              src={IMG_BOB}
              alt="Coupe de précision Ainoa Coiffure"
              fill
              className="object-cover transition-transform duration-1000 group-hover:scale-105"
            />
            <div className="absolute bottom-0 left-0 p-10 text-white bg-gradient-to-t from-black/80 to-transparent w-full">
              <span className="font-inter text-xs font-bold tracking-widest uppercase opacity-70">
                CRÉATION 01
              </span>
              <p className="text-h3 font-space-grotesk font-semibold mt-2">COUPE PRÉCISION</p>
            </div>
          </div>

          {/* Haut droite — coloration */}
          <div className="md:col-span-1 relative group overflow-hidden rounded-[40px] h-[300px] md:h-full">
            <Image
              src={IMG_COLORING}
              alt="Coloration Ainoa Coiffure"
              fill
              className="object-cover transition-transform duration-1000 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-[#F54927]/0 group-hover:bg-[#F54927]/10 transition-all duration-500" />
          </div>

          {/* Haut droite — tuile sombre */}
          <div className="md:col-span-1 relative group overflow-hidden bg-zinc-900 flex items-center justify-center p-8 rounded-[40px] h-[200px] md:h-full">
            <div className="text-center group-hover:scale-110 transition-transform duration-500">
              <span className="material-symbols-outlined text-white text-5xl mb-4 block">
                architecture
              </span>
              <p className="text-white font-inter font-bold text-xs tracking-[0.2em] uppercase">
                PRÉCISION ARTISANALE
              </p>
            </div>
          </div>

          {/* Bas droite — outils (2 colonnes) */}
          <div className="md:col-span-2 relative group overflow-hidden rounded-[40px] h-[250px] md:h-full">
            <Image
              src={IMG_TOOLS}
              alt="Outils de coiffure Ainoa"
              fill
              className="object-cover transition-transform duration-1000 group-hover:scale-105"
            />
            <div className="absolute top-6 right-6">
              <span className="bg-white/90 backdrop-blur text-zinc-900 px-5 py-2 rounded-full font-inter font-bold text-[10px] tracking-widest uppercase shadow-sm">
                NOUVEAU
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
