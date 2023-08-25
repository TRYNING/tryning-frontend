import { useParams } from "react-router-dom";
import { HeaderRoutine } from "@components/HeaderRoutine/HeaderRoutine";
import { ListOfWeeks } from "./components/ListOfWeeks/ListOfWeeks";

export default function PageMesociclo() {
  const { routineId, mesocicloId } = useParams();

  return (
    <main className="Mesociclo-container">
      <HeaderRoutine date={"00/00/00"} id={routineId} />
      <section className="mesociclo-section">
        <h1 className="titulo-mesociclo">microciclos</h1>
        <ListOfWeeks mesocicloId={mesocicloId} />
      </section>
    </main>
  );
}
