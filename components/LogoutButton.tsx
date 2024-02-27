"use client";
import { signOut } from "next-auth/react";
import React from "react";

const LogoutButton = () => {
  return (
      <button className="text-sm" onClick={() => signOut({
        callbackUrl: `${window.location.origin}/profile/login`,
    })}>
      <i className="bx bx-log-out"></i> Sign Out
    </button>
  );
};

export default LogoutButton;
