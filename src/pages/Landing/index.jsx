import logo from "@assets/images/tryning.webp";
import { Link } from "react-router-dom";
export default function PageLanding() {
  return (
    <div className="Landing-container">
      <div className="logo">
        <img src={logo} alt="imagen logo Tryning" />
      </div>
      <div className="buttons-container">
        <Link to="/login" className="button-login">
          Iniciar sesion
        </Link>
        <Link to="/register" className="button-register">
          Registrarse
        </Link>
      </div>
    </div>
  );
}
