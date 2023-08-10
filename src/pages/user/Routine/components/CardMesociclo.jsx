import { Link } from "react-router-dom";
import {
  MESOCICLOS_ROUTE,
  ROUTINES_ROUTE,
} from "../../../common/constants/routes";

export function CardMesociclo({ routineId, id, title }) {
  return (
    <Link
      to={`${ROUTINES_ROUTE}/${routineId}${MESOCICLOS_ROUTE}/${id}`}
      className="CardMesociclos-container"
      key={id}
    >
      {title}
    </Link>
  );
}
