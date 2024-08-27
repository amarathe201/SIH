"use client"; // Ensure this is a Client Component

import React from "react";
import NavBar from "../navbar/page"; // Ensure the path is correct based on your project structure

export default function Signin() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* Render the NavBar at the top */}
      <NavBar
        darkMode={false}
        toggleDarkMode={() => {
          throw new Error("Function not implemented.");
        }}
      />
      <div className="flex flex-grow">
        {/* Default Message Section */}
        <div className="w-1/2 bg-gradient-to-br from-green-200 to-green-400 p-8 flex flex-col items-center justify-center text-center">
          <div className="max-w-md">
            <h2 className="text-5xl font-extrabold mb-6 text-gray-800">Welcome Back!</h2>
            <p className="text-xl mb-6 text-gray-700">
              We're thrilled to have you back. Discover new opportunities, connect with professionals, and achieve your goals with ease. Let’s get started!
            </p>
           
          </div>
        </div>

        {/* Signin Form Section */}
        <main className="w-1/2 flex items-center justify-center bg-gray-100 p-8">
          <div className="max-w-sm w-full p-6 bg-black border border-green-500 rounded-lg shadow-lg">
            <div className="text-center mb-4">
              <div className="text-3xl font-extrabold text-green-500">Sign in</div>
            </div>
            <div className="pt-2">
              <LabelledInput label="Email" placeholder="NextGen Coders@gmail.com" />
              <LabelledInput
                label="Password"
                type="password"
                placeholder="Enter your password"
              />
              <div className="flex justify-center mt-6">
                <button
                  type="button"
                  className="bg-green-500 text-white text-sm font-medium rounded-lg px-6 py-2 focus:ring-4 focus:ring-green-300"
                >
                  Sign in
                </button>
              </div>
              <div className="flex items-center my-4">
                <div className="flex-grow border-t border-green-500"></div>
                <span className="mx-4 text-green-500">or</span>
                <div className="flex-grow border-t border-green-500"></div>
              </div>
              <div className="text-sm text-green-500 text-center">
                Don't have an account?{" "}
                <a href="./signup" className="underline">
                  Sign up
                </a>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

interface LabelledInputType {
  label: string;
  placeholder: string;
  type?: string;
}

function LabelledInput({ label, placeholder, type }: LabelledInputType) {
  return (
    <div>
      <label className="block mb-2 text-sm text-green-500 font-semibold pt-4">
        {label}
      </label>
      <input
        type={type || "text"}
        className="bg-gray-50 border border-green-500 text-gray-900 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5"
        placeholder={placeholder}
        required
      />
    </div>
  );
}
