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
      <div className="input-container">
        <label>Email</label>
        <input
          type="text"
          placeholder="Ingrese su email..."
          onChange={(e) => setEmail(e.target)}
          className="input"
        />
      </div>
      <div className="input-container">
        <label>Contraseña</label>
        <input
          type="text"
          placeholder="Ingrese su contraseña..."
          onChange={(e) => setPassword(e.target)}
          className="input"
        />
      </div>
      <div className="buttons-container">
        <button className="button-login">Iniciar sesion</button>
        <div className="error-container">
          <p>{errorAuth && errorAuth}</p>
        </div>
        <button className="button-google" onClick={() => googleSignUp()}>
          Google
        </button>
        <div className="-p">
          <p>¿No tienes una cuenta?</p>
          <a href="/register">Registrate</a>
        </div>
      </div>
    </form>
  );
}
