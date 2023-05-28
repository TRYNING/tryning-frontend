import React, { useState, useEffect } from "react";

function UsuariosList() {
  const [usuarios, setUsuarios] = useState([]);

  useEffect(() => {
    fetch("http://localhost:7000/api/usuarios")
      .then((response) => response.json())
      .then((data) => {
        setUsuarios(data);
        console.log(data);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <div>
      <h1>Usuarios</h1>
      <div className="usuarios">
        {usuarios.map((usuario) => (
          <div key={usuario.id_usuario} className="usuario">
            <p>
              ID: <strong>{usuario.id_usuario}</strong>
            </p>
            <p>
              Nombre: <strong>{usuario.nombre_usuario}</strong>
            </p>
            <p>
              Apellido: <strong>{usuario.apellido_usuario}</strong>
            </p>
            <p>
              Edad: <strong>{usuario.edad_usuario}</strong>
            </p>
            <p>
              Genero: <strong>{usuario.genero_usuario}</strong>
            </p>
            <p>
              Direccion: <strong>{usuario.direccion_usuario}</strong>
            </p>
            <p>
              Email: <strong>{usuario.email_usuario}</strong>
            </p>
            <p>
              Telefono: <strong>{usuario.telefono_usuario}</strong>
            </p>
            <p>
              ID Entrenador: <strong>{usuario.id_entrenador}</strong>
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default UsuariosList;
