import { FormLogin } from "./components/FormLogin/FormLogin";

export default function Login() {
  return (
    <div className="Login-container">
      <div className="logo">
        <img src="src/pages/Landing/logo.png" />
      </div>
      <FormLogin />
    </div>
  );
}
