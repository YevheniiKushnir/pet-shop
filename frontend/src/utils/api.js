import axios from "axios";

export const BASE_URL = "http://localhost:3333";

const API = axios.create({
  baseURL: BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

export default API;
