import React from "react";
import Link from "next/link";
import { FaMountainSun } from "react-icons/fa6";
import { getServerSession } from "next-auth";
import { useSession } from "next-auth/react";
import { authOptions } from "@app/utils/auth";
import LogoutButton from "./LogoutButton";

const Nav = async () => {
  const session = await getServerSession(authOptions);

  console.log("Session", session);
  
  return (
    <header className="flex justify-center items-center bg-white">
      <nav className="flex container-custom justify-between p-4 bg-gray-900 border-b-1 border-white/20">
        <Link href={"/"} className="font-semibold text-white flex items-center">
          <i className="bx bxs-landscape text-purple-600 inline-block mr-1 text-lg"></i>{" "}
          Chronicles<span className="text-purple-600">Square</span>
        </Link>
        {session ? (
          <div className="flex gap-4 text-white">
            <Link href={"/profile"} className="text-sm">
              <i className="bx bx-user"></i>
              {session.user?.name ?? "Profile"}
            </Link>
            <Link href={"/topic/new"} className="text-sm">
              <i className="bx bx-plus"></i> Create
            </Link>
            <LogoutButton />
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
