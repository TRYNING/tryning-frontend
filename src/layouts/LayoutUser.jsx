import { NavbarUser } from "@components/NavbarUser/NavbarUser";

export function LayoutUser({ children }) {
  return (
    <>
      <NavbarUser />
      {children}
    </>
  );
}
