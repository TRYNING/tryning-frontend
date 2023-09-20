import logo from "@assets/images/tryning.webp";
import { Link } from "react-router-dom";
export default function PageLanding() {
  return (
    <div className="flex flex-col min-h-screen justify-center items-center text-center">
      <div className="flex items-center min-h-[60vh]">
        <img
          className="max-w-[300px] max-h-[250px]"
          src={logo}
          alt="imagen logo Tryning"
        />
      </div>
      <div className="flex flex-col items-center justify-center space-y-4 text-sm">
        <Link
          to="/login"
          className="h-10 w-56 flex items-center justify-center border border-[var(--color-primary)] bg-[var(--color-primary)] text-[var(--color-gray)] rounded-[var(--border-button)] hover:opacity-90 hover:scale-101"
        >
          Iniciar sesion
        </Link>
        <Link
          to="/register"
          className="h-10 w-56 flex items-center justify-center border border-[var(--color-primary)] bg-[var(--color-gray)] text-[var(--color-primary)] rounded-[var(--border-button)] hover:opacity-90 hover:scale-101"
        >
          Registrarse
        </Link>
      </div>
    </div>
  );
}
