import { HeaderRoutine } from "@components/HeaderRoutine/HeaderRoutine";
import { FormSearch } from "./components/SearchTrainer";
import { Main } from "@components/Main/Main";
import { RenderSearch } from "./components/RenderSearch";
import { SearchTrainerProvider } from "@context/SearchTrainerContext";

export default function PageTrainers() {
  return (
    <main className="relative flex flex-col min-h-screen">
      <SearchTrainerProvider>
        <HeaderRoutine title="Entrenadores" />
        <Main>
          <FormSearch />
          <RenderSearch />
        </Main>
      </SearchTrainerProvider>
    </main>
  );
}
