import { Cubo } from "./Cubo";
import { Link } from "react-router-dom";
import { PrivateRoutes } from "@common/constants/routes";
import { MUSCLE_COLORS } from "@common/constants/colors";

export function CardDay({ id, number, muscles }) {
  const colors = muscles.map((muscle) => MUSCLE_COLORS[muscle]);
  return (
    <Link
      to={`${PrivateRoutes.DAYS}/${id}`}
      className="relative flex-1 flex flex-col gap-1 bg-white rounded-md overflow-hidden my-0.5 shadow-lg"
    >
      <div
        className="absolute w-full h-full"
        style={{
          background:
            colors.length > 1
              ? `linear-gradient(0deg, ${colors.toString()})`
              : `${colors[0]}`,
        }}
      ></div>
      <div className="relative w-full h-full flex justify-between items-center bg-white px-2 py-3 ml-[2px]">
        <h2 className="min-w-max text-black font-semibold text-xs capitalize z-10">
          Dia {number}
        </h2>

        <div className="flex gap-1 z-10">
          {muscles?.map((muscle) => {
            const key = crypto.randomUUID();

            return <Cubo key={key} muscle={muscle} size="8px" />;
          })}
        </div>
      </div>
    </Link>
  );
}
