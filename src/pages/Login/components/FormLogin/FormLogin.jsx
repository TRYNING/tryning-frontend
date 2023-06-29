import { useAuthContext } from "../../../../hooks/useAuthContext";
import { useState } from "react";

export function FormLogin() {
  const { signWithEmail, errorAuth, setErrorAuth, googleSignUp } =
    useAuthContext();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrorAuth(null);
    signWithEmail(email, password);
  };
  return (
    <form className="FormLogin-container" onSubmit={(e) => handleSubmit(e)}>
      <label>Email</label>
      <input
        type="text"
        placeholder="ingresa tu mail"
        onChange={(e) => setEmail(e.target)}
      />
      <label>Contraseña</label>
      <input
        type="text"
        placeholder="ingresa tu contraseña"
        onChange={(e) => setPassword(e.target)}
      />
      <button id="login">Iniciar sesion</button>
      <div className="error-container">
        <p>{errorAuth && errorAuth}</p>
      </div>
      <div id="o">o</div>
      <button id="google" onClick={() => googleSignUp()}>
        Google
      </button>
      <div className="-p">
        <p>¿No tienes una cuenta?</p>
        <a href="/register">Registrate</a>
      </div>
    </form>
  );
}
