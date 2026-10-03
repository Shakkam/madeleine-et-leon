"use client";

import { motion, useReducedMotion } from "framer-motion";
import { marches, liens } from "@/data/content";

function PinIcon() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className="flex-shrink-0"
    >
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  );
}

function MarcheCard({ marche, index }) {
  const shouldReduce = useReducedMotion();

  return (
    <motion.article
      initial={shouldReduce ? {} : { opacity: 0, y: 32 }}
      whileInView={shouldReduce ? {} : { opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1], delay: index * 0.1 }}
      className="bg-creme rounded-2xl p-7 flex flex-col gap-4"
    >
      {/* Jour — badge label */}
      <div className="flex gap-2 flex-wrap">
        {marche.jours.map((j) => (
          <span
            key={j}
            className="font-label text-xs tracking-[0.2em] uppercase bg-beurre text-choco px-3 py-1.5 rounded-full"
          >
            {j}
          </span>
        ))}
        {marche.horaires !== "Horaires à confirmer" && (
          <span className="font-label text-xs tracking-wider bg-vichy-pale text-vichy px-3 py-1.5 rounded-full">
            {marche.horaires}
          </span>
        )}
      </div>

      {/* Lieu */}
      <div className="flex items-start gap-3">
        <span className="text-beurre mt-0.5">
          <PinIcon />
        </span>
        <div>
          <h3 className="font-display fraunces-soft italic font-black text-choco text-2xl leading-tight">
            {marche.lieu}
          </h3>
          <p className="font-label text-xs text-choco-cl tracking-wide mt-1">
            {marche.ville} · {marche.codePostal}
          </p>
        </div>
      </div>

      {marche.horaires === "Horaires à confirmer" && (
        <p className="font-label text-xs text-choco/45 italic">
          Horaires à confirmer — voir Instagram
        </p>
      )}

      {marche.notes && (
        <p className="font-display fraunces-mid text-sm text-choco-med italic">
          {marche.notes}
        </p>
      )}
    </motion.article>
  );
}

export default function OuNousTrouverSection() {
  const shouldReduce = useReducedMotion();

  return (
    <section
      id="nos-marches"
      className="bg-vichy py-20 px-6"
    >
      <div className="max-w-5xl mx-auto">

        {/* En-tête */}
        <motion.div
          className="mb-12"
          initial={shouldReduce ? {} : { opacity: 0, y: 20 }}
          whileInView={shouldReduce ? {} : { opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="font-label text-xs tracking-[0.3em] uppercase text-vichy-pale/70 mb-3">
            Marchés bordelais
          </p>
          <h1
            className="font-display fraunces-soft italic font-black text-creme leading-none"
            style={{ fontSize: "clamp(2.8rem, 7vw, 5.5rem)" }}
          >
            Où nous trouver
          </h1>
          <p className="font-display fraunces-mid text-base sm:text-lg text-creme/70 mt-5 max-w-md leading-relaxed">
            Retrouvez-nous chaque semaine sur les marchés. La liste s&apos;agrandit —
            suivez{" "}
            <a
              href={liens.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="text-beurre underline underline-offset-4 hover:text-beurre-cl transition-colors"
            >
              {liens.instagramHandle}
            </a>{" "}
            pour les annonces.
          </p>
        </motion.div>

        {/* Grille des marchés */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {marches.map((marche, i) => (
            <MarcheCard key={marche.id} marche={marche} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
