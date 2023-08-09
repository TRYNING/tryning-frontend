import { Nav } from "../../components/Nav/Nav";
import { useParams } from "react-router-dom";
export default function Mesociclos() {
  const { routineId } = useParams();
  return (
    <div className="Mesociclos-container">
      <Nav />
      <main>
        <h1>Rutina {routineId}</h1>
        <h2>mesociclos</h2>
      </main>
    </div>
  );
}
