import { useNavigate } from "react-router-dom";

export function ListOfDays({ microciclo }) {
  const navigate = useNavigate();

  const handleChange = (e) => {
    const selectDay = e.target.value;
    navigate(`/macrociclo/${selectDay}`);
  };

  return (
    <div>
      <select onChange={(e) => handleChange(e)}>
        <option disabled defaultValue>
          SEMANA {microciclo.id}
        </option>
        {microciclo.dias.map((dia) => {
          return (
            <option
              key={dia.id}
              value={dia.id}
            >{`DIA ${dia.id} ${dia.tipo}`}</option>
          );
        })}
      </select>
    </div>
  );
}
