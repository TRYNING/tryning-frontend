import { useState } from "react";
import logo from "../../assets/images/logo.png";
import { useAuthContext } from "../../hooks/useAuthContext";

export function Header() {
  const [open, setOpen] = useState(false)

function handleLogoClick(){
  setOpen(!open)
}
const { SignOut } = useAuthContext();


  return (
    <div className="Header-container">
      <header>
        <div className="container-logo">
          <img src={logo} alt="logo de tryning" onClick={handleLogoClick}/>
        </div>
        
      </header>
      <div className={`menu ${open ? "active" : ""}`} id="menu">
          
          <ul className="container-link">
            <li className="link">MI CUENTA</li>
            <li className="link">NOSOTROS</li>
            <li className="link">CONTACTO</li>
            <li className="link">ENTRENADORES</li>
            <li className="link trainer">VOLVERSE ENTRENADOR</li>
            <li className="link logout" onClick={() => SignOut()}>
              CERRAR SESION
            </li>
          </ul>
      </div>
    </div>
  );
}
