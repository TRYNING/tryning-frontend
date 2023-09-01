import { CardRoutine } from "../CardRoutine/CardRoutine";
import { currentMonth } from "@utils/date.utils";
export function ListOfRoutines({ routines }) {
  return (
    <div className="ListOfRoutines">
      {routines?.map((routine) => {
        const { id, entrenador, fecha_creacion } = routine;
        const current = currentMonth(fecha_creacion);
        return (
          <CardRoutine
            key={id}
            id={id}
            trainer={entrenador}
            date={fecha_creacion}
            current={current}
          />
        );
      })}
    </div>
  );
}
