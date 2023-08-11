import { Link } from "react-router-dom";
import { Button } from "@components/Button/Button";

export function Sent() {
  return (
    <div className="Sent-container">
      <div>Enviado</div>
      <Button className="button-type-1 button-volver">
        <Link to="/home">VOLVER</Link>
      </Button>
    </div>
  );
}
