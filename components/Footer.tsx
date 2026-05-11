import Image from 'next/image'

export default function Footer() {
  return (
    <footer className="w-full bg-[#FFF7F2] pb-6">
      <div className="flex flex-col md:flex-row justify-between items-center py-12 px-8 max-w-[1280px] mx-auto border-t border-zinc-200 gap-8">
        <div className="flex flex-col items-center md:items-start">
          <Image
            src="/images/logo-ainoa.png"
            alt="Ainoa Coiffure"
            width={130}
            height={42}
            className="mix-blend-multiply mb-1"
          />
          <p className="font-inter text-xs tracking-widest uppercase text-zinc-400">
            © {new Date().getFullYear()} Ainoa Coiffure. Saint-Cyr-sur-Loire.
          </p>
        </div>
        <div className="flex gap-10">
          <a
            href="#accueil"
            className="font-inter text-xs tracking-widest uppercase text-zinc-500 hover:text-[#F54927] transition-colors"
          >
            Accueil
          </a>
          <a
            href="#contact"
            className="font-inter text-xs tracking-widest uppercase text-zinc-500 hover:text-[#F54927] transition-colors"
          >
            Contact
          </a>
          <a
            href="tel:0247498729"
            className="font-inter text-xs tracking-widest uppercase text-zinc-500 hover:text-[#F54927] transition-colors"
          >
            02 47 49 87 29
          </a>
        </div>
      </div>
      <div className="text-center pb-6">
        <a
          href="https://descodes.com"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 font-inter text-[11px] text-zinc-400 hover:text-zinc-600 transition-colors tracking-wide"
        >
          Site réalisé par
          <span className="font-bold">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" className="inline w-3.5 h-3.5 fill-[#F54927] mr-0.5" aria-hidden="true"><path d="M392.8 1.2c-17-4.9-34.7 5-39.6 22l-128 448c-4.9 17 5 34.7 22 39.6s34.7-5 39.6-22l128-448c4.9-17-5-34.7-22-39.6zm80.6 120.1c-12.5 12.5-12.5 32.8 0 45.3L562.7 256l-89.4 89.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l112-112c12.5-12.5 12.5-32.8 0-45.3l-112-112c-12.5-12.5-32.8-12.5-45.3 0zm-306.7 0c-12.5-12.5-32.8-12.5-45.3 0l-112 112c-12.5 12.5-12.5 32.8 0 45.3l112 112c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256l89.4-89.4c12.5-12.5 12.5-32.8 0-45.3z"/></svg>
            DES<span className="text-[#F54927]">CODES</span>
          </span>
        </a>
      </div>
    </footer>
  )
}
