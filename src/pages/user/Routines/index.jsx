import { HeaderRoutine } from "@components/HeaderRoutine/HeaderRoutine";
import { ListOfRoutines } from "./components/ListOfRoutines/ListOfRoutines";
import { Main } from "@components/Main/Main";
//import { currentMonth } from "@utils/date.utils";
import { usePlans } from "@hooks/usePlans";
import { useAuthContext } from "@hooks/useAuthContext";

export default function PageRoutines() {
  const { user } = useAuthContext();
  const { plans } = usePlans({ userId: user.id });
  return (
    <main className="Routines-container">
      <HeaderRoutine title="Rutinas" />
      <Main>
        <section>
          {plans && plans.length > 0 ? (
            <ListOfRoutines routines={plans} />
          ) : (
            <h1>No tienes rutinas</h1>
          )}
        </section>
      </Main>
    </main>
  );
}
