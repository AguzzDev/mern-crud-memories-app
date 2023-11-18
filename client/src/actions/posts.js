import * as api from "api";
import {
  CREATE,
  DELETE,
  UPDATE,
  LIKE,
  FETCH_ALL,
  FETCH_BY_SEARCH,
  LOADING_TRUE,
  LOADING_FALSE,
  NETWORK_ERROR,
} from "constants/actionTypes";
import { sendAlert } from "utils/sendAlert";

export const getPosts = () => async (dispatch) => {
  try {
    dispatch({ type: LOADING_TRUE });
    const { data } = await api.fetchPosts();

    dispatch({ type: FETCH_ALL, payload: data });
    dispatch({ type: LOADING_FALSE });
  } catch (error) {
    dispatch({ type: NETWORK_ERROR });
  }
};

export const getPostsBySearch = (searchQuery) => async (dispatch) => {
  try {
    dispatch({ type: LOADING_TRUE });
    const { data } = await api.fetchPostsBySearch(searchQuery);

    dispatch({ type: FETCH_BY_SEARCH, payload: data });
    dispatch({ type: LOADING_FALSE });
  } catch (error) {
    dispatch({ type: NETWORK_ERROR });
  }
};

export const createPost = (post) => async (dispatch) => {
  try {
    const { data } = await api.createPost(post);

    dispatch({ type: CREATE, payload: data });

    return sendAlert({ type: "success", message: "New Memory Created" });
  } catch (error) {
    if (error.response.status === 400) {
      return sendAlert({ type: "err", message: error.response.data });
    }
  }
};

export const updatePost = (id, post) => async (dispatch) => {
  try {
    const { data } = await api.updatePost(id, post);

    dispatch({ type: UPDATE, payload: data });

    return sendAlert({ type: "success", message: "Memory Update" });
  } catch (error) {
    if (error.response.status === 400) {
      return sendAlert({ type: "err", message: error.response.data });
    }
  }
};

export const deletePost = (id) => async (dispatch) => {
  try {
    await api.deletePost(id);

    dispatch({ type: DELETE, payload: id });

    return sendAlert({ type: "success", message: "Memory Erased" });
  } catch (error) {
    if (error.response.status === 400) {
      return sendAlert({ type: "err", message: error.response.data });
    }
  }
};

export const likePost = (id) => async (dispatch) => {
  const user = JSON.parse(localStorage.getItem("profile"));

  try {
    const { data } = await api.likePost(id, user._id);

    dispatch({ type: LIKE, payload: data });
  } catch (error) {
    if (error.response.status === 400) {
      return sendAlert({ type: "err", message: error.response.data });
    }
  }
};
