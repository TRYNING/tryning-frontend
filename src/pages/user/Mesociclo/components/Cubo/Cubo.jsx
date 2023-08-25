import { MUSCLE_COLORS } from "@common/constants/components";

export function Cubo({ muscle, size = "12px" }) {
  const color = MUSCLE_COLORS[muscle];
  return <div style={{ background: color, width: size, height: size }}></div>;
}