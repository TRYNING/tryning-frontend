import routines from "../../../../mocks/routines.json";
import { CardRoutine } from "./CardRoutine";
export function ListOfRoutines() {
  const currentMonth = (date) => {
    const currentDate = new Date();
    const dateReverse = date.split("/").reverse();
    const fechaParaVerificar = new Date(dateReverse);

    return (
      currentDate.getFullYear() === fechaParaVerificar.getFullYear() &&
      currentDate.getMonth() === fechaParaVerificar.getMonth()
    );
  };

  return (
    <div className="routines">
      {routines.map((routine) => {
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
