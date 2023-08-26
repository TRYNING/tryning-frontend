import { ListOfMesociclos } from "./components/ListOfMesociclos/ListOfMesociclos";
import { HeaderRoutine } from "../../../components/HeaderRoutine/HeaderRoutine";
import { useParams } from "react-router-dom";
import { Main } from "@components/Main/Main";

export default function PageRoutine() {
  const { routineId } = useParams();

  return (
    <div className="Routine-container">
      <HeaderRoutine subtitle="Mesociclos" date={"00/00/00"} id={routineId} />
      <Main>
        <ListOfMesociclos routineId={routineId} />
      </Main>
    </div>
  );
}
