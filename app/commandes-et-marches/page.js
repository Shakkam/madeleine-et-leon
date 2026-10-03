import OuNousTrouverSection from "@/components/OuNousTrouverSection";
import CommanderSection from "@/components/CommanderSection";

export const metadata = {
  title: "Commandes & marchés",
  description:
    "Retrouvez Madeleine & Léon sur les marchés bordelais ou commandez vos madeleines en DM Instagram.",
};

export default function CommandesEtMarchesPage() {
  return (
    <>
      <OuNousTrouverSection />
      <CommanderSection />
    </>
  );
}
