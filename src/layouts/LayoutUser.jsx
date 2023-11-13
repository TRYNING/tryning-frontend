import { NavbarUser } from "@components/NavbarUser";

export function LayoutUser({ children }) {
  return (
    <>
      <NavbarUser />
      {children}
    </>
  );
}
