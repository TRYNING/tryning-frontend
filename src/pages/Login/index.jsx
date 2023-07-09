import { FormLogin } from "./components/FormLogin/FormLogin";
import { Link } from "react-router-dom";

import logo from "../../assets/images/logo.png";
export default function Login() {
  return (
    <div className="Login-container">
      <div className="container-form">
        <div className="logo-container">
          <img src={logo} alt="logo de tryning" />
        </div>
        <FormLogin />
        <div className="container-redirect">
          <p>¿Ya tienes una cuenta?</p>
          <Link to="/login">Inicia sesion</Link>
        </div>
      </div>
    </div>
  );
}
