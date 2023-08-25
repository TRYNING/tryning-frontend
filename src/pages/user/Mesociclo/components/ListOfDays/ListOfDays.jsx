import { CardDay } from "../CardDay/CardDay";

export function ListOfDays({ dias }) {
  return (
    <div className="ListOfDays">
      {dias?.map((dia) => {
        const { id, titulo, musculos } = dia;
        return <CardDay key={id} id={id} title={titulo} muscles={musculos} />;
      })}
    </div>
  );
}
