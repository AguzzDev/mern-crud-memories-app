import { useLocalStorage } from "hook/useLocalStorage";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router";
import { Link } from "react-router-dom";

export const Header = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const { user } = useLocalStorage();

  const logoutButton = () => {
    dispatch({ type: "LOGOUT" });

    history.push("/auth");
  };

  return (
    <section className="flex items-center justify-between pb-3 select-none">
      <h1 className="text-2xl md:text-3xl font-bold text-gray-900">
        MemoriesApp
      </h1>

      <div className="flex items-center space-x-2 md:space-x-5">
        {user ? (
          <>
            <div className="w-8 h-8 md:w-12 md:h-12">
              <img
                src="./userNoPicture.svg"
                alt="User Pic"
                className="w-full h-full object-cover rounded-full"
              />
            </div>
            <h1 className="text-sm md:text-xl">{user.name}</h1>

            <button
              onClick={logoutButton}
              className="text-sm lg:text-base font-semibold py-3 px-5 bg-white bg-opacity-50 hover:bg-opacity-70 rounded-xl"
            >
              Logout
            </button>
          </>
        ) : (
          <Link
            to="/auth"
            className="font-semibold py-3 px-5 bg-white bg-opacity-50  hover:bg-opacity-70 rounded-xl"
          >
            Login
          </Link>
        )}
      </div>
    </section>
  );
};
