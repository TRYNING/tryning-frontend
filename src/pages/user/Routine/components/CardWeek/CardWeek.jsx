import { ListOfDays } from "../ListOFDays/ListOfDays";

export function CardWeek({ titulo, microcicloId }) {
  return (
    <div className="CardWeek">
      <header className="header-cardweek">
        <span className="cubo"></span>
        <h2 className="titulo">{titulo}</h2>
      </header>
      <ListOfDays microcicloId={microcicloId} />
    </div>
  );
}
