import { ListOfDays } from "../ListOFDays/ListOfDays";

export function CardWeek({ titulo, dias }) {
  return (
    <div className="CardWeek">
      <header className="header-cardweek">
        <span className="cubo"></span>
        <h2 className="titulo">{titulo}</h2>
      </header>
      <ListOfDays dias={dias} />
    </div>
  );
}
