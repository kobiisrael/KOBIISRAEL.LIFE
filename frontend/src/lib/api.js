import axios from "axios";

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;
export const API = `${BACKEND_URL}/api`;

export const apiClient = axios.create({
  baseURL: API,
  headers: { "Content-Type": "application/json" },
});

export const submitInquiry = (data) => apiClient.post("/inquiries", data).then((r) => r.data);
export const subscribeNewsletter = (data) => apiClient.post("/newsletter", data).then((r) => r.data);
export const fetchProjects = () => apiClient.get("/projects").then((r) => r.data);
