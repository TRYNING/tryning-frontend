import { ListOfMesociclos } from "./components/ListOfMesociclos/ListOfMesociclos";
import { HeaderRoutine } from "../../../components/HeaderRoutine/HeaderRoutine";
import { useParams } from "react-router-dom";

export default function PageRoutine() {
  const { routineId } = useParams();

  return (
    <div className="Routine-container">
      <HeaderRoutine date={"00/00/00"} id={routineId} />
      <main className="routine-main">
        <h1>Mesociclos</h1>
        <ListOfMesociclos routineId={routineId} />
      </main>
    </div>
  );
}
