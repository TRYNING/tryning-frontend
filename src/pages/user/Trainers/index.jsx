import { ListOfTrainers } from "./components/ListOfTrainers/ListOfTrainers";
import { HeaderRoutine } from "@components/HeaderRoutine/HeaderRoutine";
import { Main } from "@components/Main/Main";
export default function PageTrainers() {
  return (
    <main className="relative flex flex-col min-h-screen">
      <HeaderRoutine />
      <Main>
        <input
          type="text"
          placeholder="Buscar entrenador"
          className="shadow-sm py-3 mt-8 px-3 bg-white border text-sm focus:border-gray-400 rounded-xl w-full"
        />
        <ListOfTrainers />
      </Main>
    </main>
  );
}
