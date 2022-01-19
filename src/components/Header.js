import { useState } from "react"
import { useDispatch } from "react-redux";
import { useHistory } from "react-router";
import { Link } from "react-router-dom"

export const Header = () => {
  const dispatch = useDispatch();
  const history = useHistory()
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("profile")))

  const logoutButton = () => {
    dispatch({ type: "LOGOUT" })

    history.push("/auth")
    setUser(null)
  }

  return (
    <div className="w-full flex items-center justify-between px-5  py-2 select-none">
      <div>
        <h1 className="text-3xl font-bold text-gray-900">MemoriesApp</h1>
      </div>

      <div className="flex items-center space-x-5">
        {user ?
          <>
            <div className="w-12 h-12">
              <img src="./userNoPicture.svg"
                alt="User Pic"
                className="w-full h-full object-cover rounded-full" />
            </div>
            <h1 className="text-xl">{user.result.name}</h1>

            <button
              onClick={logoutButton}
              className="font-semibold py-3 px-5 bg-white bg-opacity-50  hover:bg-opacity-70 rounded-xl"
            >Logout
            </button>
          </>
          :
          <Link
            to="/auth"
            className="font-semibold py-3 px-5 bg-white bg-opacity-50  hover:bg-opacity-70 rounded-xl"
          >Login
          </Link>
        }
      </div>

    </div>
  )
}
