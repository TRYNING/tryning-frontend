import { CardWeek } from "../CardWeek/CardWeek";

export function ListOfWeeks({ mesociclo }) {
  return (
    <div className="ListOfWeeks-container">
      {mesociclo.microciclos.map((microciclo) => {
        const { id, titulo } = microciclo;

        return <CardWeek key={id} titulo={titulo} microciclo={microciclo} />;
      })}
    </div>
  );
}
