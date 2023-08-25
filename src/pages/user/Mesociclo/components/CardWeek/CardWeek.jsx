import { ListOfDays } from "../ListOFDays/ListOfDays";

export function CardWeek({ titulo, dias }) {
  return (
    <div className="CardWeek-container">
      <header className="header-cardweek">
        <span className="cubo"></span>
        <h2>{titulo}</h2>
      </header>
      <ListOfDays dias={dias} />
    </div>
  );
}
