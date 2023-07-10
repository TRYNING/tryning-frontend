import { useState } from "react";
import { useAuthContext } from "../../../../hooks/useAuthContext";
import { Button } from "../../../../components/Button/Button";
import { Input } from "../../../../components/Inputs/Input";
import { Form } from "../../../../components/Form/Form";
import { registerRequest } from "../../../../api/auth";

export function Step3({ prevStep }) {
  const { setUserData, userData } = useAuthContext();
  const [infoUser, setInfoUSer] = useState({});
  const handleChange = (e) => {
    setInfoUSer({ ...infoUser, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { telefono, altura, peso, fechaNacimiento } = infoUser;
    await setUserData((data) => ({
      ...data,
      telefono,
      altura,
      peso,
      fechaNacimiento,
    }));
    registerRequest({ ...userData, idUsuario: "aaaaaaaaaaaaaaa" });
  };

  const inputs = [
    <Input
      key={1}
      type="tel"
      onChange={handleChange}
      label="Telefono"
      placeholder="Ingrese su telefono..."
      name="telefono"
    />,

    <Input
      key={2}
      type="date"
      onChange={handleChange}
      label="Fecha de nacimiento"
      placeholder="Ingrese su fecha de nacimiento..."
      name="fechaNacimiento"
    />,
    <Input
      key={3}
      onChange={handleChange}
      type="number"
      label="Altura"
      placeholder="Altura..."
      name="altura"
      littleInput={true}
    />,
    <Input
      key={4}
      onChange={handleChange}
      type="number"
      label="Peso"
      placeholder="Peso..."
      name="peso"
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
    <div className="Step3-container">
      <Form handleSubmit={handleSubmit} inputs={inputs} buttons={buttons} />
    </div>
  );
}
