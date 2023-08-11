import { Link } from "react-router-dom";
import { ROUTINES_ROUTE } from "@common/constants/routes";
import { SvgCheck } from "@common/icons/svgIcons";

export function CardRoutine({ id, trainer, date, current }) {
  console.log(current);
  return (
    <Link to={`${ROUTINES_ROUTE}/${id}`} className="Card-routine">
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
