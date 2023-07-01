import { useNavigate } from "react-router-dom";
export function FormDetailsExtra() {
  const navigate = useNavigate();

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
    </form>
  );
}
