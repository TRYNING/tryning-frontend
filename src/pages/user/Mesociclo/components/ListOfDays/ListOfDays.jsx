export function ListOfDays({ microciclo }) {
  return (
    <div className="ListOfDays-container">
      {microciclo?.dias.map((dia, i) => {
        return (
          <div key={i} className="day">
            <h2 className="titulo">{dia.titulo}</h2>
          </div>
        );
      })}
    </div>
  );
}
