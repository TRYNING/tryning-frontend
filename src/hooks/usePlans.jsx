import { useState, useEffect } from "react";
import { fetchPlansUser } from "../services/plans.servises";
import { fetchPlanById } from "../services/plans.servises";

export function usePlans({ userId }) {
  const [plans, setPlans] = useState();
  const [error, setError] = useState(false);
  useEffect(() => {
    fetchPlansUser({ userId })
      .then((data) => setPlans(data))
      .catch((err) => {
        setError(true);
        console.error(err);
      });
  }, [userId]);

  return { plans, error };
}

export function usePlansById({ planId }) {
  const [plan, setPlan] = useState();
  const [error, setError] = useState(false);

  useEffect(() => {
    fetchPlanById({ planId })
      .then((data) => setPlan(data[0]))
      .catch((err) => {
        setError(true);
        console.error(err);
      });
  }, [planId]);

  return { plan, error };
}
