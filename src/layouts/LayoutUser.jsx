import { NavBarUser } from "@components/NavBarUser/NavBarUser";
import { Footer } from "../components/Footer/Footer";

export function LayoutUser({ children }) {
  return (
    <>
      <NavBarUser />
      {children}
      <Footer />
    </>
  );
}
