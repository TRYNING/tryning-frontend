export function FormRegister() {
  return (
    <form className="FormRegister-container">
      <label>Email</label>
      <input type="text" placeholder="ejemplo123@gmail.com"/>
      <label>Contraseña</label>
      <input type="text" placeholder="contraseña123"/>
      <button>Registrarse</button>
      <div id="o">o</div>
      <button>Registrarse con Google</button>
    </form>
  );
}
