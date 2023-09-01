import exercisesDay from "@mocks/ejercicios-dia.json";
import { CardExercise } from "../CardExercise/CardExercise";

export function ListOfExercises() {
  return (
    <div className="ListOfExercises">
      {exercisesDay?.map((exercise) => {
        const { id, diaId, ejercicioId, observaciones } = exercise;
        const key = crypto.randomUUID();
        console.log({ id, diaId, ejercicioId, observaciones });
        return <CardExercise key={key} id={id} ejercicioId={ejercicioId} />;
      })}
    </div>
  );
}
