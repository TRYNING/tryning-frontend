import { HeaderRoutine } from "@components/HeaderRoutine/HeaderRoutine";
import { ListOfRoutines } from "./components/ListOfRoutines/ListOfRoutines";
import { Main } from "@components/Main/Main";
import { useRoutinesContext } from "@hooks/useRoutinesContext";
import { currentMonth } from "@utils/date.utils";

export default function PageRoutines() {
  const { routines } = useRoutinesContext();
  const currentRoutine = routines.filter((r) => {
    const current = currentMonth(r.fecha_creacion);
    return current;
  });
  const filteredRoutines = routines.filter((r) => {
    const current = currentMonth(r.fecha_creacion);
    return !current;
  });
  return (
    <main className="Routines-container">
      <HeaderRoutine title="Rutinas" />
      <Main>
        <section>
          <h4 className="subtitle-current">Actual</h4>
          <ListOfRoutines routines={currentRoutine} />
          <h4 className="subtitle-history">Historial</h4>
          <ListOfRoutines routines={filteredRoutines} />
        </section>
      </Main>
    </main>
  );
}
