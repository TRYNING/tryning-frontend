import { useParams } from "react-router-dom";
import { HeaderRoutine } from "@components/HeaderRoutine/HeaderRoutine";
import { ListOfWeeks } from "./components/ListOfWeeks/ListOfWeeks";
import { Main } from "@components/Main/Main";

export default function PageMesociclo() {
  const { routineId, mesocicloId } = useParams();

  return (
    <main className="Mesociclo-container">
      <HeaderRoutine subtitle="Microciclos" date="28/08/2023" id={routineId} />
      <Main>
        <ListOfWeeks mesocicloId={mesocicloId} />
      </Main>
    </main>
  );
}
