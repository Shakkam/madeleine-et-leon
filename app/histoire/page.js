import HistoireSection from "@/components/HistoireSection";
import VichyDivider from "@/components/VichyDivider";

export const metadata = {
  title: "Histoire",
  description:
    "L'histoire de la madeleine : de la cour du roi Stanislas à la madeleine de Proust, une pâtisserie qui fait revenir les souvenirs.",
};

export default function HistoirePage() {
  return (
    <>
      <HistoireSection />
      <VichyDivider />
    </>
  );
}
