import { API } from "@common/constants/api";

export async function fetchPlansUser({ userId }) {
  if (!userId) return;
  try {
    const response = await fetch(`${API.BASE}${API.PLANS}?userId=${userId}`);
    const json = await response.json();
    return json;
  } catch (err) {
    console.log("error fetching plans");
  }
}

export async function fetchPlanById({ planId }) {
  if (!planId) return;
  try {
    const response = await fetch(`${API.BASE}${API.PLANS}?planId=${planId}`);
    const json = await response.json();
    return json;
  } catch (err) {
    console.log("error fetching plans");
  }
}
