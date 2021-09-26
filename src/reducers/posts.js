import { FETCH_ALL, CREATE, DELETE, UPDATE, LIKE } from "../constants/actionTypes"

const initialState = () => [{
  posts: ""
}]

export const posts = (posts = initialState, action) => {
  switch (action.type) {
    case FETCH_ALL:
      return action.payload
    case CREATE:
      return [...posts, action.payload]
    case UPDATE:
    case LIKE:
      return posts.map((post) => post._id === action.payload._id ? action.payload : post)
    case DELETE:
      return posts.filter((post) => post.id !== action.payload)
    default:
      return posts
  }
}