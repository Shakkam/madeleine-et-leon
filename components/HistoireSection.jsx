"use client";

import { motion, useReducedMotion } from "framer-motion";
import { histoire, histoireMadeleine } from "@/data/content";
import Image from "next/image";

export default function HistoireSection() {
  const shouldReduce = useReducedMotion();

  const reveal = (delay = 0) => ({
    initial: shouldReduce ? {} : { opacity: 0, y: 28 },
    whileInView: shouldReduce ? {} : { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-60px" },
    transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1], delay },
  });

  return (
    <section id="notre-histoire" className="bg-creme py-20 px-6">
      <div className="max-w-5xl mx-auto">

        {/* En-tête */}
        <motion.div className="mb-14" {...reveal(0)}>
          <p className="font-label text-xs tracking-[0.3em] uppercase text-choco-cl mb-4">
            Fait main · Avec amour
          </p>
          <h1
            className="font-display fraunces-soft italic font-black text-choco leading-none"
            style={{ fontSize: "clamp(2.8rem, 7vw, 5.5rem)" }}
          >
            {histoire.titre}
          </h1>
        </motion.div>

        {/* Corps — deux colonnes sur desktop */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">

          {/* Texte */}
          <div className="space-y-12 order-2 lg:order-1">
            {histoire.sections.map((section) => (
              <motion.div key={section.titre} className="space-y-5" {...reveal(0)}>
                <h2 className="font-display fraunces-soft italic font-bold text-2xl sm:text-3xl text-choco leading-tight">
                  {section.titre}
                </h2>
                {section.paragraphes.map((para, i) => (
                  <p
                    key={i}
                    className="font-display fraunces-mid text-base sm:text-lg leading-relaxed text-choco-med whitespace-pre-line"
                  >
                    {para}
                  </p>
                ))}
              </motion.div>
            ))}

            {/* Conclusion — blockquote éditoriale */}
            <motion.blockquote className="pl-6 border-l-4 border-beurre space-y-4" {...reveal(0)}>
              <p className="font-display fraunces-mid text-base sm:text-lg leading-relaxed text-choco-med">
                {histoire.conclusion.texte}
              </p>
              <p className="font-display fraunces-soft italic font-bold text-2xl sm:text-3xl text-choco leading-tight">
                {histoire.conclusion.lignes.map((l) => (
                  <span key={l} className="block">{l}</span>
                ))}
              </p>
              <p className="font-display fraunces-mid text-base sm:text-lg leading-relaxed text-choco-med">
                {histoire.conclusion.fin}
              </p>
            </motion.blockquote>
          </div>

          {/* Image stand */}
          <motion.div className="order-1 lg:order-2 lg:sticky lg:top-24" {...reveal(0.1)}>
            {/* Ruban vichy — nappe du stand */}
            <div
              aria-hidden="true"
              className="h-5 w-full"
              style={{
                backgroundImage: [
                  "repeating-linear-gradient(0deg, rgba(18,17,16,0.50) 0px, rgba(18,17,16,0.50) 4px, transparent 4px, transparent 8px)",
                  "repeating-linear-gradient(90deg, rgba(18,17,16,0.50) 0px, rgba(18,17,16,0.50) 4px, transparent 4px, transparent 8px)",
                ].join(", "),
                backgroundColor: "rgba(18,17,16,0.10)",
              }}
            />
            <div className="relative aspect-[4/3] overflow-hidden">
              <Image
                src="/images/stand-marche.jpg"
                alt={histoire.imageStandAlt}
                fill
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-cover object-[50%_55%]"
              />
            </div>
            <p className="font-label text-xs text-choco-cl mt-2 text-right tracking-wide">
              Stand · Place du Forum, Talence
            </p>
          </motion.div>
        </div>

        {/* L'histoire de la madeleine */}
        <div className="mt-20 max-w-3xl space-y-12">
          <motion.h2
            className="font-display fraunces-soft italic font-black text-choco leading-none"
            style={{ fontSize: "clamp(2.2rem, 5vw, 3.8rem)" }}
            {...reveal(0)}
          >
            {histoireMadeleine.titre}
          </motion.h2>
          {histoireMadeleine.sections.map((section, k) => (
            <motion.div key={k} className="space-y-5" {...reveal(0)}>
              {section.titre && (
                <h3 className="font-display fraunces-soft italic font-bold text-2xl sm:text-3xl text-choco leading-tight">
                  {section.titre}
                </h3>
              )}
              {section.paragraphes.map((para, i) => (
                <p
                  key={i}
                  className="font-display fraunces-mid text-base sm:text-lg leading-relaxed text-choco-med"
                >
                  {para}
                </p>
              ))}
            </motion.div>
          ))}
          <motion.p
            className="pl-6 border-l-4 border-beurre font-display fraunces-soft italic font-bold text-2xl sm:text-3xl text-choco leading-tight"
            {...reveal(0)}
          >
            {histoireMadeleine.fin}
          </motion.p>
        </div>

        {/* Boîte kraft — vignette secondaire */}
        <motion.div
          className="mt-14 flex flex-col sm:flex-row items-center gap-6 bg-choco p-6 rounded-2xl"
          {...reveal(0.2)}
        >
          <div className="w-full sm:w-44 flex-shrink-0 rounded-xl overflow-hidden">
            <div className="relative aspect-square">
              <Image
                src={histoire.imageKraft}
                alt={histoire.imageKraftAlt}
                fill
                sizes="(min-width: 640px) 11rem, 100vw"
                className="object-cover object-[50%_35%]"
              />
            </div>
          </div>
          <div className="text-creme">
            <p className="font-label text-xs tracking-widest uppercase text-beurre mb-2">
              Emballage
            </p>
            <p className="font-display fraunces-soft italic font-bold text-2xl mb-2">
              Jolies boîtes kraft
            </p>
            <p className="font-display fraunces-mid text-sm sm:text-base leading-relaxed text-creme/75">
              Chaque commande part dans une boîte kraft fermée par un sticker rond —
              version monochrome de notre logo, sur fond gris argent. Idéal en cadeau.
            </p>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
