export function FormDetails({ nextStep, prevStep }) {
  return (
    <form
      className="Form-register-details-container"
      onSubmit={() => nextStep()}
    >
      <label>Usuario</label>
      <input type="text" placeholder="Ingresa tu usuario" required />
      <label>Nombre</label>
      <input type="text" placeholder="Ingresa tu nombre" required />
      <label>Apellido</label>
      <input type="text" placeholder="Ingresa tu apellido" required />
      <button>Siguiente</button>
      <button onClick={() => prevStep()}>Anterior</button>
    </form>
  );
}
