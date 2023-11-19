import axios from "axios";
import { useLocalStorage } from "hook/useLocalStorage";

const { user } = useLocalStorage();
const env =
  process.env.NODE_ENV === "development"
    ? "http://localhost:4000"
    : "https://api.memories-app.agustin-ribotta.xyz";

const API = axios.create({
  baseURL: env,
  headers: {
    "Access-Control-Allow-Origin": "*",
  },
});

const API_AUTH = axios.create({
  baseURL: env,
  headers: {
    "Access-Control-Allow-Origin": "*",
  },
});

API_AUTH.interceptors.request.use((req) => {
  if (localStorage.getItem("profile")) {
    req.headers.Authorization = `Bearer ${user.token}`;
    req.headers["user_id"] = user._id;
    req.headers["user_name"] = user.name;
  }
  return req;
});

export const fetchPosts = () => API_AUTH.get("/post");
export const fetchPostsBySearch = (searchQuery) =>
  API_AUTH.get(`/post/search?q=${searchQuery || "none"}`);
export const createPost = (newPost) => API_AUTH.post("/post", newPost);
export const updatePost = (id, updatedPost) =>
  API_AUTH.patch(`/post/${id}`, updatedPost);
export const deletePost = (id) => API_AUTH.delete(`/post/${id}`);
export const likePost = (id, userId) =>
  API_AUTH.patch(`/post/${id}/like`, { id, userId });

export const login = (user) => API.post("/user/login", user);
export const register = (user) => API.post("/user/register", user);
