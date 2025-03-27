import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-purple-100">
      <div className="bg-white p-8 md:p-10 rounded-lg shadow-md w-full max-w-md">
        <h2 className="text-2xl font-semibold text-gray-900 text-center mb-6">
          Login
        </h2>

        <form className="space-y-4">
          <input
            type="email"
            placeholder="Email Address"
            className="w-full px-4 py-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full px-4 py-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
          />

          <button
            type="submit"
            className="w-full bg-red-500 text-white py-3 rounded-md text-lg font-semibold hover:bg-red-600 transition"
          >
            Login
          </button>
        </form>

        <p className="text-center text-gray-600 mt-4">
          Don’t have an account?{' '}
          <Link to={'/signup'}><span className="text-red-500 cursor-pointer">Sign up here</span></Link>
        </p>

        <div className="flex items-start mt-4">
          <input type="checkbox" id="terms" className="mr-2 mt-1" />
          <label htmlFor="terms" className="text-gray-600 text-sm">
            By continuing, I agree to the terms of use & privacy policy.
          </label>
        </div>
      </div>
    </div>
  );
};

export default Login;
