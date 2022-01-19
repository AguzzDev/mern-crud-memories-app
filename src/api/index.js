import axios from "axios"

const API = axios.create({
  baseURL: "https://mern-crud-memories-app.herokuapp.com",
  headers: {
    "Access-Control-Allow-Origin": "*"
  }
})

API.interceptors.request.use(req => {
  if (localStorage.getItem("profile")) {
    req.headers.Authorization = `Bearer ${JSON.parse(localStorage.getItem("profile"))}`
  }
  return req
})

export const fetchPosts = () => API.get("/posts")
export const fetchPostsBySearch = (searchQuery) => API.get(`/posts/search?q=${searchQuery.search || "none"}`)
export const createPost = (newPost) => API.post("/posts", newPost)
export const updatePost = (id, updatedPost) => API.patch(`/posts/${id}`, updatedPost)
export const deletePost = (id) => API.delete(`/posts/${id}`)
export const likePost = (id) => API.patch(`/posts/${id}/likePost`)

export const login = (user) => API.post("/user/login", user)
export const register = (user) => API.post("/user/register", user)