import { HeaderRoutine } from "@components/HeaderRoutine/HeaderRoutine";
import { ListOfRoutines } from "./components/ListOfRoutines/ListOfRoutines";
import { Main } from "@components/Main/Main";
import plans from "@mocks/routines.json";
//import { currentMonth } from "@utils/date.utils";
//import { usePlans } from "@hooks/usePlans";
// import { useAuthContext } from "@hooks/useAuthContext";
import { SvgAnalytics } from "@assets/icons/svgIcons";

export default function PageRoutines() {
  //const { user } = useAuthContext();
  //const { plans } = usePlans({ userId: user.id });
  console.log(plans);
  return (
    <main className="min-h-screen flex flex-col bg-black">
      <HeaderRoutine title="Rutinas" />
      <Main>
        <section>
          {plans && plans.length > 0 ? (
            <>
              <ListOfRoutines routines={plans} />
              <SvgAnalytics size={40} />
            </>
          ) : (
            <h1 className="text-lg font-bold">
              ¿No tienes rutinas?<p>¡Busca un entrenador que la cree!</p>
            </h1>
          )}
        </section>
      </Main>
    </main>
  );
}
