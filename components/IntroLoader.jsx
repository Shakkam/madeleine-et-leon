"use client";

/**
 * IntroLoader
 * Écran de chargement de 2 s avec une madeleine qui tourne,
 * affiché une fois par session (sessionStorage « ml-intro »).
 * - Déjà vu : masqué avant le premier rendu par le script inline du layout
 *   (classe .intro-vue sur <html>), donc pas de flash.
 * - Sans JS : masqué par <noscript> dans le layout.
 * - reduced-motion : la madeleine ne tourne pas (globals.css).
 */
import { useEffect, useState } from "react";
import Image from "next/image";

const DUREE = 2000;
const FONDU = 500;

export default function IntroLoader() {
  const [phase, setPhase] = useState("visible"); // visible → sortie → fini

  useEffect(() => {
    // Déjà vue : le CSS (.intro-vue) la masque, rien à faire
    if (document.documentElement.classList.contains("intro-vue")) return;
    try {
      sessionStorage.setItem("ml-intro", "1");
    } catch {}
    const t1 = setTimeout(() => setPhase("sortie"), DUREE);
    const t2 = setTimeout(() => setPhase("fini"), DUREE + FONDU);
    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
    };
  }, []);

  if (phase === "fini") return null;

  return (
    <div
      className={`intro-loader fixed inset-0 z-[100] bg-creme flex flex-col items-center justify-center gap-6 transition-opacity ${
        phase === "sortie" ? "opacity-0 pointer-events-none" : "opacity-100"
      }`}
      style={{ transitionDuration: `${FONDU}ms` }}
      role="status"
      aria-label="Chargement"
    >
      <Image
        src="/images/madeleine-loader.png"
        alt=""
        width={600}
        height={674}
        priority
        className="w-32 h-auto animate-madeleine"
      />
      <p className="font-display fraunces-soft italic font-black text-3xl text-choco">
        Madeleine <span className="text-beurre">&amp;</span> Léon
      </p>
      <p className="font-label text-[11px] tracking-[0.3em] uppercase text-choco-cl">
        Sortie du four…
      </p>
    </div>
  );
}
