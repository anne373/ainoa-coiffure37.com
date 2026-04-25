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
            <i className="fas fa-code text-[#F54927] mr-0.5" />
            DES<span className="text-[#F54927]">CODES</span>
          </span>
        </a>
      </div>
    </footer>
  )
}
