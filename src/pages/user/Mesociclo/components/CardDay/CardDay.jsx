import { Cubo } from "../Cubo/Cubo";
import { Link } from "react-router-dom";
import { PrivateRoutes } from "@common/constants/routes";

export function CardDay({ microcicloId, title, muscles }) {
  return (
    <Link to={`${PrivateRoutes.DAYS}/${microcicloId}`} className="CardDay">
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
