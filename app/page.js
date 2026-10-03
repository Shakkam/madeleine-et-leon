import HeroSection from "@/components/HeroSection";
import MarqueeBanner from "@/components/MarqueeBanner";
import GammesSection from "@/components/GammesSection";
import HistoireSection from "@/components/HistoireSection";
import VichyDivider from "@/components/VichyDivider";
import OuNousTrouverSection from "@/components/OuNousTrouverSection";
import CommanderSection from "@/components/CommanderSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      {/* Barre d'annonce fixe — parfums, marché, commande */}
      <MarqueeBanner />

      {/* 1. Hero — grande typographie, sticker rotatif */}
      <HeroSection />

      {/* 2. Nos gammes — Madeleine (beurre) · Léon (chocolat) */}
      <GammesSection />

      {/* 3. Notre savoir-faire */}
      <HistoireSection />

      {/* Ruban vichy */}
      <VichyDivider />

      {/* 4. Où nous trouver — section vichy bleue */}
      <OuNousTrouverSection />

      {/* 5. Commander */}
      <CommanderSection />

      {/* 6. Footer */}
      <Footer />
    </main>
  );
}
