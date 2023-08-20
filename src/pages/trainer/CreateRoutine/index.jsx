import { useState } from "react";

export default function CreateRoutine() {
  const [newRoutine, setNewRoutine] = useState({
    nombre: "",
    descripcion: "",
    mesociclos: [],
  });
  return (
    <div className="CreateRoutine-container">
      <h1>Nueva Rutina</h1>
      <>
        <header></header>
        <input type="text" placeholder="Nombre de la rutina..." />
        <input type="text" placeholder="Descripcion de la rutina..." />
        <div>
          {newRoutine?.mesociclos.map((mesociclo, i) => {
            return <div key={i}></div>;
          })}
          <button type="button">Agregar mesociclo</button>
        </div>
      </>
    </div>
  );
}
