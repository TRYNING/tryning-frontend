import { Cubo } from "../Cubo/Cubo";
import { Link } from "react-router-dom";

export function CardDay({ id, title, muscles }) {
  return (
    <Link to={`day/${id}`} className="CardDay">
      <h2 className="titulo">{title}</h2>
      <div className="cubos-container">
        {muscles?.map((muscle, i) => (
          <Cubo key={i} muscle={muscle} />
        ))}
      </div>
    </Link>
  );
}
