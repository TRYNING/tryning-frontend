import "../../../assets/styles/main.css";
export function Card({ title, image }) {
  return (
    <div className="flex flex-col items-center bg-slate-50 border border-slate-100 rounded-lg shadow md:max-w-xs hover:bg-slate-100 p-4 max-h-full">
      <img
        className="object-cover flex-1 rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-lg"
        src={image}
        alt=""
      />
      <div className="flex flex-col justify-between p-4 leading-normal ">
        <h5 className="text-2xl font-bold tracking-tight text-gray-900 text-center">
          {title}
        </h5>
      </div>
    </div>
  );
}
