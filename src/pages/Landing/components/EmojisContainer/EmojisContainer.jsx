export function EmojisContainer({ imgurl, titulo, parrafo, color }) {
  return (
    <div
      className="bg-[var(--color-gray)] my-20 px-10 flex justify-center items-start flex-col gap-11 text-left"
      style={{ background: color }}
    >
      <img className="aspect-square w-100" src={imgurl} alt="" />
      <h1 className="text-2xl font-bold italic">{titulo}</h1>
      <p className="text-sm text-[var(--color-dark-gray)]">{parrafo}</p>
    </div>
  );
}
