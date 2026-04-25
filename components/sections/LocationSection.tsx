export default function LocationSection() {
  return (
    <section className="py-[120px] bg-[#FFF7F2]">
      <div className="max-w-[1280px] mx-auto px-8">
        <div className="mb-16">
          <span className="text-[#F54927] font-inter font-bold text-xs tracking-[0.2em] uppercase mb-4 block">
            05 / LOCALISATION
          </span>
          <h2 className="text-[22px] sm:text-[28px] md:text-[36px] lg:text-h2 leading-tight font-space-grotesk font-semibold uppercase text-zinc-900">
            Nous Trouver
          </h2>
        </div>

        <div className="relative h-[600px] w-full rounded-[48px] overflow-hidden group">
          {/* Carte */}
          <div className="absolute inset-0 bg-zinc-200">
            <iframe
              title="Localisation Ainoa Coiffure"
              src="https://maps.google.com/maps?q=44+Bd+Charles+de+Gaulle%2C+37540+Saint-Cyr-sur-Loire%2C+France&t=&z=15&ie=UTF8&iwloc=&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              className="map-grayscale w-full h-full opacity-80 group-hover:opacity-100 transition-opacity duration-700"
            />
          </div>

          {/* Carte de contact superposée */}
          <div className="absolute top-12 left-12 z-10">
            <div className="bg-zinc-900 text-white p-12 rounded-[40px] shadow-2xl max-w-sm">
              <h3 className="text-[20px] sm:text-[24px] md:text-h3 font-space-grotesk font-semibold text-white uppercase mb-8 border-b border-white/10 pb-6">
                Ainoa<br />Coiffure
              </h3>
              <div className="space-y-8">
                <div>
                  <span className="text-[#F54927] font-inter font-bold text-[10px] tracking-[0.2em] uppercase block mb-2">
                    ADRESSE
                  </span>
                  <a
                    href="https://www.google.com/maps/dir/?api=1&destination=44+Bd+Charles+de+Gaulle,+37540+Saint-Cyr-sur-Loire,+France"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-inter text-body-md text-zinc-300 hover:text-white transition-colors group flex items-start gap-2"
                  >
                    <span className="material-symbols-outlined text-[#F54927] text-base mt-0.5 shrink-0 group-hover:scale-110 transition-transform">
                      near_me
                    </span>
                    <span>
                      44 Bd Charles de Gaulle<br />
                      37540 Saint-Cyr-sur-Loire
                    </span>
                  </a>
                </div>
                <div>
                  <span className="text-[#F54927] font-inter font-bold text-[10px] tracking-[0.2em] uppercase block mb-2">
                    TÉLÉPHONE
                  </span>
                  <a
                    href="tel:0247498729"
                    className="font-inter text-body-md text-zinc-300 hover:text-white transition-colors"
                  >
                    02 47 49 87 29
                  </a>
                </div>
                <div>
                  <span className="text-[#F54927] font-inter font-bold text-[10px] tracking-[0.2em] uppercase block mb-2">
                    HORAIRES
                  </span>
                  <div className="grid grid-cols-2 gap-2 font-inter text-body-md text-zinc-300">
                    <span>Mar – Ven</span>
                    <span className="text-right">9h – 19h</span>
                    <span>Samedi</span>
                    <span className="text-right">9h – 17h</span>
                    <span>Dim &amp; Lun</span>
                    <span className="text-right text-[#F54927]">Fermé</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
