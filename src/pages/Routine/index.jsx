import { Nav } from "../../components/Nav/Nav";
import { useParams } from "react-router-dom";
import routines from "../../mocks/routines.json";
import mesociclos from "../../mocks/mesociclos.json";

export default function Routine() {
  const { routineId } = useParams();
  const [routine] = routines.filter(
    (routine) => routine.rutina_ID == routineId
  );
  const [mesociclo] = mesociclos.filter(
    (mesociclo) => mesociclo.rutina_ID == routineId
  );
  return (
    <div className="Routine-container">
      <Nav />
      <header className="routine-header">
        <h3 className="header-title">Rutina</h3>
        <span className="header-date">{routine.fecha_creacion}</span>
      </header>
      <main className="routine-main">
        <h1>rutina {routineId}</h1>
        {mesociclo.array.map((mesociclo) => {
          return <div key={mesociclo.Mesociclo_ID}>{mesociclo.titulo}</div>;
        })}
      </main>
    </div>
  );
}
