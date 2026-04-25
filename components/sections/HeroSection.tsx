import Image from 'next/image'

const PLANITY_URL = 'https://www.planity.com' // ← Remplacer par votre URL Planity

// Remplacer par '/images/hero/main.jpg' quand vous avez votre photo
const HERO_IMAGE =
  'https://lh3.googleusercontent.com/aida-public/AB6AXuCYXp6GSTXZZTpLHHcAyutTIKNMV3oSAt_fr8nrgS75lVA4CdK2CPdH-MVR0IMLCHKqPMOu4MlbDwuCt-yizBczYtxpUcy6tZzsRdTZn9fy6OlljSX7oY7ml6mEzkK7cNqdX3T5ZhpY3rtcDiamSM_Y2L21LMntNddI3KlLriGhsc6Q_DdSDNtuI-FG0xuxi5ZzkTbZZ07qtUeXHh70LjF1pe-zw5eLrQ2kP-1NUwzx_21dzg3NITk65RhvJO29GFdohaehxeMZa2OB'

export default function HeroSection() {
  return (
    <section id="accueil" className="relative mt-4 mx-4 h-[880px]">
      <div className="relative h-full w-full overflow-hidden rounded-[48px] flex items-end">
        {/* Image de fond */}
        <div className="absolute inset-0 z-0">
          <Image
            src={HERO_IMAGE}
            alt="Salon Ainoa Coiffure"
            fill
            priority
            className="object-cover grayscale brightness-[0.8] contrast-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
        </div>

        {/* Contenu */}
        <div className="relative z-10 w-full max-w-[1280px] mx-auto px-8 pb-24 text-white">
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
      </div>
    </section>
  )
}
