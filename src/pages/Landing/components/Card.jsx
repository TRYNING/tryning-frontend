export function Card({ title, image }) {
  return (
    <div className="flex flex-col items-center border rounded-lg md:max-w-xs hover:bg-slate-100 max-h-full">
      <img
        className="object-cover flex-1 rounded-t-lg h-96 md:h-40 aspect-video md:w-full md:rounded-lg"
        src={image}
        alt=""
      />
      <div className="flex flex-col justify-between p-4 leading-normal ">
        <h5 className="text-xl font-bold tracking-tight text-[var(--color-dark-gray)] text-center">
          {title}
        </h5>
      </div>
    </div>
  );
}
