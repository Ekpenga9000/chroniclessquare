"use client";
import React from "react";
import SignInWithGithub from "@components/SignInWithGithub";

const SignInForm = () => {
  
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
    }

  return (
    <div className="border border-solid w-4/5 md:w-2/3 lg:w-2/5 bg-white p-4 rounded-md">
      <h1 className="text-2xl font-bold mb-2 text-gray-800 border-b-1 pb-2">
        Sign in
      </h1>
      <p className="text-sm mb-7 text-gray-800">
        Sign in to your account to continue.
      </p>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <label htmlFor="email" className="text-sm font-semibold text-gray-800">
          Email
        </label>
        <input
          type="email"
          name="email"
          id="email"
          placeholder="example@email.com"
          className="p-2 border border-gray-400 outline-none focus:border-purple-600 rounded-md"
        />

        <button
          type="submit"
          className="bg-purple-700 text-white p-2 rounded-md text-sm"
        >
          Sign in
        </button>
        <SignInWithGithub />
      </form>
    </div>
  );
};

export default SignInForm;
