import Image from 'next/image'

const PLANITY_URL = 'https://www.planity.com' // ← Remplacer par votre URL Planity

// Remplacer par '/images/spa/main.jpg' quand vous avez votre photo
const SPA_IMAGE =
  'https://lh3.googleusercontent.com/aida-public/AB6AXuDTVnX3fL_IXa9FOX1ozOkJNk8ZBmQ_k_5CwcxQrFoKJaH68GF83bSMToKJLmryDEdGXASLH9WxZ_XQOQbb6DzCw9cr62MGF6DLt1CWqA6vq0sSO_eh7lrm2zI-rPz4uk1dsq6Nbkng5nDRLMK6pSxaVwokG73fz_GqxrooCRokKJOEq7KSeh8U7WXXeTmVct59bfya9qwxOqZ6zlhqFLA4mxRmJAwwjBEHSz0td3oDVywCD7dS0ugFmGBWqRJ-uvrRP2Z0BdbOdAOZ'

export default function HairSpaSection() {
  return (
    <section id="spa" className="py-[120px] bg-[#FFF7F2]">
      <div className="max-w-[1280px] mx-auto px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
          {/* Texte */}
          <div className="col-span-12 md:col-span-6 flex flex-col justify-center">
            <div className="max-w-xl">
              <span className="text-[#F54927] font-inter font-bold text-xs tracking-[0.2em] uppercase mb-4 block">
                02 / DÉTENTE
              </span>
              <h2 className="text-h2 font-space-grotesk font-semibold uppercase text-zinc-900 leading-tight mb-8">
                L'Expérience<br />Head Spa
              </h2>
              <p className="font-inter text-body-lg text-zinc-600 mb-10 leading-relaxed">
                Découvrez un sanctuaire de sérénité dédié à la santé de votre cuir chevelu.
                Nos soins profonds marient l'expertise technique à un bien-être absolu, pour
                une chevelure revitalisée et un esprit apaisé.
              </p>
              <div className="space-y-6 mb-12">
                <div className="flex items-start gap-4">
                  <span className="material-symbols-outlined text-[#F54927]">spa</span>
                  <div>
                    <h4 className="font-bold text-zinc-900 uppercase text-sm tracking-wide mb-1 font-space-grotesk">
                      Soin du cuir chevelu
                    </h4>
                    <p className="text-zinc-500 text-sm font-inter">
                      Une approche pour restaurer l'équilibre naturel de votre cuir chevelu.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <span className="material-symbols-outlined text-[#F54927]">psychology</span>
                  <div>
                    <h4 className="font-bold text-zinc-900 uppercase text-sm tracking-wide mb-1 font-space-grotesk">
                      Relaxation Sensorielle
                    </h4>
                    <p className="text-zinc-500 text-sm font-inter">
                      Un moment de déconnexion totale au cœur de notre salon.
                    </p>
                  </div>
                </div>
              </div>
              <a
                href={PLANITY_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-[#F54927] text-white px-10 py-5 rounded-full font-inter text-sm tracking-widest uppercase hover:bg-zinc-900 transition-all"
              >
                DÉCOUVRIR LE SPA
              </a>
            </div>
          </div>

          {/* Image */}
          <div className="col-span-12 md:col-span-6 relative h-[500px] md:h-[600px] overflow-hidden rounded-[48px]">
            <Image
              src={SPA_IMAGE}
              alt="Head Spa Ainoa Coiffure"
              fill
              className="object-cover transition-transform duration-[3000ms] hover:scale-110"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
