import axios from "axios";

const API = "http://localhost:7000/api";

export const registerRequest = (user) => axios.post(`${API}/register`, user);
