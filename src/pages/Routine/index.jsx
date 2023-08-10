import { Nav } from "../../components/Nav/Nav";
import { useParams } from "react-router-dom";
import routines from "../../mocks/routines.json";

export default function Routine() {
  const { routineId } = useParams();
  const [routine] = routines.filter((routine) => routine.id == routineId);

  return (
    <div className="Routine-container">
      <Nav />
      <header className="routine-header">
        <h3 className="header-title">Rutina</h3>
        <span className="header-date">{routine.fecha_creacion}</span>
      </header>
      <main className="routine-main">
        <h1>rutina {routineId}</h1>
        {routine.mesociclos.map((mesociclo) => {
          const { id, titulo } = mesociclo;
          return <div key={id}>{titulo}</div>;
        })}
      </main>
    </div>
  );
}
