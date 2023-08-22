import { ListOfDays } from "../ListOFDays/ListOfDays";

export function CardWeek({ titulo, microciclo }) {
  return (
    <div className="CardWeek-container">
      <header className="header-cardweek">
        <span className="cubo"></span>
        <h2>{titulo}</h2>
      </header>
      <ListOfDays microciclo={microciclo} />
    </div>
  );
}
