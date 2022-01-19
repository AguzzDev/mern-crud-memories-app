export function useLocalStorage() {
  const user = JSON.parse(localStorage.getItem("profile"))


  return { user }
}