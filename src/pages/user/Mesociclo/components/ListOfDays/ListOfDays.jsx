import { CardDay } from "../CardDay/CardDay";

export function ListOfDays({ dias }) {
  console.log(dias);
  return (
    <div className="ListOfDays-container">
      {dias?.map((dia) => {
        const { id, titulo, musculos } = dia;
        return <CardDay key={id} id={id} title={titulo} muscles={musculos} />;
      })}
    </div>
  );
}
