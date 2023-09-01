import { Link } from "react-router-dom";
import { PrivateRoutes } from "@common/constants/routes";
export function CardMesociclo({ id, title, description }) {
  return (
    <Link
      to={`${PrivateRoutes.MESOCICLOS}/${id}`}
      className="CardMesociclos"
      key={id}
    >
      <header>
        <span className="triangle"></span>
        <h2>{title}</h2>
      </header>
      <main>
        <p>
          <span>Descripcion: </span>
          {description}
        </p>
      </main>
    </Link>
  );
}
