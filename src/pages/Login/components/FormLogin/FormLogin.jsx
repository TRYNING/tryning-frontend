import { Input } from "@components/Inputs/Input";
import { Button } from "@components/Button/Button";
import { Form } from "@components/Form/Form";
import { useAuthContext } from "@hooks/useAuthContext";
import { useState } from "react";
import logo from "@assets/images/tryning.webp";
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
      type="password"
      label="Contraseña"
      placeholder="Ingrese su contraseña..."
      name="password"
    />,
  ];

  const buttons = [
    <Button key={1} number={1} type="submit">
      Inicia sesion
    </Button>,
    <Button key={2} number={3} onClick={handleGoogle}>
      <img
        className="w-10 aspect-square"
        src="https://w7.pngwing.com/pngs/326/85/png-transparent-google-logo-google-text-trademark-logo.png"
      />
    </Button>,
  ];

  return (
    <div className="max-w-xs">
      <div className="flex justify-center">
        <img
          className="w-28 aspect-square object-cover"
          src={logo}
          alt="logo de tryning"
        />
      </div>
      <Form
        handleSubmit={handleSubmit}
        inputs={inputs}
        buttons={buttons}
        error={errorAuth}
      />
      <div className="mt-5 flex justify-center gap-2 text-sm font-medium text-gray-600">
        <p>¿No tienes una cuenta?</p>
        <Link
          className="text-gray-900"
          to="/register"
          onClick={() => setErrorAuth(null)}
        >
          Registrate
        </Link>
      </div>
    </div>
  );
}
