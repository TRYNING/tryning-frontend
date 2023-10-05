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
            className="h-10 w-48 flex items-center justify-center border border-[var(--color-primary)] bg-[var(--color-primary)] text-[var(--color-white)] rounded-[var(--border-button)] opacity-96 hover:font-semibold"
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
        <img src="https://img.freepik.com/foto-gratis/hombre-joven-fitness-estudio_7502-5008.jpg?w=740&t=st=1696371790~exp=1696372390~hmac=a96e93ab38439789df1146d659bad361e1dbd5f60e9d7ba00cf0a960ddd91379" className="w-64" />
        <EmojisContainer
          imgurl="https://www.emojiall.com/images/60/skype/1f4aa.pnghttps://img.freepik.com/foto-gratis/hombre-joven-fitness-estudio_7502-5008.jpg?w=740&t=st=1696371790~exp=1696372390~hmac=a96e93ab38439789df1146d659bad361e1dbd5f60e9d7ba00cf0a960ddd91379"
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
