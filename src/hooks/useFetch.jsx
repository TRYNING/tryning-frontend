import { useState, useCallback } from "react";

export const useFetch = () => {
  const [state, setState] = useState({
    data: null,
    isLoading: false,
    hasError: null,
  });

  const fetchData = useCallback(async (url) => {
    try {
      setState({
        isLoading: true,
        data: null,
        hasError: null,
      });
      const resp = await fetch(url);
      const data = await resp.json();
      setState({
        data,
        isLoading: false,
        hasError: null,
      });
    } catch (err) {
      setState({
        isLoading: false,
        data: null,
        hasError: err,
      });
    }
  }, []);

  return { fetchData, ...state };
};
