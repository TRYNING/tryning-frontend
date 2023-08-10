import routines from "../../../mocks/routines.json";
import { CardRoutine } from "./CardRoutine";
export function ListOfRoutines() {
  return (
    <div className="routines">
      {routines.map((routine) => {
        const { id, entrenador, fecha_creacion } = routine;
        return (
          <CardRoutine
            key={id}
            id={id}
            trainer={entrenador}
            date={fecha_creacion}
          />
        );
      })}
    </div>
  );
}
