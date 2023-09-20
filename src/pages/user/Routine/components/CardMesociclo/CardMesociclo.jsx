import { ListOfWeeks } from "../ListOfWeeks/ListOfWeeks";
export function CardMesociclo({ id, description, weeks }) {
  return (
    <div className="flex flex-col min-w-[100px]" key={id}>
      <header className="flex items-center gap-2 grow-0 px-5 pt-5 pb-0 text-black">
        <span className="w-0 h-0 border-t-[12px] border-l-8 border-r-8 border-[var(--color-primary)] border-l-transparent border-r-transparent"></span>
        <h2 className="text-lg font-bold">Agosto</h2>
      </header>
      <main className="p-5 flex flex-col gap-7">
        <p className="rounded-md overflow-hidden p-2 text-[var(--color-dark-gray)] font-semibold text-base bg-white shadow-lg">
          {description}
        </p>
        <ListOfWeeks weeks={weeks} />
      </main>
    </div>
  );
}
