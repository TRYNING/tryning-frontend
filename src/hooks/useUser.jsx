import { useState, useEffect } from "react";
import { fetchAllByUsername } from "../services/search.servises";

export function useUser({ username }) {
  const [user, setUser] = useState();
  const [error, setError] = useState(false);
  useEffect(() => {
    fetchAllByUsername({ username })
      .then((data) => setUser(data))
      .catch((err) => {
        setError(true);
        console.error(err);
      });
  }, [username]);

  return { user, error };
}
