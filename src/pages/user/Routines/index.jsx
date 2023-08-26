import { HeaderRoutine } from "../../../components/HeaderRoutine/HeaderRoutine";
import { ListOfRoutines } from "./components/ListOfRoutines/ListOfRoutines";
import { Main } from "@components/Main/Main";
export default function PageRoutines() {
  return (
    <main className="Routines-container">
      <HeaderRoutine title="Rutinas" />
      <Main>
        <section>
          <ListOfRoutines />
        </section>
      </Main>
    </main>
  );
}
