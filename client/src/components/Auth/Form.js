import { useDispatch } from "react-redux";
import { useHistory } from "react-router";
import { login, register } from "actions/auth";
import { useState } from "react";

export function Form() {
  const dispatch = useDispatch();
  const history = useHistory();

  const [showPassword, setShowPassword] = useState(false);
  const [signup, setSignup] = useState(true);
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    signup ? dispatch(login(user, history)) : dispatch(register(user, history));
  };

  const changeScreen = () => {
    setSignup((prevScreen) => !prevScreen);
  };

  const handleShowPassword = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };

  return (
    <>
      <form className="flex flex-col w-full" onSubmit={handleSubmit}>
        {signup ? (
          <div className="flex flex-col items-center space-y-4  w-3/5 mx-auto">
            <div className="px-5 py-1  bg-white bg-opacity-60 rounded-md w-full">
              <input
                className="bg-transparent outline-none w-full"
                name="email"
                onChange={handleChange}
                autoComplete="off"
                placeholder="Email"
                autoFocus
              />
            </div>
            <div className="flex px-5 py-1  bg-white bg-opacity-60 rounded-md w-full">
              <input
                className="bg-transparent outline-none w-full"
                type={showPassword ? "text" : "password"}
                name="password"
                onChange={handleChange}
                autoComplete="off"
                placeholder="Password"
              />
              <button type="button" onClick={handleShowPassword}>
                {showPassword ? (
                  <img src="./visibility.svg" alt="Icon" className="w-5 h-5" />
                ) : (
                  <img
                    src="./noVisibility.svg"
                    alt="Icon"
                    className="w-5 h-5"
                  />
                )}
              </button>
            </div>

            <button
              type="submit"
              className="w-full py-3 px-5 bg-white bg-opacity-50  hover:bg-opacity-70 rounded-xl  text-sm md:text-base"
            >
              Login
            </button>

            <button
              onClick={changeScreen}
              className="hover:underline pb-7 lg:pb-0"
            >
              No registered? Register Now
            </button>
          </div>
        ) : (
          <div className="flex flex-col items-center justify-between w-full">
            <div>
              <img src="./userNoPicture.svg" alt="" className="w-20 h-20" />
            </div>

            <div className="flex flex-col mt-2 space-y-2 w-3/5">
              <div className="px-5 py-1  bg-white bg-opacity-60 rounded-md">
                <input
                  className="bg-transparent outline-none w-full"
                  type="text"
                  name="name"
                  onChange={handleChange}
                  autoComplete="off"
                  placeholder="Nickname"
                  autoFocus
                />
              </div>
              <div className="flex  px-5 py-1  bg-white bg-opacity-60 rounded-md">
                <input
                  className="bg-transparent outline-none w-full"
                  name="email"
                  onChange={handleChange}
                  autoComplete="off"
                  placeholder="Email"
                />
              </div>
              <div className="flex px-5 py-1 bg-white bg-opacity-60 rounded-md">
                <input
                  className="bg-transparent outline-none w-full"
                  type={showPassword ? "text" : "password"}
                  name="password"
                  onChange={handleChange}
                  autoComplete="off"
                  placeholder="Password"
                />
                <button type="button" onClick={handleShowPassword}>
                  {showPassword ? (
                    <img
                      src="./visibility.svg"
                      alt="Icon"
                      className="w-5 h-5"
                    />
                  ) : (
                    <img
                      src="./noVisibility.svg"
                      alt="Icon"
                      className="w-5 h-5"
                    />
                  )}
                </button>
              </div>
              <div className="flex  px-5 py-1  bg-white bg-opacity-60 rounded-md">
                <input
                  className="bg-transparent outline-none w-full"
                  type={showPassword ? "text" : "password"}
                  name="confirmPassword"
                  onChange={handleChange}
                  autoComplete="off"
                  placeholder="Confirm Password"
                />
                <button type="button" onClick={handleShowPassword}>
                  {showPassword ? (
                    <img
                      src="./visibility.svg"
                      alt="Icon"
                      className="w-5 h-5"
                    />
                  ) : (
                    <img
                      src="./noVisibility.svg"
                      alt="Icon"
                      className="w-5 h-5"
                    />
                  )}
                </button>
              </div>
              <button
                type="submit"
                className="mx-auto py-3 px-5 bg-white bg-opacity-50  hover:bg-opacity-70 rounded-xl w-3/4 md:w-2/4"
              >
                Create Account
              </button>
              <button onClick={changeScreen} className="hover:underline">
                Already registered?
              </button>
            </div>
          </div>
        )}
      </form>
    </>
  );
}
