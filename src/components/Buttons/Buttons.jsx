import React from "react";

export function ButtonIniciarSesion() {
  return (
    <button onClick={handleClick} className="button-tipo1">
      Iniciar Sesión
    </button>
  );

function handleClick() {

}

}


export function ButtonRegistrarse() {
  return (
    <button onClick={handleClick} className="button-tipo2">
      Registrarse
    </button>
  );

  function handleClick() {

  }
}