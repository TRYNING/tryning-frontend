export function HeaderRoutine({
  title = "Rutina",
  subtitle = "",
  date,
  id = "",
}) {
  return (
    <header className="relative">
      <section className="header-info">
        <div className="title-container">
          <h3 className="info-title">
            {title} {id}
          </h3>
          <h2 className="info-subtitle">{subtitle}</h2>
        </div>

        {date && <span className="info-date">{date}</span>}
      </section>
    </header>
  );
}
