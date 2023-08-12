import { Link } from "react-router-dom";
import { PrivateRoutes } from "@common/constants/routes";
export function CardMesociclo({ routineId, id, title }) {
  return (
    <Link
      to={`${PrivateRoutes.ROUTINES}/${routineId}${PrivateRoutes.MESOCICLOS}/${id}`}
      className="CardMesociclos-container"
      key={id}
    >
      {title}
    </Link>
  );
}
