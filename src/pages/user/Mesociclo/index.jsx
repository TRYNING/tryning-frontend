import { useParams } from "react-router-dom";
import mesociclos from "../../../mocks/mesociclos.json";
import { HeaderRoutine } from "@components/HeaderRoutine/HeaderRoutine";
import { ListOfWeeks } from "./components/ListOfWeeks/ListOfWeeks";

export default function PageMesociclo() {
  const { routineId, mesocicloId } = useParams();
  const [mesociclo] = mesociclos.filter(
    (mesociclo) => mesociclo.id === parseInt(mesocicloId)
  );
  return (
    <main className="Mesociclo-container">
      <HeaderRoutine date={"00/00/00"} id={routineId} />
      <section className="mesociclo-section">
        <h1>microciclos</h1>
        <ListOfWeeks mesociclo={mesociclo} />
      </section>
    </main>
  );
}
