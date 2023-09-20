import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "@assets/images/tryning-pink.webp";
import { useAuthContext } from "@hooks/useAuthContext";
import { SvgMenu } from "@assets/icons/svgIcons";

export function Header() {
  const [open, setOpen] = useState(false);

  function handleLogoClick() {
    setOpen(!open);
  }
  const { SignOut } = useAuthContext();

  return (
    <header className="relative w-full flex justify-between items-center bg-white py-15 px-3 z-50 pointer-events-auto">
      <div
        className="m-0 15px transition-transform duration-500 cursor-pointer hover:scale-90"
        onClick={handleLogoClick}
      >
        <SvgMenu size={30} />
      </div>
      <section>
        <Link to="/">
          <img
            src={logo}
            alt="logo de tryning"
            className="cursor-pointer h-8 m-2 object-cover aspect-video"
          />
        </Link>
      </section>
      <section className={`menu ${open ? "active" : ""}`} id="menu">
        <ul className="container-link">
          <Link to="/account" className="link">
            <li>MI CUENTA</li>
          </Link>
          <Link to="/about-us" className="link">
            <li>NOSOTROS</li>
          </Link>

          <Link to=".././pages/Support/index.jsx" className="link">
            <li>CONTACTO</li>
          </Link>

          <Link to="/become-trainer" className="link trainer">
            <li>VOLVERSE ENTRENADOR</li>
          </Link>

          <li className="link logout" onClick={() => SignOut()}>
            CERRAR SESION
          </li>
        </ul>
      </section>
    </header>
  );
}
