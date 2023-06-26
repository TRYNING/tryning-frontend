export function FormDetails() {
    return (
       <form className="Form-register-details-container" >
      <label>Usuario</label>
      <input
        type="text"
        placeholder="Ingresa tu usuario"
      />
      <label>Nombre</label>
      <input
        type="text"
        placeholder="Ingresa tu nombre"
        
      />
      <label>Apellido</label>
      <input
        type="text"
        placeholder="Ingresa tu apellido"
        
      />
      <button>Completar</button>
      {/* <div className="error-container">
        <p>{errorAuth && errorAuth}</p>
      </div> */}
    </form>
    );
  }
  