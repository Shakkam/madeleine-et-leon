/**
 * VichyDivider
 * Bande vichy pleine largeur — évoque la nappe de stand de marché.
 * 24 px de haut, motif gingham bleu et blanc affirmé.
 */
export default function VichyDivider() {
  return (
    <div
      aria-hidden="true"
      className="h-6 w-full"
      style={{
        backgroundImage: [
          "repeating-linear-gradient(0deg, rgba(43,75,173,0.55) 0px, rgba(43,75,173,0.55) 4px, transparent 4px, transparent 8px)",
          "repeating-linear-gradient(90deg, rgba(43,75,173,0.55) 0px, rgba(43,75,173,0.55) 4px, transparent 4px, transparent 8px)",
        ].join(", "),
        backgroundColor: "rgba(43,75,173,0.12)",
      }}
    />
  );
}
