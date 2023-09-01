import { Cubo } from "../Cubo/Cubo";
import { Link } from "react-router-dom";

export function CardDay({ id, title, muscles }) {
  return (
    <Link to={`day/${id}`} className="CardDay">
      <h2 className="titulo">{title}</h2>
      <div className="cubos-container">
        {muscles?.map((muscle) => {
          const key = crypto.randomUUID();

          return <Cubo key={key} muscle={muscle} />;
        })}
      </div>
    </Link>
  );
}
