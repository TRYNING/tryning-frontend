import { HeaderRoutine } from "@components/HeaderRoutine/HeaderRoutine";
import { useParams } from "react-router-dom";
import { Main } from "@components/Main/Main";
import { CustomCarrusel } from "@components/CustomCarrusel/CustomCarrusel";

export default function PageDay() {
  const { dayId } = useParams();
  return (
    <main className="Day-container">
      <HeaderRoutine subtitle={`Dia ${dayId}`} date="28/08/2023" />
      <Main>
        <CustomCarrusel dots={true}>
          <div className="slick-item"></div>
          <div className="slick-item"></div>
          <div className="slick-item"></div>
          <div className="slick-item"></div>
        </CustomCarrusel>
      </Main>
    </main>
  );
}
