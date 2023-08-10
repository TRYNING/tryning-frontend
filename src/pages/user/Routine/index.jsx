import { Nav } from "../../components/Nav/Nav";
import { useParams } from "react-router-dom";
import routines from "../../mocks/routines.json";
import { ListOfMesociclos } from "./components/ListOfMesociclos";

export default function Routine() {
  const { routineId } = useParams();
  const [routine] = routines.filter(
    (routine) => routine.id === parseInt(routineId)
  );

  return (
    <div className="Routine-container">
      <Nav />
      <header className="routine-header">
        <h3 className="header-title">Rutina</h3>
        <span className="header-date">{routine.fecha_creacion}</span>
      </header>
      <main className="routine-main">
        <h1>Mesociclos</h1>
        <ListOfMesociclos routine={routine} />
      </main>
    </div>
  );
}
