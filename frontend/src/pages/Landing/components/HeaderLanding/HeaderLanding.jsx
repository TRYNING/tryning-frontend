import "./HeaderLanding.scss";
import { LinkButton, AButton} from "../../../../components/buttons/Buttons";

export function HeaderLanding() {
  return (
    <header className="header-landing-container">
      <nav className="nav-landing-container">
        <div className="buttons-redirect-landing-container">
          <AButton id_to="#about-us" label="Acerca de nosotros" />
          <AButton id_to="#contact" label="Contacto"></AButton>
          <AButton id_to="#profesionals" label="Profesionales"></AButton>
        </div>
        <div className="reg-log-landing-container">
          <LinkButton to="/login" label="Iniciar sesion" />
          <LinkButton to="/register" label="Registrarse" />
        </div>
      </nav>
    </header>
  );
}
