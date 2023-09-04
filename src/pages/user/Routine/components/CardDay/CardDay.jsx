import { Cubo } from "../Cubo/Cubo";
import { Link } from "react-router-dom";
import { PrivateRoutes } from "@common/constants/routes";
import { MUSCLE_COLORS } from "@common/constants/colors";

export function CardDay({ microcicloId, title, muscles }) {
  const colors = muscles.map((muscle) => MUSCLE_COLORS[muscle]);
  return (
    <Link
      to={`${PrivateRoutes.DAYS}/${microcicloId}`}
      className="CardDay"
      style={{
        background: `linear-gradient(to bottom right, ${colors.toString()})`,
      }}
    >
      <h2 className="titulo">{title}</h2>

      <div className="cubos-container">
        {muscles?.map((muscle) => {
          const key = crypto.randomUUID();

          return <Cubo key={key} muscle={muscle} size="8px" />;
        })}
      </div>
    </Link>
  );
}
