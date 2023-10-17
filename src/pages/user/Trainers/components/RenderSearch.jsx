import { useSearchTrainerContext } from "../../../../hooks/useSearchTrainer";
import { ListOfSearch } from "./ListOfSearch";
import { ListOfTrainers } from "./ListOfTrainers";

export function RenderSearch() {
  const { trainerSearched, isFirstInput } = useSearchTrainerContext();
  const hasTrainers = trainerSearched?.length > 0;
  return hasTrainers && !isFirstInput.current ? (
    <ListOfSearch />
  ) : (
    <ListOfTrainers />
  );
}
