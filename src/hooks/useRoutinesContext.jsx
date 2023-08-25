import { RoutinesContext } from "../context/RoutinesContextProvider";
import { useContext } from "react";

export function useRoutinesContext() {
  return useContext(RoutinesContext);
}
