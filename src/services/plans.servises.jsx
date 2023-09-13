import { API } from "@common/constants/api";

export async function fetchPlansUser({ userId }) {
  try {
    const response = await fetch(`${API.BASE}/${API.PLANS}?userId=${userId}`);
    const json = await response.json();
    return json;
  } catch (err) {
    console.log("error fetching plans");
  }
}
