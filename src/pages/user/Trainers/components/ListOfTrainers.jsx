import { useTrainers } from "@hooks/useTrainers";
import { CardTrainer } from "./CardTrainer";

export function ListOfTrainers() {
  const { trainers } = useTrainers();
  return (
    <div className="flex flex-col gap-3">
      {trainers &&
        trainers.map((trainer) => {
          const { name, certificate, experience, image, username } = trainer;
          const key = crypto.randomUUID();
          return (
            <CardTrainer
              key={key}
              username={username}
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
