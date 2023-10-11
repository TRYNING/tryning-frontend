import { HeaderRoutine } from "@components/HeaderRoutine/HeaderRoutine";
import { useParams } from "react-router-dom";
import { Main } from "@components/Main/Main";
// import { usePlansById } from "@hooks/usePlans";
import { CardMesociclo } from "./components/CardMesociclo/CardMesociclo";

import plans from "@mocks/mesociclos.json";
import weeks from "@mocks/microciclos.json";

export default function PageRoutine() {
  const { routineId } = useParams();
  //const { plan } = usePlansById({ planId: routineId });
  const [plan] = plans.filter((plan) => plan.rutinaId === parseInt(routineId));
  const week = weeks.filter((w) => w.mesocicloId == plan.id);
  return (
    <div className="flex flex-col bg-black min-h-screen overflow-auto">
      <HeaderRoutine
        subtitle="Mesociclos"
        date={plan ? plan.fecha_inicio : "00/00/00"}
        id={routineId}
      />
      <Main>
        {plan && (
          <CardMesociclo
            id={plan.id}
            date={plan.fecha_inicio}
            description={plan.descripcion}
            weeks={week}
          />
        )}
      </Main>
    </div>
  );
}
