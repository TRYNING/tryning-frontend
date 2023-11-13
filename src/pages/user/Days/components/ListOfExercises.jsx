import { CardExercise } from "./CardExercise";

export function ListOfExercises({ exercises }) {
  return (
    <div className="flex flex-col gap-3">
      {exercises?.map((exercise) => {
        const { nombre, rir, rpe, grupoM } = exercise;
        const key = crypto.randomUUID();
        return (
          <CardExercise
            key={key}
            name={nombre}
            rir={rir}
            rpe={rpe}
            grupoM={grupoM}
          />
        );
      })}
    </div>
  );
}
