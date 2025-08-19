import React, { useState } from "react";
import { CiLock, CiUser } from "react-icons/ci";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import Header from "../assets/images/header.jpg";
import { Link } from "react-router-dom";

const Login: React.FC = () => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  return (
    <div
      className="w-full  bg-fixed h-screen"
      style={{
        backgroundImage: `url(${Header})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="w-full h-full flex justify-center items-center font-roboto bg-black/50">
        <div className="bg-black text-white w-full max-w-md p-8 rounded-lg shadow-lg">
          <h1 className="text-center font-righteous text-4xl">Login</h1>
          <form className="space-y-4 my-10 mx-5">
            <label>Username:</label>
            <div className="h-full  flex items-center  border-b-2 border-gray-300">
              <CiUser className="text-xl" />
              <input
                type="text"
                className="outline-none p-2  w-full"
                placeholder="Enter you username"
              />
            </div>
            <label>Password:</label>

            <div className="h-full  flex items-center  border-b-2 border-gray-300 relative">
              <CiLock className="text-xl" />

              <input
                type={showPassword ? "text" : "password"}
                className="outline-none p-2 w-full"
                placeholder="Enter you password"
              />
              <span
                className="absolute right-2 cursor-pointer"
                onClick={togglePasswordVisibility}
              >
                {showPassword ? (
                  <FaRegEye className="text-xl cursor-pointer" />
                ) : (
                  <FaRegEyeSlash className="text-xl cursor-pointer" />
                )}
              </span>
            </div>
            <div className="flex items-center justify-between my-5">
              <div className="flex items-center">
                <input type="checkbox" id="rememberMe" />
                <label htmlFor="rememberMe" className="ml-2">
                  Remember me
                </label>
              </div>
              <a href="#" className="text-blue-500 hover:underline">
                Forgot password?
              </a>
            </div>
            <div>
              <button className="w-full bg-secondary-bg text-secondary p-3 font-bold hover:bg-amber-700 hover:text-white transition-colors duration-300">
                Login
              </button>
            </div>
            <div className="text-center mt-4">
              <span>Don't have an account? </span>
              <Link to="/register">
                <a className="text-blue-500 hover:underline">Register</a>
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
