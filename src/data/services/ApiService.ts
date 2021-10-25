import axios from "axios";
const url = "https://workflow.abaris.com.br";

export const ApiService = axios.create({
  baseURL: url,
  headers: {
    "Content-Type": "application/json",
  },
});
