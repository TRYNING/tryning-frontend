import macrociclo from "../../mocks/routine-mesociclo.json";
import { ListOfDays } from "./components/ListOfDays";

export default function Marcrociclo() {
  console.log(macrociclo);
  return (
    <div>
      <h1>{macrociclo.nombre}</h1>
      <div>Mes: {macrociclo.meses[0]}</div>
      {macrociclo.microciclos.map((microciclo) => {
        return <ListOfDays key={microciclo.id} microciclo={microciclo} />;
      })}
    </div>
  );
}
