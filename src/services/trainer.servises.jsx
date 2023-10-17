import { API } from "@common/constants/api";

export async function fetchAllTrainers() {
  try {
    const response = await fetch(`${API.BASE}${API.TRAINERS}`);
    const json = await response.json();
    return json;
  } catch (err) {
    console.log("error fetching plans");
  }
}

export async function fetchSearchTrainers({ search }) {
  const { name } = search;
  if (name === "") return;

  try {
    const response = await fetch(`${API.BASE}/search/trainers?name=${name}`);
    const json = await response.json();
    return json;
  } catch (err) {
    console.log("error fetching trainers");
  }
}
