import { createContext } from "react";
//import r from "@mocks/routines.json";
import m from "@mocks/mesociclos.json";
import micro from "@mocks/microciclos.json";
import d from "@mocks/dias.json";

export const RoutinesContext = createContext({});

export function RoutinesContextProvider({ children }) {
  const getMesociclos = (routineId) => {
    const mesociclos = m.filter(
      (mesociclo) => mesociclo.rutinaId === parseInt(routineId)
    );
    return { mesociclos };
  };

  const getMicrociclos = (mesocicloId) => {
    const microciclos = micro.filter(
      (microciclo) => microciclo.mesocicloId === parseInt(mesocicloId)
    );
    return { microciclos };
  };

  const getDays = (microcicloId) => {
    const days = d.filter((dia) => dia.microcicloId === parseInt(microcicloId));
    return { days };
  };

  return (
    <RoutinesContext.Provider
      value={{
        getMesociclos,
        getMicrociclos,
        getDays,
      }}
    >
      {children}
    </RoutinesContext.Provider>
  );
}
