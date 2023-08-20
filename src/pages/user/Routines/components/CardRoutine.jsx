import { Link } from "react-router-dom";
import { SvgCheck } from "@assets/icons/svgIcons";
import { PrivateRoutes } from "@common/constants/routes";

export function CardRoutine({ id, trainer, date, current }) {
  return (
    <Link to={`/${PrivateRoutes.ROUTINES}/${id}`} className="Card-routine">
      <section className="routine-section">
        <div className="routine-title">
          {trainer}
          <span>
            <SvgCheck size={12} />
          </span>
        </div>
        <div className="routine-date">Fecha {date}</div>
        <div className="routine-id">Meso N{id}</div>
      </section>
      {current && <div className="circle-current"></div>}
    </Link>
  );
}
