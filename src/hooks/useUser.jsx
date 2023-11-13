import { useState, useEffect } from "react";
import { fetchAllByUsername } from "../services/search.servises";

export function useUser({ idUser }) {
  const [user, setUser] = useState();
  const [error, setError] = useState(false);
  useEffect(() => {
    fetchAllByUsername({ idUser })
      .then((data) => setUser(data))
      .catch((err) => {
        setError(true);
        console.error(err);
      });
  }, [idUser]);

  return { user, error };
}
