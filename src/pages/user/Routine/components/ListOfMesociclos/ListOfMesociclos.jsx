import { CardMesociclo } from "../CardMesociclo/CardMesociclo";
import { useRoutinesContext } from "@hooks/useRoutinesContext";

export function ListOfMesociclos({ routineId }) {
  const { getMesociclos } = useRoutinesContext();
  const { mesociclos } = getMesociclos(routineId);
  return (
    <div className="ListOfMesociclos">
      {mesociclos?.map((mesociclo) => {
        const { id, titulo, descripcion } = mesociclo;
        return (
          <CardMesociclo
            key={id}
            id={id}
            title={titulo}
            routineId={routineId}
            description={descripcion}
          />
        );
      })}
    </div>
  );
}
