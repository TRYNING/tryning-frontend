import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuthContext } from "../../../../hooks/useAuthContext";

export function FormDetailsExtra({ prevStep }) {
  const navigate = useNavigate();
  const { userData } = useAuthContext();
  const [dia, setDia] = useState("");
  const [mes, setMes] = useState("");
  const [anio, setAnio] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Realiza cualquier lógica adicional antes de navegar a "/home"
    const fechaNacimiento = new Date(`${anio}-${mes}-${dia}`);
    console.log("Fecha de nacimiento:", fechaNacimiento);

    navigate("/home");
  };

  const getYearsOptions = () => {
    const currentYear = new Date().getFullYear();
    const years = [];
    for (let year = currentYear; year >= currentYear - 100; year--) {
      years.push(
        <option key={year} value={year}>
          {year}
        </option>
      );
    }
    return years;
  };

  const getDaysOptions = () => {
    const days = [];
    for (let day = 1; day <= 31; day++) {
      days.push(
        <option key={day} value={day}>
          {day}
        </option>
      );
    }
    return days;
  };

  const getMonthsOptions = () => {
    const months = [
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
    ];
    return months.map((month, index) => (
      <option key={index + 1} value={index + 1}>
        {month}
      </option>
    ));
  };

  return (
    <form className="FormDetailsExtra-container"onSubmit={(e) => handleSubmit(e)}>
      <div className="input-container">
          <label>Telefono</label>
          <input type="number" required />
      </div>
      <div className="fecha-nacimiento-conteiner">
        <div className="input-container">
        <label>Fecha de nacimiento</label>
        <div className="date-conteiner">
          <select value={dia} onChange={(e) => setDia(e.target.value)} required>
           <option value="" disabled> Día </option>
            {getDaysOptions()}
          </select>
          <select value={mes} onChange={(e) => setMes(e.target.value)}required>
           <option value="" disabled> Mes </option>
           {getMonthsOptions()}
         </select>
         <select value={anio} onChange={(e) => setAnio(e.target.value)}required>
          <option value="" disabled> Año</option>
           {getYearsOptions()}
          </select>
        </div>
        </div>
      </div>
      <div className="valorescorporales-container">
        <div className="input-container">
            <label>Peso en Kg</label>
            <input type="number" required />
        </div>
      
        <div className="input-container">
          <label>Altura en cm</label>
          <input type="number" required />
        </div>
      </div>
      <div className="buttons-container">
        <button className="button-register">Regístrate</button>
        <button className="button-atras" onClick={() => prevStep()}>Anterior</button>
      </div>
    </form>
  );
}