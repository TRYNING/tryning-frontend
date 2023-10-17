export function EmojisContainer({ titulo, parrafo, color }) {
  return (
    <div
      className="bg-[var(--color-gray)] my-20 flex justify-center items-start flex-col gap-11 text-left"
      style={{ background: color }}
    >
      <h1 className="text-2xl font-bold italic">{titulo}</h1>
      <p className="text-sm text-[var(--color-dark-gray)]">{parrafo}</p>
    </div>
  );
}
