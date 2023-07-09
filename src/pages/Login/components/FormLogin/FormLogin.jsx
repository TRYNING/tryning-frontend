import { Input } from "../../../../components/Inputs/Input";
import { Button } from "../../../../components/Button/Button";
import { Form } from "../../../../components/Form/Form";
import { useAuthContext } from "../../../../hooks/useAuthContext";
import { useState } from "react";
import logo from "../../../../assets/images/logo.png";
import { Link } from "react-router-dom";

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

  const inputs = [
    <Input
      key={1}
      onChange={handleChange}
      label="Mail"
      placeholder="Ingrese su mail..."
      name="email"
    />,
    <Input
      key={2}
      onChange={handleChange}
      label="Contraseña"
      placeholder="Ingrese su contraseña..."
      name="password"
    />,
  ];

  const buttons = [
    <Button key={1} className="button-login" type="submit">
      Inicia sesion
    </Button>,
    <Button key={2} className="button-google" onClick={handleGoogle}>
      <img src="https://w7.pngwing.com/pngs/326/85/png-transparent-google-logo-google-text-trademark-logo.png" />
    </Button>,
  ];

  return (
    <div className="FormLogin-container">
      <div className="logo-container">
        <img src={logo} alt="logo de tryning" />
      </div>
      <Form
        handleSubmit={handleSubmit}
        inputs={inputs}
        buttons={buttons}
        error={errorAuth}
      />
      <div className="container-redirect">
        <p>¿No tienes una cuenta?</p>
        <Link to="/register">Registrate</Link>
      </div>
    </div>
  );
}
