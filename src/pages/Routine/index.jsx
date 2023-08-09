import { Nav } from "../../components/Nav/Nav";
import { useParams } from "react-router-dom";

export default function Routine() {
  const { routineId } = useParams();
  return (
    <div className="Routine-container">
      <main>
        <Nav />
        <h1>rutina {routineId}</h1>
      </main>
    </div>
  );
}
