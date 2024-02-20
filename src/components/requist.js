import axios from "axios";

export const requist = axios.create({baseURL: import.meta.env.VITE_URL})