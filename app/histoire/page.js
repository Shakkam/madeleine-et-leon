import HistoireSection from "@/components/HistoireSection";
import VichyDivider from "@/components/VichyDivider";

export const metadata = {
  title: "Notre histoire",
  description:
    "Du graphisme à la cuisine, puis à la pâtisserie : l'histoire de Madeleine & Léon, deux enfants, deux univers, des madeleines sucrées et salées.",
};

export default function HistoirePage() {
  return (
    <>
      <HistoireSection />
      <VichyDivider />
    </>
  );
}
