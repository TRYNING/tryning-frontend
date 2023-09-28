import { Link } from "react-router-dom";
import cbumImage from "@assets/images/cbum.webp";
import { EmojisContainer } from "./components/EmojisContainer/EmojisContainer";

export default function PageHome() {
  return (
    <main className="flex flex-col items-center h-screen bg-[var(--color-gray]">
      <section className="w-full min-h-screen relative">
        <img className="absolute w-full h-full object-cover" src={cbumImage} />
        <span className="absolute w-full h-full z-10 bg-gradient-to-b from-[rgba(0,0,0,0.7)] to-[rgba(0,0,0,0.7)]"></span>
        <div className="text-center absolute w-full h-full z-20 flex flex-col justify-center items-center px-10">
          <h1 className="text-3xl font-bold text-[var(--color-gray)]">
            Tu entrenador personalizado en línea
          </h1>
          <p className="mt-5 text-sm text-[var(--color-light-gray)]">
            ¡Alcanza tus metas más rápido con un entrenador personal!
          </p>
          <Link
            to="/trainers"
            className="h-10 mt-32 w-full flex items-center justify-center border border-[var(--color-primary)] bg-[#00000099] text-[var(--color-primary)] rounded-[var(--border-button)] opacity-96 hover:opacity-100  hover:bg-[#00000070] transform:[scale(101)] "
          >
            Buscar entrenador
          </Link>
        </div>
      </section>

      <section className="<bg-[var(--color-gray)]>">
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
    </main>
  );
}
