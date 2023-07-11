import axios from "axios";

export const registerRequest = (user) => axios.post(`${API}/register`, user);
