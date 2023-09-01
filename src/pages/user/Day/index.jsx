import { HeaderRoutine } from "@components/HeaderRoutine/HeaderRoutine";
import { useParams } from "react-router-dom";
import { Main } from "@components/Main/Main";
import { ListOfExercises } from "./components/ListOfExercises/ListOfExercises";

export default function PageDay() {
  const { dayId } = useParams();
  return (
    <main className="Day-container">
      <HeaderRoutine subtitle={`Dia ${dayId}`} date="28/08/2023" />
      <Main>
        <ListOfExercises />
      </Main>
    </main>
  );
}
