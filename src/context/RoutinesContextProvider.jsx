import { createContext, useState } from "react";
import { useAuthContext } from "../hooks/useAuthContext";
import r from "@mocks/routines.json";

export const RoutinesContext = createContext({});

export function RoutinesContextProvider({ children }) {
  const [routines, setRoutines] = useState(r);
  const { user } = useAuthContext();
  const getRoutines = () => {};

  const getRoutine = (routineId) => {};

  const getMesociclo = (mesociclosId) => {};
  return (
    <RoutinesContext.Provider
      value={{
        routines,
        getRoutines,
        getRoutine,
        getMesociclo,
      }}
    >
      {children}
    </RoutinesContext.Provider>
  );
}
