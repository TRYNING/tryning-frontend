
import { ListOfTrainers } from "./components/ListOfTrainers/ListOfTrainers";

export default function PageTrainers() {
  return (
    <div className="Trainers-container">
      <main>
      <header className="trainer-header">
        <h1 className="header-title">Entrenador</h1>
      </header>
       <div className="Browser"> 
          <input type="text"  placeholder="Buscar Entrenador"/> 
        </div>

        <ListOfTrainers/>
      </main>
    </div>
  );
}
