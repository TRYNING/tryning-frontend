import { CardRoutine } from "./CardRoutine";
import { currentMonth } from "@common/utils/date.utils";
export function ListOfRoutines({ routines }) {
  return (
    <div className="flex flex-col gap-2 mt-8">
      {routines?.map((routine) => {
        const { id, fecha_inicio } = routine;
        const entrenador = "Yaco Recroa";
        const current = currentMonth(fecha_inicio);
        return (
          <CardRoutine
            key={id}
            id={id}
            trainer={entrenador}
            date={fecha_inicio}
            current={current}
          />
        );
      })}
    </div>
  );
}
