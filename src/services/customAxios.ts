import axios from "axios";
import { setupCache } from "axios-cache-interceptor";

const axiosInstance = axios.create({
  baseURL: "https://pokeapi.co/api/v2",
  timeout: 60000, // 60 seconds timeout
  headers: {
    "Content-Type": "application/json",
  },
});

export const customAxios = setupCache(axiosInstance, {
  ttl: 30 * 60 * 1000, // Cache responses for 10 minutes
  methods: ["get"],
});
