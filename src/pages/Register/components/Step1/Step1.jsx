import { useAuthContext } from "../../../../hooks/useAuthContext";
import { Input } from "../../../../components/Inputs/Input";
import { Button } from "../../../../components/Button/Button";
import { Form } from "../../../../components/Form/Form";
import { useState } from "react";
import logo from "../../../../assets/images/logo.png";
import { Link } from "react-router-dom";
import { BarSteps } from "../BarSteps/BarSteps";

export function Step1({ nextStep }) {
  const { registerWithEmail, errorAuth, setErrorAuth, googleSignUp } =
    useAuthContext();
  const [infoUser, setInfoUSer] = useState({});
  const handleChange = (e) => {
    setInfoUSer({ ...infoUser, [e.target.name]: e.target.value });
    setErrorAuth(null);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { email, password } = infoUser;
    setErrorAuth(null);
    nextStep();
    //registerWithEmail(email, password, nextStep);
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
    <Button key={1} className="button-type-1" type="submit">
      Crear cuenta
    </Button>,
    <Button key={2} className="button-google" onClick={handleGoogle}>
      <img src="https://w7.pngwing.com/pngs/326/85/png-transparent-google-logo-google-text-trademark-logo.png" />
    </Button>,
  ];

  return (
    <div className="Step1-container">
      <div className="logo-container">
        <img src={logo} alt="logo de tryning" />
        <BarSteps step={1} />
      </div>
      <Form
        handleSubmit={handleSubmit}
        inputs={inputs}
        buttons={buttons}
        error={errorAuth}
      />
      <div className="container-redirect">
        <p>¿Ya tienes una cuenta?</p>
        <Link to="/login">Inicia sesion</Link>
      </div>
    </div>
  );
}
