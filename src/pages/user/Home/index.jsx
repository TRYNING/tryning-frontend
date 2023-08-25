import { Link } from "react-router-dom";
import { EmojisContainer } from "./components/EmojisContainer/EmojisContainer";
import { CustomCarrusel } from "../../../components/CustomCarrusel/CustomCarrusel";

export default function PageHome() {
  return (
    <main className="Home-container">
      <section className="section-principal">
        <h1>Tu entrenador personalizado en línea</h1>
        <p>¡Alcanza tus metas más rápido con un entrenador personal!</p>
        <div className="buttons-container">
          <Link to="/trainers" className="button-entrenador">
            Buscar entrenador
          </Link>
        </div>
      </section>

      <section>
        <EmojisContainer
          imgurl="https://em-content.zobj.net/source/skype/289/person-lifting-weights_1f3cb-fe0f.png"
          titulo="MAS DE 1000 ENTRENADORES CERTIFICADOS"
          parrafo="Entrenadores verificados por la empresa con muy buenos resultados"
        />
      </section>

      <section>
        <EmojisContainer
          imgurl="https://www.emojiall.com/images/60/skype/1f4aa.png"
          titulo="ESPECIALISTAS EN FUERZA E HIPERTROFIA"
          parrafo="Entrenadores capacitados para llevar a un proximo nivel tus ganancias de fuerza e hipertrofia"
        />
      </section>

      <section>
        <EmojisContainer
          imgurl="https://images.emojiterra.com/twitter/v13.1/512px/1f4bb.png"
          titulo="SISTEMA DE SEGUIMIENTO UNICO CON POSIBILIDADES DE HACER UN TRACKEO MUY PRECISO"
          parrafo="Contamos con un sistema de seguimiento muy avanzado, que transfiere los datos de tu entrenamiento a informacion muy legible"
        />
      </section>

      <section className="section-carrousel">
        <CustomCarrusel />
      </section>
    </main>
  );
}
