import { HeaderRoutine } from "../../../components/HeaderRoutine/HeaderRoutine";
import { CarruselAnalytics } from "../Analytics/Componentes/CarruselAnalytics";
import { ContainerAnalytics } from "./Componentes/ContainerAnalytics";
import { Main } from "@components/Main/Main";

export default function PageAnalytics() {
  return (
    <main className="min-h-screen flex flex-col">
      <HeaderRoutine title="Progresiones" />
      <Main>
        <CarruselAnalytics />
        <ContainerAnalytics />
      </Main>
    </main>
  );
}
