import { CardMesociclo } from "./CardMesociclo";

export function ListOfMesociclos({ routine }) {
  return (
    <div className="ListOfMesociclos-container">
      {routine.mesociclos.map((mesociclo) => {
        const { id, titulo } = mesociclo;
        return (
          <CardMesociclo
            key={id}
            id={id}
            title={titulo}
            routineId={routine.id}
          />
        );
      })}
    </div>
  );
}
