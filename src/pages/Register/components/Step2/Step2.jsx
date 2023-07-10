import { useState } from "react";
import { useAuthContext } from "../../../../hooks/useAuthContext";
import { Button } from "../../../../components/Button/Button";
import { Input } from "../../../../components/Inputs/Input";
import { Form } from "../../../../components/Form/Form";
import { BarSteps } from "../BarSteps/BarSteps";
import logo from "../../../../assets/images/logo.png";

export function Step2({ nextStep, prevStep }) {
  const { setUserData } = useAuthContext();
  const [infoUser, setInfoUSer] = useState({});
  const handleChange = (e) => {
    setInfoUSer({ ...infoUser, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { usuario, nombre, apellido, genero } = infoUser;
    setUserData((data) => ({ ...data, usuario, nombre, apellido, genero }));
    nextStep();
  };

  const inputs = [
    <Input
      key={1}
      onChange={handleChange}
      label="Usuario"
      placeholder="Ingrese su nombre de usuario..."
      name="usuario"
    />,
    <Input
      key={2}
      onChange={handleChange}
      label="Nombre"
      placeholder="Nombre..."
      name="nombre"
      littleInput={true}
    />,
    <Input
      key={3}
      onChange={handleChange}
      label="Apellido"
      placeholder="Apellido..."
      name="apellido"
      littleInput={true}
    />,
    <Input
      key={4}
      type="radio"
      onChange={handleChange}
      label="Hombre"
      value="hombre"
      checked={infoUser.genero === "hombre"}
      name="genero"
      littleInput={true}
    />,
    <Input
      key={5}
      type="radio"
      onChange={handleChange}
      value="mujer"
      checked={infoUser.genero === "mujer"}
      label="Mujer"
      name="genero"
      littleInput={true}
    />,
    <Input
      key={6}
      type="radio"
      onChange={handleChange}
      value="otro"
      label="Otro"
      checked={infoUser.genero === "otro"}
      name="genero"
      littleInput={true}
    />,
  ];

  const buttons = [
    <Button key={1} className="button-type-1" type="submit">
      Siguiente
    </Button>,
    <Button key={2} className="button-type-2" type="button" onClick={prevStep}>
      Anterior
    </Button>,
  ];

  return (
    <div className="Step2-container">
      <div className="logo-container">
        <img src={logo} alt="logo de tryning" />
        <BarSteps step={2} />
      </div>
      <Form handleSubmit={handleSubmit} inputs={inputs} buttons={buttons} />
    </div>
  );
}
