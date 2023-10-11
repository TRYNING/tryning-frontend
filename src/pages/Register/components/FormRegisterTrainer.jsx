import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useAuthContext } from "@hooks/useAuthContext";
import { Input } from "@components/Inputs/Input";
import { Button } from "@components/Button/Button";
import { Form } from "@components/Form/Form";
import logo from "@assets/images/tryning.webp";
import google from "@assets/images/google.webp";

export function FormRegisterTrainer() {
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
    <Button key={1} number={4} type="submit">
      Registrate
    </Button>,
    <Button key={2} number={5} onClick={handleGoogle}>
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
        <p>¿Ya tenes una cuenta?</p>
        <Link
          className="text-gray-900"
          to="/login-trainer"
          onClick={() => setErrorAuth(null)}
        >
          Iniciar sesion
        </Link>
      </div>
    </div>
  );
}
