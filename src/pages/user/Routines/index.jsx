import { Nav } from "@components/Nav/Nav";
import { ListOfRoutines } from "./components/ListOfRoutines";

export function PageRoutines() {
  return (
    <div className="Routines-container">
      <Nav />
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
