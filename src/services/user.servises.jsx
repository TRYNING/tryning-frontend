import { API } from "@common/constants/api";

export async function fetchUserById({ idUser }) {
  try {
    const response = await fetch(`${API.BASE}${API.USERS}/${idUser}`);
    const json = await response.json();
    return json;
  } catch (err) {
    console.log("error fetching plans");
  }
}
