import { CardDay } from "../CardDay/CardDay";

export function ListOfDays({ microciclo }) {
  return (
    <div className="ListOfDays-container">
      {microciclo?.dias.map((dia) => {
        const { id, titulo, musculos } = dia;
        return <CardDay key={id} id={id} title={titulo} muscles={musculos} />;
      })}
    </div>
  );
}
