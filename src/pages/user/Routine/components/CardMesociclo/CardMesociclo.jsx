import { ListOfWeeks } from "../ListOfWeeks/ListOfWeeks";
export function CardMesociclo({ id, title, description }) {
  return (
    <div className="CardMesociclos" key={id}>
      <header className="header-mesociclo">
        <span className="triangle"></span>
        <h2>{title}</h2>
      </header>
      <main className="main-mesociclo">
        <p>{description}</p>
        <ListOfWeeks mesocicloId={id} />
      </main>
    </div>
  );
}
