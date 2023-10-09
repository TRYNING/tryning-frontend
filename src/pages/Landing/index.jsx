import logo from "@assets/images/tryning-pink.webp";
import barbell from "@assets/images/barbell.webp";
import woman from "@assets/images/woman.webp";
import guy from "@assets/images/guy.webp";
import muscles from "@assets/images/muscles.webp";

import { Link } from "react-router-dom";

export default function PageLanding() {
  return (
    <div>
      <header className="flex justify-between items-center py-4 px-6 backdrop-blur-xl">
        <img src={logo} alt="Logo" className="h-10" />

        <div className="flex items-center text-sm">
          <div className="text-center">
            <Link
              to="/login"
              className={`bg-[var(--color-primary)] text-white px-5 py-3 shadow-md border border-[var(--color-primary)] rounded-full h-10 w-full text-sm font-semibold hover:opacity-90 hover:scale-101`}
            >
              Inicia Sesion
            </Link>
          </div>
        </div>
      </header>
      <main className="flex flex-col items-center h-screen bg-[var(--color-gray]">
        <section className="w-full min-h-full relative">
          <img className="absolute w-full h-full object-cover" src={barbell} />
          <span className="absolute w-full h-full z-10 bg-gradient-to-b from-[rgba(0,0,0,0.7)] to-[rgba(0,0,0,0.7)]"></span>
          <div className="text-center absolute w-full h-full z-20 flex flex-col justify-center items-center px-10">
            <h1 className="text-4xl font-bold text-[var(--color-gray)]">
              Tu entrenador personalizado en línea
            </h1>
            <p className="mt-5 mx-3 text-2xl text-[var(--color-light-gray)]">
              ¡Alcanza tus metas más rápido con un entrenador personal!
            </p>
          </div>
        </section>
        <div className="flex flex-col md:flex-row space-x-50 w-full pb-16">
          <section className="flex flex-col  bg-[var(--color-gray)] w-full text-center items-center ">
            <div className="w-100">
              <img className="p-16" src={woman} alt="" />
            </div>
            <div className="container mx-auto text-center w-64">
              <h2 className="text-2xl font-bold text-[var(--color-black)]">
                Beneficios de nuestro servicio
              </h2>
              <p className="mt-4 mx-3 text-lg text-[var(--color-black)]">
                Nuestro equipo de entrenadores certificados están aquí para
                ayudarte a alcanzar tus objetivos de forma rápida y efectiva.
              </p>
            </div>
          </section>

          <section className="flex flex-col  bg-[var(--color-gray)] w-full text-center items-center ">
            <div className="w-100">
              <img className="p-16" src={muscles} alt="" />
            </div>
            <div className="container mx-auto text-center w-64">
              <h2 className="text-2xl font-bold text-[var(--color-black)]">
                Entrenamiento personalizado
              </h2>
              <p className="mt-4 mx-3 text-lg text-[var(--color-black)]">
                Creamos planes de entrenamiento específicos para tus necesidades
                y objetivos individuales.
              </p>
            </div>
          </section>

          <section className="flex flex-col  bg-[var(--color-gray)] w-full text-center items-center ">
            <div className="w-100">
              <img className="p-16" src={guy} alt="" />
            </div>
            <div className="container mx-auto text-center w-64">
              <h2 className="text-2xl font-bold text-[var(--color-black)]">
                Seguimiento avanzado
              </h2>
              <p className="mt-4 text-lg text-[var(--color-black)]">
                Utilizamos un sistema de seguimiento avanzado para analizar y
                mejorar tu progreso.
              </p>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}
