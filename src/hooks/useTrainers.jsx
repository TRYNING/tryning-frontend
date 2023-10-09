import { useState, useEffect } from "react";
import { fetchAllTrainers } from "../services/trainer.servises";
export function useTrainers() {
  const [trainers, setTrainers] = useState();
  const [error, setError] = useState(false);
  useEffect(() => {
    fetchAllTrainers()
      .then((data) => setTrainers(data))
      .catch((err) => {
        setError(true);
        console.error(err);
      });
  }, []);

  return { trainers, error };
}
