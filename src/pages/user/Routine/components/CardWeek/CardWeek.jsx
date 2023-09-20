import { ListOfDays } from "../ListOFDays/ListOfDays";

export function CardWeek({ week, number }) {
  return (
    <div className="flex flex-col gap-1 pl-3 ">
      <header className="flex items-center gap-2">
        <span className="h-3 w-3 rounded-sm bg-[var(--color-primary)]"></span>
        <h2 className="text-base font-semibold mb-1">Semana {number}</h2>
      </header>
      <ListOfDays days={week} />
    </div>
  );
}
