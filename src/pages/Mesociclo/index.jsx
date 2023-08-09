import { Nav } from "../../components/Nav/Nav";
import { useParams } from "react-router-dom";

export default function Mesociclo() {
  const { routineId, mesocicloId } = useParams();
  return (
    <div className="Mesociclo-container">
      <Nav />
      <main>
        <h1>Rutina {routineId} </h1>
        <h2>mesociclo {mesocicloId} </h2>
      </main>
    </div>
  );
}
