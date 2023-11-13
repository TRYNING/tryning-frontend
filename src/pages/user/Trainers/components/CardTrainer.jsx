import { Link } from "react-router-dom";
import { PrivateRoutes } from "@common/constants/routes";
import { SvgCheck } from "@assets/icons/svgIcons";

export function CardTrainer({ id, name, certificate, experience, image }) {
  return (
    <Link
      to={`/${PrivateRoutes.PROFILE}/${id}`}
      className="bg-white max-wsm flex justify-between px-3 py-2 items-center rounded-md font-bold cursor-pointer transition-all hover:scale-105"
    >
      <section className="flex items-center">
        <div className=""></div>
        <img
          src={image}
          alt=""
          className="w-12 h-12 aspect-square object-cover rounded-full mr-4 ml-1"
        />
        <div className="">
          <div className="text-lg font-bold mb-1 flex items-center gap-1">
            {" "}
            {name} <SvgCheck size={12} />{" "}
          </div>
          <div className="text-xs text-[var(--color-dark-gray)]">
            Certificado: {certificate}
          </div>
          <div className="text-xs text-[var(--color-dark-gray)]">
            Exp: {experience}
          </div>
        </div>
      </section>
    </Link>
  );
}
