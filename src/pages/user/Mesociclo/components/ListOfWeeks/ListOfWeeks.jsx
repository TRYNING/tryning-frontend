import { CardWeek } from "../CardWeek/CardWeek";
import { useRoutinesContext } from "@hooks/useRoutinesContext";

export function ListOfWeeks({ mesocicloId }) {
  const { getMicrociclos } = useRoutinesContext();
  const { microciclos } = getMicrociclos(mesocicloId);
  return (
    <div className="ListOfWeeks-container">
      {microciclos?.map((microciclo) => {
        const { id, titulo, dias } = microciclo;
        return <CardWeek key={id} id={id} titulo={titulo} dias={dias} />;
      })}
    </div>
  );
}
