import { useState, useEffect } from "react";
import { fetchUserById } from "@services/user.servises";

export function useUser({ idUser }) {
  const [user, setUser] = useState();
  const [error, setError] = useState(false);
  useEffect(() => {
    fetchUserById({ idUser })
      .then((data) => setUser(data))
      .catch((err) => {
        setError(true);
        console.error(err);
      });
  }, [idUser]);

  return { user, error };
}
