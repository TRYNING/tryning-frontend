export function ButtonIniciarSesion({ children}) {
  return (
    <button onClick={handleClick} className="button-tipo1">
      {children}
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