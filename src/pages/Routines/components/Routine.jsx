import { Link } from "react-router-dom";
import { ROUTINES_ROUTE } from "../../../common/constants/routes";

export function Routine({ id, title, date }) {
  return (
    <Link to={`${ROUTINES_ROUTE}/${id}`} className="routine">
      <div style={{ color: "red" }}>{id}</div>
      <div>{title}</div>
      <div style={{ color: "#555" }}>{date}</div>
    </Link>
  );
}
