"use client"; // Mark this as a Client Component

import React from "react";
import NavBar from "../navbar/page"; // Ensure the path is correct based on your project structure

export default function Signup() {
  return (
    <div className="h-screen flex flex-col bg-white">
      {/* Render the NavBar at the top */}
      <NavBar
        darkMode={false}
        toggleDarkMode={function (): void {
          throw new Error("Function not implemented.");
        }}
      />
      {/* Spacer div to create separation between NavBar and Signup form */}
      <div className="mt-12 flex justify-center items-center flex-grow">
        <div className="max-w-sm w-full p-6 bg-black border border-green-500 rounded-2xl shadow-lg">
          <div className="text-center mb-4">
            <div className="text-3xl font-extrabold text-green-500">
              Sign up
            </div>
          </div>
          <div className="pt-2">
            {/* Added Username field */}
            <LabelledInput label="Name" placeholder="Enter your Name" />
            <LabelledInput label="Email" placeholder="example@gmail.com" />
            <LabelledInput
              label="Password"
              type="password"
              placeholder="Enter your password"
            />
            {/* Center the button */}
            <div className="flex justify-center mt-6">
              <button
                type="button"
                className="bg-green-500 text-white text-sm font-medium rounded-lg px-4 py-2 focus:ring-4 focus:ring-green-300"
              >
                Sign up
              </button>
            </div>
            {/* Added Privacy Policy and User Agreement */}
            <div className="text-sm text-green-500 text-center mt-4">
              By signing up, you agree to our{" "}
              <a
                href="#"
                className="underline text-green-300 hover:text-green-500"
              >
                Privacy Policy
              </a>{" "}
              and{" "}
              <a
                href="#"
                className="underline text-green-300 hover:text-green-500"
              >
                User Agreement
              </a>
              .
            </div>
            <div className="flex items-center my-4">
              <div className="flex-grow border-t border-green-500"></div>
              <span className="mx-4 text-green-500">or</span>
              <div className="flex-grow border-t border-green-500"></div>
            </div>
            <div className="text-sm text-green-500 text-center">
              Already have an account?{" "}
              <a href="./signin" className="underline">
                Sign in
              </a>
            </div>
          </div>
        </div>
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
