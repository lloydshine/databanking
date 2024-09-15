import axios from "axios";

const apiClient = axios.create({
  baseURL: "https://mature-eminent-treefrog.ngrok-free.app/api",
  withCredentials: true,
  headers: {
    Accept: "application/json",
  },
});

apiClient.interceptors.request.use((config) => {
  const token = localStorage.getItem("api_token");

  if (token) {
    config.headers["Authorization"] = `Bearer ${token}`;
  }

  config.headers["ngrok-skip-browser-warning"] = "true";
  return config;
});

export default apiClient;
