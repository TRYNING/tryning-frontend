import { MUSCLE_COLORS } from "@common/constants/components";
import { Cubo } from "../Cubo/Cubo";
import { Link } from "react-router-dom";

export function ListOfDays({ microciclo }) {
  return (
    <div className="ListOfDays-container">
      {microciclo?.dias.map((dia, i) => {
        return (
          <Link key={i} to={`${dia.id}`} className="day">
            <h2 className="titulo">{dia.titulo}</h2>
            <div className="cubos-container">
              <Cubo color={MUSCLE_COLORS.PECHO} />
              <Cubo color={MUSCLE_COLORS.ESPALDA} />
              <Cubo color={MUSCLE_COLORS.TRICEPS} />
              <Cubo color={MUSCLE_COLORS.BICEPS} />
            </div>
          </Link>
        );
      })}
    </div>
  );
}
