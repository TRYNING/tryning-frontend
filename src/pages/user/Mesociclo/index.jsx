import { useParams } from "react-router-dom";
import mesociclos from "../../../mocks/mesociclos.json";

export default function PageMesociclo() {
  const { routineId, mesocicloId } = useParams();
  const [mesociclo] = mesociclos.filter(
    (mesociclo) => mesociclo.id === parseInt(mesocicloId)
  );
  return (
    <div className="Mesociclo-container">
      <main>
        <h1>Rutina {routineId} </h1>
        <h2>mesociclo {mesocicloId} </h2>
        <div>
          {mesociclo.microciclos.map((microciclo) => {
            const { id, titulo } = microciclo;
            return <div key={id}>{titulo}</div>;
          })}
        </div>
      </main>
    </div>
  );
}
