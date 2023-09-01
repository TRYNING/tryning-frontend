import exercisesDay from "@mocks/ejercicios-dia.json";
import { generateId } from "@utils/generateId.utils";
import { CardExercise } from "../CardExercise/CardExercise";

export function ListOfExercises() {
  return (
    <div className="ListOfExercises">
      {exercisesDay?.map((exercise) => {
        const { id, diaId, ejercicioId, observaciones } = exercise;
        const key = generateId();
        console.log({ id, diaId, ejercicioId, observaciones });
        return <CardExercise key={key} id={id} ejercicioId={ejercicioId} />;
      })}
    </div>
  );
}
