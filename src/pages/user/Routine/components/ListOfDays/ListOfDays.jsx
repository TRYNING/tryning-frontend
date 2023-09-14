import { CardDay } from "../CardDay/CardDay";
export function ListOfDays({ days }) {
  return (
    <div className="ListOfDays">
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
