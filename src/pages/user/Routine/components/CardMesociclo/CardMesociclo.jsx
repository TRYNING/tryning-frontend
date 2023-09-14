import { ListOfWeeks } from "../ListOfWeeks/ListOfWeeks";
export function CardMesociclo({ id, description, weeks }) {
  return (
    <div className="CardMesociclos" key={id}>
      <header className="header-mesociclo">
        <span className="triangle"></span>
        <h2>Agosto</h2>
      </header>
      <main className="main-mesociclo">
        <p>{description}</p>
        <ListOfWeeks weeks={weeks} />
      </main>
    </div>
  );
}
