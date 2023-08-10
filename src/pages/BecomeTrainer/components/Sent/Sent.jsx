import { Link } from "react-router-dom";
import { Button } from "../../../../components/Button/Button";

export function Sent() {
    const buttons = [
        <Button key={1} className="button-type-1" type="submit">
          Enviar
        </Button>,
        
      ];
  return (
    <div className="Sent-container">
        <div>Enviado</div>
        <Button className="button-type-1 button-volver" >
        <Link to="/home">VOLVER</Link>
        </Button>
    </div>
  );
}
