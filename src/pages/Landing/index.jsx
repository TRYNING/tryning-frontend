import barbell from "@assets/images/barbell.webp";
import woman from "@assets/images/woman.webp";
import guy from "@assets/images/guy.webp";
import muscles from "@assets/images/muscles.webp";
import { Main } from "@components/Main/Main";

import { Link } from "react-router-dom";
import { Card } from "./components/Card";
import { HeaderLanding } from "./components/HeaderLanding";

export default function PageLanding() {
  return (
    <div>
      <HeaderLanding />
      <Main>
        <section className="w-full min-h-screen relative flex flex-col sm:flex-row">
          <div className="flex-1 flex flex-col">
            <div className=" w-full h-full z-20 flex flex-col justify-start items-start pr-8">
              <h1 className="text-4xl text-black font-bold mt-40">
                Tu entrenador personalizado en línea
              </h1>
              <p className="mt-5 text-2xl text-[var(--color-dark-gray)]">
                ¡Alcanza tus metas más rápido con un entrenador personal!
              </p>
              <div className="flex items-start gap-3 mt-7">
                <Link
                  to="/register-user"
                  className={`bg-[var(--color-primary)] text-white px-5 py-3 flex items-center shadow-md border border-[var(--color-primary)] rounded-full h-10 text-sm font-semibold hover:opacity-90 hover:scale-101`}
                >
                  Comienza
                </Link>
              </div>
            </div>
          </div>
          <div className="flex-1 relative hidden md:flex rounded-md overflow-hidden my-8">
            <img
              className="absolute w-full h-full object-cover "
              src={barbell}
            />
            <span className="absolute w-full h-full z-10 bg-gradient-to-b from-[rgba(0,0,0,0.7)] to-[rgba(0,0,0,0.7)]"></span>
          </div>
        </section>
        <section className="flex flex-col md:flex-row space-x-50 gap-5 w-full pb-16 mt-20">
          <Card
            image={woman}
            title="Beneficios de nuestro servicio"
            text="Nuestro equipo de entrenadores certificados están aquí para
                ayudarte a alcanzar tus objetivos de forma rápida y efectiva."
          />
          <Card
            image={guy}
            title="Beneficios de nuestro servicio"
            text="Nuestro equipo de entrenadores certificados están aquí para
                ayudarte a alcanzar tus objetivos de forma rápida y efectiva."
          />

          <Card
            image={muscles}
            title="Beneficios de nuestro servicio"
            text="Nuestro equipo de entrenadores certificados están aquí para
                ayudarte a alcanzar tus objetivos de forma rápida y efectiva."
          />
        </section>
      </Main>
    </div>
  );
}
