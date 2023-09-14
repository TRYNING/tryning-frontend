import { HeaderRoutine } from "@components/HeaderRoutine/HeaderRoutine";
import { useParams } from "react-router-dom";
import { Main } from "@components/Main/Main";
import { usePlansById } from "@hooks/usePlans";
import { CardMesociclo } from "./components/CardMesociclo/CardMesociclo";

export default function PageRoutine() {
  const { routineId } = useParams();
  const { plan } = usePlansById({ planId: routineId });

  return (
    <div className="Routine-container">
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
            weeks={plan.semanas}
          />
        )}
      </Main>
    </div>
  );
}
