import { generateId } from "../../../../../utils/generateId.utils";
import { CardWeek } from "../CardWeek/CardWeek";
import { useRoutinesContext } from "@hooks/useRoutinesContext";

export function ListOfWeeks({ mesocicloId }) {
  const { getMicrociclos } = useRoutinesContext();
  const { microciclos } = getMicrociclos(mesocicloId);
  return (
    <div className="ListOfWeeks-container">
      {microciclos?.map((microciclo) => {
        const { id, titulo } = microciclo;
        const key = generateId();

        return <CardWeek key={key} titulo={titulo} microcicloId={id} />;
      })}
    </div>
  );
}
