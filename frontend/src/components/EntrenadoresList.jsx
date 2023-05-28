import React, { useState, useEffect } from "react";

function EntrenadoresList() {
  const [entrenadores, setEntrenadores] = useState([]);

  useEffect(() => {
    fetch("http://localhost:7000/api/entrenadores")
      .then((response) => response.json())
      .then((data) => {
        setEntrenadores(data);
        console.log(data);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <div>
      <h1>Entrenadores</h1>
      <div className="entrenadores">
        {entrenadores.map((entrenador) => (
          <div key={entrenador.id_entrenador} className="entrenador">
            <p>
              ID: <strong>{entrenador.id_entrenador}</strong>
            </p>
            <p>
              Nombre: <strong>{entrenador.nombre_entrenador}</strong>
            </p>
            <p>
              Apellido: <strong>{entrenador.apellido_entrenador}</strong>
            </p>
            <p>
              Edad: <strong>{entrenador.edad_entrenador}</strong>
            </p>
            <p>
              Especialidad:{" "}
              <strong>{entrenador.especialidad_entrenador}</strong>
            </p>
            <p>
              experiencia: <strong>{entrenador.experiencia_entrenador}</strong>
            </p>
            <p>
              Email: <strong>{entrenador.email_entrenador}</strong>
            </p>
            <p>
              Telefono: <strong>{entrenador.telefono_entrenador}</strong>
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default EntrenadoresList;
