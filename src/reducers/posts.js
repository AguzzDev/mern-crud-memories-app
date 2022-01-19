import { LOADING_TRUE, LOADING_FALSE, FETCH_ALL, CREATE, DELETE, UPDATE, LIKE, FETCH_BY_SEARCH } from "constants/actionTypes"

export const posts = (state = { posts: [], isLoading: true }, action) => {
  switch (action.type) {
    case LOADING_TRUE:
      return { ...state, isLoading: true }
    case LOADING_FALSE:
      return { ...state, isLoading: false }
    case FETCH_ALL:
      return { ...state, posts: action.payload }
    case FETCH_BY_SEARCH:
      return { ...state, posts: action.payload }
    case CREATE:
      return { ...state, posts: [...state.posts, action.payload] }
    case UPDATE:
    case LIKE:
      return { ...state, posts: state.posts.map((post) => post._id === action.payload._id ? action.payload : post) }
    case DELETE:
      return { ...state, posts: state.posts.filter((post) => post.id !== action.payload) }
    default:
      return state
  }
}