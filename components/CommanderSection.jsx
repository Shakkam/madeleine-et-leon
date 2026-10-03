"use client";

import { motion, useReducedMotion } from "framer-motion";
import { liens } from "@/data/content";

function InstagramIcon({ size = 18 }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </svg>
  );
}

export default function CommanderSection() {
  const shouldReduce = useReducedMotion();

  const reveal = (delay = 0) => ({
    initial: shouldReduce ? {} : { opacity: 0, y: 28 },
    whileInView: shouldReduce ? {} : { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1], delay },
  });

  return (
    <section
      id="commander"
      className="bg-choco py-24 px-6 relative overflow-hidden"
    >
      {/* Texture pointillée — crème subtile */}
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none opacity-[0.06]"
        style={{
          backgroundImage: "radial-gradient(circle, #F5EDD8 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      />

      <div className="relative z-10 max-w-4xl mx-auto">

        {/* Label */}
        <motion.p
          className="font-label text-xs tracking-[0.32em] uppercase text-beurre mb-8"
          {...reveal(0)}
        >
          ✦ Commandes ouvertes
        </motion.p>

        {/* Titre XXL sur 2 lignes */}
        <motion.h2
          className="font-display fraunces-soft italic font-black text-creme leading-[0.88]"
          style={{ fontSize: "clamp(3.5rem, 11vw, 9rem)" }}
          {...reveal(0.1)}
        >
          Envie de
        </motion.h2>
        <motion.span
          className="block font-display fraunces-soft italic font-black text-beurre leading-[0.88] mb-10"
          style={{ fontSize: "clamp(3.5rem, 11vw, 9rem)", marginLeft: "clamp(1rem, 4vw, 4rem)" }}
          {...reveal(0.2)}
          aria-hidden="true"
        >
          madeleines ?
        </motion.span>
        <span className="sr-only">Envie de madeleines ?</span>

        {/* Phrase */}
        <motion.p
          className="font-display fraunces-mid text-base sm:text-xl text-creme/65 max-w-md leading-relaxed mb-10"
          {...reveal(0.3)}
        >
          Pour passer commande, prévoir une boîte cadeau ou simplement dire bonjour —
          un message Instagram suffit. On répond avec le sourire.
        </motion.p>

        {/* CTAs */}
        <motion.div
          className="flex flex-col sm:flex-row gap-4"
          {...reveal(0.4)}
        >
          <a
            href={liens.instagramDM}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-3 px-9 py-4 bg-beurre text-choco font-label text-xs tracking-[0.22em] uppercase rounded-full hover:bg-beurre-cl transition-colors duration-200 w-fit"
          >
            <InstagramIcon size={16} />
            Commander en DM
          </a>
          <a
            href={liens.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-3 px-9 py-4 bg-transparent text-creme font-label text-xs tracking-[0.22em] uppercase rounded-full border border-creme/25 hover:border-creme/60 hover:bg-creme/5 transition-all duration-200 w-fit"
          >
            <InstagramIcon size={16} />
            {liens.instagramHandle}
          </a>
        </motion.div>

      </div>
    </section>
  );
}
