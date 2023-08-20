import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useAuthContext } from "@hooks/useAuthContext";
import { Input } from "@components/Inputs/Input";
import { Button } from "@components/Button/Button";
import { Form } from "@components/Form/Form";
import logo from "@assets/images/tryning.webp";

export function FormRegister() {
  const {
    user,
    SignOut,
    registerWithEmail,
    errorAuth,
    setErrorAuth,
    googleSignUp,
  } = useAuthContext();
  const [infoUser, setInfoUSer] = useState({});
  const handleChange = (e) => {
    setInfoUSer({ ...infoUser, [e.target.name]: e.target.value });
    setErrorAuth(null);
  };

  useEffect(() => {
    if (user) {
      SignOut();
    }
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { email, password } = infoUser;
    setErrorAuth(null);
    registerWithEmail(email, password);
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
      type="email"
    />,
    <Input
      key={2}
      onChange={handleChange}
      label="Contraseña"
      placeholder="Ingrese su contraseña..."
      name="password"
      type="password"
    />,
  ];

  const buttons = [
    <Button key={1} className="button-type-1" type="submit">
      Registrarse
    </Button>,
    <Button key={2} className="button-google" onClick={handleGoogle}>
      <img src="https://w7.pngwing.com/pngs/326/85/png-transparent-google-logo-google-text-trademark-logo.png" />
    </Button>,
  ];

  return (
    <div className="FormRegister-container">
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
        <p>¿Ya tienes una cuenta?</p>
        <Link to="/login" onClick={() => setErrorAuth(null)}>
          Inicia sesion
        </Link>
      </div>
    </div>
  );
}
