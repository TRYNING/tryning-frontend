import { useAuthContext } from "../../../../hooks/useAuthContext";
import { Link } from "react-router-dom";
import { useState } from "react";

export function Step1({ nextStep }) {
  const { googleSignUp, setUserData } = useAuthContext();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setUserData({ email, password });
    nextStep();
    
  };
  return (
    <form className="Step1-container" onSubmit={(e) => handleSubmit(e)}>
      <div className="input-container">
        <label>Email</label>
        <input
          type="text"
          placeholder="Ingrese su email..."
          onChange={(e) => setEmail(e.target.value)}
          className="input"
        />
      </div>
      <div className="input-container">
        <label>Contraseña</label>
        <input
          type="password"
          placeholder="Ingrese su contraseña..."
          onChange={(e) => setPassword(e.target.value)}
          className="input"
        />
      </div>
      <div className="buttons-container">
        <button className="button-next">Siguiente</button>
        <div className="error-container">
          <p>{/*errorAuth && errorAuth*/}</p>
        </div>

        <button
          onClick={() => {
            googleSignUp();
          }}
          className="button-google">
          <img
            src="https://w7.pngwing.com/pngs/326/85/png-transparent-google-logo-google-text-trademark-logo.png"
            alt=""
          />
        </button>
        <div className="-p">
          <p>¿Ya tienes una cuenta?</p>
          <Link to="/login">Inicia sesion</Link>
        </div>
      </div>
    </form>
  );
}
