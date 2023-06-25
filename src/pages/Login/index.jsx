import { FormLogin } from "./components/FormLogin/FormLogin";

export default function Login() {
  return (
    <div className="Login-container">
      <a href="/">volver</a>
      <h1>Inicia sesion</h1>
      <FormLogin />
    </div>
  );
}
