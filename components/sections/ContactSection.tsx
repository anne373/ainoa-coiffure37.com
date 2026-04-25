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
              {[
                { label: 'Facebook',  href: 'https://www.facebook.com/p/AINOA-Coiffure-Onglerie-100053444964982/' },
                { label: 'Instagram', href: 'https://www.instagram.com/ainoa.coiffure37/' },
                { label: 'Planity',   href: 'https://www.planity.com/ainoa-37540-saint-cyr-sur-loire' },
              ].map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="bg-zinc-900 text-white px-6 py-3 rounded-xl font-inter font-bold text-[14px] tracking-widest uppercase hover:bg-[#F54927] transition-all"
                >
                  {social.label}
                </a>
              ))}
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
