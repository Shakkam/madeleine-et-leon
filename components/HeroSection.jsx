"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { liens, infos } from "@/data/content";

/** Logo rond officiel Madeleine & Léon. */
function Sticker() {
  return (
    <Image
      src="/images/logo.png"
      alt="Madeleine & Léon — Pâtisserie artisanale, France 2023"
      width={1024}
      height={1024}
      priority
      className="animate-spin-slow w-28 h-28 sm:w-40 sm:h-40 drop-shadow-xl"
    />
  );
}

export default function HeroSection() {
  const shouldReduce = useReducedMotion();

  const fadeUp = (delay = 0) =>
    shouldReduce
      ? {}
      : {
          initial: { opacity: 0, y: 36 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1], delay },
        };

  return (
    <section
      id="accueil"
      className="relative isolate min-h-[calc(100svh-5.75rem)] bg-choco flex flex-col justify-center overflow-hidden px-6 sm:px-10 lg:px-16 pt-20 pb-24"
    >
      {/* Photo de fond + voile chocolat pour la lisibilité */}
      <Image
        src="/images/hero.jpg"
        alt=""
        fill
        priority
        sizes="100vw"
        className="object-cover object-center -z-10"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10"
        style={{
          background:
            "linear-gradient(100deg, rgba(18,17,16,0.92) 0%, rgba(18,17,16,0.78) 45%, rgba(18,17,16,0.35) 100%)",
        }}
      />

      {/* Logo rond rotatif — coin supérieur droit */}
      <div className="absolute top-6 right-6 sm:top-8 sm:right-10 lg:right-16 z-10">
        <Sticker />
      </div>

      {/* Étiquette surtitle */}
      <motion.div className="mb-9 mt-4" {...fadeUp(0.05)}>
        <span className="font-label text-xs tracking-[0.28em] uppercase text-creme bg-beurre/25 px-3 py-1.5 inline-block">
          Pâtisserie artisanale · Bordeaux · 2026
        </span>
      </motion.div>

      {/* ─── Nom de la marque — ultra-large ─── */}
      <div className="overflow-visible">
        <motion.h1
          className="font-display fraunces-soft italic font-black leading-[0.88] text-creme"
          style={{ fontSize: "clamp(4.5rem, 13.5vw, 11.5rem)" }}
          {...fadeUp(0.15)}
        >
          Madeleine
        </motion.h1>
        <motion.span
          aria-hidden="true"
          className="block font-display fraunces-soft italic font-black leading-[0.88] text-beurre"
          style={{ fontSize: "clamp(3.5rem, 10.5vw, 9rem)", marginLeft: "clamp(1.5rem, 5vw, 5rem)" }}
          {...fadeUp(0.26)}
        >
          &amp; Léon
        </motion.span>
        {/* Screen-reader–only version of full brand name */}
        <span className="sr-only">Madeleine &amp; Léon</span>
      </div>

      {/* ─── Séparateur ornemental ─── */}
      <motion.div
        className="flex items-center gap-4 mt-10 mb-7"
        aria-hidden="true"
        {...fadeUp(0.38)}
      >
        <span className="block w-16 h-px bg-creme/30" />
        <span className="block w-2.5 h-2.5 rounded-full bg-beurre" />
        <span className="block w-16 h-px bg-creme/30" />
      </motion.div>

      {/* Tagline */}
      <motion.p
        className="font-display fraunces-soft italic font-semibold text-creme text-xl sm:text-2xl max-w-xs sm:max-w-sm"
        {...fadeUp(0.44)}
      >
        {infos.slogan}
      </motion.p>
      <motion.p
        className="font-label text-xs tracking-wider text-creme/75 mt-2.5 max-w-xs"
        {...fadeUp(0.5)}
      >
        Ingrédients choisis &nbsp;·&nbsp; Du sucré au salé &nbsp;·&nbsp; Marchés bordelais
      </motion.p>

      {/* ─── CTAs — boutons pilule ─── */}
      <motion.div
        className="flex flex-col sm:flex-row gap-4 mt-11"
        {...fadeUp(0.58)}
      >
        <a
          href={liens.instagramDM}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-beurre text-choco font-label text-xs tracking-[0.22em] uppercase rounded-full hover:bg-creme transition-all duration-200 w-fit"
        >
          Commander
          <svg
            width="13"
            height="13"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <path d="M5 12h14M12 5l7 7-7 7" />
          </svg>
        </a>
        <Link
          href="/commandes-et-marches"
          className="inline-flex items-center justify-center px-8 py-3.5 bg-transparent text-creme font-label text-xs tracking-[0.22em] uppercase rounded-full border-2 border-creme/40 hover:border-creme hover:bg-creme/10 transition-all duration-200 w-fit"
        >
          Nos marchés
        </Link>
      </motion.div>

      {/* France 2026 */}
      <motion.p
        className="font-label text-xs tracking-[0.4em] uppercase text-creme/50 mt-16"
        {...fadeUp(0.66)}
      >
        France · 2026
      </motion.p>

      {/* ─── Chevron défilement ─── */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-creme/60"
        animate={shouldReduce ? {} : { y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 2.4, ease: "easeInOut" }}
        aria-hidden="true"
      >
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <polyline points="6 9 12 15 18 9" />
        </svg>
      </motion.div>
    </section>
  );
}
