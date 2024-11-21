import React from "react";
import { Link } from 'react-router-dom';


export default function Signup() {

    return (
        <div className="h-screen bg-gray-800 text-center">
            <h1 className="flex justify-center text-4xl text-white font-bold mb-4">Signup</h1>
            <form className="flex flex-col items-center jsutify-center p-5 mt-20">
                <input type="text" placeholder="firstname" className="bg-gray-700 p-2 rounded-lg text-white w-80 mb-4" />
                <input type="text" placeholder="lastname" className="bg-gray-700 p-2 rounded-lg text-white w-80 mb-4" />
                <input type="text" placeholder="email" className="bg-gray-700 p-2 rounded-lg text-white w-80 mb-4" />
                <input type="text" placeholder="password" className="bg-gray-700 p-2 rounded-lg text-white w-80 mb-4" />
                <input type="text" placeholder="image" className="bg-gray-700 p-2 rounded-lg text-white w-80 mb-4" />
                <button className="bg-purple-300 p-2 rounded-lg text-white w-80">Signup</button>
                <p className="text text-pretty text-white">
              Already Have an Account?{' '}
              <Link to="/signin" className="text-purple-300 hover:text-gray-900">
                Login
              </Link>
            </p>
            
            </form>
        </div>
    )
}