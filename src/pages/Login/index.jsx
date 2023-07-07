import { FormLogin } from "./components/FormLogin/FormLogin";
import logo from "../../assets/images/logo.png";
export default function Login() {
  return (
    <div className="Login-container">
      <div className="logo">
        <img src={logo} alt="logo de tryning" />
      </div>
      <FormLogin />
    </div>
  );
}
