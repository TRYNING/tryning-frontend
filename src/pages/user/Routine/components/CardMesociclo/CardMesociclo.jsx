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
        <h2>{title}</h2>
      </header>
      <main>
        <p>{description}</p>
      </main>
    </Link>
  );
}
