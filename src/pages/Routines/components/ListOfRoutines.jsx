import routines from "../../../mocks/routines.json";
import { Routine } from "./Routine";

export function ListOfRoutines() {
  return (
    <div className="routines">
      {routines.map((routine) => {
        const { rutina_ID, titulo, fecha_creacion } = routine;
        return (
          <Routine
            key={rutina_ID}
            id={rutina_ID}
            title={titulo}
            date={fecha_creacion}
          />
        );
      })}
    </div>
  );
}
