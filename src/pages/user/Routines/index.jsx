import { Nav } from "../../components/Nav/Nav";
import { ListOfRoutines } from "./components/ListOfRoutines";

export default function Routines() {
  return (
    <div className="Routines-container">
      <Nav />
      <main className="routines-main">
        <h1 className="routines-title">Mis rutinas</h1>
        <ListOfRoutines />
      </main>
    </div>
  );
}
