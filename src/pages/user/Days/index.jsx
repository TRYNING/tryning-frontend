import { HeaderRoutine } from "@components/HeaderRoutine";
import { Main } from "@components/Main";
import { CustomCarrusel } from "@components/CustomCarrusel";
import { ListOfExercises } from "./components/ListOfExercises";
import days from "../../../mocks/semanas.json";

export default function PageDays() {
  //const { microcicloId } = useParams();

  const settings = {
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScrool: 1,
    dots: true,
  };

  return (
    <main className="min-h-screen">
      <HeaderRoutine subtitle="Dias" />
      <Main>
        <CustomCarrusel settings={settings}>
          {days?.map((day) => {
            const key = crypto.randomUUID();
            return (
              <div className="mt-10" key={key}>
                <div className="day">
                  <section className="day-exercise__info">
                    <h1 className="text-2xl font-bold mb-4">Dia {day.dia}</h1>
                  </section>
                  <ListOfExercises exercises={day.ejercicios} />
                </div>
              </div>
            );
          })}
        </CustomCarrusel>
      </Main>
    </main>
  );
}
