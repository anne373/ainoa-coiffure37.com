export default function ConceptSection() {
  return (
    <section id="concept" className="py-[120px] bg-[#FFF7F2]">
      <div className="max-w-[1280px] mx-auto px-8 grid grid-cols-12 gap-6 items-start">
        {/* Titre */}
        <div className="col-span-12 md:col-span-5">
          <span className="text-[#F54927] font-inter font-bold text-xs tracking-[0.2em] uppercase mb-4 block">
            01 / CONCEPT
          </span>
          <h2 className="text-[22px] sm:text-[28px] md:text-[36px] lg:text-h2 leading-tight font-space-grotesk font-semibold uppercase text-zinc-900 mb-10">
            Notre Savoir-Faire
          </h2>
        </div>

        {/* Texte + stats */}
        <div className="col-span-12 md:col-span-6 md:col-start-7">
          <p className="font-inter text-body-lg text-zinc-600 mb-8 leading-relaxed">
            Chez Aïnoa Coiffure, chaque coupe est pensée pour sublimer votre personnalité.
            Notre équipe passionnée met son expertise au service de votre beauté, avec des
            techniques modernes et des produits de qualité soigneusement sélectionnés.
          </p>
          <div className="grid grid-cols-2 gap-8 border-t border-zinc-200 pt-10">
            <div>
              <span className="text-[20px] sm:text-[24px] md:text-h3 font-space-grotesk font-semibold block mb-2 text-zinc-900">
                15 ans
              </span>
              <span className="font-inter text-label-caps text-zinc-400 uppercase tracking-widest">
                D'expérience
              </span>
            </div>
            <div>
              <span className="text-[20px] sm:text-[24px] md:text-h3 font-space-grotesk font-semibold block mb-2 text-zinc-900">
                100%
              </span>
              <span className="font-inter text-label-caps text-zinc-400 uppercase tracking-widest">
                Passion
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
