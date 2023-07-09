import { Link } from "react-router-dom";
import { useAuthContext } from "../../../../hooks/useAuthContext";
import { useState } from "react";

export function FormLogin() {
  const { signWithEmail, errorAuth, setErrorAuth, googleSignUp } =
    useAuthContext();
  const [infoUser, setInfoUSer] = useState({});

  const handleChange = (e) => {
    setInfoUSer({ ...infoUser, [e.target.name]: e.target.value });
    setErrorAuth(null);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { email, password } = infoUser;
    setErrorAuth(null);
    signWithEmail(email, password);
  };

  const handleGoogle = () => {
    setErrorAuth(null);
    googleSignUp();
  };

  return (
    <form className="FormLogin-container" onSubmit={(e) => handleSubmit(e)}>
      <div className="input-container">
        <div className="error-container">{errorAuth && <p>{errorAuth}</p>}</div>
        <label>Email</label>
        <input
          type="text"
          placeholder="Ingrese su email..."
          onChange={(e) => handleChange(e)}
          name="email"
          className="input"
        />
      </div>
      <div className="input-container">
        <label>Contraseña</label>
        <input
          type="text"
          placeholder="Ingrese su contraseña..."
          onChange={(e) => handleChange(e)}
          name="password"
          className="input"
        />
      </div>
      <div className="buttons-container">
        <button className="button-login">Iniciar sesion</button>
        <button
          className="button-google"
          type="button"
          onClick={() => handleGoogle()}
        >
          <img src="https://w7.pngwing.com/pngs/326/85/png-transparent-google-logo-google-text-trademark-logo.png" />
        </button>
        <div className="-p">
          <p>¿No tienes una cuenta?</p>
          <Link to="/register">Registrate</Link>
        </div>
      </div>
    </form>
  );
}
