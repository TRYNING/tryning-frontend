import ejercicios from "@mocks/ejercicios.json";
import s from "@mocks/series.json";
import { MUSCLE_COLORS } from "@common/constants/components";

export function CardExercise({ id, ejercicioId }) {
  const [exercise] = ejercicios.filter(
    (ejercicio) => ejercicio.id === ejercicioId
  );
  const color = MUSCLE_COLORS[exercise.grupoMuscular];
  const series = s.filter((serie) => serie.ejercicioDiaId === id);
  return (
    <div className="CardExercise" style={{ borderLeft: `4px solid ${color}` }}>
      <main>
        <h3 className="exercise-name">{exercise.nombre}</h3>
        <div className="exercise-info">
          <div className="info-repes">
            <span>{`${series.length}`}</span>x
            <span>{series[0].repeticiones}</span>
          </div>
          <div className="info-RIR">RIR {series[0].RIR}</div>
          <div className="info-RPE">RPE {series[0].RPE}</div>
        </div>
      </main>
      <div className="check"></div>
    </div>
  );
}
