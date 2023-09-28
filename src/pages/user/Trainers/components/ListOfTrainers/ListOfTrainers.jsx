import { CardTrainer } from "../CardTrainer/CardTrainer";
import trainers from "@mocks/trainers.json";

export function ListOfTrainers() {
  return (
    <div className="flex flex-col gap-3 justify-center m-2">
      {trainers?.map((trainer) => {
        const { id, nombre, certificacion, experiencia, perfilimg } = trainer;

        return (
          <CardTrainer
            key={id}
            id={id}
            nombre={nombre}
            certificacion={certificacion}
            experencia={experiencia}
            perfilimg={perfilimg}
          />
        );
      })}
    </div>
  );
}
