import axios from "axios";

export const API = axios.create({
  baseURL: "http://localhost:5000/api",
});

// include jwt automatically if present
API.interceptors.request.use((config) => {
  const token = localStorage.getItem("burro_token");
  if (token) config.headers.Authorization = `Bearer ${token}`;
  return config;
});
