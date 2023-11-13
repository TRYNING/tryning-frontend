import { useTrainers } from "@hooks/useTrainers";
import { CardTrainer } from "./CardTrainer";

export function ListOfTrainers() {
  const { trainers } = useTrainers();
  return (
    <div className="flex flex-col gap-3">
      {trainers &&
        trainers.map((trainer) => {
          const { name, certificate, experience, image, id_trainer } = trainer;
          const key = crypto.randomUUID();
          return (
            <CardTrainer
              key={key}
              id={id_trainer}
              name={name}
              certificate={certificate}
              experience={experience}
              image={image}
            />
          );
        })}
    </div>
  );
}
