import { useState } from "react";
import { useAuthContext } from "../../../../hooks/useAuthContext";

export function Step2({ nextStep, prevStep }) {
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
    <form className="Step2-container" onSubmit={(e) => handleSubmit(e)}>
      <div className="container">
        <div className="input-container">
          <label>Usuario</label>
          <input
            onChange={(e) => setUsuario(e.target.value)}
            type="text"
            placeholder="Nombre de usuario..."
            required
            className="input"
          />
        </div>
        <div className="input-container-names">
          <div className="input-container">
            <label>Nombre</label>

            <input
              onChange={(e) => setName(e.target.value)}
              type="text"
              placeholder="Nombre..."
              required
              className="input name"
            />
          </div>
          <div className="input-container">
            <label>Apellido</label>
            <input
              onChange={(e) => setLastName(e.target.value)}
              type="text"
              placeholder="Apellido..."
              required
              className="input name"
            />
          </div>
        </div>
        <div className="input-container-radio">
          <div className="radio-container">
            <input
              type="radio"
              required
              className="radio"
              id="Hombre"
              name="sexo"
            />
            <label htmlFor="Hombre">Hombre</label>
          </div>
          <div className="radio-container">
            <input
              type="radio"
              required
              className="radio"
              id="Mujer"
              name="sexo"
            />
            <label htmlFor="Mujer">Mujer</label>
          </div>
          <div className="radio-container">
            <input
              type="radio"
              required
              className="radio"
              id="Otro"
              name="sexo"
            />
            <label htmlFor="Otro">Otro</label>
          </div>
        </div>
      </div>

      <div className="buttons-container">
        <button className="button-next">Siguiente</button>
        <button className="button-previous" onClick={() => prevStep()}>
          Anterior
        </button>
      </div>
    </form>
  );
}
