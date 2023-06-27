import { useAuthContext } from "../../../../hooks/useAuthContext";
import { useNavigate } from "react-router-dom";
export function FormDetailsExtra() {
  const navigate = useNavigate();
  const { setRegisterDetail } = useAuthContext();

  const handleSubmit = (e) => {
    e.preventDefault();
    setRegisterDetail(true);
    navigate("/home");
  };

  return (
    <form className="FormRegister-container" onSubmit={(e) => handleSubmit(e)}>
      <label>Fecha de nacimiento</label>
      <input type="date" required />
      <label>Peso corporal en kg</label>
      <input type="number" required />
      <label>Estatura en cm</label>
      <input type="number" required />
      <button>Siguiente</button>
    </form>
  );
}
