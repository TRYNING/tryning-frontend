import { useState } from "react";
import { useAuthContext } from "../../../../hooks/useAuthContext";

export function FormDetails({ nextStep, prevStep }) {
  const { setUserData } = useAuthContext();
  const [usuario, setUsuario] = useState();
  const [name, setName] = useState();
  const [lastName, setLastName] = useState();

  const handleSubmit = (e) => {
    e.preventDefault();
    setUserData((data) => ({ ...data, usuario, name, lastName }));
    nextStep();
  };
  return (
    <form
      className="Form-register-details-container"
      onSubmit={(e) => handleSubmit(e)}
    >
      <label>Usuario</label>
      <input
        onChange={(e) => setUsuario(e.target.value)}
        type="text"
        placeholder="Ingresa tu usuario"
        required
      />
      <label>Nombre</label>
      <input
        onChange={(e) => setName(e.target.value)}
        type="text"
        placeholder="Ingresa tu nombre"
        required
      />
      <label>Apellido</label>
      <input
        onChange={(e) => setLastName(e.target.value)}
        type="text"
        placeholder="Ingresa tu apellido"
        required
      />
      <button>Siguiente</button>
      <button onClick={() => prevStep()}>Anterior</button>
    </form>
  );
}
