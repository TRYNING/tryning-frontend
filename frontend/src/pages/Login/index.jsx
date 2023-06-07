import { Header } from "../../components/Header/Header";
import { SignUpButton } from "../../components/buttons/Buttons";
import "./Login.scss";

export default function Login() {
  return (
    <div>
      <Header />
      <h1>Login</h1>
      <SignUpButton label="Registrarse con google" />
    </div>
  );
}
