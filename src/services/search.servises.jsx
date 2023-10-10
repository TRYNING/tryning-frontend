import { API } from "@common/constants/api";

export async function fetchAllByUsername({ username }) {
  try {
    const response = await fetch(
      `${API.BASE}${API.SEARCH}?username=${username}`
    );
    const json = await response.json();
    return json;
  } catch (err) {
    console.log("error fetching plans");
  }
}
