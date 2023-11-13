import { CardDay } from "./CardDay";
export function ListOfDays({ days }) {
  return (
    <div className="flex flex-col gap-2">
      {days?.map((dia) => {
        const { id, numero_dia, musculos } = dia;
        const key = crypto.randomUUID();

        return (
          <CardDay key={key} id={id} number={numero_dia} muscles={musculos} />
        );
      })}
    </div>
  );
}
