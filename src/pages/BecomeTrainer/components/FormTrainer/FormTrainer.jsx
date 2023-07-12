import { useState } from "react";
import { useAuthContext } from "../../../../hooks/useAuthContext";
import { Button } from "../../../../components/Button/Button";
import { Input } from "../../../../components/Inputs/Input";
import { Form } from "../../../../components/Form/Form";

export function FormTrainer({ nextStep, prevStep }) {
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
      label="Ingrese su Nombre"
      placeholder="Ingrese su nombre (Como en certificado)"
      name="nombre"
      required={true}
    />,
    <Input
      key={2}
      onChange={handleChange}
      label="N°Matricula"
      placeholder="N°Matricula..."
      name="matricula"
      type="number"
      required={true}

    />,
    <Input
      key={3}
      onChange={handleChange}
      label="Ingrese su Licenciatura"
      placeholder="Licenciado en."
      name="licenciatura"
      required={true}

    />
  ]
  const buttons = [
    <Button key={1} className="button-type-1" type="submit">
      Enviar
    </Button>,
    
  ];

  return (
    <div className="FormTrainer-container">
      <Form handleSubmit={handleSubmit} inputs={inputs} buttons={buttons}  />
    </div>
  );
}
