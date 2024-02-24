import React from "react";
import Link from "next/link";

const Nav = () => {
  return (
    <header className="flex justify-center items-center bg-purple-600">
      <nav className="flex container-custom justify-between p-4">
        <Link href={"/"} className="font-semibold text-white">ChroniclesSquare</Link>
        <div className="flex gap-4 text-white">
          <Link href={"/profile"}>Profile</Link>
          <Link href={"/create"}>Create</Link>
        </div>
      </nav>
    </header>
  );
};

export default Nav;
