import { CardTrainer } from "./CardTrainer";
import { useSearchTrainerContext } from "../../../../hooks/useSearchTrainer";

export function ListOfSearch() {
  const { trainerSearched, loading } = useSearchTrainerContext();
  return loading ? (
    <div>
      <h1>cargando...</h1>
    </div>
  ) : (
    <div>
      <div className="flex flex-col gap-3">
        {trainerSearched?.map((trainer) => {
          const { name, certificate, experience, image, id_trainer } = trainer;
          const key = crypto.randomUUID();
          return (
            <CardTrainer
              key={key}
              name={name}
              id={id_trainer}
              certificate={certificate}
              experience={experience}
              image={image}
            />
          );
        })}
      </div>
    </div>
  );
}
