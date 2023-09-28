import { SvgCheck } from "@assets/icons/svgIcons";

export function CardTrainer({
  id,
  nombre,
  certificacion,
  experencia,
  perfilimg,
}) {
  return (
    <div className="max-w-sm flex justify-between items-center rounded-md font-bold cursor-pointer transition-all hover:scale-105">
      <section className="flex flex-col">
        <div className=""></div>
        <img
          src={perfilimg}
          alt=""
          className="w-12 h-auto object-cover rounded-full mr-4 ml-1"
        />
        <div className="">
          <div className="text-lg font-bold mb-1 flex items-center">
            {" "}
            {nombre} <SvgCheck size={12} />{" "}
          </div>
          <div className="text-xs text-[var(--color-dark-gray)]">
            Certificado: {certificacion}
          </div>
          <div className="text-xs text-[var(--color-dark-gray)]">
            Exp: {experencia}
          </div>
        </div>
      </section>
    </div>
  );
}
