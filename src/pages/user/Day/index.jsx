import { HeaderRoutine } from "@components/HeaderRoutine/HeaderRoutine";
import { useParams } from "react-router-dom";

export default function PageDay() {
  const { dayId } = useParams();
  return (
    <main className="Day-container">
      <HeaderRoutine subtitle={`Dia ${dayId}`} date="28/08/2023" />
    </main>
  );
}
