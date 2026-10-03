"use client";

/**
 * GammePage
 * Page dédiée à une gamme (Madeleine = sucrée, Léon = salée) :
 * en-tête plein couleur + photo, grille des parfums, renvoi vers l'autre gamme.
 */
import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { gammes, liens } from "@/data/content";
import ImagePlaceholder from "./ImagePlaceholder";

const EASE = [0.16, 1, 0.3, 1];

export default function GammePage({ id }) {
  const shouldReduce = useReducedMotion();
  const gamme = gammes.find((g) => g.id === id);
  const autre = gammes.find((g) => g.id !== id);
  const isSalee = id === "leon";

  const reveal = (delay = 0) =>
    shouldReduce
      ? {}
      : {
          initial: { opacity: 0, y: 28 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true, margin: "-40px" },
          transition: { duration: 0.7, ease: EASE, delay },
        };

  return (
    <>
      {/* ─── En-tête plein couleur ─── */}
      <section
        className={`px-6 sm:px-10 lg:px-16 pt-14 pb-16 lg:pt-20 lg:pb-24 overflow-hidden ${
          isSalee ? "bg-choco text-creme" : "bg-beurre text-choco"
        }`}
      >
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <div className="min-w-0 relative z-10">
            <motion.p
              className={`font-label text-xs tracking-[0.3em] uppercase mb-4 ${
                isSalee ? "text-beurre" : "text-choco-med"
              }`}
              {...reveal(0)}
            >
              {gamme.tagline}
            </motion.p>
            <motion.h1
              // « Madeleine » ≈ 5,8 em de large : en 2 colonnes (lg), la taille
              // suit la demi-largeur pour ne jamais passer sous la photo.
              className="font-display fraunces-soft italic font-black leading-[0.85] text-[clamp(3.5rem,14vw,8rem)] lg:text-[clamp(4rem,6.8vw,5.8rem)]"
              {...reveal(0.08)}
            >
              {gamme.nom}
            </motion.h1>
            <motion.p
              className={`font-display fraunces-mid text-lg sm:text-xl leading-relaxed mt-6 max-w-md ${
                isSalee ? "text-creme/80" : "text-choco/80"
              }`}
              {...reveal(0.16)}
            >
              {gamme.description}
            </motion.p>
            <motion.div className="flex flex-col sm:flex-row gap-3 mt-9" {...reveal(0.24)}>
              <a
                href={liens.instagramDM}
                target="_blank"
                rel="noopener noreferrer"
                className={`inline-flex items-center justify-center px-7 py-3.5 font-label text-xs tracking-[0.22em] uppercase rounded-full transition-colors duration-200 w-fit ${
                  isSalee
                    ? "bg-beurre text-choco hover:bg-creme"
                    : "bg-choco text-creme hover:bg-creme hover:text-choco"
                }`}
              >
                Commander en DM
              </a>
              <Link
                href="/commandes-et-marches"
                className={`inline-flex items-center justify-center px-7 py-3.5 font-label text-xs tracking-[0.22em] uppercase rounded-full border-2 transition-colors duration-200 w-fit ${
                  isSalee
                    ? "border-creme/40 text-creme hover:border-creme"
                    : "border-choco/30 text-choco hover:border-choco"
                }`}
              >
                Où nous trouver
              </Link>
            </motion.div>
          </div>

          {/* Photo légèrement inclinée, façon étiquette posée */}
          <motion.div
            className="relative aspect-square rounded-3xl overflow-hidden shadow-2xl lg:rotate-2"
            {...reveal(0.12)}
          >
            {gamme.imageDispo ? (
              <Image
                src={gamme.image}
                alt={gamme.imageAlt}
                fill
                priority
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-cover"
              />
            ) : (
              <ImagePlaceholder
                alt={gamme.imageAlt}
                filename={gamme.image.replace("/images/", "")}
                aspectClass="aspect-square"
                variant={isSalee ? "salee" : "sucree"}
              />
            )}
          </motion.div>
        </div>
      </section>

      {/* ─── Parfums ─── */}
      <section className="bg-creme px-6 sm:px-10 lg:px-16 py-20">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            className="font-display fraunces-soft italic font-black text-choco leading-none mb-12"
            style={{ fontSize: "clamp(2.6rem, 6vw, 4.5rem)" }}
            {...reveal(0)}
          >
            Les parfums
          </motion.h2>

          <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {gamme.parfums.map((parfum, i) => (
              <motion.li
                key={parfum}
                className={`rounded-3xl p-7 min-h-40 flex flex-col justify-between cursor-default ${
                  isSalee
                    ? "bg-choco text-creme"
                    : "bg-beurre/20 border-2 border-beurre text-choco"
                }`}
                {...reveal(0.05 * i)}
                whileHover={
                  shouldReduce ? undefined : { rotate: i % 2 ? -1.5 : 1.5, y: -4 }
                }
              >
                <span
                  className={`font-label text-xs tracking-[0.25em] ${
                    isSalee ? "text-beurre" : "text-choco-cl"
                  }`}
                >
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="font-display fraunces-soft italic font-bold text-3xl leading-tight mt-6">
                  {parfum}
                </span>
              </motion.li>
            ))}
          </ul>
        </div>
      </section>

      {/* ─── Renvoi vers l'autre gamme ─── */}
      <Link
        href={`/${autre.id}`}
        className={`group block px-6 sm:px-10 lg:px-16 py-14 ${
          autre.id === "leon" ? "bg-choco text-creme" : "bg-beurre text-choco"
        }`}
      >
        <div className="max-w-6xl mx-auto flex items-end justify-between gap-6">
          <div>
            <p className="font-label text-xs tracking-[0.3em] uppercase opacity-70 mb-2">
              Découvrir aussi · {autre.tagline.toLowerCase()}
            </p>
            <p
              className="font-display fraunces-soft italic font-black leading-none"
              style={{ fontSize: "clamp(3rem, 9vw, 6.5rem)" }}
            >
              {autre.nom}
            </p>
          </div>
          <span
            aria-hidden="true"
            className="font-display text-5xl sm:text-7xl transition-transform duration-300 group-hover:translate-x-3"
          >
            →
          </span>
        </div>
      </Link>
    </>
  );
}
