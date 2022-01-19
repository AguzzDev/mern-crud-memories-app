import { AUTH, LOGOUT } from "constants/actionTypes"

export const auth = (auth = { authData: null }, action) => {
  switch (action.type) {
    case AUTH:
      localStorage.setItem("profile", JSON.stringify({ ...action?.data }))
      return {
        ...auth,
        authData: action?.data
      }
    case LOGOUT:
      localStorage.clear()
      return {
        ...auth,
        authData: null
      }
    default:
      return auth
  }
}