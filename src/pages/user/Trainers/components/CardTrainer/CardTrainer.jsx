import { SvgCheck } from "@assets/icons/svgIcons";

export function CardTrainer({ id, nombre, certificacion, experencia, perfilimg }) {
    return (
      <div className="Card-Trainer">
        <section className="trainer-section">
          <div className="trainer-title">
            <span>
              <SvgCheck size={12} />
            </span>
          </div>
          <div className="img-trainer">{perfilimg}</div>
          <div className="name-trainer">Nombre {nombre}</div>
          <div className="certificade-trainer">Certificado{certificacion}</div>
          <div className="exp-trainer">Exp {experencia}</div>
        </section>
      </div>
    );}