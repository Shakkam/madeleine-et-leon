import HeroSection from "@/components/HeroSection";
import GammesSection from "@/components/GammesSection";
import VichyDivider from "@/components/VichyDivider";

export default function Home() {
  return (
    <>
      {/* Hero — grande typographie, photo plein écran, sticker rotatif */}
      <HeroSection />

      {/* Aperçu des deux gammes → pages /madeleine et /leon */}
      <GammesSection />

      <VichyDivider />
    </>
  );
}
