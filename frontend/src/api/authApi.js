import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:5000/api/auth", // adjust port if needed
});

export const signupUser = (data) => API.post("/signup", data);
export const loginUser = (data) => API.post("/login", data);
