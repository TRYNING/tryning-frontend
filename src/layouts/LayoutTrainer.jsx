import { NavBarUser } from "@components/NavBarUser/NavBarUser";
import { Footer } from "../components/Footer/Footer";

export function LayoutTrainer({ children }) {
  return (
    <>
      <NavBarUser />
      {children}
      <Footer />
    </>
  );
}
