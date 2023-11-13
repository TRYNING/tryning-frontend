import barbell from "@assets/images/barbell.webp";
import woman from "@assets/images/woman.webp";
import guy from "@assets/images/guy.webp";
import muscles from "@assets/images/muscles.webp";
import { Main } from "@components/Main";
import { PublicRoutes } from "@common/constants/routes";
import { Link } from "react-router-dom";
import { Card } from "./components/Card";
import { HeaderLanding } from "./components/HeaderLanding";
import { FooterLanding } from "./components/FooterLanding";

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
                  to={`/${PublicRoutes.REGISTER}`}
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
        <section className="flex flex-col space-x-50 gap-5 w-full pb-16 mt-20 rounded justify-center align-center">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-[var(--color-secondary)] mb-10 md:mt-40">
            Beneficios de nuestro servicio
          </h1>
          <div className="flex flex-col md:flex-row gap-16 justify-center mt-10">
            <Card
              image={woman}
              title="Profesionales Certificados y Experiencia Comprobada"
            />
            <Card image={guy} title="Personalización a Medida" />

            <Card
              image={muscles}
              title="Seguimiento Continuo y Feedback Personalizado"
            />
          </div>
        </section>

        <section className="flex flex-col gap-5 w-full pb-16 mt-20  rounded ">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-[var(--color-primary)] mb-4 md:mt-40">
            Acerca de nosotros
          </h1>
          <div className="flex flex-col md:flex-row gap-4 ">
            <p>
              Trabajar con los mejores es esencial para lograr el éxito
              deportivo. En nuestra plataforma, encontrarás entrenadores
              altamente calificados y con experiencia en una amplia variedad de
              disciplinas deportivas. Su conocimiento y expertise te guiarán en
              cada paso de tu camino.
            </p>
            <p>
              Cada atleta es único, y entendemos la importancia de entrenar de
              acuerdo a tus objetivos y necesidades específicas. Nuestros
              entrenadores certificados crean rutinas personalizadas que se
              adaptan a ti, optimizando tu rendimiento y ayudándote a alcanzar
              tus metas de manera más efectiva
            </p>
            <p>
              El viaje hacia tus objetivos deportivos no es estático, y es por
              eso que ofrecemos seguimiento constante y retroalimentación
              personalizada. A medida que progresas, ajustamos tus rutinas y te
              brindamos la orientación necesaria para maximizar tus resultados.
              Tu éxito es nuestra prioridad.
            </p>
          </div>
        </section>
      </Main>
      <FooterLanding />
    </div>
  );
}
