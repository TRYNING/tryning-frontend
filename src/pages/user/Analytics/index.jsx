import { HeaderRoutine } from "../../../components/HeaderRoutine/HeaderRoutine";
import { CarruselAnalytics } from "../Analytics/Componentes/CarruselAnalytics";
import { ContainerAnalytics } from "./Componentes/ContainerAnalytics";
import { Main } from "@components/Main/Main";
 import data from "@mocks/analytics"
 

export default function PageAnalytics() {
  //const data =[{title: "SEMANA 1", ejercicios: [{nombre:"Pressbanca", info: {tonelaje:"200", reps:"10", peso:"503242"} } ,{nombre:"Pressbconveranca", info: {tonelaje:"12312312", reps:"10", peso:"50"} }]  }, {title: "SEMANA 2", ejercicios: [{nombre:"Pressbanca", info: {tonelaje:"200", reps:"10", peso:"50"} } ,{nombre:"Pressbconveranca", info: {tonelaje:"200", reps:"100", peso:"500"} }]  }]


  return (
    <main className="min-h-screen flex flex-col">
      <HeaderRoutine title="Progresiones" />
      <Main>
        <CarruselAnalytics  data={data}/>
        <ContainerAnalytics title="kilos" data={data}/>
      </Main>
    </main>
  );
}
