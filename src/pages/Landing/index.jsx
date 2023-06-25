export default function Landing() {
  return (
    <div className="Landing-container">
      <div className="logo">
        <img src="src/pages/Landing/logo.png" />
      </div>
      <div className="buttons-container">
        <a href="/login">Iniciar sesion</a>
        <a href="/register">Registrarse</a>
      </div>
    </div>
  );
}
