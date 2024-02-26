"use client"; 
import { signIn } from "next-auth/react";
import React from "react";

const SignInWithGithub = () => {
  return (
      <button className="bg-black text-gray-300 p-2 rounded-md flex justify-center items-center gap-1 text-sm" onClick={() => signIn('github', {
        callbackUrl: `${window.location.origin}`,
    })}>
      Sign in with Github <i className="bx bxl-github text-lg"></i>
    </button>
  );
};

export default SignInWithGithub;
