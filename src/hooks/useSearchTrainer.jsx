import { useContext } from "react";
import { SearchTrainerContext } from "../context/SearchTrainerContext";

export const useSearchTrainerContext = () => {
  return useContext(SearchTrainerContext);
};
