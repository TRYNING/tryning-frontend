import { HeaderRoutine } from "@components/HeaderRoutine/HeaderRoutine";
import { ListOfRoutines } from "./components/ListOfRoutines/ListOfRoutines";
import { Main } from "@components/Main/Main";
//import { currentMonth } from "@utils/date.utils";
import { usePlans } from "@hooks/usePlans";
import { useAuthContext } from "@hooks/useAuthContext";
import { SvgAnalytics } from "@assets/icons/svgIcons";
import { NAV_ICON_SIZE } from "@common/constants/components";

export default function PageRoutines() {
  const { user } = useAuthContext();
  const { plans } = usePlans({ userId: user.id });
  return (
    <main className="min-h-screen flex flex-col bg-black">
      <HeaderRoutine title="Rutinas" />
      <Main>
        <section>
          {plans && plans.length > 0 ? (
            <ListOfRoutines routines={plans} />
          ) : (
            <h1>No tienes rutinas</h1>
          )}
          <a href="/routine" className="text-[#00f] hover:underline">RUTINA</a>
          
        </section>
        <div className="flex items-center justify-center hover:bg-slate-300 rounded-xl w-10"><SvgAnalytics size={40}/></div>
      </Main>
    </main>
  );
}
