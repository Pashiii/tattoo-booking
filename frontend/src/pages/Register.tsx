import React, { useState } from "react";
import { CiLock, CiUser } from "react-icons/ci";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import Header from "../assets/images/header.jpg";
import { Link } from "react-router-dom";
import { useForm, type SubmitHandler } from "react-hook-form";

interface IFormInput {
  username: string;
  password: string;
  confirmPassword: string;
}

const Register: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm<IFormInput>();

  const password = watch("password");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const onSubmit: SubmitHandler<IFormInput> = (data) => {
    if (data.password !== data.confirmPassword) {
      return console.log("Password not match");
    }
    console.log(data);
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  const toggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  return (
    <div
      className="w-full h-screen bg-fixed "
      style={{
        backgroundImage: `url(${Header})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="w-full h-full flex justify-center items-center font-roboto bg-black/50">
        <div className="bg-black text-white w-full max-w-md p-8 rounded-lg shadow-lg">
          <h1 className="text-center font-righteous text-4xl">Register</h1>
          <form
            className="space-y-4 my-10 mx-5"
            onSubmit={handleSubmit(onSubmit)}
          >
            {" "}
            <label>Username:</label>
            <div
              className={`h-full  flex items-center  border-b-2 relative ${errors.username ? "border-red-500" : "border-gray-300 "}`}
            >
              <CiUser className="text-xl" />
              <input
                type="text"
                className="outline-none p-2 w-full"
                placeholder="Enter you username"
                {...register("username", {
                  required: "Username is required",
                  maxLength: 20,
                })}
                aria-invalid={errors.username ? "true" : "false"}
              />
            </div>
            {errors.username && (
              <p role="alert" className="text-red-500 text-sm">
                {errors.username.message}
              </p>
            )}
            <label>Password:</label>
            <div
              className={`h-full  flex items-center  border-b-2 relative ${errors.password ? "border-red-500" : "border-gray-300 "}`}
            >
              <CiLock className="text-xl" />

              <input
                type={showPassword ? "text" : "password"}
                className="outline-none p-2 w-full"
                placeholder="Enter you password"
                {...register("password", {
                  required: "Password is required",
                  pattern: {
                    value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).+$/,
                    message:
                      "Password must include uppercase, lowercase, number, and symbol",
                  },
                })}
                aria-invalid={errors.password ? "true" : "false"}
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
            {errors.password && (
              <p role="alert" className="text-red-500 text-sm">
                {errors.password.message}
              </p>
            )}
            <label>Confirm Password:</label>
            <div
              className={`h-full  flex items-center  border-b-2 relative ${errors.confirmPassword ? "border-red-500" : "border-gray-300 "}`}
            >
              <CiLock className="text-xl" />

              <input
                type={showConfirmPassword ? "text" : "password"}
                className="outline-none p-2 w-full"
                placeholder="Enter you password"
                {...register("confirmPassword", {
                  required: "Please confirm your password",
                  validate: (value) =>
                    value === password || "Passwords do not match",
                })}
              />
              <span
                className="absolute right-2 cursor-pointer"
                onClick={toggleConfirmPasswordVisibility}
              >
                {showConfirmPassword ? (
                  <FaRegEye className="text-xl cursor-pointer" />
                ) : (
                  <FaRegEyeSlash className="text-xl cursor-pointer" />
                )}
              </span>
            </div>
            {errors.confirmPassword && (
              <p role="alert" className="text-red-500 text-sm">
                {errors.confirmPassword.message}
              </p>
            )}
            <div className="flex items-center justify-between my-5">
              <div className="flex items-center">
                <input type="checkbox" id="terms" />
                <label htmlFor="terms" className="ml-2">
                  I agree to the terms and conditions
                </label>
              </div>
            </div>
            <div>
              <button
                className="w-full bg-secondary-bg text-secondary p-3 font-bold hover:bg-amber-700 hover:text-white transition-colors duration-300"
                type="submit"
              >
                Register
              </button>
            </div>
            <div className="text-center mt-4">
              <span>Already have an account? </span>
              <Link to="/login">
                <span className="text-secondary-bg hover:underline">Login</span>
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
