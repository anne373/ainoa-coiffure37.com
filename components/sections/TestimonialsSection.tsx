"use client";
import { motion } from "motion/react";
import { TestimonialsColumn, type Testimonial } from "@/components/ui/testimonials-columns";

const testimonials: Testimonial[] = [
  {
    text: "Très bonne découverte ! Merci à l'équipe qui a été au top pour rattraper des mèches et une coupe ratés d'un précédent salon. Mention spéciale à la coiffeuse qui est restée après l'heure de fermeture samedi pour prendre le temps de tout finaliser correctement.",
    name: "Helene M.",
    initials: "H",
    color: "#A78BFA",
  },
  {
    text: "Un très beau salon, spacieux et harmonieux. J'ai été prise en charge par Céline concernant mon problème de cheveux sans volume, devitalisés par des traitements. Résultat bluffant !",
    name: "Christine",
    initials: "C",
    color: "#F54927",
  },
  {
    text: "Merci Céline de ne pas m'être coiffée en sortant d'un salon de coiffure… d'avoir compris en posant les bonnes questions. C'était un très bon moment.",
    name: "chartrain julie",
    initials: "J",
    color: "#34A853",
  },
  {
    text: "Excellent accueil et super travail de Valentine ! Probablement ma meilleure expérience dans un salon de coiffure. Mention spéciale pour les fauteuils massants.",
    name: "Matthieu P.",
    initials: "M",
    color: "#4285F4",
  },
  {
    text: "Un énorme merci à Valentine pour sa gentillesse, son écoute et son travail remarquable ! Je suis sortie de ce salon transformée ! Faites-lui confiance pour vos couleurs ou vos balayages.",
    name: "yasmine benattou",
    initials: "Y",
    color: "#FBBC05",
  },
  {
    text: "Le meilleur salon de coiffure de Tours !!! Un accueil chaleureux, des professionnels de compétition, un savoir-faire et des conseils adaptés à chaque client.",
    name: "emilie pichon",
    initials: "E",
    color: "#EA4335",
  },
  {
    text: "1ère visite et pas la dernière. Suis ravie du résultat. Couleur, coupe, accueil, bonne humeur… tout est parfait. Ici on cherche à savoir ce que vous voulez vraiment.",
    name: "Val Antcar",
    initials: "V",
    color: "#0F766E",
  },
  {
    text: "Je viens de faire un hair spa et je recommande vivement — un vrai moment de détente et un vrai lâcher prise dans une ambiance super zen. À faire et à refaire sans modération !!!!",
    name: "Sandra Parra",
    initials: "S",
    color: "#7C3AED",
  },
  {
    text: "Avis aux personnes ayant les cheveux bouclés : Céline est une PERLE ! J'ai longtemps cherché quelqu'un maîtrisant l'art de couper les cheveux bouclés/frisés, c'est chose faite. Je recommande !",
    name: "Eloise Cottin",
    initials: "E",
    color: "#F54927",
  },
];

const col1 = testimonials.slice(0, 3);
const col2 = testimonials.slice(3, 6);
const col3 = testimonials.slice(6, 9);

export default function TestimonialsSection() {
  return (
    <section className="py-12 md:py-[80px] bg-[#FFF7F2] overflow-hidden">
      <div className="max-w-[1280px] mx-auto px-8">

        <div className="mb-10 md:mb-14">
          <span className="text-[#F54927] font-inter font-bold text-xs tracking-[0.2em] uppercase mb-4 block">
            06 / AVIS CLIENTS
          </span>
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
            <h2 className="text-[22px] sm:text-[28px] md:text-[36px] lg:text-h2 leading-tight font-space-grotesk font-semibold uppercase text-zinc-900">
              Ce qu&apos;ils en pensent
            </h2>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="flex items-center gap-3 bg-white px-5 py-3 rounded-full shadow-sm border border-[#F54927]/10 shrink-0"
            >
              <div className="flex gap-0.5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <svg key={i} className="w-4 h-4 text-[#F54927] fill-current" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                  </svg>
                ))}
              </div>
              <span className="font-space-grotesk font-semibold text-zinc-900 text-sm">4,8</span>
              <span className="font-inter text-zinc-400 text-xs">/ 111 avis Google</span>
            </motion.div>
          </div>
        </div>

      </div>

      {/* Colonnes défilantes — pas de padding horizontal pour aller bord à bord */}
      <div className="flex justify-center gap-4 px-8 [mask-image:linear-gradient(to_bottom,transparent,black_15%,black_85%,transparent)] max-h-[640px] overflow-hidden">
        <TestimonialsColumn testimonials={col1} duration={18} />
        <TestimonialsColumn testimonials={col2} className="hidden md:block" duration={22} />
        <TestimonialsColumn testimonials={col3} className="hidden lg:block" duration={20} />
      </div>
    </section>
  );
}
