import { Nav } from "../../components/Nav/Nav";
import { ListOfRoutines } from "./components/ListOfRoutines";

export default function Routines() {
  return (
    <div className="Routines-container">
      <Nav />
      <h1>rutinas</h1>
      <ListOfRoutines />
    </div>
  );
}
