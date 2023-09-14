import { Cubo } from "../Cubo/Cubo";
import { Link } from "react-router-dom";
import { PrivateRoutes } from "@common/constants/routes";
import { MUSCLE_COLORS } from "@common/constants/colors";

export function CardDay({ id, number, muscles }) {
  const colors = muscles.map((muscle) => MUSCLE_COLORS[muscle]);
  return (
    <Link
      to={`${PrivateRoutes.DAYS}/${id}`}
      className="CardDay"
      style={{
        background:
          colors.length > 1
            ? `linear-gradient(0deg, ${colors.toString()})`
            : `${colors[0]}`,
      }}
    >
      <h2 className="titulo">Dia {number}</h2>

      <div className="cubos-container">
        {muscles?.map((muscle) => {
          const key = crypto.randomUUID();

          return <Cubo key={key} muscle={muscle} size="8px" />;
        })}
      </div>
    </Link>
  );
}
