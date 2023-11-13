import { Link } from "react-router-dom";
import barbell from "@assets/images/barbell.webp";
import { Main } from "@components/Main";
import videoSentadilla from "../../../assets/videos/press.mp4";

const VideoBackground = () => {
  return (
    <div className="absolute w-full h-full z-0 top-0 left-0">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="w-full h-full object-cover "
      >
        <source src={videoSentadilla} type="video/mp4" />
        Tu navegador no soporta el elemento de video.
      </video>
    </div>
  );
};

export default function PageHome() {
  return (
    <main className="flex flex-col items-center min-h-screen bg-[var(--color-gray]">
      <section className="w-full min-h-screen relative">
        {/*<img className="absolute w-full h-full object-cover" src={barbell} />*/}
        <VideoBackground />
        <span className="absolute w-full h-full z-10 bg-gradient-to-br from-[rgba(0,0,0,0.94)] to-[rgba(0,0,0,0.84)]"></span>
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

      <Main></Main>
    </main>
  );
}
