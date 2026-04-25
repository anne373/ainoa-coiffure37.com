export default function ContactSection() {
  return (
    <section id="contact" className="py-[120px] bg-[#FFF7F2] border-t border-zinc-200/50">
      <div className="max-w-[1280px] mx-auto px-8">
        <div className="mb-16">
          <span className="text-[#F54927] font-inter font-bold text-xs tracking-[0.2em] uppercase mb-4 block">
            04 / CONTACT
          </span>
          <h2 className="text-h2 font-space-grotesk font-semibold uppercase text-zinc-900 mb-4">
            Rejoignez-nous
          </h2>
          <p className="font-inter text-body-md text-zinc-500 max-w-2xl">
            Retrouvez-nous au salon ou sur les réseaux sociaux.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12 items-start">

          {/* Réseaux sociaux */}
          <div>
            <h4 className="text-[#F54927] font-space-grotesk font-bold text-2xl mb-6 uppercase tracking-wider">
              Suivez-nous
            </h4>
            <div className="flex flex-wrap gap-3">
              {/* Facebook */}
              <a
                href="https://www.facebook.com/p/AINOA-Coiffure-Onglerie-100053444964982/"
                target="_blank" rel="noopener noreferrer"
                className="flex items-center gap-2 bg-zinc-900 text-white px-5 py-3 rounded-xl font-inter font-bold text-[14px] tracking-widest uppercase hover:bg-[#1877F2] transition-all"
              >
                <svg className="w-4 h-4 shrink-0" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
                Facebook
              </a>

              {/* Instagram */}
              <a
                href="https://www.instagram.com/ainoa.coiffure37/"
                target="_blank" rel="noopener noreferrer"
                className="flex items-center gap-2 bg-zinc-900 text-white px-5 py-3 rounded-xl font-inter font-bold text-[14px] tracking-widest uppercase hover:bg-[#E1306C] transition-all"
              >
                <svg className="w-4 h-4 shrink-0" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
                Instagram
              </a>

              {/* Planity */}
              <a
                href="https://www.planity.com/ainoa-37540-saint-cyr-sur-loire"
                target="_blank" rel="noopener noreferrer"
                className="flex items-center gap-2 bg-zinc-900 text-white px-5 py-3 rounded-xl font-inter font-bold text-[14px] tracking-widest uppercase hover:bg-[#F54927] transition-all"
              >
                <svg className="w-4 h-4 shrink-0" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19 4h-1V2h-2v2H8V2H6v2H5C3.9 4 3 4.9 3 6v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 16H5V10h14v10zm0-12H5V6h14v2z"/>
                </svg>
                Planity
              </a>
            </div>
          </div>

          {/* Adresse */}
          <div>
            <h4 className="text-[#F54927] font-space-grotesk font-bold text-2xl mb-6 uppercase tracking-wider">
              Adresse
            </h4>
            <p className="font-inter text-xl text-zinc-600 leading-relaxed">
              44 Bd Charles de Gaulle,<br />
              37540 Saint-Cyr-sur-Loire
            </p>
          </div>

          {/* Téléphone */}
          <div>
            <h4 className="text-[#F54927] font-space-grotesk font-bold text-2xl mb-6 uppercase tracking-wider">
              Téléphone
            </h4>
            <a
              href="tel:0247498729"
              className="font-inter text-xl text-zinc-900 hover:text-[#F54927] transition-colors border-b border-zinc-200 hover:border-[#F54927] pb-1"
            >
              02 47 49 87 29
            </a>
          </div>

          {/* Horaires */}
          <div>
            <h4 className="text-[#F54927] font-space-grotesk font-bold text-2xl mb-6 uppercase tracking-wider">
              Horaires
            </h4>
            <div className="space-y-3">
              <p className="font-inter text-xl text-zinc-600">Mardi – Vendredi : 9h – 19h</p>
              <p className="font-inter text-xl text-zinc-600">Samedi : 9h – 17h</p>
              <p className="font-inter text-lg text-zinc-400 mt-2">Fermé Lundi et Dimanche</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
