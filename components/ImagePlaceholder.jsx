/**
 * ImagePlaceholder
 * Emplacement de photo stylisé — illustration SVG d'une madeleine
 * plutôt qu'un rectangle vide. Retirez ce composant gamme par gamme
 * dès que les vraies photos arrivent.
 */

/** Madeleine vue de dessus — SVG illustratif */
export function MadeleineSvg({ fill = "#E8A020", stroke = "#C8760F" }) {
  return (
    <svg
      viewBox="0 0 200 140"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      className="w-full h-full"
    >
      {/* Corps principal — ovale légèrement pointu */}
      <ellipse cx="100" cy="70" rx="82" ry="52" fill={fill} />
      {/* Bosse centrale (le dôme caractéristique) */}
      <ellipse cx="100" cy="52" rx="36" ry="22" fill={stroke} opacity="0.75" />
      {/* Cannelures — stries longitudinales */}
      {[40, 58, 76, 100, 124, 142, 160].map((x, i) => (
        <line
          key={i}
          x1={x}
          y1={20 + Math.abs(x - 100) * 0.18}
          x2={x + (x < 100 ? -12 : 12)}
          y2={122 - Math.abs(x - 100) * 0.18}
          stroke={stroke}
          strokeWidth="2"
          strokeOpacity="0.6"
        />
      ))}
      {/* Reflet beurré */}
      <ellipse
        cx="82"
        cy="46"
        rx="14"
        ry="7"
        fill="white"
        fillOpacity="0.22"
        transform="rotate(-18 82 46)"
      />
    </svg>
  );
}

export default function ImagePlaceholder({
  /** Texte alt — reprend celui que la vraie image portera */
  alt = "Photo à venir",
  /** Nom de fichier attendu dans public/images/ */
  filename = "photo.jpg",
  /** Classe Tailwind pour l'aspect ratio */
  aspectClass = "aspect-[4/3]",
  /** Couleurs pour la variante salée (Léon) */
  variant = "sucree",
  className = "",
}) {
  const isSalee = variant === "salee";
  const fill = isSalee ? "#3D1F0F" : "#E8A020";
  const stroke = isSalee ? "#6B3820" : "#C8760F";
  const bg = isSalee ? "bg-choco-med" : "bg-creme-alt";
  const label = isSalee ? "text-creme" : "text-choco";

  return (
    <div
      className={`${aspectClass} ${bg} ${className} relative overflow-hidden flex items-center justify-center`}
      role="img"
      aria-label={alt}
    >
      {/* Illustration SVG centrée */}
      <div className="w-1/2 sm:w-2/5 opacity-60">
        <MadeleineSvg fill={fill} stroke={stroke} />
      </div>

      {/* Badge filename en bas */}
      <div className="absolute bottom-0 left-0 right-0 bg-black/30 py-1.5 px-3">
        <p className={`font-label text-xs ${label} opacity-75 truncate`}>
          → {filename}
        </p>
      </div>
    </div>
  );
}
