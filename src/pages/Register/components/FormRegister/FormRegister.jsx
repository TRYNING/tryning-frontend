/*import { useAuthContext } from "../../../../hooks/useAuthContext";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
*/
export function FormRegister({ nextStep }) {
  /*const { registerWithEmail, errorAuth, setErrorAuth, googleSignUp } =
    useAuthContext();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
*/
  const handleSubmit = (e) => {
    e.preventDefault();
    nextStep();
    //setErrorAuth(null);
    //registerWithEmail(email, password);
    //navigate("/register-details");
  };
  return (
    <form className="FormRegister-container" onSubmit={(e) => handleSubmit(e)}>
      <label>Email</label>
      <input
        type="text"
        placeholder="ejemplo123@gmail.com"
        //onChange={(e) => setEmail(e.target.value)}
      />
      <label>Contraseña</label>
      <input
        type="password"
        placeholder="contraseña123"
        //onChange={(e) => setPassword(e.target.value)}
      />
      <button type="submit">Registrarse</button>
      <div className="error-container">
        <p>{/*errorAuth && errorAuth*/}</p>
      </div>
      <div id="o">o</div>
      <button onClick={/*() => googleSignUp()*/ () => {}}>
        Registrarse con Google
      </button>
      <div className="-p">
        <p>¿Ya tienes una cuenta?</p>
        <a href="/login">Inicia sesion</a>
      </div>
    </form>
  );
}
