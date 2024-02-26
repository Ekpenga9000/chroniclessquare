import React from "react";
import Link from "next/link";
import { GiMountainClimbing } from "react-icons/gi";
import { FaMountainSun } from "react-icons/fa6";
const Nav = () => {
  return (
    <header className="flex justify-center items-center bg-purple-700">
      <nav className="flex container-custom justify-between p-4 bg-gray-900 border-b-1 border-white/20">
        <Link href={"/"} className="font-semibold text-white flex items-center"><span className="text-purple-600 inline-block mr-1"><FaMountainSun /></span> Chronicles<span className="text-purple-600">Square</span></Link>
        <div className="flex gap-4 text-white">
          <Link href={"/profile"}>Profile</Link>
          <Link href={"/create"}>Create</Link>
        </div>
      </nav>
    </header>
  );
};

export default Nav;
