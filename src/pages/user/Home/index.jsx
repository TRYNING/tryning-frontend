import { Link } from "react-router-dom";
import barbell from "@assets/images/barbell.webp";
import { EmojisContainer } from "./components/EmojisContainer/EmojisContainer";

export default function PageHome() {
  return (
    <main className="flex flex-col items-center h-screen bg-[var(--color-gray]">
      <section className="w-full min-h-screen relative">
        <img className="absolute w-full h-full object-cover" src={barbell} />
        <span className="absolute w-full h-full z-10 bg-gradient-to-b from-[rgba(0,0,0,0.7)] to-[rgba(0,0,0,0.7)]"></span>
        <div className="text-center absolute w-full h-full z-20 flex flex-col justify-center items-center px-10 gap-5">
          <h1 className="text-3xl font-bold text-[var(--color-gray)]">
            Tu entrenador personalizado en línea
          </h1>
          <p className=" text-sm text-[var(--color-light-gray)]">
            ¡Alcanza tus metas más rápido con un entrenador personal!
          </p>
          <Link
            to="/trainers"
            className="h-10 w-48 flex items-center justify-center border border-[var(--color-primary-trainer)] bg-[var(--color-primary-trainer)] text-[var(--color-white)] rounded-[var(--border-button)] opacity-96 hover:font-semibold"
          >
            Buscar entrenador
          </Link>
        </div>
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
