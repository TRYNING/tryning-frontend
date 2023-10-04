import { HeaderRoutine } from "../../../components/HeaderRoutine/HeaderRoutine";
import { CarruselAnalytics } from "../Analytics/Componentes/CarruselAnalytics";
import { ContainerAnalytics } from "./Componentes/ContainerAnalytics";
import { Main } from "@components/Main/Main";

export default function PageAnalytics() {

  const ejerciciosData = [{nombre:"Pressbanca", tonelaje:"200", reps:"10", peso:"50"} ]


  return (
    <main className="min-h-screen flex flex-col">
      <HeaderRoutine title="Progresiones" />
      <Main>
        <CarruselAnalytics ejercicios={ejerciciosData} />
        <ContainerAnalytics title="kilos" ejercicios={ejerciciosData}/>
      </Main>
    </main>
  );
}
