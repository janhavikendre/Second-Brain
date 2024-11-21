import React from "react";
import { Link } from "react-router-dom";

export default function Signin() {

    return (
        <div className="h-screen bg-gray-800 text-center">
            <h1 className="flex justify-center text-4xl text-white font-bold mb-4">Signin</h1>
            <form className="flex flex-col items-center justify-center p-5 mt-20">
                <input type="text" placeholder="email" className="bg-gray-700 p-2 rounded-lg text-white w-80 mb-4" />
                <input type="text" placeholder="password" className="bg-gray-700 p-2 rounded-lg text-white w-80 mb-4" />
                <button className="bg-purple-300 p-2 rounded-lg text-white w-80">Signin</button>
                <p className="text text-pretty text-white">
              Create new account?{' '}
              <Link to="/signup" className="text-purple-300 hover:text-gray-900">
                signup
              </Link>
            </p>
            </form>
        </div>
    )
}