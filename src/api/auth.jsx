import axios from "axios";

import { API_BASE } from "../common/constants/api";

export const registerRequest = (user) =>
  axios.post(`${API_BASE}/register`, user);
