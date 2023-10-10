import { Input } from "@components/Inputs/Input";
import { Button } from "@components/Button/Button";
import { Form } from "@components/Form/Form";
import { useAuthContext } from "@hooks/useAuthContext";
import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "@assets/images/tryning.webp";
import google from "@assets/images/google.webp";

export function FormLogin({ user = true }) {
  const { signWithEmail, errorAuth, setErrorAuth, googleSignUp } =
    useAuthContext();
  const [info, setInfo] = useState({});

  const handleChange = (e) => {
    setInfo({ ...info, [e.target.name]: e.target.value });
    setErrorAuth(null);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { email, password } = info;
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
    <Button key={1} number={user ? 1 : 4} type="submit">
      Inicia sesion
    </Button>,
    <Button key={2} number={user ? 3 : 5} onClick={handleGoogle}>
      <img className="w-7 aspect-square" src={google} />
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
        {user ? (
          <p>¿No tienes una cuenta?</p>
        ) : (
          <p>¿No te registraste como entrenador?</p>
        )}
        <Link
          className="text-gray-900"
          to={`${user ? "/register-user" : "/register-trainer"}`}
          onClick={() => setErrorAuth(null)}
        >
          Registrate
        </Link>
      </div>
    </div>
  );
}
