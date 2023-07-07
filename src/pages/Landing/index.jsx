import { useAuthContext } from "../../hooks/useAuthContext";
import logo from "../../assets/images/logo.png";
export default function Landing() {
  const { user } = useAuthContext();
  console.log(user);
  return (
    <div className="Landing-container">
      <div className="logo">
        <img src={logo} alt="imagen logo Tryning" />
      </div>
      <div className="buttons-container">
        <a href="/login" className="button-login">
          Iniciar sesion
        </a>
        <a href="/register" className="button-register">
          Registrarse
        </a>
      </div>
    </div>
  );
}
