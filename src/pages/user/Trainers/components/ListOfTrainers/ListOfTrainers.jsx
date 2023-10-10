import { CardTrainer } from "../CardTrainer/CardTrainer";
import { useTrainers } from "../../../../../hooks/useTrainers";
//import trainers from "@mocks/trainers.json";

export function ListOfTrainers() {
  const { trainers } = useTrainers();
  return (
    <div className="flex flex-col gap-3 justify-center m-2">
      {trainers?.map((trainer) => {
        const { username, name, certificacion, experiencia, image } = trainer;
        const key = crypto.randomUUID();
        return (
          <CardTrainer
            key={key}
            username={username}
            name={name}
            certificacion={certificacion}
            experencia={experiencia}
            image={image}
          />
        );
      })}
    </div>
  );
}
