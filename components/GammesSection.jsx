"use client";

import { motion, useReducedMotion } from "framer-motion";
import { gammes } from "@/data/content";
import Image from "next/image";
import Link from "next/link";
import ImagePlaceholder from "./ImagePlaceholder";

/**
 * Carte d'un parfum individuel avec tilt au survol.
 * Les items "larges" (col-span-2) alternent pour créer le rythme bento.
 */
function ParfumCard({ parfum, index, total, isSalee, shouldReduce }) {
  /** Items à index 2 et dernier (si > 4) prennent 2 colonnes */
  const isWide = total > 4 && (index === 2 || index === total - 1);
  const tiltDir = index % 2 === 0 ? 1.8 : -1.8;

  return (
    <motion.div
      className={`${isWide ? "col-span-2" : "col-span-1"} rounded-2xl px-5 py-4 cursor-default select-none
        ${isSalee ? "bg-creme/10 border border-creme/15" : "bg-choco/8 border border-choco/12"}`}
      style={{
        background: isSalee ? "rgba(245,237,216,0.10)" : "rgba(28,10,3,0.07)",
      }}
      whileHover={
        shouldReduce
          ? {}
          : { rotate: tiltDir, y: -5, scale: 1.03 }
      }
      transition={{ type: "spring", stiffness: 380, damping: 18 }}
    >
      <p
        className={`font-label text-xs tracking-wider uppercase leading-snug
          ${isSalee ? "text-creme" : "text-choco"}`}
      >
        {parfum}
      </p>
    </motion.div>
  );
}

/**
 * Bloc d'une gamme — plein écran couleur avec image + grille bento parfums.
 */
function GammeBloc({ gamme, index }) {
  const shouldReduce = useReducedMotion();
  const isSalee = gamme.id === "leon";

  const revealProp = shouldReduce
    ? {}
    : {
        initial: { opacity: 0, y: 40 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true, margin: "-60px" },
        transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] },
      };

  return (
    <motion.article
      className={`relative flex flex-col overflow-hidden
        ${isSalee ? "bg-choco text-creme" : "bg-beurre text-choco"}`}
    >
      {/* Photo de la gamme, ou placeholder illustré en attendant */}
      {gamme.imageDispo ? (
        <div className="relative aspect-[16/9] sm:aspect-[4/3] overflow-hidden">
          <Image
            src={gamme.image}
            alt={gamme.imageAlt}
            fill
            sizes="(min-width: 1024px) 50vw, 100vw"
            className="object-cover"
          />
        </div>
      ) : (
        <ImagePlaceholder
          alt={gamme.imageAlt}
          filename={gamme.image.replace("/images/", "")}
          aspectClass="aspect-[16/9] sm:aspect-[4/3]"
          variant={isSalee ? "salee" : "sucree"}
        />
      )}

      {/* Corps texte */}
      <div className="p-7 sm:p-8 lg:p-10 flex flex-col flex-1">
        {/* Étiquette */}
        <motion.span
          className={`font-label text-xs tracking-[0.28em] uppercase mb-2
            ${isSalee ? "text-beurre" : "text-choco-med"}`}
          {...revealProp}
        >
          {gamme.tagline}
        </motion.span>

        {/* Nom */}
        <motion.h3
          className="font-display fraunces-soft italic font-black leading-[0.9]"
          style={{ fontSize: "clamp(3.5rem, 9vw, 7rem)" }}
          {...revealProp}
          transition={{ ...(revealProp.transition ?? {}), delay: 0.08 }}
        >
          {gamme.nom}
        </motion.h3>

        {/* Description */}
        <motion.p
          className={`font-display fraunces-mid text-base sm:text-lg leading-relaxed mt-5 mb-7 max-w-md
            ${isSalee ? "text-creme/80" : "text-choco/75"}`}
          {...revealProp}
          transition={{ ...(revealProp.transition ?? {}), delay: 0.14 }}
        >
          {gamme.description}
        </motion.p>

        {/* Divider */}
        <div
          aria-hidden="true"
          className={`w-10 h-0.5 mb-6 ${isSalee ? "bg-beurre/50" : "bg-choco/30"}`}
        />

        {/* Bento grid — parfums */}
        <div className="grid grid-cols-2 gap-2 sm:gap-3">
          {gamme.parfums.map((parfum, i) => (
            <ParfumCard
              key={parfum}
              parfum={parfum}
              index={i}
              total={gamme.parfums.length}
              isSalee={isSalee}
              shouldReduce={shouldReduce}
            />
          ))}
        </div>

        <Link
          href={`/${gamme.id}`}
          className={`mt-8 inline-flex items-center gap-2 self-start px-6 py-3 rounded-full font-label text-xs tracking-[0.22em] uppercase transition-colors duration-200 ${
            isSalee
              ? "bg-beurre text-choco hover:bg-creme"
              : "bg-choco text-creme hover:bg-creme hover:text-choco"
          }`}
        >
          Découvrir {gamme.nom} <span aria-hidden="true">→</span>
        </Link>
      </div>
    </motion.article>
  );
}

export default function GammesSection() {
  const shouldReduce = useReducedMotion();

  return (
    <section id="nos-gammes" className="bg-creme-alt py-16 px-6">
      <div className="max-w-5xl mx-auto">

        {/* En-tête de section */}
        <motion.div
          className="text-center mb-12"
          initial={shouldReduce ? {} : { opacity: 0, y: 20 }}
          whileInView={shouldReduce ? {} : { opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="font-label text-xs tracking-[0.3em] uppercase text-choco-cl mb-3">
            Sucrée · Salée
          </p>
          <h2
            className="font-display fraunces-soft italic font-black text-choco leading-none"
            style={{ fontSize: "clamp(2.8rem, 7vw, 5.5rem)" }}
          >
            Nos gammes
          </h2>
        </motion.div>

        {/* Grille des deux gammes */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
          {gammes.map((gamme, i) => (
            <GammeBloc key={gamme.id} gamme={gamme} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
