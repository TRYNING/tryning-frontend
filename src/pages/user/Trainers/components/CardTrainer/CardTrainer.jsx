import { SvgCheck } from "@assets/icons/svgIcons";

export function CardTrainer({ id, nombre, certificacion, experencia, perfilimg }) {
    return (
      <div className="Card-Trainer">
        <section className="trainer-section">
          <div className="trainer-title">
          
              
            
          </div>
          <img src={perfilimg} alt=""  className="trainer-img"/>
          <div className="trainer-box">
              <div className="trainer-name" > {nombre} <SvgCheck size={12} /> </div>
              <div className="trainer-certificade">Certificado: {certificacion}</div>
              <div className="trainer-exp">Exp: {experencia}</div>
          </div>
        </section>
      </div>
    );}