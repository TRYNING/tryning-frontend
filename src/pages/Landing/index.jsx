import logo from "@assets/images/tryning.webp";
import cbumImage from "@assets/images/cbum.webp";
import { EmojisContainer } from "./components/EmojisContainer/EmojisContainer";
import { Link } from "react-router-dom";

export default function PageLanding() {
  return (
    <div className="bg-[var(--color-gray)]">
       <header className="flex justify-between items-center py-4 px-6">
        <img src={logo} alt="Logo" className="h-12" />

        <div className="space-x-8 flex items-center">
          <div className="hidden md:block">
            <Link to="/login" className="text-[var(--color-black)] hover:text-[var(--color-primary)]">
              INICIAR SESION
            </Link>
          </div>

          <div className="hidden md:block">
            <Link to="/register" className="text-[var(--color-black)] hover:text-[var(--color-primary)]">
              REGISTRARSE
            </Link>
          </div>
        </div>
      </header>
    <main className="flex flex-col items-center h-screen bg-[var(--color-gray]">
      
      <section className="w-full min-h-full relative">
        <img className="absolute w-full h-full object-cover" src={cbumImage} />
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
    <div className="flex flex-row space-x-50 w-full">
      
    <section className="py-12 bg-[var(--color-gray)] w-full">
    <div className="container mx-auto text-center w-64">
      <h2 className="text-2xl font-bold text-[var(--color-black)]">Beneficios de nuestro servicio</h2>
      <p className="mt-4 mx-3 text-lg text-[var(--color-black)]">
        Nuestro equipo de entrenadores certificados están aquí para ayudarte a alcanzar tus objetivos de forma rápida y efectiva.
      </p>
    </div>
  </section>

      <section className="py-12 bg-[var(--color-gray)] w-full">
    <div className="container mx-auto text-center w-64">
      <h2 className="text-2xl font-bold text-[var(--color-black)]">Entrenamiento personalizado</h2>
      <p className="mt-4 mx-3 text-lg text-[var(--color-black)]">
        Creamos planes de entrenamiento específicos para tus necesidades y objetivos individuales.
      </p>
    </div>
  </section>

  

  <section className="py-12 bg-[var(--color-gray)] w-full">
    <div className="container mx-auto text-center w-64">
      <h2 className="text-2xl font-bold text-[var(--color-black)]">Seguimiento avanzado</h2>
      <p className="mt-4 text-lg text-[var(--color-black)]">
        Utilizamos un sistema de seguimiento avanzado para analizar y mejorar tu progreso.
      </p>
    </div>
  </section>
    </div>
    </main>
    </div>
  );
}
