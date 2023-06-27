import { useAuthContext } from "../../hooks/useAuthContext";

export default function Landing() {
  const { user } = useAuthContext();
  console.log(user);
  return (
    <div className="Landing-container">
      <div className="logo">
        <img src="src/pages/Landing/logo.png" />
      </div>
      <div className="buttons-container">
        <a href="/login">Iniciar sesion</a>
        <a href="/register">Registrarse</a>
      </div>
    </div>
  );
}
