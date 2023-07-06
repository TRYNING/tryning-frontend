import { useNavigate } from "react-router-dom";
import { useAuthContext } from "../../../../hooks/useAuthContext";
export function FormDetailsExtra({ prevStep }) {
  const navigate = useNavigate();
  const { userData } = useAuthContext();
  console.log(userData);
  const handleSubmit = (e) => {
    e.preventDefault();

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
      <button>Registrate</button>
      <button onClick={() => prevStep()}>Anteriori</button>
    </form>
  );
}