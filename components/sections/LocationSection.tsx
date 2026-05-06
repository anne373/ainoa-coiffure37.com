export default function LocationSection() {
  const infoCard = (
    <div className="bg-zinc-900 text-white p-8 md:p-12 rounded-[40px] shadow-2xl">
      <h3 className="text-[18px] sm:text-[22px] font-space-grotesk font-semibold text-white uppercase mb-6 border-b border-white/10 pb-5">
        Ainoa Coiffure
      </h3>
      <div className="space-y-6">
        <div>
          <span className="text-[#F54927] font-inter font-bold text-[10px] tracking-[0.2em] uppercase block mb-2">
            ADRESSE
          </span>
          <a
            href="https://www.google.com/maps/dir/?api=1&destination=44+Bd+Charles+de+Gaulle,+37540+Saint-Cyr-sur-Loire,+France"
            target="_blank"
            rel="noopener noreferrer"
            className="font-inter text-sm text-zinc-300 hover:text-white transition-colors flex items-start gap-2"
          >
            <span className="material-symbols-outlined text-[#F54927] text-base mt-0.5 shrink-0">near_me</span>
            <span>44 Bd Charles de Gaulle<br />37540 Saint-Cyr-sur-Loire</span>
          </a>
        </div>
        <div>
          <span className="text-[#F54927] font-inter font-bold text-[10px] tracking-[0.2em] uppercase block mb-2">
            TÉLÉPHONE
          </span>
          <a href="tel:0247498729" className="font-inter text-sm text-zinc-300 hover:text-white transition-colors">
            02 47 49 87 29
          </a>
        </div>
        <div>
          <span className="text-[#F54927] font-inter font-bold text-[10px] tracking-[0.2em] uppercase block mb-2">
            HORAIRES
          </span>
          <div className="grid grid-cols-2 gap-1.5 font-inter text-sm text-zinc-300">
            <span>Mar – Ven</span>  <span className="text-right">9h – 19h</span>
            <span>Samedi</span>     <span className="text-right">9h – 17h</span>
            <span>Dim &amp; Lun</span><span className="text-right text-[#F54927]">Fermé</span>
          </div>
        </div>
      </div>
    </div>
  )

  return (
    <section className="py-12 md:py-[80px] bg-[#FFF7F2]">
      <div className="max-w-[1280px] mx-auto px-8">
        <div className="mb-6 md:mb-10">
          <span className="text-[#F54927] font-inter font-bold text-xs tracking-[0.2em] uppercase mb-4 block">
            05 / LOCALISATION
          </span>
          <h2 className="text-[22px] sm:text-[28px] md:text-[36px] lg:text-h2 leading-tight font-space-grotesk font-semibold uppercase text-zinc-900">
            Nous Trouver
          </h2>
        </div>

        {/* Mobile : carte info dessus, map dessous */}
        <div className="flex flex-col gap-4 md:hidden">
          {infoCard}
          <div className="h-[280px] rounded-[40px] overflow-hidden">
            <iframe
              title="Localisation Ainoa Coiffure"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2699.049405628587!2d0.6746795000000001!3d47.410420899999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47fcd50b016f3493%3A0x2f93239c75503d3b!2sA%C3%8FNOA!5e0!3m2!1sfr!2sfr!4v1699999999999"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              className="w-full h-full"
            />
          </div>
        </div>

        {/* Desktop : overlay sur la carte */}
        <div className="hidden md:block relative h-[600px] w-full rounded-[48px] overflow-hidden group">
          <div className="absolute inset-0 bg-zinc-200">
            <iframe
              title="Localisation Ainoa Coiffure"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2699.049405628587!2d0.6746795000000001!3d47.410420899999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47fcd50b016f3493%3A0x2f93239c75503d3b!2sA%C3%8FNOA!5e0!3m2!1sfr!2sfr!4v1699999999999"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              className="w-full h-full"
            />
          </div>
          <div className="absolute top-12 left-12 z-10 max-w-sm w-full">
            {infoCard}
          </div>
        </div>

      </div>
    </section>
  )
}
