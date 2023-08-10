import routines from "../../../mocks/routines.json";
import { Routine } from "./Routine";

export function ListOfRoutines() {
  return (
    <div className="routines">
      {routines.map((routine) => {
        const { id, entrenador, fecha_creacion } = routine;
        return (
          <Routine
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
