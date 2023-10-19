import { Link } from "react-router-dom";
import barbell from "@assets/images/barbell.webp";
import gym from "@assets/images/gym.mp4"
import kendra from "@assets/images/kendra.mp4";
import {ContentPlayer} from "@assets/components/ContentPlayer"

import { EmojisContainer } from "./components/EmojisContainer/EmojisContainer";
import { Main } from "@components/Main/Main";

export default function PageHome() {
  return (
    <main className="flex flex-col items-center min-h-screen bg-[var(--color-gray]">
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
            className="h-10 w-48 flex items-center justify-center border border-[var(--color-primary)] bg-[var(--color-primary)] text-[var(--color-white)] rounded-[var(--border-button)] opacity-96 hover:font-semibold"
          >
            Buscar entrenador
          </Link>
        </div>
      </section>

      <Main>
        <EmojisContainer
          titulo="SISTEMA DE SEGUIMIENTO UNICO CON POSIBILIDADES DE HACER UN TRACKEO MUY PRECISO"
          parrafo="Contamos con un sistema de seguimiento muy avanzado, que transfiere los datos de tu entrenamiento a informacion muy legible"
        />
      <iframe src={gym} frameborder="0" className="aspect-4:6 w-full"></iframe>
      </Main>
      
      <div className="h-60"></div>
    </main>
  );
}
