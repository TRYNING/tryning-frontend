export function FormLogin() {
  return (
    <form className="FormLogin-container">
      <label>Email</label>
      <input type="text" placeholder="ingresa tu mail"/>
      <label>Contraseña</label>
      <input type="text" placeholder="ingresa tu contraseña"/>
      <button id="login">Iniciar sesion</button>
      <div id="o">o</div>
      <button id="google">Google</button>
      <div className="-p">
        <p>¿No tienes una cuenta?</p>
        <a href="/register">Registrate</a>
      </div>
    </form>
  );
}
