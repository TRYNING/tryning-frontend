import { useAuthContext } from "../../../../hooks/useAuthContext";
//import { useNavigate } from "react-router-dom";
import { useState } from "react";

export function FormRegister({ nextStep }) {
  const { googleSignUp, setUserData } = useAuthContext();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setUserData({ email, password });
    nextStep();
  };
  return (
    <form className="FormRegister-container" onSubmit={(e) => handleSubmit(e)}>
      <label>Email</label>
      <input
        type="text"
        placeholder="ejemplo123@gmail.com"
        onChange={(e) => setEmail(e.target.value)}
      />
      <label>Contraseña</label>
      <input
        type="password"
        placeholder="contraseña123"
        onChange={(e) => setPassword(e.target.value)}
      />
      <button className="button-next">Siguiente</button>
      <div className="error-container">
        <p>{/*errorAuth && errorAuth*/}</p>
      </div>

      <button
        onClick={() => {
          googleSignUp();
        }}
        className="button-google">
        Registrarse con Google
      </button>
      <div className="-p">
        <p>¿Ya tienes una cuenta?</p>
        <a href="/login">Inicia sesion</a>
      </div>
    </form>
  );
}
