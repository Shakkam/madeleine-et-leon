/**
 * MarqueeBanner
 * Barre fixe en haut de page : parfums des deux gammes et prochain marché,
 * en défilement continu. Purement informative (pas de lien).
 * - Pause au survol (globals.css).
 * - Arrêtée si prefers-reduced-motion (globals.css).
 */
import { gammes, marches } from "@/data/content";

const marche = marches[0];

const items = [
  ...gammes[0].parfums.map((label) => ({ label, tone: "creme" })),
  marche && {
    label: `★ ${marche.jours.join(" & ")} · ${marche.lieu}, ${marche.ville}`,
    tone: "vichy",
  },
  ...gammes[1].parfums.map((label) => ({ label, tone: "beurre" })),
].filter(Boolean);

const toneClass = {
  creme: "text-creme",
  beurre: "text-beurre",
  vichy: "text-vichy-pale",
};

export default function MarqueeBanner() {
  return (
    <div
      className="marquee-bar h-9 bg-choco overflow-hidden flex items-center border-b border-beurre/20"
      role="region"
      aria-label={`Nos parfums et marchés : ${items.map((i) => i.label).join(", ")}`}
    >
      {/* Contenu dupliqué pour une boucle sans saut */}
      <div
        className="flex whitespace-nowrap animate-marquee will-change-transform"
        aria-hidden="true"
      >
        {[0, 1].map((copy) => (
          <span key={copy} className="flex items-center shrink-0">
            {items.map((item, i) => (
              <span key={`${copy}-${i}`} className="inline-flex items-center">
                <span
                  className={`font-label text-[11px] tracking-[0.22em] uppercase mx-4 ${toneClass[item.tone]}`}
                >
                  {item.label}
                </span>
                <span className="text-beurre/40 font-label text-sm">·</span>
              </span>
            ))}
          </span>
        ))}
      </div>
    </div>
  );
}
