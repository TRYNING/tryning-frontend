import { generateId } from "../../../../../utils/generateId.utils";
import { CardDay } from "../CardDay/CardDay";
import { useRoutinesContext } from "@hooks/useRoutinesContext";
export function ListOfDays({ microcicloId }) {
  const { getDays } = useRoutinesContext();
  const { days } = getDays(microcicloId);
  return (
    <div className="ListOfDays">
      {days?.map((dia) => {
        const { id, titulo, musculos } = dia;
        const key = generateId();

        return <CardDay key={key} id={id} title={titulo} muscles={musculos} />;
      })}
    </div>
  );
}
