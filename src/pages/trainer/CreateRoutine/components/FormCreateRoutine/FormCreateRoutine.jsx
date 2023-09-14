import { Input } from "@components/Inputs/Input";
import { Button } from "@components/Button/Button";
import { Form } from "@components/Form/Form";
import { useAuthContext } from "@hooks/useAuthContext";
import { useState } from "react";
import logo from "@assets/images/tryning.webp";

export function FormCreateRoutine() {
  const { user } = useAuthContext();
  const [routine, setRoutine] = useState({});

  const handleChange = (e) => {
    setRoutine({ ...routine, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { titulo, descripcion } = routine;
    console.log({ titulo, descripcion });
  };

  const inputs = [
    <Input
      key={1}
      onChange={handleChange}
      label="Titulo"
      placeholder="Ingrese su titulo..."
      name="titulo"
    />,
    <Input
      key={2}
      onChange={handleChange}
      label="Descripcion"
      placeholder="Ingrese su descripcion..."
      name="descripcion"
    />,
  ];

  const buttons = [
    <Button key={1} className="button-type-1" type="submit">
      Crear Rutina
    </Button>,
  ];

  return (
    <div>
      <Form handleSubmit={handleSubmit} inputs={inputs} buttons={buttons} />
    </div>
  );
}
