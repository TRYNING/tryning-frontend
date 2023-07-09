import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuthContext } from "../../../../hooks/useAuthContext";

const getYearsOptions = () => {
  const currentYear = new Date().getFullYear();
  return Array.from({ length: 101 }, (_, index) => {
    const year = currentYear - index;
    return (
      <option key={year} value={year}>
        {year}
      </option>
    );
  });
};

const getDaysOptions = () =>
  Array.from({ length: 31 }, (_, index) => (
    <option key={index + 1} value={index + 1}>
      {index + 1}
    </option>
  ));
const getMonthsOptions = () =>
  [
    "Enero",
    "Febrero",
    "Marzo",
    "Abril",
    "Mayo",
    "Junio",
    "Julio",
    "Agosto",
    "Septiembre",
    "Octubre",
    "Noviembre",
    "Diciembre",
  ].map((month, index) => (
    <option key={index + 1} value={index + 1}>
      {month}
    </option>
  ));

export function Step3({ prevStep }) {
  const navigate = useNavigate();
  const { setUserData } = useAuthContext();
  const [dia, setDia] = useState("");
  const [mes, setMes] = useState("");
  const [anio, setAnio] = useState("");
  const [kg, setKg] = useState("");
  const [cm, setCm] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const fechaNacimiento = new Date(`${anio}-${mes}-${dia}`);

    setUserData((data) => ({
      ...data,
      fechaNacimiento,
      kg,
      cm,
    }));

    navigate("/home");
  };

  return (
    <form className="Step3-container" onSubmit={(e) => handleSubmit(e)}>
      <div className="input-container">
        <label>Telefono</label>
        <input
          type="tel"
          pattern="[0-9-4]{3}-[0-9-5]{3}"
          required
          className="input"
          placeholder="2222-4444"></input>
      </div>
      <div className="fecha-nacimiento-conteiner">
        <div className="input-container">
          <label>Fecha de nacimiento</label>
          <div className="date-conteiner">
            <select
              value={dia}
              onChange={(e) => setDia(e.target.value)}
              required>
              <option value="" disabled>
                Día
              </option>
              {getDaysOptions()}
            </select>
            <select
              value={mes}
              onChange={(e) => setMes(e.target.value)}
              required>
              <option value="" disabled>
                Mes
              </option>
              {getMonthsOptions()}
            </select>
            <select
              value={anio}
              onChange={(e) => setAnio(e.target.value)}
              required>
              <option value="" disabled>
                Año
              </option>
              {getYearsOptions()}
            </select>
          </div>
        </div>
      </div>
      <div className="valorescorporales-container">
        <div className="input-container">
          <label>Peso en Kg</label>
          <input
            onChange={(e) => setKg(e.target.value)}
            type="number"
            required
            className="input"
            placeholder="kg"
          />
        </div>
        <div className="input-container">
          <label>Altura en cm</label>
          <input
            onChange={(e) => setCm(e.target.value)}
            type="number"
            required
            className="input"
            placeholder="cm"
          />
        </div>
      </div>
      <div className="buttons-container">
        <button className="button-register">Regístrate</button>
        <button className="button-atras" onClick={() => prevStep()}>
          Anterior
        </button>
      </div>
    </form>
  );
}
