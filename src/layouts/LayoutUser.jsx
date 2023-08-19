import { NavbarUser } from "@components/NavbarUser/NavbarUser";
import { Footer } from "../components/Footer/Footer";

export function LayoutUser({ children }) {
  return (
    <>
      <NavbarUser />
      {children}
      <Footer />
    </>
  );
}
