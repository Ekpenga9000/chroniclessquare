"use client";

import React from 'react';
import { useSession } from 'next-auth/react';
import { signOut } from 'next-auth/react';
import Link from "next/link";
import LogoutButton from "./LogoutButton";

const Session = () => {
        const { data: session } = useSession();

        if (session) {
            return (
                <div>
                    Signed in as {session.user?.email} <br />
                    <button onClick={() => signOut()}>Sign out</button>
                </div>
            )
        }

        return (
            <div className='text-white'>
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
            </div>
        )
}

export default Session