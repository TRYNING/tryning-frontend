import { ListOfRoutines } from "./components/ListOfRoutines/ListOfRoutines";

export default function PageRoutines() {
  return (
    <div className="Routines-container">
      <header className="routines-header">
        <h1 className="header-title">Mis rutinas</h1>
      </header>
      <main className="routines-main">
        <section>
          <ListOfRoutines />
        </section>
      </main>
    </div>
  );
}
