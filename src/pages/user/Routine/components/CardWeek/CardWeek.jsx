import { ListOfDays } from "../ListOFDays/ListOfDays";

export function CardWeek({ week, number }) {
  return (
    <div className="CardWeek">
      <header className="header-cardweek">
        <span className="cubo"></span>
        <h2 className="titulo">Semana {number}</h2>
      </header>
      <ListOfDays days={week} />
    </div>
  );
}
