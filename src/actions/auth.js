import * as api from "api"
import { AUTH } from "constants/actionTypes";

export const login = (user, history) => async (dispatch) => {
  try {
    const { data } = await api.login(user)

    dispatch({ type: AUTH, data })
    history.push("/")
  } catch (error) {
    console.log(error)
  }
}

export const register = (user, history) => async (dispatch) => {
  try {
    const { data } = await api.register(user)

    dispatch({ type: AUTH, data })
    history.push("/")
  } catch (error) {
    console.log(error)
  }
}