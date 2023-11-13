import { useParams } from "react-router-dom";
import { useFetch } from "@hooks/useFetch";
import { useEffect } from "react";
import { HandleError } from "@components/HandleError";
import fondo from "../../../assets/images/pesas.webp";
import imgError from "../../../assets/images/userNotFound.webp";
import { SvgArgentina } from "@assets/icons/svgIcons";
import { Spinner } from "@components/Spinner";

export default function PageProfile() {
  const { idUser } = useParams();

  const { data, hasError, isLoading, fetchData } = useFetch();

  useEffect(() => {
    fetchData(`http://localhost:7000/api/search/allUsers?idUser=${idUser}`);
  }, [fetchData, idUser]);

  const handleImageLoad = () => {
    // Maneja la carga de la imagen (si es necesario)
  };

  const handleImageError = () => {
    // Maneja el error de carga de la imagen (si es necesario)
  };
  return (
    <main className="min-h-screen flex flex-col pb-32">
      <section className="relative flex justify-center bg-stone-700 h-[40vh] w-full">
        <img src={fondo} className="absolute w-full h-full z-10" />
        <div className="absolute w-full h-full z-20 bg-[#272727c7]"></div>

        <div className="absolute bottom-0 translate-y-1/2 w-full flex justify-center z-30">
          <div className="relative">
            {hasError ? (
              <img
                className="w-24 h-24 object-cover rounded-md shadow-md"
                src={imgError}
                alt="Imagen de error"
              />
            ) : isLoading ? (
              <div className="w-24 h-24 rounded-md bg-white">
                <Spinner />
              </div>
            ) : (
              <>
                <SvgArgentina className="absolute right-0 translate-x-1/2 top-2 w-6 h-6" />
                <img
                  className="w-24 h-24 object-cover rounded-md shadow-md"
                  src={data[0].image}
                  alt={`imagen perfil ${data[0].username}`}
                  onLoad={handleImageLoad}
                  onError={handleImageError}
                />
              </>
            )}
          </div>
        </div>
      </section>
      <section className="pt-20">
        <h1 className="font-bold text-lg text-center">
          @{data && data[0].username}
        </h1>
      </section>
      {/*<section className="border-t-[1px] border-b-[1px] mt-5 border-stone-300  font-medium flex justify-between py-5 px-10">
        <div className="flex flex-col justify-center items-center text-stone-400 hover:text-blue-500">
          <svg className="w-6 h-6" viewBox="0 0 24 24">
            <path
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.5"
              d="M18 14a2 2 0 1 0 0-4a2 2 0 0 0 0 4Zm0-7a2 2 0 1 0 0-4a2 2 0 0 0 0 4ZM3 5h10M3 12h10M3 19h10m3 2.243l2.121-2.122m0 0L20.243 17m-2.122 2.121L16 17m2.121 2.121l2.122 2.122"
            />
          </svg>
          <h3 className="text-sm">Objetivos</h3>
        </div>

        <div className="flex flex-col justify-center items-center text-stone-400 hover:text-blue-500">
          <svg className="w-6 h-6" viewBox="0 0 24 24">
            <g fill="none">
              <path d="M24 0v24H0V0h24ZM12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035c-.01-.004-.019-.001-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427c-.002-.01-.009-.017-.017-.018Zm.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093c.012.004.023 0 .029-.008l.004-.014l-.034-.614c-.003-.012-.01-.02-.02-.022Zm-.715.002a.023.023 0 0 0-.027.006l-.006.014l-.034.614c0 .012.007.02.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01l-.184-.092Z" />
              <path
                fill="currentColor"
                d="M16 14a5 5 0 0 1 5 5v1a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-1a5 5 0 0 1 5-5h8Zm5.414-4.919a1 1 0 0 1 1.498 1.32l-.084.095L20 13.324a1 1 0 0 1-1.32.083l-.094-.083l-1.414-1.414a1 1 0 0 1 1.32-1.498l.094.084l.707.707l2.121-2.122ZM12 2a5 5 0 1 1 0 10a5 5 0 0 1 0-10Z"
              />
            </g>
          </svg>
          <h3 className="text-sm">Siguiendo</h3>
        </div>

        <div className="flex flex-col justify-center items-center text-stone-400 hover:text-blue-500">
          <svg className="w-6 h-6" viewBox="0 0 256 256">
            <path
              fill="currentColor"
              d="M144 128a16 16 0 1 1-16-16a16 16 0 0 1 16 16Zm-84-16a16 16 0 1 0 16 16a16 16 0 0 0-16-16Zm136 0a16 16 0 1 0 16 16a16 16 0 0 0-16-16Z"
            />
          </svg>
          <h3 className="text-sm">Mas</h3>
        </div>
      </section>>*/}
      <section className="flex flex-col py-5 px-5 mt-10">
        <div className="w-full flex justify-between items-center">
          <div className="flex items-center gap-2 font-semibold mt-3">
            <svg className="w-5 h-5" viewBox="0 0 24 24">
              <path
                fill="currentColor"
                d="M10 20v-6h4v6h5v-8h3L12 3L2 12h3v8h5Z"
              />
            </svg>
            <p className="text-sm text-stone-600">Buenos Aires, Tandil</p>
          </div>
          <p className="text-sm mt-1 font-semibold">{data && data[0].name}</p>
        </div>
      </section>

      <section>
        <div className="p-5 text-base text-stone-600">
          Entusiasta del fitness en constante búsqueda de desafíos. Mi enfoque
          se basa en la consistencia y la superación personal. Comparto consejos
          de entrenamiento, nutrición y motivación
        </div>
      </section>
    </main>
  );
}
