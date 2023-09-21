import { Link } from "react-router-dom";
import { SvgCheck } from "@assets/icons/svgIcons";
import { PrivateRoutes } from "@common/constants/routes";

export function CardRoutine({ id, trainer, date, current }) {
  return (
    <Link
      to={`/${PrivateRoutes.ROUTINES}/${id}`}
      className="max-w-xs flex justify-between items-center rounded-md px-5 py-4 bg-white font-bold cursor-pointer transition-all shadow-lg hover:scale-105"
    >
      <section>
        <div className="text-lg font-bold flex items-center gap-1 mt-1">
          {trainer}
          <span>
            <SvgCheck size={12} />
          </span>
        </div>
        <div className="text-xs">Fecha {date}</div>
        <div className="text-xs">Meso N{id}</div>
      </section>
      {current && (
        <div className="w-4 h-4 bg-green-500 rounded-full mr-2"></div>
      )}
    </Link>
  );
}
