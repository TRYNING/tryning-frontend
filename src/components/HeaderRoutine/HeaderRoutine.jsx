export function HeaderRoutine({ date, id }) {
  return (
    <header className="HeaderRoutine-container">
      <h3 className="header-title">Rutina {id}</h3>
      <span className="header-date">{date}</span>
    </header>
  );
}
