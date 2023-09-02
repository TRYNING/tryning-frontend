import { HeaderRoutine } from "@components/HeaderRoutine/HeaderRoutine";
import { useParams } from "react-router-dom";
import { Main } from "@components/Main/Main";
import { useRoutinesContext } from "@hooks/useRoutinesContext";
import { CustomCarrusel } from "@components/CustomCarrusel/CustomCarrusel";
import { ListOfExercises } from "./components/ListOfExercises/ListOfExercises";

export default function PageDays() {
  const { microcicloId } = useParams();
  const { getDays } = useRoutinesContext();
  const { days } = getDays(microcicloId);

  const settings = {
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScrool: 1,
    dots: true,
  };

  return (
    <main className="Days-container">
      <HeaderRoutine subtitle={`Dias`} date="28/08/2023" />
      <Main>
        <h1 className="days-titulo">microciclo {microcicloId}</h1>
        <CustomCarrusel settings={settings}>
          {days?.map((day) => {
            const key = crypto.randomUUID();
            return (
              <div className="container-card" key={key}>
                <div className="day">
                  <section className="day-exercise__info">
                    <h1>{day.titulo}</h1>
                    <p>id: {day.id}</p>
                  </section>
                  <ListOfExercises dayId={day.id} />
                </div>
              </div>
            );
          })}
        </CustomCarrusel>
      </Main>
    </main>
  );
}
