import pesas from "@assets/images/pesas.webp";

export function HeaderRoutine({
  title = "Rutina",
  subtitle = "",
  date,
  id = "",
}) {
  return (
    <header className="relative h-56 bg-white flex items-end">
      <img src={pesas} className="absolute w-full h-full z-10 object-cover" />
      <div className="absolute w-full h-full z-20 bg-[#272727c7]"></div>
      <section className="z-30 flex-1  w-full flex py-5 px-7">
        <div className="flex-1">
          <h3 className="text-[var(--color-primary)] text-4xl">
            {title} {id}
          </h3>
          <h2 className="text-base text-[var(--color-light-gray)]">
            {subtitle}
          </h2>
        </div>

        {date && (
          <span className="flex items-center font-bold text-white flex-grow-0">
            {date}
          </span>
        )}
      </section>
    </header>
  );
}
