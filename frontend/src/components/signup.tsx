import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import  { signup }  from "../services/api";

export default function Signup() {
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    image: "",
  });

  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:3000/user/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        // Store the token
        localStorage.setItem("token", data.token);
        // Navigate to /home
        navigate("/Brain");
      } else {
        setError(data.message || "Signup failed");
      }
    } catch (err) {
      setError("An error occurred. Please try again.");
      console.error(err);
    }
  };

  return (
    <div className="h-screen bg-gray-800 text-center">
      <h1 className="flex justify-center text-4xl text-white font-bold mb-4">Signup</h1>
      <form
        className="flex flex-col items-center jsutify-center p-5 mt-20"
        onSubmit={handleSubmit}
      >
        <input
          type="text"
          name="firstname"
          placeholder="firstname"
          className="bg-gray-700 p-2 rounded-lg text-white w-80 mb-4"
          value={formData.firstname}
          onChange={handleChange}
        />
        <input
          type="text"
          name="lastname"
          placeholder="lastname"
          className="bg-gray-700 p-2 rounded-lg text-white w-80 mb-4"
          value={formData.lastname}
          onChange={handleChange}
        />
        <input
          type="email"
          name="email"
          placeholder="email"
          className="bg-gray-700 p-2 rounded-lg text-white w-80 mb-4"
          value={formData.email}
          onChange={handleChange}
        />
        <input
          type="password"
          name="password"
          placeholder="password"
          className="bg-gray-700 p-2 rounded-lg text-white w-80 mb-4"
          value={formData.password}
          onChange={handleChange}
        />
        <input
          type="text"
          name="image"
          placeholder="image"
          className="bg-gray-700 p-2 rounded-lg text-white w-80 mb-4"
          value={formData.image}
          onChange={handleChange}
        />
        <button className="bg-purple-300 p-2 rounded-lg text-white w-80">
          Signup
        </button>
        {error && <p className="text-red-500 mt-2">{error}</p>}
        <p className="text text-pretty text-white">
          Already Have an Account?{" "}
          <Link to="/signin" className="text-purple-300 hover:text-gray-900">
            Login
          </Link>
        </p>
      </form>
    </div>
  );
}