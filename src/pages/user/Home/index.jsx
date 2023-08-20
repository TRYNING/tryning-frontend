import { Link } from "react-router-dom";

export default function PageHome() {
  return (
    <main className="Home-container">
      <section className="principal">
        <h1>Tu entrenador personalizado en línea</h1>
        <p>¡Alcanza tus metas más rápido con un entrenador personal!</p>
        <div className="buttons-container">
          <Link to="/trainers" className="button-entrenador">
            Buscar entrenador
          </Link>
        </div>
      </section>
    </main>
  );
}
