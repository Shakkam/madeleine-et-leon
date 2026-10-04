import HistoireSection from "@/components/HistoireSection";
import VichyDivider from "@/components/VichyDivider";

export const metadata = {
  title: "Histoire",
  description:
    "Le savoir-faire Madeleine & Léon : ingrédients choisis avec soin, pâte travaillée à la main et beaucoup d'amour.",
};

export default function HistoirePage() {
  return (
    <>
      <HistoireSection />
      <VichyDivider />
    </>
  );
}
