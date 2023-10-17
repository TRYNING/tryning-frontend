import { createContext } from "react";
import { useState, useEffect, useRef, useCallback } from "react";
import { fetchSearchTrainers } from "../services/trainer.servises";

export const SearchTrainerContext = createContext();

export const SearchTrainerProvider = ({ children }) => {
  const [search, setSearch] = useState({
    name: "",
    certificate: "",
    location: "",
  });
  const [trainerSearched, setTrainerSearched] = useState([]);
  const [loading, setLoading] = useState(true);
  const [inputActive, setInputActive] = useState(false);
  const isFirstInput = useRef(true);
  const previousSearch = useRef(search);
  const inputRef = useRef(null);

  useEffect(() => {
    if (isFirstInput.current) {
      isFirstInput.current = search === "";
      return;
    }
  }, [search]);

  const searchTrainers = useCallback(async ({ search }) => {
    if (previousSearch.current === search.name) return;
    try {
      setLoading(true);
      const newMovies = await fetchSearchTrainers({ search });
      setTrainerSearched(newMovies);
      previousSearch.current = search.name;
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  });

  return (
    <SearchTrainerContext.Provider
      value={{
        search,
        setSearch,
        trainerSearched,
        searchTrainers,
        loading,
        isFirstInput,
        inputRef,
        setInputActive,
        inputActive,
      }}
    >
      {children}
    </SearchTrainerContext.Provider>
  );
};
