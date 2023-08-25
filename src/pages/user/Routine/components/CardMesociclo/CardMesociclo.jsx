import { Link } from "react-router-dom";
import { PrivateRoutes } from "@common/constants/routes";
export function CardMesociclo({ id, title }) {
  return (
    <Link
      to={`${PrivateRoutes.MESOCICLOS}/${id}`}
      className="CardMesociclos-container"
      key={id}
    >
      {title}
    </Link>
  );
}
