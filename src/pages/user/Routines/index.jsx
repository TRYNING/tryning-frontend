import { HeaderRoutine } from "@components/HeaderRoutine/HeaderRoutine";
import { ListOfRoutines } from "./components/ListOfRoutines";
import { Main } from "@components/Main/Main";
import plans from "@mocks/routines.json";
//import { currentMonth } from "@utils/date.utils";
//import { usePlans } from "@hooks/usePlans";
// import { useAuthContext } from "@hooks/useAuthContext";
import { SvgAnalytics } from "@assets/icons/svgIcons";
import { Link } from "react-router-dom";

export default function PageRoutines() {
  //const { user } = useAuthContext();
  //const { plans } = usePlans({ userId: user.id });
  return (
    <main className="min-h-screen flex flex-col bg-black">
      <HeaderRoutine title="Rutinas" />
      <Main>
        <section>
          {plans && plans.length > 0 ? (
            <>
              <ListOfRoutines routines={plans} />
              <Link
                to="/analytics"
                className={`mt-10 bg-[var(--color-primary)] text-white px-5 py-3 flex justify-between items-center shadow-md border border-[var(--color-primary)] rounded-full h-10 text-sm font-semibold hover:opacity-90 hover:scale-101`}
              >
                Ver progresos
                <SvgAnalytics size={20} />
              </Link>
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
