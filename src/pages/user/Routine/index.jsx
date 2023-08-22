import { useParams } from "react-router-dom";
import routines from "../../../mocks/routines.json";
import { ListOfMesociclos } from "./components/ListOfMesociclos";
import { HeaderRoutine } from "../../../components/HeaderRoutine/HeaderRoutine";

export default function PageRoutine() {
  const { routineId } = useParams();
  const [routine] = routines.filter(
    (routine) => routine.id === parseInt(routineId)
  );

  return (
    <div className="Routine-container">
      <HeaderRoutine date={routine.fecha_creacion} id={routineId} />
      <main className="routine-main">
        <h1>Mesociclos</h1>
        <ListOfMesociclos routine={routine} />
      </main>
    </div>
  );
}
