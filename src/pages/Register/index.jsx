import { FormRegister } from "./components/FormRegister/FormRegister";

export default function Register() {
  return (
    <div className="Register-container">
      <div className="logo">
        <img src="src/pages/Landing/logo.png" />
      </div>
      <h1>Registrarse</h1>
      <FormRegister />
    </div>
  );
}
