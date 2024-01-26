import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Register = ({ onLogin }) => {
  const navigate = useNavigate();

  const [user, setUser] = useState({
    username: "",
    email:"",
    password: "",
    confirm_password: "",
  });
  const [errorMessage, setErrorMessage] = useState();

  const showError = (message) => {
    setErrorMessage(message);
    setTimeout(() => {
      setErrorMessage(null);
    }, 3000);
  };


  const handleSignup = async (e) => {
    e.preventDefault()
    if (user.password !== user.confirm_password) {
        setErrorMessage("Match the passwords");
    } else {
      try {
        const response = await axios.post("http://127.0.0.1:8000/register", {
          username: user.username,
          email: user.email,
          password: user.password,
        });
        if (response.status === 201) {
          navigate("/login");
        } else {
          showError("Registration failed. Please try again.");
        }
      } catch (error) {
        showError("Registration failed. Please try again.");
        console.error("Registration Failed:", error.message);
      }
    }
  };
  return (
    <div className="relative flex min-h-screen text-gray-800 antialiased flex-col justify-center overflow-hidden bg-gray-50 py-6 sm:py-12">
      <div className="relative py-3 sm:w-96 mx-auto text-center">
        <span className="text-2xl font-light ">Login to your account</span>
        <form className="mt-4 bg-white shadow-md rounded-lg text-left">
          <div className="h-2 bg-purple-400 rounded-t-md"></div>
          <div className="px-8 py-6 ">
            <label className="block font-semibold"> Username </label>
            <input
              type="text"
              placeholder="username"
              className="border w-full h-5 px-3 py-5 mt-2 hover:outline-none focus:outline-none focus:ring-indigo-500 focus:ring-1 rounded-md"
              onChange={(e) => {
                setUser({ ...user, username: e.target.value });
              }}
              autoComplete="username"
            />
            <label className="block font-semibold"> Email </label>
            <input
              type='email'
              placeholder="name@email.com"
              className="border w-full h-5 px-3 py-5 mt-2 hover:outline-none focus:outline-none focus:ring-indigo-500 focus:ring-1 rounded-md"
              onChange={(e) => {
                setUser({ ...user, email: e.target.value });
              }}
              autoComplete="username"
            />
            <label className="block mt-3 font-semibold"> Password </label>
            <input
              type="password"
              placeholder="Password"
              className="border w-full h-5 px-3 py-5 mt-2 hover:outline-none focus:outline-none focus:ring-indigo-500 focus:ring-1 rounded-md"
              onChange={(e) => {
                setUser({ ...user, password: e.target.value });
              }}
              autoComplete="new-password"
            />
            <label className="block mt-3 font-semibold">
              Confirm Password
            </label>
            <input
              type="password"
              placeholder="Confirm Password"
              className="border w-full h-5 px-3 py-5 mt-2 hover:outline-none focus:outline-none focus:ring-indigo-500 focus:ring-1 rounded-md"
              onChange={(e) => {
                setUser({ ...user, confirm_password: e.target.value });
              }}
              autoComplete="new-password"
            />
            <div className="flex justify-between items-baseline">
              <button
                type="submit"
                className="mt-4 bg-purple-500 py-2 px-6 rounded-md hover:bg-purple-600"
                onClick={handleSignup}
              >
                Register
              </button>
            </div>
            {errorMessage && (
              <div
                style={{
                  backgroundColor: "red",
                  color: "white",
                  padding: "10px",
                  borderRadius: "5px",
                  margin: "10px",
                }}
              >
                {errorMessage}
              </div>
            )}
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
