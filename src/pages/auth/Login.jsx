import { yupResolver } from "@hookform/resolvers/yup";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import { toast } from "react-toastify";
import { auth, loginUser } from "../../database/firebaseAuth";
import { createUserProfile, getProfile } from "../../database/firebaseUtils";
import { addUser } from "../../features/auth/authSlice";
import { loginValidation } from "../../validation/validationSchema";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(loginValidation),
  });

  const onSubmit = async (data) => {
    try {
      const res = await loginUser(data);
      if (res.error) {
        toast.error(res.code);
      } else {
        let userProfile = await getProfile(res.id);
        const loginUserInfo = {
          id: res.id,
          email: res.email,
          name: userProfile.name,
          role: userProfile.role,
        };
        dispatch(addUser(loginUserInfo));
        reset();
        navigate("/dashboard");
      }
    } catch (error) {
      toast.error("Something went wrong. Please try again.");
    }
  };

  const googleLogin = async () => {
    const provider = new GoogleAuthProvider(); // Instantiate the provider
    try {
      const res = await signInWithPopup(auth, provider);
      const user = res.user;

      // Optionally fetch or save user profile details
      const newUser = {
        id: user.uid,
        name: user.displayName,
        role: "user",
      };

      const userProfile = await getProfile(user.uid);

      if (!userProfile) {
        // If user profile doesn't exist, create a new one
        addUser(newUser);
        dispatch(addUser(newUser));
      } else {
        // Preserve existing role and set user information to Redux
        const updatedUser = {
          ...newUser,
          role: userProfile.role, // Keep the existing role
        };
        dispatch(addUser(updatedUser));
      }

      createUserProfile(newUser); // Optional: if you want to update the profile
      toast.success("Login successful!");
      navigate("/dashboard");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-500 to-purple-600">
      <div className="bg-white rounded-lg shadow-lg p-8 max-w-md w-full">
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">
          Welcome Back!
        </h2>

        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-semibold mb-2"
              htmlFor="email"
            >
              Email Address
            </label>
            <input
              type="email"
              id="email"
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none focus:border-blue-500"
              placeholder="Enter your email"
              {...register("email")}
            />
            {errors.email && (
              <span className="text-red-500">{errors.email?.message}</span>
            )}
          </div>

          <div className="mb-6">
            <label
              className="block text-gray-700 text-sm font-semibold mb-2"
              htmlFor="password"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none focus:border-blue-500"
              placeholder="Enter your password"
              {...register("password")}
            />
            {errors.password && (
              <span className="text-red-500">{errors.password?.message}</span>
            )}
          </div>

          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 transition duration-200"
          >
            Login
          </button>
        </form>

        <div className="my-4 flex items-center justify-center">
          <span className="border-b w-1/5 lg:w-1/4"></span>
          <span className="text-gray-500 text-sm mx-2">or</span>
          <span className="border-b w-1/5 lg:w-1/4"></span>
        </div>

        <button
          onClick={googleLogin}
          className="w-full bg-gray-700 text-white py-2 rounded-lg hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 transition duration-200 flex items-center justify-center"
        >
          <svg
            className="h-5 w-5 mr-2"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path
              d="M23.71 12.29a10 10 0 0 0-.1-1.06H12v4.13h6.29a5.62 5.62 0 0 1-2.4 3.68v3.05h3.88A10 10 0 0 0 24 12.3z"
              fill="#4285F4"
            />
            <path
              d="M12 24a11.9 11.9 0 0 0 8.4-3.09l-3.88-3.05a7.19 7.19 0 0 1-10.8-4.3H2.61v3.12A11.9 11.9 0 0 0 12 24z"
              fill="#34A853"
            />
            <path
              d="M4.69 14.56a7.09 7.09 0 0 1 0-4.73V6.71H.81a12 12 0 0 0 0 10.59z"
              fill="#FBBC04"
            />
            <path
              d="M12 4.76a6.53 6.53 0 0 1 4.59 1.8l3.43-3.44A11.43 11.43 0 0 0 12 0 11.9 11.9 0 0 0 2.61 6.71l3.88 3.12A7.1 7.1 0 0 1 12 4.76z"
              fill="#EA4335"
            />
          </svg>
          Login with Google
        </button>

        <p className="text-center text-gray-600 text-sm mt-4">
          Don’t have an account?{" "}
          <a
            href="/register"
            className="text-blue-500 hover:underline font-medium"
          >
            Register here
          </a>
        </p>
      </div>
    </div>
  );
};

export default Login;
