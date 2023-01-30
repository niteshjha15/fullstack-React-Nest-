import axios from "axios";

// api with custom backend
export const api = axios.create({
  baseURL: "http://localhost:8000",
  headers: {
    "Content-Type": "application/json",
  },
});

export function externalApi(path, headers) {
  return axios.create({
    baseURL: path,
    headers,
  });
}
