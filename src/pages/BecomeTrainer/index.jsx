import { Header } from "../../components/Header/Header";
import { Nav } from "../../components/Nav/Nav";
import { Link } from "react-router-dom";

export default function BecomeTrainer() {
  return (
    <div className="BecomeTrainer-container">
      <Header />
      <Nav />
      <main>
        <h1>Tu entrenador personalizado en línea</h1>
        <p>¡Alcanza tus metas más rápido con un entrenador personal!</p>
        <div className="buttons-container">
        <Link to="/trainers" className="button-entrenador">
          Buscar entrenador
        </Link>
        </div>
      </main>
    </div>
  );
}
