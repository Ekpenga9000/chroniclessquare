"use client";
import { useState } from "react";
import SignInWithGithub from "@components/SignInWithGithub";
import { signIn } from "next-auth/react";
import Link from "next/link";
import { toast } from "@components/ui/use-toast";

const SignInForm = () => {
  const [email, setEmail] = useState<string | null>(null);
  
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      if (!email) {
        return toast({
            title: "Email is required.",
            description: "Please enter your email.",
            variant: "destructive",
        });
      }
    const signInResult = await signIn("email", {
        email,
        callbackUrl: `${window.location.origin}`,
        redirect: false,
    });
    if (!signInResult?.ok) {
        return toast({
            title: "There was an error.",
            description: "An error occurred while signing in.",
            variant: "destructive",
        });
      }
      
        return toast({
            title: "Check your email.",
            description: "A sign in link has been sent to your email.",
        });
  };

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
          value={email || ""}
          onChange={(e) => setEmail(e.target.value)}
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

      <Link
        href={"/"}
        className="text-xs text-purple-600 flex justify-center items-center py-4 gap-1"
      >
        <i className="bx bx-home-alt-2"></i> Back to home
      </Link>

    </div>
  );
};

export default SignInForm;
