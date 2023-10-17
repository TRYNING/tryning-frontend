import { Footer } from "@components/Footer/Footer";
import { NavbarTrainer } from "@components/NavbarTrainer/NavbarTrainer";

export function LayoutTrainer({ children }) {
  return (
    <>
      <NavbarTrainer />
      {children}
      <Footer />
    </>
  );
}
