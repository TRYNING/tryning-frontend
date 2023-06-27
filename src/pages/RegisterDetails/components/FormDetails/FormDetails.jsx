export function FormDetails({ setExtra}) {

    return (
       <form className="Form-register-details-container" onSubmit={()=>setExtra(true) }>
      <label>Usuario</label>
      <input
        type="text"
        placeholder="Ingresa tu usuario"
        required
      />
      <label>Nombre</label>
      <input
        type="text"
        placeholder="Ingresa tu nombre"
        required
      />
      <label>Apellido</label>
      <input
        type="text"
        placeholder="Ingresa tu apellido"
        required
      />
      <button >Completar</button>
    </form>
    );
  }
  