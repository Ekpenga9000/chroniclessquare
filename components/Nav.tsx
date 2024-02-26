import React from "react";
import Link from "next/link";
import { FaMountainSun } from "react-icons/fa6";
import { getServerSession } from "next-auth";
import { authOptions } from "@app/utils/auth";

const Nav = async () => {
  const session = await getServerSession(authOptions);
  return (
    <header className="flex justify-center items-center bg-purple-700">
      <nav className="flex container-custom justify-between p-4 bg-gray-900 border-b-1 border-white/20">
        <Link href={"/"} className="font-semibold text-white flex items-center">
          <span className="text-purple-600 inline-block mr-1">
            <FaMountainSun />
          </span>{" "}
          Chronicles<span className="text-purple-600">Square</span>
        </Link>
        {session ? (
          <div className="flex gap-4 text-white">
            <Link href={"/profile"} className="text-sm">
              <i className="bx bx-user"></i>Profile
            </Link>
            <Link href={"/topic/create"} className="text-sm">
              <i className="bx bx-plus"></i> Create
            </Link>
          </div>
        ) : (
          <Link href={"/profile/login"} className="text-sm text-white">
            <i className="bx bx-user-plus"></i> Sign in
          </Link>
        )}
      </nav>
    </header>
  );
};

export default Nav;
