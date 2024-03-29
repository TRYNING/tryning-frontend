import { MUSCLE_COLORS } from "@common/constants/colors";

export function Cubo({ muscle, size = "10px" }) {
  const color = MUSCLE_COLORS[muscle];
  return (
    <div
      className="rounded-full"
      style={{ background: color, width: size, height: size }}
    ></div>
  );
}
