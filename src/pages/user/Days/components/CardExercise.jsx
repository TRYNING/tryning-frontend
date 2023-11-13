import { MUSCLE_COLORS } from "@common/constants/colors";
import { useState } from "react";

export function CardExercise({
  name,
  reps = 10,
  series = 3,
  rir,
  rpe = 8,
  grupoM,
}) {
  const color = MUSCLE_COLORS[grupoM];
  const [open, setOpen] = useState(false);
  return (
    <div className="flex flex-col">
      <div
        className="text-black bg-white flex px-4 py-3 justify-between items-center"
        style={{ borderLeft: `4px solid ${color}` }}
        onClick={() => setOpen(!open)}
      >
        <main className="flex flex-col">
          <h3 className="font-bold">{name}</h3>
          <div className="flex gap-1 font-semibold text-stone-600">
            <div className="">
              <span>{series}</span>x<span>{reps}</span>
            </div>
            <div className="info-RIR">RIR {rir}</div>
            <div className="info-RPE">RPE {rpe}</div>
          </div>
        </main>
        <div className="w-5 h-5 border-2 border-[var(--color-primary)] rounded-full "></div>
      </div>
      <div
        className={`${
          !open ? "h-0" : "h-auto"
        } bg-white rounded-b-md overflow-hidden w-full`}
      >
        <div className="h-44"></div>
      </div>
    </div>
  );
}
