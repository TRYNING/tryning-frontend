import { createContext, useState } from "react";
import { useAuthContext } from "../hooks/useAuthContext";
import r from "@mocks/routines.json";
import m from "@mocks/mesociclos.json";

export const RoutinesContext = createContext({});

export function RoutinesContextProvider({ children }) {
  const [routines, setRoutines] = useState(r);
  const { user } = useAuthContext();

  const getRoutines = () => {};

  const getRoutine = (routineId) => {};

  const getMesociclos = (routineId) => {
    const mesociclos = m.filter(
      (mesociclo) => mesociclo.rutinaId === parseInt(routineId)
    );
    return { mesociclos };
  };

  return (
    <RoutinesContext.Provider
      value={{
        routines,
        getRoutines,
        getRoutine,
        getMesociclos,
      }}
    >
      {children}
    </RoutinesContext.Provider>
  );
}
